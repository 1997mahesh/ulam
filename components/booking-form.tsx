"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Option = { id: string; name: string };
type Availability = { dayOfWeek: number; startTime: string; endTime: string; slotDurationMinutes: number };
type CounsellorOption = Option & { serviceIds: string[]; availability: Availability[] };
type Props = { services: Option[]; Counsellors: CounsellorOption[]; defaultServiceId?: string; defaultCounsellorId?: string };

export function BookingForm({ services, Counsellors, defaultServiceId = "", defaultCounsellorId = "" }: Props) {
  const initialService = Counsellors.find((item) => item.id === defaultCounsellorId)?.serviceIds.includes(defaultServiceId) ? defaultServiceId : "";
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [validated, setValidated] = useState(false);
  const [counsellorId, setCounsellorId] = useState(defaultCounsellorId);
  const [serviceId, setServiceId] = useState(initialService);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const selectedCounsellor = Counsellors.find((item) => item.id === counsellorId);
  const availableServices = selectedCounsellor ? services.filter((service) => selectedCounsellor.serviceIds.includes(service.id)) : [];
  const availableDates = getAvailableDates(selectedCounsellor?.availability || []);

  function clearForm() {
    const form = formRef.current;
    if (!form) return;
    const values = new FormData(form);
    const substantial = ["patientName", "patientEmail", "patientPhone", "patientMessage"].some((key) => String(values.get(key) || "").trim().length > 3);
    if (substantial && !window.confirm("Clear all consultation details?")) return;
    form.reset();
    for (const element of Array.from(form.elements)) {
      if (element instanceof HTMLInputElement) {
        element.setCustomValidity("");
        if (element.type === "checkbox" || element.type === "radio") element.checked = false;
        else element.value = "";
      } else if (element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement) element.value = "";
    }
    setCounsellorId("");
    setServiceId("");
    setAppointmentDate("");
    setStartTime("");
    setTimeSlots([]);
    setError("");
    setValidated(false);
    setPending(false);
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setValidated(true);
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        setPending(true);
        setError("");
        const popup = window.open("", "_blank");
        if (popup) popup.document.write("<title>Preparing payment…</title><p style='font-family:sans-serif;padding:2rem'>Preparing your secure payment page…</p>");
        try {
          const values = Object.fromEntries(new FormData(form));
          if (values.patientAge) values.patientAge = Number(values.patientAge) as never;
          const response = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
          const result = await response.json();
          if (!response.ok) throw new Error(result.error || "Unable to prepare your booking.");
          if (popup) popup.location.replace(result.paymentUrl);
          else router.push(result.paymentUrl);
        } catch (reason) {
          popup?.close();
          setError(reason instanceof Error ? reason.message : "Unable to prepare your booking.");
          setPending(false);
        }
      }}
      className={`grid gap-5${validated ? " booking-form-validated" : ""}`}
      aria-label="Consultation request form"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="patientName" required />
        <Field label="Age (optional)" name="patientAge" type="number" min="1" max="120" />
        <Field label="Phone number" name="patientPhone" type="tel" required minLength={7} maxLength={20} />
        <Field label="Email" name="patientEmail" type="email" required />
        <label className="grid gap-2 text-xs font-bold">Counsellor<select name="counsellorId" required value={counsellorId} onChange={(event) => { setCounsellorId(event.target.value); setServiceId(""); setAppointmentDate(""); setStartTime(""); setTimeSlots([]); formRef.current?.querySelector<HTMLInputElement>('input[name="appointmentDate"]')?.setCustomValidity(""); }} className="h-12 border px-4 font-normal"><option value="">Select a counsellor</option>{Counsellors.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}</select></label>
        <label className="grid gap-2 text-xs font-bold">Service<select name="serviceId" required value={serviceId} disabled={!counsellorId} onChange={(event) => setServiceId(event.target.value)} className="h-12 border px-4 font-normal"><option value="">{counsellorId ? "Select a service" : "Choose a counsellor first"}</option>{availableServices.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}</select></label>
        <Select label="Consultation mode" name="consultationMode" items={[{ id: "ONLINE", name: "Online" }, { id: "IN_PERSON", name: "In person" }]} />
        <label className="grid gap-2 text-xs font-bold">Preferred date<input name="appointmentDate" type="date" required disabled={!counsellorId} min={availableDates[0]?.value} max={availableDates.at(-1)?.value} value={appointmentDate} onChange={async(event)=>{const input=event.currentTarget,date=input.value;setAppointmentDate(date);setStartTime("");setTimeSlots([]);setError("");if(!date){input.setCustomValidity("");return}if(!availableDates.some(item=>item.value===date)){input.setCustomValidity("The selected counsellor is not available on this date.");setError("The selected counsellor is not available on this date. Please choose one of their working days.");setValidated(true);return}input.setCustomValidity("");setLoadingSlots(true);try{const response=await fetch(`/api/availability?counsellorId=${encodeURIComponent(counsellorId)}&date=${date}`),result=await response.json();if(!response.ok)throw new Error(result.error);setTimeSlots(result.slots);if(!result.slots.length)setError("No appointment times are available on this date. Please choose another date.")}catch(reason){setError(reason instanceof Error?reason.message:"Unable to load available times.")}finally{setLoadingSlots(false)}}} className="h-12 border px-4 font-normal"/></label>
        <label className="grid gap-2 text-xs font-bold">Preferred time<select name="startTime" required disabled={!appointmentDate||loadingSlots} value={startTime} onChange={event=>setStartTime(event.target.value)} className="h-12 border px-4 font-normal"><option value="">{loadingSlots?"Loading available times…":!appointmentDate?"Choose a date first":timeSlots.length?"Select an available time":"No slots available"}</option>{timeSlots.map(time=><option value={time} key={time}>{formatTime(time)}</option>)}</select></label>
      </div>
      <label className="grid gap-2 text-xs font-bold">Anything you would like us to know<textarea name="patientMessage" rows={5} maxLength={2000} className="border p-4 font-normal" /></label>
      <label className="booking-consent flex gap-3 text-xs leading-6"><input name="consent" value="yes" required type="checkbox" className="mt-1 h-4 w-4" /><span>I consent to Ulam Seyal using these details to respond to my consultation request. This form is not for emergency support.</span></label>
      {error && <p role="alert" className="booking-error">{error}</p>}
      <div className="booking-actions">
        <button type="button" className="btn booking-clear" onClick={clearForm}>Clear</button>
        <button className="btn btn-primary" disabled={pending}>{pending ? "Preparing payment…" : "Proceed to Payment"}</button>
      </div>
    </form>
  );
}

type FieldProps = { label: string; name: string; type?: string; required?: boolean; min?: string; max?: string; minLength?: number; maxLength?: number };
function Field({ label, name, type = "text", required = false, ...constraints }: FieldProps) {
  return <label className="grid gap-2 text-xs font-bold">{label}<input required={required} name={name} type={type} {...constraints} className="h-12 border px-4 font-normal" /></label>;
}
function Select({ label, name, items }: { label: string; name: string; items: Option[] }) {
  return <label className="grid gap-2 text-xs font-bold">{label}<select name={name} required defaultValue="" className="h-12 border px-4 font-normal"><option value="">Select an option</option>{items.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}</select></label>;
}

function getAvailableDates(availability:Availability[]){const workingDays=new Set(availability.map(item=>item.dayOfWeek)),dates:{value:string;label:string}[]=[];for(let offset=0;offset<60;offset++){const date=new Date();date.setHours(12,0,0,0);date.setDate(date.getDate()+offset);if(!workingDays.has(date.getDay()))continue;const value=`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;dates.push({value,label:date.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"long",year:"numeric"})})}return dates}
function formatTime(value:string){const[hour,minute]=value.split(":").map(Number);return new Date(2000,0,1,hour,minute).toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit"})}

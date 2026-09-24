import Link from "next/link";
import { ArrowLeft, Clock, FileText, HelpCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import { Breadcrumb, Button } from "@/components/ui";

export const metadata = {
  title: "Refund & Cancellation Policy | Ulam Seyal",
  description:
    "Please review the terms and conditions regarding consultation session cancellations, rescheduling, connectivity requirements, and refund processes at Ulamseyal Services.",
};

const policyClauses = [
  {
    number: "01",
    title: "Session Fees & Refund Eligibility",
    text: "Fees paid for consultation sessions are generally non-refundable. If Ulamseyal Services cancels a session due to unavoidable circumstances, the client may choose between rescheduling the appointment or receiving a refund, where applicable. Approved refunds may take 2–3 business days to be credited to the client’s bank account.",
    highlight: "Approved refunds: 2–3 business days.",
  },
  {
    number: "02",
    title: "Client Technical & Internet Responsibility",
    text: "Clients participating in online consultation sessions are responsible for maintaining a reliable internet connection, including broadband, fiber-optic internet, or high-speed mobile data. No refund will be issued for disruptions caused by the client’s internet connection or device. If the consultant experiences connectivity issues, Ulamseyal Services will arrange a replacement session at a mutually convenient time.",
    highlight: "Replacement session arranged if consultant faces connectivity issues.",
  },
  {
    number: "03",
    title: "Single Session Allocation",
    text: "Payment applies to one consultation session only. If the session concludes before the scheduled end time, no refund will be issued for the unused portion, as the appointment slot was reserved exclusively for the client.",
    highlight: "Appointment slot is exclusively reserved for the client.",
  },
  {
    number: "04",
    title: "Punctuality & 20-Minute No-Show Policy",
    text: "Clients must join the session at the scheduled appointment time. If a client neither contacts Ulamseyal Services nor joins the session within 20 minutes of the scheduled start time, the appointment will be deemed a “no-show” and cancelled without a refund.",
    highlight: "Late joins exceeding 20 minutes are considered a no-show.",
  },
  {
    number: "05",
    title: "Late Arrivals",
    text: "Clients are expected to adhere to the confirmed appointment schedule. If a client joins late, the session will nevertheless conclude at the originally scheduled end time.",
    highlight: "Session concludes at the originally scheduled finish time.",
  },
  {
    number: "06",
    title: "Advance Rescheduling & Cancellation Requests",
    text: "Requests to cancel or reschedule an appointment should be submitted as early as possible. Rescheduling is subject to the consultant’s availability, and last-minute requests may not be accommodated.",
    highlight: "Subject to consultant availability.",
  },
  {
    number: "07",
    title: "Consultant Emergency Protocol",
    text: "If the consultant is unable to continue a session due to an unforeseen emergency, Ulamseyal Services may arrange an alternative appointment time or, with the client’s consent, assign another suitably qualified consultant.",
    highlight: "Alternative time or qualified replacement with client consent.",
  },
  {
    number: "08",
    title: "Confidentiality & Exclusive Attendance",
    text: "Consultation sessions are confidential and intended solely for the registered client. No other person may attend or participate without the prior authorization of Ulamseyal Services and the consultant.",
    highlight: "Strict client privacy and exclusive authorized participation.",
  },
  {
    number: "09",
    title: "Professional Conduct & Right to Discontinue",
    text: "Ulamseyal Services reserves the right to discontinue consultation services if the client engages in inappropriate, threatening, discriminatory, or otherwise unacceptable conduct. In such circumstances, any refund will be issued at the sole discretion of Ulamseyal Services.",
    highlight: "Zero tolerance for harassment or inappropriate conduct.",
  },
  {
    number: "10",
    title: "Accurate Information Requirement",
    text: "Clients are responsible for providing accurate contact information and all relevant details required for appointment coordination. Refunds may not be issued for delays or missed sessions resulting from inaccurate or incomplete information.",
    highlight: "Ensure valid phone, email, and coordination details.",
  },
  {
    number: "11",
    title: "Session Cancellation by Ulamseyal Services",
    text: "If Ulamseyal Services cancels a session and cannot arrange a suitable alternative appointment time, the full amount paid for that specific session will be refunded.",
    highlight: "100% refund if alternative slot cannot be arranged.",
  },
  {
    number: "12",
    title: "Acknowledgement & Acceptance",
    text: "By booking a consultation session, the client confirms that they have read, understood, and accepted this Refund and Cancellation Policy.",
    highlight: "Acceptance is confirmed upon appointment booking.",
  },
];

export default function RefundCancellationPolicyPage() {
  return (
    <div className="bg-[#fbf8f2] min-h-screen">
      {/* Clean Legal Editorial Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#e2ece6] bg-[#f8f6f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Breadcrumb current="Refund Policy" parent={{ label: "Customer Support", href: "/terms" }} />
            <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#e7f1ec] px-3.5 py-1 rounded-full border border-[#d2e4da]">
              POLICY
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0f4a3a] font-bold leading-tight mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-base sm:text-lg text-[#4a5c56] leading-relaxed">
              Please review the following terms carefully before making payment for a consultation session provided by Ulamseyal Services.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Clauses List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-6">
            {policyClauses.map((clause) => (
              <article
                key={clause.number}
                className="bg-white rounded-2xl border border-[#e2ece6] p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-lg">
                      Clause {clause.number}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-[#1b2722]">
                      {clause.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#334b43] leading-relaxed mb-4">
                  {clause.text}
                </p>

                {clause.highlight && (
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#006d67] bg-[#f2f7f4] px-3 py-1.5 rounded-md border border-[#d8e6df]">
                    <ShieldCheck size={14} className="text-[#0f4a3a]" />
                    <span>{clause.highlight}</span>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Need Assistance Panel */}
          <div className="mt-16 bg-[#eaf2ee] border border-[#cfe0d6] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#0f4a3a] mb-2">
                Have questions regarding your session or appointment?
              </h3>
              <p className="text-sm text-[#4a5c56]">
                Our dedicated support team is available to assist you with scheduling, queries, and coordination.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href="mailto:care@ulamseyal.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-sm hover:brightness-95"
                style={{
                  backgroundColor: "var(--color-yellow, #E9B12B)",
                  color: "var(--color-charcoal, #2E2E2A)",
                }}
              >
                <Mail size={15} />
                <span>Mail Us: care@ulamseyal.com</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0f4a3a] border border-[#cfe0d6] text-xs font-bold hover:bg-[#f5f8f6] transition-all shadow-sm"
              >
                <HelpCircle size={15} />
                <span>Contact Support</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

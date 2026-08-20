"use client";

import { useState } from "react";

export function ContactForm() {
  const [state, setState] = useState("");
  const [pending, setPending] = useState(false);

  return (
    <form
      className="contact-form card"
      onSubmit={async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        setPending(true);

        try {
          const response = await fetch("/api/enquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            setState("Thank you. Your enquiry has been received.");
            form.reset();
          } else {
            const result = await response.json();
            setState(result.error ?? "Unable to send your enquiry.");
          }
        } catch {
          setState("Unable to send your enquiry. Please try again.");
        } finally {
          setPending(false);
        }
      }}
    >
      <h2>Send an enquiry</h2>
      <div>
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" />
        </label>
        <label>
          Subject
          <input name="subject" required />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows={6} minLength={10} required />
      </label>
      {state && <p role="status">{state}</p>}
      <button className="btn btn-primary" disabled={pending}>
        {pending ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}

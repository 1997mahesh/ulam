import type {SiteSettings} from "@/lib/site-settings-shared";

const message = "Hi Ulam Seyal, I would like to know more about your counselling services.";

export function WhatsAppButton({settings}:{settings:SiteSettings}) {
  const number = settings.supportNumber.replace(/\D/g, "");
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return <a
    className="whatsapp-float"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Ulam Seyal on WhatsApp"
    title="Chat with us on WhatsApp"
  >
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="currentColor" d="M16.04 3A12.92 12.92 0 0 0 5.1 22.8L3.36 29l6.35-1.67A12.96 12.96 0 1 0 16.04 3Zm0 23.72a10.7 10.7 0 0 1-5.46-1.49l-.39-.23-3.77.99 1.01-3.68-.25-.38a10.73 10.73 0 1 1 8.86 4.79Zm5.88-8.04c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.7 9.7 0 0 1-1.79-2.23c-.19-.32-.02-.5.14-.66.15-.14.32-.38.48-.57.16-.19.22-.32.32-.54.11-.21.06-.4-.02-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.4-.3.33-1.13 1.11-1.13 2.7 0 1.6 1.16 3.14 1.32 3.36.16.22 2.28 3.49 5.53 4.89.77.33 1.38.53 1.85.68.78.25 1.48.21 2.04.13.62-.09 1.91-.78 2.18-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z"/>
    </svg>
  </a>;
}

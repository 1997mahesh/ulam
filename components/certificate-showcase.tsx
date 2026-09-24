"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Eye,
  FileCheck2,
  FileText,
  MapPin,
  Maximize2,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";

interface CertificateData {
  id: "incorporation" | "gst";
  title: string;
  badge: string;
  authority: string;
  authoritySubtitle: string;
  legalName: string;
  primaryNumberLabel: string;
  primaryNumber: string;
  secondaryNumbers: { label: string; value: string }[];
  dateLabel: string;
  dateValue: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
}

const certificates: CertificateData[] = [
  {
    id: "incorporation",
    title: "Certificate of Incorporation",
    badge: "Ministry of Corporate Affairs · Govt. of India",
    authority: "Government of India – Ministry of Corporate Affairs",
    authoritySubtitle: "Central Registration Centre | Companies Act, 2013",
    legalName: "ULAM SEYAL (OPC) PRIVATE LIMITED",
    primaryNumberLabel: "Corporate Identity Number (CIN)",
    primaryNumber: "U86900TN2026OPC197513",
    secondaryNumbers: [
      { label: "PAN", value: "AAECU2841E" },
      { label: "TAN", value: "CHEU07272G" },
      { label: "Company Type", value: "Company Limited by Shares (OPC)" },
    ],
    dateLabel: "Date of Incorporation",
    dateValue: "07 September 2026",
    location: "Thuraipakkam, Chennai, Tamil Nadu – 600097",
    imageSrc: "/img/incorporation.png",
    imageAlt: "Certificate of Incorporation - ULAM SEYAL (OPC) PRIVATE LIMITED",
    highlights: [
      "Incorporated under Section 7(2) & Section 8(1) of the Companies Act, 2013.",
      "Certified legal entity status empowering ethical & governed healthcare services.",
      "Official verification registered with the Central Registration Centre (CRC).",
    ],
  },
  {
    id: "gst",
    title: "GST Registration Certificate",
    badge: "Form GST REG-06 · Govt. of India",
    authority: "Government of India – Goods and Services Tax",
    authoritySubtitle: "Central Board of Indirect Taxes and Customs (CBIC)",
    legalName: "ULAM SEYAL (OPC) PRIVATE LIMITED",
    primaryNumberLabel: "GST Registration Number (GSTIN)",
    primaryNumber: "33AAECU2841E1ZO",
    secondaryNumbers: [
      { label: "Registration Type", value: "Regular Taxpayer" },
      { label: "State Code", value: "33 (Tamil Nadu)" },
      { label: "Constitution", value: "OPC Private Limited" },
    ],
    dateLabel: "Date of Issue",
    dateValue: "13 September 2026",
    location: "Flat No. PL.2 FL-E, Rathna Gardens, Thuraipakkam, Chennai – 600097",
    imageSrc: "/img/gst.png",
    imageAlt: "GST Registration Certificate - ULAM SEYAL (OPC) PRIVATE LIMITED",
    highlights: [
      "Registered under Rule 10(1) of the Goods and Services Tax Act.",
      "100% statutory tax compliance ensuring transparent and legitimate billing.",
      "Digitally verified and authentic Government of India tax accreditation.",
    ],
  },
];

export function CertificateShowcase() {
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <div className="w-full">
      {/* 2-Column Grid for Certificate Cards */}
      <div className="grid gap-8 lg:grid-cols-2 items-stretch">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group bg-white rounded-2xl border border-[#dce6e0] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Top Bar with Badge */}
            <div className="p-6 sm:p-7 border-b border-[#f0f4f2] bg-gradient-to-r from-[#fbfdfc] to-[#f5f8f6]">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-full border border-[#d2e4da]">
                  <ShieldCheck size={14} className="text-[#0f4a3a]" />
                  {cert.badge}
                </span>
                <span className="text-xs font-mono font-semibold text-[#52635c] bg-white px-2.5 py-1 rounded-md border border-[#e2ece6]">
                  {cert.dateValue}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0b3d30] tracking-tight">
                {cert.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#006d67] font-semibold mt-1">
                {cert.legalName}
              </p>
              <p className="text-xs text-[#52635c] mt-0.5">
                {cert.authoritySubtitle}
              </p>
            </div>

            {/* Middle Content: Certificate Image Preview + Primary Details */}
            <div className="p-6 sm:p-7 space-y-6 flex-1 flex flex-col justify-between">
              {/* Interactive Image Frame */}
              <div className="relative group/preview rounded-xl overflow-hidden border-2 border-[#dce6e0] bg-[#f8faf9] aspect-[16/11] sm:aspect-[16/10] shadow-inner cursor-pointer"
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedCert(cert);
                  }
                }}
                aria-label={`View ${cert.title} in high resolution`}
              >
                <Image
                  src={cert.imageSrc}
                  alt={cert.imageAlt}
                  fill
                  className="object-cover object-top filter transition-transform duration-500 group-hover/preview:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 550px"
                />

                {/* Hover Overlay with Action Icon */}
                <div className="absolute inset-0 bg-[#0b3d30]/60 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-white">
                  <div className="size-12 rounded-full bg-white text-[#0b3d30] flex items-center justify-center shadow-lg transform translate-y-2 group-hover/preview:translate-y-0 transition-transform duration-300">
                    <Maximize2 size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                    Click to View Full Certificate
                  </span>
                </div>

                {/* Persistent Zoom Pill in corner */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#0f4a3a] px-2.5 py-1 rounded-lg text-[11px] font-bold shadow-sm border border-[#d2e4da] flex items-center gap-1.5 pointer-events-none">
                  <Eye size={13} />
                  <span>Enlarge Preview</span>
                </div>
              </div>

              {/* Primary Key Identifiers Box */}
              <div className="bg-[#f7faf8] rounded-xl p-4 border border-[#e2ece6] space-y-3">
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-[#52635c]">
                    {cert.primaryNumberLabel}
                  </div>
                  <div className="font-mono text-sm sm:text-base font-bold text-[#0b3d30] tracking-wide break-all">
                    {cert.primaryNumber}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#e8f0ec] text-xs">
                  {cert.secondaryNumbers.map((sec) => (
                    <div key={sec.label}>
                      <span className="text-[#6d827a] block text-[10px] uppercase font-semibold">
                        {sec.label}
                      </span>
                      <span className="font-mono font-semibold text-[#1b2722]">
                        {sec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#e8f0ec] flex items-start gap-1.5 text-xs text-[#52635c]">
                  <MapPin size={13} className="text-[#0f4a3a] shrink-0 mt-0.5" />
                  <span className="leading-snug">{cert.location}</span>
                </div>
              </div>

              {/* Highlight bullet points */}
              <div className="space-y-2">
                {cert.highlights.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-xs sm:text-sm text-[#384c46]">
                    <CheckCircle2 size={15} className="text-[#0f4a3a] shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-5 sm:p-6 bg-[#fbfdfc] border-t border-[#f0f4f2] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-[#0f4a3a] text-white hover:bg-[#0b3d30] transition-colors shadow-sm"
              >
                <Eye size={14} />
                <span>View Full Certificate</span>
              </button>

              <a
                href={cert.imageSrc}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#006d67] hover:text-[#0b3d30] hover:underline"
              >
                <span>Open Document File</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Trust & Statutory Verification Bar Below Cards */}
      <div className="mt-8 bg-white border border-[#dce6e0] rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex items-start gap-3.5">
            <div className="size-10 rounded-xl bg-[#eaf4ef] text-[#0f4a3a] border border-[#d2e4da] flex items-center justify-center shrink-0">
              <Building2 size={20} />
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#0b3d30]">
                Ministry of Corporate Affairs
              </h4>
              <p className="text-xs text-[#52635c] mt-0.5 leading-relaxed">
                Legally registered One Person Company (OPC) under the Government of India Companies Act, 2013.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="size-10 rounded-xl bg-[#eaf4ef] text-[#0f4a3a] border border-[#d2e4da] flex items-center justify-center shrink-0">
              <FileCheck2 size={20} />
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#0b3d30]">
                GST Registered & Compliant
              </h4>
              <p className="text-xs text-[#52635c] mt-0.5 leading-relaxed">
                Full statutory Goods and Services Tax compliance ensuring authentic, accountable operations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="size-10 rounded-xl bg-[#eaf4ef] text-[#0f4a3a] border border-[#d2e4da] flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-serif text-sm sm:text-base font-bold text-[#0b3d30]">
                Ethical Clinical Governance
              </h4>
              <p className="text-xs text-[#52635c] mt-0.5 leading-relaxed">
                High standards of clinical privacy, data protection, and professional mental healthcare ethics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Full View Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-[#dce6e0] animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#e2ece6] flex items-center justify-between bg-[#fbf8f2]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f4a3a] bg-[#eaf4ef] px-2.5 py-0.5 rounded border border-[#d2e4da]">
                    Official Government Document
                  </span>
                  <span className="text-xs font-mono text-[#52635c]">
                    {selectedCert.dateValue}
                  </span>
                </div>
                <h3
                  id="modal-cert-title"
                  className="font-serif text-lg sm:text-xl font-bold text-[#0b3d30] mt-1"
                >
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-[#006d67] font-medium">
                  {selectedCert.legalName} · {selectedCert.primaryNumberLabel}: {selectedCert.primaryNumber}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="size-9 rounded-full bg-white border border-[#d2e4da] text-[#1b2722] hover:bg-[#f0f4f2] hover:text-[#0b3d30] flex items-center justify-center transition-colors shrink-0"
                aria-label="Close certificate modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#f4f7f5] flex items-center justify-center">
              <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-lg border border-[#dce6e0] p-2 sm:p-4 overflow-hidden">
                <img
                  src={selectedCert.imageSrc}
                  alt={selectedCert.imageAlt}
                  className="w-full h-auto object-contain rounded-lg max-h-[60vh] mx-auto select-none"
                />
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="p-4 sm:p-5 border-t border-[#e2ece6] bg-[#fbf8f2] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-[#52635c]">
                <strong className="text-[#0b3d30]">Registered Address:</strong> {selectedCert.location}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.imageSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#0f4a3a] bg-[#eaf4ef] hover:bg-[#dce6e0] px-3.5 py-2 rounded-lg transition-colors border border-[#d2e4da]"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 font-bold bg-[#0f4a3a] text-white hover:bg-[#0b3d30] rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

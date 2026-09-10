"use client";
import { useState } from "react";
import Image from "next/image";
import { Film, Image as ImageIcon, Play, X } from "lucide-react";

type GalleryItemData = {
  id: string;
  title: string | null;
  caption: string | null;
  type: string;
  url: string;
  thumbnailUrl: string | null;
  displayOrder: number;
};

export function GalleryClient({ items }: { items: GalleryItemData[] }) {
  const [filter, setFilter] = useState<"ALL" | "IMAGE" | "VIDEO">("ALL");
  const [activeMedia, setActiveMedia] = useState<GalleryItemData | null>(null);

  const filteredItems = items.filter((item) => {
    if (filter === "ALL") return true;
    return item.type === filter;
  });

  const isVideoUrl = (url: string) => {
    return (
      url.includes(".mp4") ||
      url.includes(".webm") ||
      url.includes(".mov") ||
      url.includes("youtube.com") ||
      url.includes("youtu.be") ||
      url.includes("vimeo.com")
    );
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes("vimeo.com/")) {
      const id = url.split("vimeo.com/")[1]?.split("?")[0];
      return `https://player.vimeo.com/video/${id}`;
    }
    return null;
  };

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <button
          type="button"
          onClick={() => setFilter("ALL")}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-colors ${
            filter === "ALL"
              ? "bg-[#0f4a3a] text-white shadow-sm"
              : "bg-[#f1f5f3] text-[#4a5c56] hover:bg-[#e2ebe6]"
          }`}
        >
          All Media ({items.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter("IMAGE")}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 ${
            filter === "IMAGE"
              ? "bg-[#0f4a3a] text-white shadow-sm"
              : "bg-[#f1f5f3] text-[#4a5c56] hover:bg-[#e2ebe6]"
          }`}
        >
          <ImageIcon size={14} /> Images ({items.filter((i) => i.type === "IMAGE").length})
        </button>
        <button
          type="button"
          onClick={() => setFilter("VIDEO")}
          className={`px-5 py-2.5 rounded-full text-xs font-bold transition-colors flex items-center gap-1.5 ${
            filter === "VIDEO"
              ? "bg-[#0f4a3a] text-white shadow-sm"
              : "bg-[#f1f5f3] text-[#4a5c56] hover:bg-[#e2ebe6]"
          }`}
        >
          <Film size={14} /> Videos ({items.filter((i) => i.type === "VIDEO").length})
        </button>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-[#fbfaf7] rounded-2xl border border-[#e5ece8] max-w-md mx-auto">
          <ImageIcon className="size-12 text-[#0f4a3a] mx-auto mb-3 opacity-50" />
          <h3 className="text-lg font-bold text-[#1b2722]">No media found</h3>
          <p className="text-xs text-[#52645f] mt-1">Photos and videos will be posted here soon.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => {
            const isVideo = item.type === "VIDEO" || isVideoUrl(item.url);
            const embed = getEmbedUrl(item.url);

            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden border border-[#e2ece6] shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col"
                onClick={() => setActiveMedia(item)}
              >
                <div className="relative aspect-video w-full bg-[#1b2722] overflow-hidden flex items-center justify-center">
                  {isVideo ? (
                    embed ? (
                      <iframe
                        src={embed}
                        className="w-full h-full pointer-events-none"
                        title={item.title || "Video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    ) : (
                      <video src={item.url} className="w-full h-full object-cover" muted preload="metadata" />
                    )
                  ) : (
                    <Image
                      src={item.url}
                      alt={item.title || "Gallery image"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}

                  {isVideo && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="size-12 rounded-full bg-[#0f4a3a] text-white flex items-center justify-center shadow-lg">
                        <Play size={20} className="ml-1" />
                      </div>
                    </div>
                  )}

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-black/60 text-white backdrop-blur-xs">
                    {isVideo ? "Video" : "Photo"}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#1b2722] text-base mb-1 group-hover:text-[#0f4a3a] transition-colors">
                      {item.title || (isVideo ? "Featured Video" : "Gallery Photo")}
                    </h3>
                    {item.caption && <p className="text-xs text-[#52645f] line-clamp-2">{item.caption}</p>}
                  </div>
                  <span className="text-xs font-semibold text-[#0f4a3a] mt-3 inline-block">
                    Click to preview ↗
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal / Lightbox */}
      {activeMedia && (
        <div
          className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveMedia(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              onClick={() => setActiveMedia(null)}
              aria-label="Close preview"
            >
              <X size={20} />
            </button>

            <div className="aspect-video w-full bg-black flex items-center justify-center">
              {activeMedia.type === "VIDEO" || isVideoUrl(activeMedia.url) ? (
                getEmbedUrl(activeMedia.url) ? (
                  <iframe
                    src={`${getEmbedUrl(activeMedia.url)}?autoplay=1`}
                    className="w-full h-full"
                    title={activeMedia.title || "Video preview"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video src={activeMedia.url} controls autoPlay className="w-full h-full" />
                )
              ) : (
                <div className="relative w-full h-full">
                  <Image src={activeMedia.url} alt={activeMedia.title || "Preview"} fill className="object-contain" />
                </div>
              )}
            </div>

            <div className="p-6 bg-[#fbfaf7]">
              <h2 className="text-xl font-bold text-[#1b2722] mb-1">{activeMedia.title || "Media Details"}</h2>
              {activeMedia.caption && <p className="text-sm text-[#4a5c56] leading-relaxed">{activeMedia.caption}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

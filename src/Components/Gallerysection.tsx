import { useState } from "react";
import { useDarkMode } from "../Context/Darkmodecontext";
import { Image as ImageIcon, Video, X } from "lucide-react";

type Tab = "images" | "videos";

interface GalleryImage { id: string; url: string; }
interface GalleryVideo { id: string; url: string; }

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

function getYouTubeEmbed(url: string): string {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : url;
}

const INIT_IMAGES: GalleryImage[] = [
  { id: "i1",  url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782221221/c66f33b8a6a59e9dac600c5f8c12ab0bfd642c7b_zmugzm.png" },
  { id: "i2",  url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782372599/283d7ba2f5693f731a0adea3b447458db0539729_r6npsc.png" },
  { id: "i3",  url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553488/659ddb1e5350ca864591cf0d5800c96ef486d366_irihq0.png" },
  { id: "i4",  url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782372600/e0ca3ce44f4f746c3ac9461e6770225455670840_yifv9w.png" },
  { id: "i5",  url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782372602/0a7dc14b00df8f826b922030d5be32e62ac75bbb_1_zby5ph.png" },
  { id: "i6",  url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782372602/dc57747c2f45a53a4297c056574d557fd5b6a683_urabdw.png" },
  { id: "i7",  url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553911/f86866bc2ad5c89bbd5a9a42298c7395b373547c_k2lbql.png" },
  { id: "i8",  url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553913/93fc5bdfad2448ee2e5f78b68a2302d12b839497_1_beharn.png" },
  { id: "i9",  url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553912/e6d0c1a1d3352d311e18791db38a4d1a33010842_men1ho.png" },
  { id: "i10", url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553866/b8dd71249d942cb0832e9b34439df7585d08b21b_fii3r7.png" },
  { id: "i11", url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553904/fa747fa4d2f66221f99dc9dcb7e6a47dc318287b_2_qnglb7.png" },
  { id: "i12", url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553854/617a72fd48463b0af4fc76aac2bcf05df69b26f1_e3cwg7.png" },
  { id: "i13", url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553855/ea28e316c63925449cbff1b9f5388d1d904592fe_if6ewu.png" },
  { id: "i14", url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553852/69173a4efe83559525ef82fc614dc78cc437102a_2_wa7olw.png" },
  { id: "i15", url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553854/a45eb4c735580d4ac50e8838ca69283ef39c402e_1_ld77pr.png" },
  { id: "i16", url: "https://res.cloudinary.com/dquki4xol/image/upload/v1782553851/699f181f3a913c550488d14046c1e7a689755425_2_qr1edj.png" },
];

const INIT_VIDEOS: GalleryVideo[] = [
  { id: "v1", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: "v2", url: "https://www.youtube.com/watch?v=ScMzIvxBSi4" },
];

export default function Gallery() {
  const darkMode = useDarkMode();
  const [activeTab, setActiveTab] = useState<Tab>("images");
  const images = INIT_IMAGES;
  const videos = INIT_VIDEOS;
  const [lightbox, setLightbox] = useState<string | null>(null);

  const bg       = "#ffffff";
  const border   = darkMode ? "#334155" : "#e2e8f0";
  const muted    = darkMode ? "#94a3b8" : "#64748b";
  const accent   = darkMode ? "#FA6BB8" : "#2563eb";
  const gradient = darkMode
    ? "linear-gradient(to right, #FF007A, #FA6BB8)"
    : "linear-gradient(to right, #dc2626, #f97316)";

  // split banner image (i1) from rest
  const [bannerImg, ...gridImgs] = images;

  return (
    <section className="w-full mt-5 transition-colors duration-300" style={{ backgroundColor: bg }}>

      {/* Banner */}
      <div className="relative overflow-hidden py-5" style={{ background: gradient }}>
        <div className="absolute left-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <div className="absolute left-[7%]  top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[7%] top-0 h-full w-[3%] -skew-x-[20deg] bg-white" />
        <div className="absolute right-[-3%] top-0 h-full w-[7%] -skew-x-[20deg] bg-white" />
        <h2 className="relative z-10 text-center text-xl sm:text-2xl font-bold text-white tracking-wide">
          Gallery
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-8 sm:gap-12 border-b px-5 py-4" style={{ borderColor: border }}>
        {(["images", "videos"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="text-sm sm:text-base font-semibold pb-2 border-b-2 capitalize transition-colors duration-200"
            style={{ color: activeTab === tab ? accent : muted, borderColor: activeTab === tab ? accent : "transparent" }}
          >
            {tab === "images" ? "Images" : "Videos"}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-6">

        {/* ── IMAGE TAB ── */}
        {activeTab === "images" && (
          <>
            {images.length === 0 ? (
              <EmptyState icon={<ImageIcon size={40} />} label="No images yet. Add one above." muted={muted} />
            ) : (
              <>
                {/* Banner image — full width, natural height, no crop */}
                {bannerImg && (
                  <div
                    className="w-full rounded-xl overflow-hidden cursor-pointer shadow-sm"
                    style={{ border: `1px solid ${border}` }}
                    onClick={() => setLightbox(bannerImg.url)}
                  >
                    <img
                      src={bannerImg.url}
                      alt="Banner"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/1200x400?text=Invalid+URL"; }}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}

                {/* Rest of images — 3 col grid, natural height per row */}
                {gridImgs.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {gridImgs.map((img) => (
                      <div
                        key={img.id}
                        className="rounded-xl overflow-hidden cursor-pointer shadow-sm"
                        style={{ border: `1px solid ${border}` }}
                        onClick={() => setLightbox(img.url)}
                      >
                        <img
                          src={img.url}
                          alt=""
                          onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=Invalid+URL"; }}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ── VIDEO TAB ── */}
        {activeTab === "videos" && (
          <>
            {videos.length === 0 ? (
              <EmptyState icon={<Video size={40} />} label="No videos yet. Add one above." muted={muted} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {videos.map((vid) => {
                  const embedUrl = getYouTubeEmbed(vid.url);
                  const isYT     = !!getYouTubeId(vid.url);
                  return (
                    <div
                      key={vid.id}
                      className="relative group rounded-xl overflow-hidden shadow-sm"
                      style={{ border: `1px solid ${border}` }}
                    >
                      {/* Embedded player — no play icon, YouTube's own UI shows */}
                      <div className="relative" style={{ aspectRatio: "16/9" }}>
                        {isYT ? (
                          <iframe
                            src={embedUrl}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            title={`video-${vid.id}`}
                          />
                        ) : (
                          <video
                            src={vid.url}
                            controls
                            poster="https://placehold.co/800x450?text=Video"
                            onError={(e) => { (e.target as HTMLVideoElement).poster = "https://placehold.co/800x450?text=Invalid+Video"; }}
                            className="w-full h-full"
                            style={{ backgroundColor: "#000" }}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Image Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X size={22} />
          </button>
          <img
            src={lightbox}
            alt="Enlarged"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function EmptyState({ icon, label, muted }: { icon: React.ReactNode; label: string; muted: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16" style={{ color: muted }}>
      {icon}
      <p className="text-sm">{label}</p>
    </div>
  );
}
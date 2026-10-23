"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* =========================================================
   IKON SVG
   ========================================================= */
const Icon = ({ name, className = "w-5 h-5" }) => {
  const paths = {
    pin: (
      <>
        <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v4M16 3v4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    shirt: <path d="M16 3l4 2-2 5-2-1v10H8V9L6 10 4 5l4-2 4 3 4-3z" />,
    bag: (
      <>
        <rect x="4" y="7" width="16" height="14" rx="2" />
        <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
        <path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6" />
      </>
    ),
    run: (
      <>
        <circle cx="15" cy="4.5" r="1.8" />
        <path d="M13 21l2-5-3-2 1-4 3 3 3 1M8 12l2.5-3.5L13 10M5 21l3-4" />
      </>
    ),
    utensils: (
      <>
        <path d="M5 3v7a2 2 0 0 0 4 0V3M7 11v10M17 3c-1.5 1-2 2.5-2 5s.5 4 2 5v8" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
      </>
    ),
    note: (
      <>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <path d="M14 3v6h6M8 14h8M8 17h5" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="19" r="2.5" />
        <circle cx="18" cy="5" r="2.5" />
        <path d="M8.5 19H15a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h6.5" />
      </>
    ),
    flag: <path d="M4 21V4M4 4h12l-2 4 2 4H4" />,
    trash: (
      <>
        <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14" />
        <path d="M10 11v6M14 11v6" />
      </>
    ),
    food: (
      <>
        <path d="M4 3v7a2 2 0 0 0 4 0V3M6 10v11" />
        <path d="M15 3c-1 1.5-1.5 3.5-1.5 6.5S14 15 15 16v5M18 3v18" />
      </>
    ),
    quote: (
      <path d="M7 7h4v4H7a3 3 0 0 0 0 6M15 7h4v4h-4a3 3 0 0 0 0 6" />
    ),
    megaphone: (
      <>
        <path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1z" />
        <path d="M14 8a4 4 0 0 1 0 8M17 5a8 8 0 0 1 0 14" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowUp: <path d="M12 19V5M5 12l7-7 7 7" />,
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    close: <path d="M6 6l12 12M18 6L6 18" />,
    check: <path d="M5 12l5 5L20 7" />,
    send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

/* =========================================================
   NAV
   ========================================================= */
const NAV = [
  { href: "#tentang", label: "Tentang", id: "tentang" },
  { href: "#sejarah", label: "Sejarah", id: "sejarah" },
  { href: "#acara", label: "Acara", id: "acara" },
  { href: "#rute", label: "Rute", id: "rute" },
  { href: "#informasi", label: "Info", id: "informasi" },
  { href: "#pengurus", label: "Pengurus", id: "pengurus" },
  { href: "#kontak", label: "Kontak", id: "kontak" },
];

/* =========================================================
   STATUS ACARA
   ========================================================= */
function useStatus() {
  const start = new Date("2026-10-24T06:30:00+07:00").getTime();
  const end = new Date("2026-10-24T13:30:00+07:00").getTime();
  const [status, setStatus] = useState({ label: "", tone: "" });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      if (now >= start && now <= end) {
        setStatus({ label: "Acara sedang berlangsung", tone: "live" });
      } else if (now > end) {
        setStatus({ label: "Acara telah selesai", tone: "done" });
      } else {
        const days = Math.ceil((start - now) / 86400000);
        setStatus({
          label: days === 1 ? "Besok, 24 Oktober" : `${days} hari lagi`,
          tone: "soon",
        });
      }
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, [start, end]);

  return status;
}

/* =========================================================
   COUNTDOWN
   ========================================================= */
function Countdown() {
  const target = new Date("2026-10-24T07:00:00+07:00").getTime();
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setT({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { l: "Hari", v: t.d },
    { l: "Jam", v: t.h },
    { l: "Menit", v: t.m },
    { l: "Detik", v: t.s },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto">
      {items.map((i) => (
        <div
          key={i.l}
          className="bg-white/[0.04] border border-white/10 rounded-lg py-3 text-center"
        >
          <div className="text-xl sm:text-2xl font-semibold text-amber-200 tabular-nums">
            {String(i.v).padStart(2, "0")}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-red-200/50 mt-1">
            {i.l}
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   SECTION HEADER
   ========================================================= */
function SectionHeader({ no, tag, title, sub }) {
  return (
    <div className="mb-10">
      <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200/80 font-medium">
        {no} — {tag}
      </p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {sub && <p className="mt-3 text-sm text-red-100/70 max-w-xl">{sub}</p>}
    </div>
  );
}

/* =========================================================
   KARTU PENGURUS — position bisa diatur per foto
   ========================================================= */
function PengurusCard({ src, alt, jabatan, nama, position = "object-center" }) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03]">
      <div className="relative w-full aspect-[4/5] bg-[#1a0505]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className={`object-cover ${position}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#240808] via-[#240808]/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[10px] uppercase tracking-[0.25em] text-amber-200/80 font-medium">
            {jabatan}
          </p>
          <p className="mt-1 text-2xl font-semibold text-white">{nama}</p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
   ========================================================= */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");
  const [wishes, setWishes] = useState([]);
  const [form, setForm] = useState({ nama: "", pesan: "" });
  const [sent, setSent] = useState(false);
  const status = useStatus();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);

      let current = "";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= 120) current = n.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const submitWish = (e) => {
    e.preventDefault();
    if (!form.nama.trim() || !form.pesan.trim()) return;
    setWishes((prev) => [
      { nama: form.nama.trim(), pesan: form.pesan.trim(), at: Date.now() },
      ...prev,
    ]);
    setForm({ nama: "", pesan: "" });
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  const canSubmit = form.nama.trim() && form.pesan.trim();

  /* ===== DATA ===== */
  const rundown = [
    { jam: "06.30", acara: "Kehadiran Peserta", ket: "Guru, Staf TU, dan siswa hadir di sekolah" },
    { jam: "06.45", acara: "Baris & Persiapan", ket: "Peserta jalan sehat mulai dibariskan" },
    { jam: "07.00", acara: "Start Jalan Sehat", ket: "On time — rute keliling kota Cepu" },
    { jam: "08.30", acara: "Finish & Istirahat", ket: "Kembali di SMPN 3 Cepu, minum & foto bersama" },
    { jam: "09.00", acara: "Sambutan & Doa Bersama", ket: "Kepala sekolah & perwakilan OSIS" },
    { jam: "09.30", acara: "Pemotongan Tumpeng", ket: "Syukuran HUT ke-47" },
    { jam: "10.00", acara: "Makan Bersama", ket: "Siswa membawa makanan & minuman dari rumah" },
    { jam: "11.30", acara: "Unjuk Bakat", ket: "Penampilan siswa & pengumuman" },
    { jam: "13.00", acara: "Penutupan", ket: "Foto bersama seluruh warga sekolah" },
    { jam: "13.30", acara: "Selesai", ket: "Peserta kembali ke rumah masing-masing" },
  ];

  const acara = [
    {
      icon: "run",
      title: "Jalan Sehat",
      waktu: "Start 07.00 WIB",
      desc: "Start on time dari SMPN 3 Cepu. Rute keliling kota Cepu — Nglajo, TMP, Simpang 7, Jl. Ronggolawe, Kantor Pos, Jl. Diponegoro, Jl. Pemuda, BNI, Jl. Hayam Wuruk, finish kembali di sekolah.",
    },
    {
      icon: "utensils",
      title: "Syukuran & Makan Bersama",
      waktu: "Setelah Jalan Sehat",
      desc: "Dilaksanakan saat pemotongan tumpeng. Siswa membawa makanan & minuman dari rumah (wali kelas mengkoordinir). Setiap kelas membawa tikar & trash bag.",
    },
    {
      icon: "mic",
      title: "Unjuk Bakat",
      waktu: "11.30 – 13.00",
      desc: "Tampilkan talenta terbaikmu di panggung ESMEGA. Ada juga pengumuman pemenang dan doorprize.",
    },
  ];

  const rute = [
    "Start — SMPN 3 Cepu",
    "Nglajo",
    "TMP",
    "Simpang 7",
    "Belok kiri — Jl. Ronggolawe",
    "Perempatan Kantor Pos",
    "Belok kiri — Jl. Diponegoro",
    "Perempatan Jl. Pemuda",
    "Belok kiri — Jl. Pemuda",
    "BNI",
    "Belok kiri — Jl. Hayam Wuruk",
    "Finish — SMPN 3 Cepu",
  ];

  const info = [
    { icon: "calendar", label: "Hari & Tanggal", value: "Sabtu, 24 Oktober 2026" },
    { icon: "clock", label: "Hadir di Sekolah", value: "06.30 WIB" },
    { icon: "clock", label: "Start Jalan Sehat", value: "07.00 WIB (on time)" },
    { icon: "clock", label: "Selesai", value: "13.30 WIB" },
    { icon: "pin", label: "Titik Kumpul", value: "Halaman SMPN 3 Cepu" },
    { icon: "users", label: "Peserta", value: "Guru, Staf TU, dan siswa" },
  ];

  const pakaian = [
    { icon: "shirt", title: "Siswa", desc: "Mengenakan seragam olahraga sekolah." },
    { icon: "shirt", title: "Guru & Staf TU", desc: "Mengenakan kaos merah." },
  ];

  const bawaan = [
    {
      icon: "food",
      title: "Makanan & Minuman",
      desc: "Siswa membawa makanan & minuman dari rumah. Wali kelas dapat mengkoordinir untuk kelasnya.",
    },
    {
      icon: "bag",
      title: "Tikar",
      desc: "Setiap kelas membawa tikar untuk alas makan bersama.",
    },
    {
      icon: "trash",
      title: "Trash Bag",
      desc: "Setiap kelas membawa kantong sampah untuk menjaga kebersihan.",
    },
  ];

  const timeline = [
    { tahun: "1979", teks: "SMP Negeri 3 Cepu resmi berdiri dan mulai menerima siswa pertama." },
    { tahun: "1995", teks: "Pembangunan gedung baru dan perluasan ruang kelas untuk menampung siswa." },
    { tahun: "2008", teks: "Prestasi akademik dan non-akademik mulai menonjol di tingkat kabupaten." },
    { tahun: "2015", teks: "Digitalisasi administrasi sekolah dan penguatan kegiatan ekstrakurikuler." },
    { tahun: "2020", teks: "Pembelajaran daring, adaptasi teknologi, dan penguatan karakter siswa." },
    { tahun: "2026", teks: "HUT ke-47 — semangat baru, prestasi baru untuk ESMEGA berkarya." },
  ];

  return (
    <main className="min-h-screen bg-[#240808] text-white selection:bg-amber-300/30">
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pop {
          0% { transform: scale(0.96); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes livePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .floaty { animation: floaty 6s ease-in-out infinite; }
        .fadein { animation: fadein 0.7s ease-out both; }
        .d1 { animation-delay: 0.08s; }
        .d2 { animation-delay: 0.16s; }
        .d3 { animation-delay: 0.24s; }
        .pop { animation: pop 0.35s ease-out both; }
        .live-dot { animation: livePulse 1.6s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ===== PROGRESS BAR ===== */}
      <div className="fixed top-0 inset-x-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-amber-300/80 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ===== NAVBAR ===== */}
      <nav
        className={`fixed top-0.5 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#240808]/95 backdrop-blur border-b border-white/[0.08] py-2.5"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8">
              <Image src="/smp3.png" alt="Logo ESMEGA" fill sizes="32px" className="object-contain" />
            </div>
            <div className="leading-none">
              <p className="text-sm font-semibold">ESMEGA</p>
              <p className="text-[10px] text-red-300/70 mt-1 tracking-wider">CEPU</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6 text-sm text-red-100/80">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={n.href}
                className={`relative py-1 hover:text-amber-200 transition ${
                  active === n.id ? "text-amber-200" : ""
                }`}
              >
                {n.label}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-px bg-amber-200 transition-opacity ${
                    active === n.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#kontak"
              className="hidden sm:inline-block rounded-full border border-amber-300/40 text-amber-200 px-4 py-1.5 text-sm font-medium hover:bg-amber-300 hover:text-[#240808] transition"
            >
              Hubungi
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg border border-white/15 text-red-100"
              aria-label="Buka menu"
            >
              <Icon name="menu" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden transition ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#1c0606] border-l border-white/10 p-6 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm font-semibold">Navigasi</p>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded border border-white/15"
              aria-label="Tutup menu"
            >
              <Icon name="close" className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={n.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2.5 px-3 rounded-lg text-sm transition ${
                  active === n.id
                    ? "bg-white/5 text-amber-200"
                    : "text-red-100/85 hover:bg-white/5 hover:text-amber-200"
                }`}
              >
                {n.label}
              </a>
            ))}
          </div>
          <a
            href="#kontak"
            onClick={() => setMobileOpen(false)}
            className="mt-6 block text-center rounded-full bg-amber-300 text-[#240808] px-4 py-2 font-semibold"
          >
            Hubungi
          </a>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section
        id="top"
        className="relative min-h-[92vh] flex items-center justify-center px-5 pt-28 pb-16"
      >
        <div className="max-w-3xl text-center w-full">
          <div className="floaty inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white p-2 shadow-xl mx-auto relative ring-1 ring-amber-300/30">
              <Image
                src="/smp3.png"
                alt="Logo SMPN 3 Cepu"
                fill
                sizes="(max-width: 640px) 96px, 128px"
                className="object-contain p-1.5"
                priority
              />
            </div>
          </div>

          <p className="mt-6 text-[11px] tracking-[0.35em] uppercase text-amber-200/80 fadein d1">
            SMP Negeri 3 Cepu
          </p>

          <h1 className="mt-3 text-[44px] sm:text-7xl font-semibold tracking-tight leading-[1.02] fadein d2">
            <span className="block text-white">HUT ke-47</span>
            <span className="block text-amber-200 mt-1">ESMEGA</span>
          </h1>

          <p className="mt-3 text-base sm:text-lg text-red-200/70 fadein d3">
            Sabtu, 24 Oktober 2026
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] fadein d3">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                status.tone === "live"
                  ? "bg-red-400 live-dot"
                  : status.tone === "done"
                  ? "bg-white/40"
                  : "bg-amber-300"
              }`}
            />
            <span className="text-red-100/80">{status.label}</span>
          </div>

          <p className="mt-5 text-sm sm:text-base text-red-100/75 italic max-w-xl mx-auto fadein d3">
            &ldquo;Semangat Baru, Prestasi Baru — ESMEGA Berkarya untuk Negeri&rdquo;
          </p>

          <div className="mt-8 fadein d3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-300/60 mb-3">
              Menuju start jalan sehat
            </p>
            <Countdown />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center fadein d3">
            <a
              href="#rute"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 text-[#240808] px-6 py-2.5 font-semibold hover:bg-amber-200 transition"
            >
              Lihat Rute
              <Icon name="arrow" className="w-4 h-4" />
            </a>
            <a
              href="#informasi"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 font-semibold hover:bg-white/5 transition"
            >
              Info Peserta
            </a>
          </div>
        </div>
      </section>

      {/* ===== TENTANG ===== */}
      <section id="tentang" className="py-24 px-5 border-t border-white/[0.06] scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <SectionHeader no="01" tag="Tentang" title="Selamat Ulang Tahun ke-47" />
          <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="space-y-3 text-red-50/85 leading-relaxed text-[15px]">
              <p>
                47 tahun bukan sekadar angka — ia adalah jejak langkah, keringat
                para guru, dan mimpi ribuan siswa yang telah lahir dari SMP Negeri
                3 Cepu. Di usia yang matang ini, mari kita nyalakan kembali
                semangat untuk berkarya, berprestasi, dan menjaga nama baik
                almamater.
              </p>
              <p>
                Tema perayaan tahun 2026:{" "}
                <span className="font-semibold text-amber-200">
                  &ldquo;ESMEGA Berkarakter, Berprestasi, dan Berbudaya&rdquo;
                </span>
                . Mari rayakan dengan penuh kebanggaan, kekeluargaan, dan
                sportivitas.
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
              <span className="text-5xl font-semibold text-amber-200 tracking-tight">
                47
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-red-300/60">
                Tahun
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PESAN UNTUK WALI KELAS ===== */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-amber-300/25 bg-gradient-to-br from-amber-300/[0.08] to-transparent p-6 sm:p-8">
            <div className="flex items-center gap-2 text-amber-200 mb-4">
              <Icon name="megaphone" className="w-5 h-5" />
              <p className="text-sm font-semibold">Pesan untuk Wali Kelas</p>
            </div>
            <div className="relative pl-6">
              <span className="absolute left-0 top-0 text-amber-300/40">
                <Icon name="quote" className="w-5 h-5" />
              </span>
              <p className="text-sm text-red-100/85 leading-relaxed italic">
                Mohon bantuan Bapak/Ibu wali kelas untuk membagikan informasi
                kegiatan perayaan HUT ke-47 SMPN 3 Cepu ini ke grup siswa/ortu
                kelasnya masing-masing.
              </p>
            </div>
            <p className="mt-4 text-xs text-red-200/60">
              Terima kasih atas kerja sama Bapak/Ibu. — Panitia HUT ke-47 ESMEGA
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEJARAH ===== */}
      <section id="sejarah" className="py-24 px-5 border-t border-white/[0.06] scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            no="02"
            tag="Sejarah"
            title="Jejak Langkah ESMEGA"
            sub="Perjalanan panjang yang membentuk ESMEGA seperti hari ini."
          />
          <div className="relative pl-8 border-l border-white/10">
            {timeline.map((t, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 border-amber-300/60 bg-[#240808]" />
                <p className="text-[11px] uppercase tracking-[0.25em] text-amber-200/80 font-medium">
                  {t.tahun}
                </p>
                <p className="text-sm text-red-100/80 mt-1.5 leading-relaxed">
                  {t.teks}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACARA ===== */}
      <section id="acara" className="py-24 px-5 border-t border-white/[0.06] scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeader no="03" tag="Rangkaian Acara" title="Tiga Acara Utama" />

          <div className="rounded-2xl border border-amber-300/25 bg-gradient-to-br from-amber-300/[0.08] to-transparent p-6 sm:p-8 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-200/80 font-medium">
                Pelaksanaan
              </p>
              <p className="mt-1 text-2xl sm:text-3xl font-semibold text-white">
                Sabtu, 24 Oktober 2026
              </p>
            </div>
            <div className="text-sm text-red-200/70 sm:text-right">
              <p>Hadir 06.30 WIB</p>
              <p>Start 07.00 WIB</p>
              <p>Selesai 13.30 WIB</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {acara.map((a, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-amber-300/30 text-amber-200">
                    <Icon name={a.icon} className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-mono text-amber-200/80">
                    {a.waktu}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                <p className="text-sm text-red-100/70 mt-2 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RUTE ===== */}
      <section id="rute" className="py-24 px-5 border-t border-white/[0.06] scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            no="04"
            tag="Rute Jalan Sehat"
            title="Start & Finish di ESMEGA"
            sub="Rute keliling kota Cepu — start dan finish kembali di SMPN 3 Cepu."
          />

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-amber-200">
                <Icon name="route" className="w-5 h-5" />
                <p className="text-sm font-semibold">Urutan Rute</p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-300/50 font-mono">
                {rute.length} titik
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-red-300/60 mb-2">
                <span>Start</span>
                <span>Finish</span>
              </div>
              <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-amber-300/70 via-amber-300/40 to-amber-300/70" />
              </div>
            </div>

            <ol className="relative">
              {rute.map((r, i) => {
                const isFirst = i === 0;
                const isLast = i === rute.length - 1;
                return (
                  <li key={i} className="relative pl-10 pb-6 last:pb-0">
                    {!isLast && (
                      <span className="absolute left-[15px] top-7 bottom-0 w-px bg-white/10" />
                    )}
                    <span
                      className={`absolute left-0 top-0 w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono ${
                        isFirst || isLast
                          ? "border-amber-300/60 bg-amber-300/10 text-amber-200"
                          : "border-white/15 bg-white/[0.03] text-red-200/60"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-1">
                      <p
                        className={`text-sm ${
                          isFirst || isLast
                            ? "font-semibold text-amber-200"
                            : "text-red-100/85"
                        }`}
                      >
                        {r}
                      </p>
                      {isFirst && (
                        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-300/60 mt-0.5">
                          Titik Start
                        </p>
                      )}
                      {isLast && (
                        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-300/60 mt-0.5">
                          Titik Finish
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-start gap-2 text-xs text-red-200/60">
              <span className="text-amber-200/70 mt-0.5">
                <Icon name="flag" className="w-4 h-4" />
              </span>
              <p>
                Start pukul 07.00 WIB on time. Peserta wajib dibariskan pukul
                06.45 WIB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RUNDOWN ===== */}
      <section className="py-24 px-5 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader no="05" tag="Susunan Acara" title="Rundown" />
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {rundown.map((r, i) => (
              <div
                key={i}
                className={`grid grid-cols-[60px_1fr] sm:grid-cols-[100px_1fr] gap-4 px-5 py-4 ${
                  i !== rundown.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}
              >
                <div className="text-xs sm:text-sm font-mono text-amber-200/80 pt-0.5">
                  {r.jam}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{r.acara}</p>
                  <p className="text-xs text-red-200/60 mt-0.5">{r.ket}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-red-200/50 mt-3">
            Jadwal dapat berubah sesuai kondisi di lapangan.
          </p>
        </div>
      </section>

      {/* ===== INFORMASI ===== */}
      <section id="informasi" className="py-24 px-5 border-t border-white/[0.06] scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeader no="06" tag="Informasi" title="Yang Perlu Kamu Tahu" />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {info.map((i, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex items-start gap-3"
              >
                <span className="text-amber-200/80 shrink-0 mt-0.5">
                  <Icon name={i.icon} className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-red-300/60 font-medium">
                    {i.label}
                  </p>
                  <p className="text-sm text-white mt-1">{i.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200/80 font-medium mb-3">
              Pakaian
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {pakaian.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex items-start gap-3"
                >
                  <span className="text-amber-200/80 shrink-0 mt-0.5">
                    <Icon name={p.icon} className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{p.title}</p>
                    <p className="text-xs text-red-100/70 mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200/80 font-medium mb-3">
              Yang Perlu Dibawa
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {bawaan.map((b, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="text-amber-200/80">
                    <Icon name={b.icon} className="w-5 h-5" />
                  </span>
                  <p className="text-sm font-semibold text-white mt-3">
                    {b.title}
                  </p>
                  <p className="text-xs text-red-100/70 mt-1 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/[0.04] p-6">
            <div className="flex items-center gap-2 text-amber-200">
              <Icon name="note" className="w-5 h-5" />
              <p className="text-sm font-semibold">Catatan Penting</p>
            </div>
            <ul className="mt-3 text-sm text-red-100/80 space-y-2">
              {[
                "Guru, Staf TU, dan siswa hadir di sekolah pukul 06.30 WIB.",
                "Peserta jalan sehat dibariskan pukul 06.45 WIB.",
                "Start jalan sehat pukul 07.00 WIB — on time.",
                "Kegiatan selesai pukul 13.30 WIB.",
                "Mohon bantuan wali kelas untuk membagikan info ini ke grup siswa/ortu.",
              ].map((c, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-amber-300/60 font-mono text-xs pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PENGURUS ===== */}
      <section id="pengurus" className="py-24 px-5 border-t border-white/[0.06] scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader no="07" tag="Pengurus OSIS" title="Wajah di Balik Acara" />
          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
            <PengurusCard
              src="/jason.png"
              alt="Foto Jason - Ketua OSIS"
              jabatan="Ketua OSIS"
              nama="Jason"
              position="object-top"
            />
            <PengurusCard
              src="/grinus.png"
              alt="Foto Grinus - Wakil Ketua OSIS"
              jabatan="Wakil Ketua OSIS"
              nama="Grinus"
              position="object-[center_25%]"
            />
          </div>
        </div>
      </section>

      {/* ===== FORM UCAPAN ===== */}
      <section className="py-24 px-5 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            no="08"
            tag="Ucapan"
            title="Tulis Ucapanmu"
            sub="Bagikan pesan dan doa untuk ESMEGA di usia ke-47."
          />

          <form
            onSubmit={submitWish}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-red-300/60 font-medium">
                  Nama
                </label>
                <input
                  type="text"
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  placeholder="Nama kamu"
                  maxLength={40}
                  className="mt-1.5 w-full rounded-lg bg-white/[0.04] border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-red-200/30 focus:outline-none focus:border-amber-300/50 focus:ring-1 focus:ring-amber-300/20 transition"
                />
                <p className="text-[10px] text-red-300/50 mt-1 text-right font-mono">
                  {form.nama.length}/40
                </p>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-red-300/60 font-medium">
                  Ucapan
                </label>
                <input
                  type="text"
                  value={form.pesan}
                  onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                  placeholder="Pesan singkat..."
                  maxLength={120}
                  className="mt-1.5 w-full rounded-lg bg-white/[0.04] border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-red-200/30 focus:outline-none focus:border-amber-300/50 focus:ring-1 focus:ring-amber-300/20 transition"
                />
                <p className="text-[10px] text-red-300/50 mt-1 text-right font-mono">
                  {form.pesan.length}/120
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="text-xs text-red-200/50">
                {sent ? (
                  <span className="inline-flex items-center gap-1.5 text-amber-200">
                    <Icon name="check" className="w-4 h-4" />
                    Ucapan terkirim!
                  </span>
                ) : (
                  "Ucapan hanya tersimpan di sesi ini."
                )}
              </p>
              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex items-center gap-2 rounded-full bg-amber-300 text-[#240808] px-5 py-2 text-sm font-semibold hover:bg-amber-200 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-amber-300"
              >
                Kirim
                <Icon name="send" className="w-4 h-4" />
              </button>
            </div>
          </form>

          {wishes.length > 0 && (
            <div className="mt-4 space-y-2">
              {wishes.map((w) => (
                <div
                  key={w.at}
                  className="pop rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-sm font-medium text-amber-200">{w.nama}</p>
                  <p className="text-sm text-red-100/80 mt-1">{w.pesan}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== PETA ===== */}
      <section className="py-24 px-5 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            no="09"
            tag="Lokasi"
            title="Temukan Kami"
            sub="SMP Negeri 3 Cepu, Kabupaten Blora, Jawa Tengah."
          />
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <iframe
              title="Lokasi SMP Negeri 3 Cepu"
              src="https://www.openstreetmap.org/export/embed.html?bbox=111.57%2C-7.16%2C111.60%2C-7.14&layer=mapnik"
              className="w-full h-[320px] sm:h-[400px] grayscale-[0.3] contrast-[0.95]"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-red-200/50 mt-3">
            Peta menggunakan OpenStreetMap. Sesuaikan koordinat jika lokasi kurang tepat.
          </p>
        </div>
      </section>

      {/* ===== KONTAK ===== */}
      <section id="kontak" className="py-24 px-5 border-t border-white/[0.06] scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            no="10"
            tag="Kontak"
            title="Informasi & Kontak"
            sub="Ada pertanyaan? Hubungi pengurus OSIS di bawah ini."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <span className="text-amber-200/80">
                <Icon name="pin" className="w-5 h-5" />
              </span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-red-300/60 font-medium mt-3">
                Alamat
              </p>
              <p className="text-sm mt-1.5 text-white">
                SMP Negeri 3 Cepu
                <br />
                <span className="text-red-200/70 text-xs">
                  Kab. Blora, Jawa Tengah
                </span>
              </p>
            </div>

            <a
              href="tel:+6281326300446"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/20 transition group"
            >
              <span className="text-amber-200/80">
                <Icon name="phone" className="w-5 h-5" />
              </span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-red-300/60 font-medium mt-3">
                Jason — Ketua
              </p>
              <p className="text-sm mt-1.5 text-white group-hover:text-amber-200 transition">
                +62 813-2630-0446
              </p>
            </a>

            <a
              href="tel:+62895321767890"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/20 transition group"
            >
              <span className="text-amber-200/80">
                <Icon name="phone" className="w-5 h-5" />
              </span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-red-300/60 font-medium mt-3">
                Grinus — Wakil
              </p>
              <p className="text-sm mt-1.5 text-white group-hover:text-amber-200 transition">
                +62 895-3217-67890
              </p>
            </a>

            <a
              href="https://instagram.com/osis_smpn3cepu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/20 transition group"
            >
              <span className="text-amber-200/80">
                <Icon name="instagram" className="w-5 h-5" />
              </span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-red-300/60 font-medium mt-3">
                Instagram
              </p>
              <p className="text-sm mt-1.5 text-white group-hover:text-amber-200 transition">
                @osis_smpn3cepu
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/[0.06] py-12 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8">
                  <Image src="/smp3.png" alt="Logo ESMEGA" fill sizes="32px" className="object-contain" />
                </div>
                <div className="leading-none">
                  <p className="text-sm font-semibold">ESMEGA</p>
                  <p className="text-[10px] text-red-300/70 mt-1 tracking-wider">
                    CEPU
                  </p>
                </div>
              </div>
              <p className="text-xs text-red-200/50 mt-4 leading-relaxed max-w-xs">
                SMP Negeri 3 Cepu — merayakan 47 tahun berkarya, berprestasi,
                dan berbudaya.
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-amber-200/80 font-medium mb-3">
                Navigasi
              </p>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-red-200/60">
                {NAV.map((n) => (
                  <a
                    key={n.id}
                    href={n.href}
                    className="hover:text-amber-200 transition"
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-amber-200/80 font-medium mb-3">
                Kontak
              </p>
              <div className="space-y-1.5 text-xs text-red-200/60">
                <a
                  href="tel:+6281326300446"
                  className="block hover:text-amber-200 transition"
                >
                  Jason — +62 813-2630-0446
                </a>
                <a
                  href="tel:+62895321767890"
                  className="block hover:text-amber-200 transition"
                >
                  Grinus — +62 895-3217-67890
                </a>
                <a
                  href="https://instagram.com/osis_smpn3cepu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-amber-200 transition"
                >
                  @osis_smpn3cepu
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-red-200/50">
            <p>
              &copy; 2026 OSIS SMP Negeri 3 Cepu — HUT ke-47{" "}
              <span className="text-amber-200 font-medium">ESMEGA</span>
            </p>
            <p className="font-mono">24.10.2026</p>
          </div>
        </div>
      </footer>

      {/* ===== BACK TO TOP ===== */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Kembali ke atas"
        className={`fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-amber-300 text-[#240808] shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-amber-200 ${
          progress > 25
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <Icon name="arrowUp" className="w-5 h-5" />
      </button>
    </main>
  );
}

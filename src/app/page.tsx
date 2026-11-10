
"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  ShieldCheck,
  GraduationCap,
  Sparkles,
} from "lucide-react";

function Robot() {
  return (
    <svg
      viewBox="0 0 500 620"
      className="robot-art"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="metal" x1="100" y1="0" x2="400" y2="600">
          <stop stopColor="#F5F7F4" />
          <stop offset=".45" stopColor="#899994" />
          <stop offset="1" stopColor="#263D38" />
        </linearGradient>
        <linearGradient id="darkMetal" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#304B43" />
          <stop offset="1" stopColor="#07110F" />
        </linearGradient>
        <linearGradient id="eye" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#D8FFB7" />
          <stop offset="1" stopColor="#48D89A" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Antenna */}
      <path d="M250 54 V25" stroke="#B5D7C4" strokeWidth="5" />
      <circle cx="250" cy="19" r="9" fill="#76E7A8" filter="url(#glow)" />

      {/* Head */}
      <rect x="128" y="65" width="244" height="208" rx="76"
        fill="url(#metal)" stroke="#D8E6DD" strokeWidth="3" />
      <rect x="146" y="91" width="208" height="157" rx="55"
        fill="#101C19" stroke="#718D80" strokeWidth="2" />

      {/* Face */}
      <path d="M181 160 Q202 138 225 160" stroke="#73E9A9" strokeWidth="5" strokeLinecap="round" filter="url(#glow)" />
      <path d="M275 160 Q298 138 320 160" stroke="#73E9A9" strokeWidth="5" strokeLinecap="round" filter="url(#glow)" />
      <circle cx="203" cy="173" r="7" fill="url(#eye)" filter="url(#glow)" />
      <circle cx="299" cy="173" r="7" fill="url(#eye)" filter="url(#glow)" />
      <path d="M221 210 Q250 224 279 210" stroke="#C7E8D5" strokeWidth="3" strokeLinecap="round" />

      {/* Side pieces */}
      <rect x="109" y="126" width="20" height="86" rx="10" fill="#9EBCAD" />
      <rect x="371" y="126" width="20" height="86" rx="10" fill="#9EBCAD" />
      <circle cx="119" cy="169" r="7" fill="#76E7A8" filter="url(#glow)" />
      <circle cx="381" cy="169" r="7" fill="#76E7A8" filter="url(#glow)" />

      {/* Neck */}
      <path d="M207 269 H293 L307 317 H193 Z" fill="#829A8E" />
      <path d="M224 280 H276 V316 H224 Z" fill="#15241F" />

      {/* Body */}
      <path d="M126 341 Q250 295 374 341 L431 565 H69 Z"
        fill="url(#metal)" stroke="#D2E4D9" strokeWidth="3" />
      <path d="M153 349 Q250 325 347 349 L373 520 H127 Z"
        fill="url(#darkMetal)" stroke="#7D9C89" strokeWidth="2" />

      {/* Chest emblem */}
      <circle cx="250" cy="417" r="46" fill="#172C24" stroke="#B9D9C3" strokeWidth="2" />
      <path d="M250 381 L281 400 V432 L250 451 L219 432 V400 Z"
        stroke="#D5B775" strokeWidth="3" />
      <path d="M234 414 L246 426 L268 403" stroke="#D5B775" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Arms */}
      <path d="M126 357 L80 385 L43 498 L88 514 L145 408 Z"
        fill="url(#metal)" stroke="#C7D7CE" strokeWidth="3" />
      <path d="M374 357 L420 385 L457 498 L412 514 L355 408 Z"
        fill="url(#metal)" stroke="#C7D7CE" strokeWidth="3" />
      <circle cx="65" cy="500" r="27" fill="#839D8F" stroke="#D4E2D9" strokeWidth="3" />
      <circle cx="435" cy="500" r="27" fill="#839D8F" stroke="#D4E2D9" strokeWidth="3" />

      {/* Details */}
      <path d="M177 480 H323" stroke="#76DCA1" strokeWidth="2" opacity=".8" />
      <path d="M190 494 H310" stroke="#76DCA1" strokeWidth="2" opacity=".4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="brand">
          <span className="brand-icon">A</span>
          <span>ADALDYQ <small>DIGITAL INVITATION</small></span>
        </a>

        <div className="nav-links">
          <a href="#home">Басты бет</a>
          <a href="#event">Іс-шара</a>
          <a href="#college">Колледжіміз</a>
        </div>

        <a href="#event" className="nav-button">
          Шақыруды ашу <ArrowUpRight size={16} />
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-glow" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="eyebrow">
            <Sparkles size={14} />
            <span>САНДЫҚ ШАҚЫРУ · 2026</span>
          </div>

          <p className="hero-small">ҚҰРМЕТТІ ҚОНАҚТАР!</p>

          <h1>
            СІЗГЕ ЕРЕКШЕ
            <br />
            <span>ШАҚЫРУ БАР.</span>
          </h1>

          <p className="hero-description">
            «Адалдық — азаматтық ұстаным»
            атты қалалық слетке
            шақырамыз!
          </p>

          <div className="hero-actions">
            <a href="#event" className="primary-button">
              Шақыруды көру <ArrowDown size={17} />
            </a>
            <span className="robot-status">
              <span className="status-dot" />
              ADAL-01 ONLINE
            </span>
          </div>
        </motion.div>

        <motion.div
          className="robot-container"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="robot-ring" />

          <video
            className="robot-video"
            controls
            playsInline
            preload="metadata"
          >
            <source
              src="/robot-invitation.mp4"
              type="video/mp4"
            />
            Сіздің браузеріңіз видеоны қолдамайды.
          </video>

        </motion.div>

        <div className="scroll-hint">
          <span />
          SCROLL TO EXPLORE
        </div>

        <div className="hero-index">01 / 05</div>
      </section>

      <section className="event-section" id="event">
        <div className="section-label">01 — EVENT DETAILS</div>
        <h2>БІРГЕ АДАЛ ҚОҒАМ ҚҰРАЙЫҚ.</h2>
        <p className="section-description">
          Адалдық — әр азаматтың өмірлік ұстанымы.
          Осы жолда бірге болайық!
        </p>

        <div className="event-grid">
          <div className="event-card">
            <CalendarDays />
            <span>КҮНІ</span>
            <strong>20 ҚАРАША</strong>
            <small>2026 жыл</small>
          </div>

          <div className="event-card">
            <Clock3 />
            <span>УАҚЫТЫ</span>
            <strong>10:00</strong>
            <small>Басталу уақыты</small>
          </div>

          <div className="event-card">
            <MapPin />
            <span>МЕКЕНЖАЙЫ</span>
            <strong>Жамбыл инновациялық жоғары колледжі</strong>
            <small>Тараз, Пушкин көшесі, 154</small>
          </div>
        </div>
      </section>

      <section className="college-section" id="college">

        <div className="college-visual">
          <img
            src="/college.webp"
            alt="Жамбыл инновациялық жоғары колледжі"
            className="college-image"
          />
        </div>


        <div className="college-content">
          <div className="section-label">02 — ABOUT OUR COLLEGE</div>
          <h2>БІЗДІҢ БІЛІМ ОРДАСЫ</h2>
          <p>
            Жамбыл инновациялық жоғары колледжі —
            білім мен инновацияны ұштастыратын,
            болашақ мамандарды даярлайтын білім ордасы.
          </p>
          <div className="college-feature">
            <ShieldCheck />
            <span>Білім. Инновация. Жауапкершілік.</span>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-label">03 — OUR VALUES</div>
        <h2>АДАЛДЫҚ — БІЗДІҢ ТАҢДАУЫМЫЗ.</h2>
        <div className="values-grid">
          {["АДАЛДЫҚ", "ӘДІЛДІК", "ЖАУАПКЕРШІЛІК"].map((value, index) => (
            <motion.div
              key={value}
              className="value-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <span>0{index + 1}</span>
              <h3>{value}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="section-label">04 — SEE YOU THERE</div>
        <h2>БІЗ СІЗДЕРДІ АСЫҒА КҮТЕМІЗ!</h2>
        <p>Адалдық жолында бірге болайық!</p>
        <div className="footer-date">20.11.2026 — 10:00</div>
        <small>ЖАМБЫЛ ИННОВАЦИЯЛЫҚ ЖОҒАРЫ КОЛЛЕДЖІ</small>
        <div className="footer-bottom">ADALDYQ © 2026 · DIGITAL INVITATION</div>
      </footer>
    </main>
  );
}

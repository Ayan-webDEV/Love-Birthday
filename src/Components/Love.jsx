import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import style from "./Love.module.css"; // CSS Module

import img1 from "../assets/sara-1.jpeg";
import img2 from "../assets/sara-2.jpg";
import img3 from "../assets/sara-3.jpg";
import img4 from "../assets/sara-4.jpeg";
import img5 from "../assets/sara-5.jpg";
import img6 from "../assets/sara-6.jpg";
import img7 from "../assets/sara-7.jpg";
import img8 from "../assets/sara-8.jpg";
import img9 from "../assets/sara-9.jpg";
import img10 from "../assets/sara-10.jpg";
import img11 from "../assets/sara-11.jpg";
import img12 from "../assets/sara-12.jpg";
import img13 from "../assets/sara-13.jpg";
import img14 from "../assets/sara-14.jpg";
import img15 from "../assets/sara-15.jpg";
import img16 from "../assets/sara-16.jpg";
import img17 from "../assets/sara-17.jpg";
import img18 from "../assets/sara-18.jpg";
import img19 from "../assets/sara-19.jpg";

export default function LovePage() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const hearts = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 90 + 2}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${6 + Math.random() * 6}s`,
    size: `${24 + Math.random() * 36}px`,
  }));

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const tryPlay = async () => {
      try {
        audio.volume = 0.6;
        await audio.play();
        setMusicPlaying(true);
      } catch (e) {
        setMusicPlaying(false);
      }
    };
    tryPlay();
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (e) {
        setMusicPlaying(false);
      }
    }
  };

  const gallery = [
    img2,
    img4,
    img6,
    img5,
    img3,
    img1,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img16,
    img19,
    img14,
    img15,
    img17,
    img18,
  ];

  const shayari = [
    "Teri muskurahaton pe hai haq mera,",
    "Teri khushi se hi hai meri duniya saji —",
    "Janamdin Mubarak ho Sara meri jaan,",
    "Har pal tera saath ho, yeh dua hai meri rab se maangi. ❤️",
  ];

  return (
    <>
      <nav className={style.topbar}>
        <div className="container-fluid">
          <div className="container">
            <div className={style.topbarInner}>
              <div className={style.names}>Ayan ❤️ Sara</div>
              <button className={style.musicBtn} onClick={toggleMusic}>
                {musicPlaying ? "Pause Music" : "Play Music"}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="container">
          <div className={style.loveWrapper}>
            {/* Floating Hearts */}
            <div className={style.heartsContainer}>
              {hearts.map((h) => (
                <div
                  key={h.id}
                  className={style.heart}
                  style={{
                    left: h.left,
                    bottom: `-${Math.random() * 10}%`,
                    width: h.size,
                    height: h.size,
                    animationDuration: h.duration,
                    animationDelay: h.delay,
                  }}
                >
                  <svg viewBox="0 0 24 24" className={style.heartSvg}>
                    <path
                      fill="#ff5c8a"
                      d="M12 21s-7-4.35-9-7.1C-1 8.5 5 3 8 6c1.86 1.99 4 4.5 4 4.5s2.14-2.51 4-4.5c3-3 9 2.5 5 7.9C19 16.65 12 21 12 21z"
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Audio */}
            <audio
              ref={audioRef}
              src="https://cdn.jsdelivr.net/gh/anars/blank-audio@master/1-second-of-silence.mp3"
              loop
              preload="auto"
            />

            {/* Topbar */}
            {/* <nav className={style.topbar}>
            <div className={style.topbarInner}>
              <div className={style.names}>Ayan ❤️ Sara</div>
              <button className={style.musicBtn} onClick={toggleMusic}>
                {musicPlaying ? "Pause Music" : "Play Music"}
              </button>
            </div>
          </nav> */}

            {/* Hero */}
            <header
              className={style.heroSection}
              style={{ transform: `translateY(${scrollY * 0.04}px)` }}
            >
              <div className={style.heroCard}>
                <motion.h1
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className={style.heroTitle}
                >
                  <span
                    style={{
                      fontFamily: "Dancing Script, cursive",
                      fontWeight: "900",
                    }}
                  >
                    Happy Birthday,{" "}
                    <span style={{ fontFamily: "nunito" }}>Sara</span> ❤️
                    <br />{" "}
                    <span style={{ fontFamily: "outfit", color: "#F88379" }}>
                      (Babu, Jaan)
                    </span>
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={style.heroSubtext}
                >
                  <span className="d-block py-3">
                    A little digital surprise from Ayan — crafted with love.
                  </span>
                  <span
                    className="d-block my-5 pt-1 pb-3"
                    style={{
                      fontFamily: "nunito",
                      fontSize: "20px",
                      letterSpacing: "0.17px",
                    }}
                  >
                    Happy Birthday, Sara ❤️ Tum meri zindagi ka sabse pyara
                    hissa ho. Har pal tumhare saath special lagta hai, aur main
                    hamesha tumhare saath rahna chahta hoon.
                  </span>
                </motion.p>

                <div className={style.heroButtons}>
                  <a href="#gallery" className={style.btnPrimary}>
                    View Gallery
                  </a>
                  <a href="#letter" className={style.btnSecondary}>
                    Read Letter
                  </a>
                </div>
              </div>
            </header>

            {/* Gallery */}
            <section id="gallery" className={style.gallerySection}>
              <h2 className={`pb-5 ${style.sectionTitle}`}>Lovely Memories</h2>
              {/* <div className={style.galleryGrid}> */}
              <div className="row">
                {gallery.map((src, idx) => (
                  <div className="col-12 col-sm-6 col-lg-3 mb-4 pb-2">
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className={style.galleryCard}
                    >
                      <img src={src} className={style.galleryImg} />
                      <div className={style.galleryText}>
                        <div className={style.gName}>Sara</div>
                        <div className={style.gCaption}>
                          A sweet memory by Ayan
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
              {/* </div> */}
            </section>

            {/* Timeline */}
            <section className={style.timelineSection}>
              <h2 className={style.sectionTitle}>Our Story</h2>
              <ol className={style.timelineList}>
                <li className={style.timelineItem}>
                  <span className={style.timelineNumber}>1</span>
                  <h3>The First Meet</h3>
                  <time>May 2025</time>
                  <p className="pt-1">
                    Our first meeting; she is so pretty, I imagined her as my
                    wife.
                  </p>
                </li>
                <li className={style.timelineItem}>
                  <span className={style.timelineNumber}>2</span>
                  <h3>Lovely Night</h3>
                  <time>23 july 2025 [ 9:40 p.m ]</time>
                  <p className="pt-1">
                    That night, while hugging me, she whispered she couldn’t
                    imagine life without me. <br />
                    <span className="d-block mt-2" style={{ color: "#FFDAB9" }}>
                      ( "Ayan mujhe chor ke mt jaye please aapka aadat ho gya h"
                      )
                    </span>
                  </p>
                </li>
                <li className={style.timelineItem}>
                  <span className={style.timelineNumber}>3</span>
                  <h3>Promises</h3>
                  <time>Sep 2025</time>
                  <p className="pt-1">
                    We both promised each other that no matter what happens, we
                    will stay together forever, supporting, loving, and
                    cherishing each other till the very end.
                  </p>
                </li>
                <li className={style.timelineItem}>
                  <span className={style.timelineNumber}>4</span>
                  <h3>Today</h3>
                  <time>16 Nov, 2025</time>
                  <p className="pt-1">
                    Today, 16 Nov 2025, I wish you the happiest birthday! I feel
                    so lucky to have you in my life, to share every smile, every
                    moment, and every dream with you. May your day be filled
                    with love, laughter, and endless happiness, just like you
                    make my life every day.
                  </p>
                </li>
              </ol>
            </section>

            {/* Letter */}
            <section id="letter" className={style.letterSection}>
              <h2 className={style.sectionTitle}>A Letter for Sara</h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={style.letterCard}
              >
                <p className={style.letterText}>
                  Meri pyari Sara,
                  <br />
                  Aaj tera janamdin hai, aur main dua करता हूँ ki har subah teri
                  muskurahat se ho aur har raat tere sapno se bhari ho.
                </p>
                <div className={style.shayariBox}>
                  <h3>Hinglish Shayari</h3>
                  {shayari.map((line, i) => (
                    <div key={i} className={style.shayariLine}>
                      {line}
                    </div>
                  ))}
                </div>
                <p className={style.letterSign}>
                  Hamesha tera,
                  <br />
                  <strong>Ayan</strong>
                </p>
              </motion.div>
            </section>

            {/* Proposal */}
            <section id="proposal" className={style.proposalSection}>
              <motion.h2
                className={style.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                A Special Question ❤️
              </motion.h2>

              <motion.div
                className={style.proposalCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <p className={style.proposalText}>
                  Sara…
                  <br />
                  <br />
                  Har pal, har din, har yaad ne mujhe yeh ehsaas dilaya hai ki
                  tum meri zindagi ka sabse khoobsurat hissa ho. Tumhari
                  muskurahat, tumhari awaaz, tumhara pyaar — sabne mujhe behtar
                  insaan banaya hai.
                  <br />
                  <br />
                  Aaj tumhare janamdin par, ek chhota sa sawaal poochna chahta
                  hoon…
                </p>

                <motion.h3
                  className={style.proposalQuestion}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  ❤️ Will You Be Mine, Sara? ❤️
                </motion.h3>

                <div className={style.proposalButtons}>
                  <button className={style.yesBtn}>YES ❤️</button>
                  <button className={style.noBtn}>NO 😭</button>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

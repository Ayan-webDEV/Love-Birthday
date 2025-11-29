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

import img20 from "../assets/sara-20.jpg";
import img21 from "../assets/sara-21.jpg";
import img22 from "../assets/sara-22.jpg";
import img23 from "../assets/sara-23.jpg";
import img24 from "../assets/sara-24.jpg";
import img25 from "../assets/sara-25.jpg";
import img26 from "../assets/sara-26.jpg";
import img27 from "../assets/sara-27.jpg";

export default function LovePage() {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const [num, setNum] = useState(1); // music number
  const [clickCount, setClickCount] = useState(0);

  const [accepted, setAccepted] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  //   const num = Math.floor(Math.random() * 2) + 1;
  //   console.log(num);

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

    if (musicPlaying) {
      audio.play();
      audio.volume = 0.7;
    } else {
      audio.pause();
    }
  }, [musicPlaying]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setMusicPlaying(true);
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  };

  const handleMusicChange = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;

      // Every 2 clicks → change num
      if (newCount % 2 === 0) {
        setNum((prevNum) => (prevNum === 1 ? 2 : 1));
      }

      return newCount;
    });

    toggleMusic(); // your play/pause logic
  };

  const handleYes = () => {
    setAccepted(true);
    setShowHearts(true);

    // Hide hearts after 10 seconds
    setTimeout(() => {
      setShowHearts(false);
    }, 10000);

    setTimeout(() => {
      document.getElementById("yes-surprise")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 400);
  };

  const gallery = [
    img4,
    img2,
    img6,
    img3,
    img5,
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
    "بڑا ہی خاموش سا______ انداز ہے تمہارا",
    "سمجھ نہیں آتا، فدا ہو جاؤں یا فنا ہو جاؤں",
    "میری یادوں کی تحریر ہو تم",
    "میری راتوں کی تاخیر ہو تم",
    "کیا ہوا اگر ملے نہیں ہم",
    "میرے خوابوں کی تعبیر ہو تم",
  ];

  const letImages = [img21, img20, img25, img22, img23, img27, img26, img24];

  return (
    <>
      <nav className={style.topbar}>
        <div className="container-fluid">
          <div className={style.topbarInner}>
            <div className={style.names}>Ayan ❤️ Sara</div>
            <button className={style.musicBtn} onClick={handleMusicChange}>
              {musicPlaying ? "Pause Music" : "Play Music"}
            </button>
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
              src={num === 1 ? "/music-2.m4a" : "/music-1.m4a"}
              loop
              preload="auto"
              //   muted
            />

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
                    Happy Birthday, Sara ❤️ Aap meri zindagi ka sabse pyara
                    hissa ho. Har pal aapke saath special lagta hai, aur main
                    hamesha aapke saath rahna chahta hoon.
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
                  <div key={idx} className="col-12 col-sm-6 col-lg-3 mb-4 pb-2">
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className={style.galleryCard}
                    >
                      <img
                        src={src}
                        className={style.galleryImg}
                        alt="I Love You Sara --Ayan"
                      />
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
                  <span className="fw-bold d-inline-block me-2">Name :</span>{" "}
                  <span style={{ color: "#F88379", fontWeight: "500" }}>
                    Meri pyari Sara,
                  </span>{" "}
                  <br />
                  <span>
                    <span className="fw-bold d-inline-block me-2">
                      Address :
                    </span>{" "}
                    <span style={{ color: "#F88379", fontWeight: "500" }}>
                      Heart.
                    </span>
                  </span>{" "}
                  <br />
                  <span>
                    <span className="fw-bold d-inline-block me-2">
                      Subject :
                    </span>{" "}
                    <span style={{ color: "#F88379", fontWeight: "500" }}>
                      Love.
                    </span>
                  </span>
                  <span className="d-block my-2 pt-1">
                    <span className="fw-bold d-inline-block me-2">Date :</span>{" "}
                    <span style={{ color: "#F88379", fontWeight: "500" }}>
                      16/11/2025
                    </span>
                  </span>{" "}
                  <span className="d-block my-2 pt-3 fw-semibold">
                    Dear <span style={{ color: "#F88379" }}>Babu</span>,
                  </span>
                  <span>
                    Aaj aap birthday hai, aur main bas itna kehna chahta hoon ki
                    meri zindagi aapke bina adhoori hai. aap meri har khushi ka
                    sabab ho, aur main hamesha aapke saath har pal khushi se
                    jeena chahta hoon.
                  </span>
                </p>
                <div className={style.shayariBox}>
                  {shayari.map((line, i) => (
                    <div
                      key={i}
                      className={`${i === 2 && "mt-5"} ${style.shayariLine}`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
                <p className={`pt-2 ${style.letterSign}`}>
                  Your lovingly,
                  <br />
                  <strong style={{ letterSpacing: "0.3px", color: "#F88379" }}>
                    Ayan
                  </strong>
                </p>
              </motion.div>
            </section>
            {/*  */}
            <div className="row mt-5">
              {letImages.map((img, idx) => (
                <div key={idx} className="col-12 col-sm-6 col-lg-4 mb-4 pb-2 ">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`mx-auto ${style.galleryCard} ${style.letterImgCard}`}
                  >
                    <img
                      src={img}
                      className={`${style.galleryImg} ${style.letterImg}`}
                      alt="I Love You Sara --Ayan"
                    />
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
            {/*  */}

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
                  <span className="fs-4 fw-bold" style={{ color: "#F88379" }}>
                    Kashish…
                  </span>
                  <br />
                  <br />
                  <span style={{ display: "block" }}>
                    Zindagi ke har pal ne, har din ne, aur har yaad ne mujhe yeh
                    mehsoos karaya hai ki aap meri duniya ka sabse khoobsurat
                    rang ho. aapki hasi, aapki baatein, aur aapka pyaar meri
                    rooh ko sukoon deta hai.
                  </span>
                  <br />
                  <br />
                  <span>
                    Aaj aapke birthday par, ek chhota sa sawaal poochna chahta
                    hoon…
                  </span>
                </p>

                <motion.h3
                  className={style.proposalQuestion}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <span className="d-block mb-5 pt-2">
                    ❤️ Will You Be{" "}
                    <span style={{ color: "#F88379" }}>Mine</span>, Sara? ❤️
                  </span>
                </motion.h3>

                <div className={style.proposalButtons}>
                  <button className={style.yesBtn} onClick={handleYes}>
                    YES ❤️
                  </button>
                  <button className={style.noBtn}>NO 😭</button>
                </div>
              </motion.div>
              {accepted && (
                <motion.div
                  id="yes-surprise"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className={style.surpriseBox}
                >
                  <h2 className={style.surpriseHeading}>💖 You Said YES! 💖</h2>
                  <p className={style.surpriseText}>
                    Aaj se aap sirf meri nahi… balki meri zindagi ka sabse
                    khoobsurat hissa ho. Thank you, Sara, for choosing me. I
                    promise to love you forever, Endever, Endever,
                    Endever........... ❤️❤️❤️❤️❤️❤️❤️❤️
                  </p>
                </motion.div>
              )}
              {/* <div className={style.heartsWrapper}>
                {showHearts &&
                  [...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={style.floatingHeart}
                      initial={{
                        opacity: 0,
                        scale: 0.6,
                        x: 0,
                        y: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: Math.random() * 300 - 150,
                        y: Math.random() * 300 - 150,
                      }}
                      transition={{ duration: 1.2 }}
                    >
                      ❤️
                    </motion.div>
                  ))}
              </div> */}
              <div className={style.heartsWrapper}>
                {showHearts &&
                  [...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={style.floatingHeart}
                      style={{
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * 100}vh`,
                      }}
                    >
                      ❤️
                    </div>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

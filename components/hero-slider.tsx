"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/img/hero.jpeg",
    alt: "Online video counselling session with doctor",
    title: "Ulam Seyal Offers Online Counselling for Depression, Relationship Issues and others",
    subtitle: "Connect securely with experienced mental health consultants from the comfort of your home.",
    ctaText: "Know More",
    ctaLink: "/services",
    layout: "image-left", // Slide 1: Image on Left, Text on Right
    bgClass: "hero-bg-white",
  },
  {
    image: "/img/hero-counselling-v2.png",
    alt: "Compassionate in-person counselling session",
    title: "Offline & In-Person Counselling for Anxiety, Depression, Relationship and other issues",
    subtitle: "Confidential and compassionate psychological care designed around your individual needs.",
    ctaText: "Know More",
    ctaLink: "/services",
    layout: "image-right", // Slide 2: Image on Right, Text on Left
    bgClass: "hero-bg-cream",
  },
  {
    image: "/img/hero_2.jpg",
    alt: "Supportive child and family counselling",
    title: "Individual & Family Guidance for Emotional Wellness, Grief, and Stress Management",
    subtitle: "Empowering individuals, children, and families with thoughtful care and professional support.",
    ctaText: "Know More",
    ctaLink: "/services",
    layout: "image-right", // Slide 3: Image on Right, Text on Left
    bgClass: "hero-bg-white",
  },
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds auto-advance

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Continuous auto-slide rotation (resets on manual change)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [currentIndex]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  return (
    <section
      className="hero-slider-section"
      aria-label="Hero Carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* 1. Top Ribbon Banner */}
      <div className="hero-ribbon-banner" role="banner" aria-label="Welcome message">
        <div className="hero-ribbon-content">
          <p className="hero-ribbon-text">
            Everyone Has a Story. Every Story Deserves to Be{" "}
            <em className="hero-ribbon-emphasis">Heard, Understood, and Valued.</em>
          </p>
        </div>
      </div>

      {/* 2. Seamless Blended Carousel Slides */}
      <div className="hero-split-container">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.image}
              className={`hero-blend-slide ${slide.layout} ${slide.bgClass} ${isActive ? "hero-blend-slide-active" : ""}`}
              aria-hidden={!isActive}
            >
              {/* Image layer with soft seamless gradient blend */}
              <div className="hero-blend-image-wrap">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 900px) 100vw, 60vw"
                  className="hero-blend-img"
                />
                <div className={`hero-blend-fade hero-fade-${slide.layout}`} />
              </div>

              {/* Text layer smoothly positioned over the blended canvas */}
              <div className="hero-blend-text-wrap">
                <div className="hero-blend-copy">
                  <h1 className="hero-blend-title">{slide.title}</h1>
                  <p className="hero-blend-desc">{slide.subtitle}</p>
                  <div className="hero-blend-actions">
                    <Link href={slide.ctaLink} className="hero-know-more-btn">
                      {slide.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Bottom Navigation Dots */}
      <div className="hero-dots-container" role="tablist" aria-label="Hero slider navigation">
        <div className="hero-dots-pill">
          {slides.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}`}
                className={`hero-dot ${isActive ? "hero-dot-active" : ""}`}
                onClick={() => goToSlide(idx)}
              >
                <span className="sr-only">Slide {idx + 1}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

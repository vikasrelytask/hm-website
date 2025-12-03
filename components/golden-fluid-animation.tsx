"use client"

/**
 * Ultra-Lightweight Golden Fluid Animation
 * Pure CSS3 with GPU acceleration - loads instantly, zero JavaScript overhead
 */
export function GoldenFluidAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Animated gradient orbs using CSS only */}
      <div className="golden-orb golden-orb-1" />
      <div className="golden-orb golden-orb-2" />
      <div className="golden-orb golden-orb-3" />
      <div className="golden-orb golden-orb-4" />
      <div className="golden-orb golden-orb-5" />
      <div className="golden-orb golden-orb-6" />

      {/* Shimmer overlay */}
      <div className="golden-shimmer" />

      <style jsx>{`
        .golden-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.5;
          mix-blend-mode: screen;
          will-change: transform;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .golden-orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(255, 215, 0, 0.8) 0%,
            rgba(212, 175, 55, 0.5) 40%,
            rgba(184, 134, 11, 0.3) 70%,
            transparent 100%
          );
          top: -10%;
          left: -5%;
          animation: float1 20s infinite;
        }

        .golden-orb-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(
            circle,
            rgba(255, 223, 0, 0.7) 0%,
            rgba(218, 165, 32, 0.45) 40%,
            rgba(212, 175, 55, 0.25) 70%,
            transparent 100%
          );
          top: 15%;
          right: -5%;
          animation: float2 25s infinite;
        }

        .golden-orb-3 {
          width: 320px;
          height: 320px;
          background: radial-gradient(
            circle,
            rgba(255, 215, 0, 0.75) 0%,
            rgba(212, 175, 55, 0.5) 40%,
            rgba(184, 134, 11, 0.28) 70%,
            transparent 100%
          );
          bottom: 10%;
          left: 20%;
          animation: float3 18s infinite;
        }

        .golden-orb-4 {
          width: 450px;
          height: 450px;
          background: radial-gradient(
            circle,
            rgba(218, 165, 32, 0.6) 0%,
            rgba(184, 134, 11, 0.4) 40%,
            rgba(212, 175, 55, 0.22) 70%,
            transparent 100%
          );
          bottom: -10%;
          right: 15%;
          animation: float4 22s infinite;
        }

        .golden-orb-5 {
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(255, 215, 0, 0.65) 0%,
            rgba(218, 165, 32, 0.42) 40%,
            rgba(184, 134, 11, 0.24) 70%,
            transparent 100%
          );
          top: 45%;
          left: 35%;
          animation: float5 28s infinite;
        }

        .golden-orb-6 {
          width: 280px;
          height: 280px;
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.7) 0%,
            rgba(184, 134, 11, 0.38) 40%,
            rgba(218, 165, 32, 0.2) 70%,
            transparent 100%
          );
          top: 55%;
          right: 30%;
          animation: float6 24s infinite;
        }

        .golden-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 215, 0, 0.05) 50%,
            transparent 70%
          );
          animation: shimmer 10s ease-in-out infinite;
        }

        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(60px, 90px) scale(1.12);
          }
          66% {
            transform: translate(-40px, 50px) scale(0.88);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-70px, 60px) scale(1.18);
          }
          66% {
            transform: translate(50px, -70px) scale(0.82);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(80px, -60px) scale(1.25);
          }
        }

        @keyframes float4 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-90px, 70px) scale(0.85);
          }
        }

        @keyframes float5 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(50px, -50px) rotate(120deg) scale(1.15);
          }
          66% {
            transform: translate(-50px, 50px) rotate(240deg) scale(0.92);
          }
        }

        @keyframes float6 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(60px, 60px) rotate(180deg) scale(1.08);
          }
        }

        @keyframes shimmer {
          0%,
          100% {
            opacity: 0.4;
            transform: translateX(-100%) rotate(0deg);
          }
          50% {
            opacity: 0.7;
            transform: translateX(100%) rotate(5deg);
          }
        }

        /* Mobile optimizations - fewer orbs, less blur */
        @media (max-width: 768px) {
          .golden-orb {
            filter: blur(35px);
          }
          .golden-orb-1,
          .golden-orb-2,
          .golden-orb-3,
          .golden-orb-4 {
            width: 220px;
            height: 220px;
          }
          .golden-orb-5,
          .golden-orb-6 {
            display: none;
          }
        }

        /* Respect motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .golden-orb,
          .golden-shimmer {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

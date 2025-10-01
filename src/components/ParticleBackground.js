import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "#111827",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#14b8a6" },
          links: {
            enable: true,
            color: "#14b8a6",
            distance: 150,
            opacity: 0.5,
          },
          collisions: { enable: true },
          move: { enable: true, speed: 1 },
          number: { value: 30, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
}

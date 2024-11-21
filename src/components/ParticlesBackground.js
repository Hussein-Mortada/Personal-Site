import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Smaller bundle with essential features

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the "slim" bundle for performance
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle configuration
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "linear-gradient(135deg, #000428, #004e92)",
        },
      },
      fpsLimit: 120,
      interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 3,
            },
            push: {
              quantity: 50,
              duration: 2,
            },
          },
        },
      particles: {
        number: {
          value: 750,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#caf0f8",
        },
        opacity: {
          value: 0.8,
          random: true,
        },
        size: {
          value: { min: 0.1, max: 1 },
          random: true,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        
        links: {
          enable: false,
        },
        shape:{
          type: "star",
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Render the particle canvas
  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default ParticlesBackground;

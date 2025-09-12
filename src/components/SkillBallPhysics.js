import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  FaReact, FaJava, FaPython, FaHtml5, FaCss3Alt, FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss, SiSpringboot, SiPostgresql,
} from "react-icons/si";

const icons = [
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  FaGithub,
];

export default function SkillBallPhysics() {
  const sceneRef = useRef(null);
  const [bodies, setBodies] = useState([]);
  const engine = useRef(Matter.Engine.create());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events } = Matter;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create walls
    const ground = Bodies.rectangle(width / 2, height + 40, width, 80, {
      isStatic: true,
    });
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height, {
      isStatic: true,
    });
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height, {
      isStatic: true,
    });

    World.add(engine.current.world, [ground, leftWall, rightWall]);

    // Create balls
    const ballBodies = icons.map((_, i) =>
      Bodies.circle(100 + i * 80, -100 - i * 50, 30, {
        restitution: 0.9,
        friction: 0.1,
        label: `skill-${i}`,
      })
    );

    World.add(engine.current.world, ballBodies);
    setBodies(ballBodies);

    // Add mouse control
    const mouse = Mouse.create(document.body);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    World.add(engine.current.world, mouseConstraint);

    // Run engine (no render)
    Engine.run(engine.current);

    // Sync DOM with physics
    const updatePositions = () => {
      if (!sceneRef.current) return;

      ballBodies.forEach((body, i) => {
        const el = sceneRef.current.querySelector(`#icon-${i}`);
        if (el) {
          el.style.transform = `translate(${body.position.x}px, ${body.position.y}px) rotate(${body.angle}rad)`;
        }
      });

      requestAnimationFrame(updatePositions);
    };

    setIsMounted(true);
    requestAnimationFrame(updatePositions);

    // Cleanup
    return () => {
      Matter.World.clear(engine.current.world);
      Matter.Engine.clear(engine.current);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="fixed inset-0 z-10 pointer-events-auto overflow-hidden"
    >
      {isMounted &&
        bodies.map((body, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              id={`icon-${i}`}
              className="absolute text-white text-2xl"
              style={{
                width: "40px",
                height: "40px",
                transform: `translate(${body.position.x}px, ${body.position.y}px)`,
              }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full shadow-md"
                style={{
                  backgroundColor: "#0d9488", // teal
                }}
              >
                <Icon />
              </div>
            </div>
          );
        })}
    </div>
  );
}

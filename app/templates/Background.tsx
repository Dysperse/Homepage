"use client";
import React, { useEffect, useRef } from "react";
import { mintDark } from "../themes";

export const Background = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const context = canvas.getContext("2d");
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;

    canvas.width = windowInnerWidth;
    canvas.height = windowInnerHeight;

    class Particle {
      x: number;
      y: number;
      yspeed: number;

      constructor() {
        this.x = Math.random() * windowInnerWidth;
        this.y = Math.random() * windowInnerHeight * -1;
        this.yspeed = Math.random() * (5 - 3) + 1;
      }

      update() {
        this.y += this.yspeed;
        if (this.y > windowInnerHeight) {
          this.y = -10;
          this.x = Math.random() * windowInnerWidth;
          this.yspeed = Math.random() * (10 - 3) + 1;
        }
      }

      draw(context: any) {
        context.fillStyle = "#fff";
        context.fillRect(this.x, this.y, 2, 40);
      }
    }

    for (let i = 0; i < 100; i++) {
      // @ts-expect-error ignore
      particles.current.push(new Particle());
    }

    const draw = () => {
      context.fillStyle = "#1e1e1e";
      context.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle: any) => {
        particle.update();
        particle.draw(context);
      });

      requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.2,
      }}
    ></canvas>
  );
};

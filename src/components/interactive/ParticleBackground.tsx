'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 75;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    canvas: HTMLCanvasElement; // Add canvas property
    ctx: CanvasRenderingContext2D; // Add ctx property

    constructor(
        x: number,
        y: number,
        size: number,
        speedX: number,
        speedY: number,
        color: string,
        canvas: HTMLCanvasElement, // Accept canvas in constructor
        ctx: CanvasRenderingContext2D // Accept ctx in constructor
    ) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.canvas = canvas; // Assign to property
        this.ctx = ctx;       // Assign to property
    }

    update() {
        // Use this.canvas directly
        if (this.x > this.canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > this.canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        // Use this.ctx directly
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
}

        const init = () => {
    particles = [];
    const particleColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
    for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 1.5 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() * 0.4 - 0.2);
        const speedY = (Math.random() * 0.4 - 0.2);
        // Pass canvas and ctx here
        particles.push(new Particle(x, y, size, speedX, speedY, particleColor, canvas, ctx));
    }
};

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        init();
        animate();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Rerun effect when theme changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
};

export default ParticleBackground;

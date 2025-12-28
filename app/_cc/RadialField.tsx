"use client";

import { useEffect, useState } from "react";

type Radial = {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    duration: number;
    isYellow: boolean;
};

const yellowPalette = [
    "hsla(48, 98%, 72%, 0.7)",
    "hsla(52, 100%, 68%, 0.65)",
    "hsla(44, 96%, 76%, 0.6)",
];

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

const randomRadial = (isYellow: boolean): Radial => {
    const hue = Math.floor(randomBetween(0, 360));
    const color = isYellow
        ? yellowPalette[Math.floor(randomBetween(0, yellowPalette.length))]
        : `hsla(${hue}, 85%, 60%, 0.65)`;

    return {
        id: Date.now() + Math.random(),
        x: randomBetween(5, 95),
        y: randomBetween(5, 95),
        size: randomBetween(220, 520),
        color,
        duration: randomBetween(3, 7),
        isYellow,
    };
};

export default function RadialField() {
    const [radials, setRadials] = useState<Radial[]>([]);

    useEffect(() => {
        setRadials(() => {
            const seeded: Radial[] = [];
            for (let i = 0; i < 3; i += 1) {
                seeded.push(randomRadial(true));
            }
            for (let i = 0; i < 4; i += 1) {
                seeded.push(randomRadial(false));
            }
            return seeded;
        });
    }, []);

    useEffect(() => {
        if (radials.length === 0) {
            return;
        }

        const timeouts = radials.map((radial, index) =>
            window.setTimeout(() => {
                setRadials((prev) =>
                    prev.map((item, idx) => (idx === index ? randomRadial(item.isYellow) : item)),
                );
            }, radial.duration * 1000),
        );

        return () => {
            timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
        };
    }, [radials]);

    return (
        <div className="radial-stage" aria-hidden="true">
            {radials.map((radial) => (
                <div
                    key={radial.id}
                    className="radial-bloom"
                    style={{
                        left: `${radial.x}%`,
                        top: `${radial.y}%`,
                        width: `${radial.size}px`,
                        height: `${radial.size}px`,
                        background: `radial-gradient(circle, ${radial.color} 0%, rgba(255, 255, 255, 0) 70%)`,
                        animationDuration: `${radial.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}

import Particles from "react-tsparticles";
import type { IOptions } from "tsparticles-engine";

const particleOptions = {
    background: { color: { value: "transparent" } },
    particles: {
        number: { value: 50 },
        links: { enable: true, distance: 150 },
        move: { enable: true, speed: 1 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        size: { value: 3 },
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse", parallax: { enable: false, force: 0, smooth: 0 } },
            onClick: { enable: true, mode: "push" },
            onDiv: { enable: false, mode: [] },
            resize: true,
        },
        modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
        },
    },
    detectRetina: true,
} as unknown as IOptions; // 👈 cast pour satisfaire TypeScript

export default function ParticleBackground() {
    return <Particles className="absolute inset-0" options={particleOptions} />;
}

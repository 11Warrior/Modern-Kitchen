"use client"

import Lenis, { } from '@studio-freight/lenis'
import React, { useEffect } from 'react'


const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            lerp: 0.08

        })

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        lenis.on('scroll', ({ scroll }: { scroll: number }) => {
            document.querySelectorAll<HTMLElement>('.parallax').forEach(el => {
                const speed = Number(el.dataset.speed);
                return el.style.transform = `translateY(${speed} * ${scroll})px`;
            })
        })

        return () => {
            lenis.destroy();
        }
    }, [])

    return (<>
        {children}
    </>
    )
}

export default SmoothScroll
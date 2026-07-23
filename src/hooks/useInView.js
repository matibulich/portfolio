import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
    const ref = useRef(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    if (!options.repeat) {
                        observer.unobserve(element)
                    }
                } else if (options.repeat) {
                    setIsInView(false)
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px',
            }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [options.threshold, options.rootMargin, options.repeat])

    return [ref, isInView]
}

export function useParallax(speed = 0.5) {
    const ref = useRef(null)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect()
                const scrolled = window.scrollY
                setOffset((rect.top + scrolled) * speed)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed])

    return [ref, offset]
}

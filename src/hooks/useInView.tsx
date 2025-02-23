import { useEffect, useState, useRef, CSSProperties } from "react"

interface UseInViewOptions {
	threshold?: number | number[]
	rootMargin?: string
	triggerOnce?: boolean
}

export const useInView = (options: UseInViewOptions = { threshold: 0.5 }) => {
	const [inView, setInView] = useState<CSSProperties>({
		transform: "translateY(50px)",
		opacity: "0",
		transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
	})
	const elementRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView((v) => ({
							...v,
							transform: "translateY(0px)",
							opacity: "1",
						}))
						if (options.triggerOnce) {
							observer.unobserve(entry.target)
						}
					} else {
						if (!options.triggerOnce) {
							setInView({
								transform: "translateY(50px)",
								opacity: "0.5",
								transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
							})
						}
					}
				})
			},
			{
				root: null, // 기본적으로 viewport
				rootMargin: options.rootMargin || "0px",
				threshold: options.threshold || 0.5,
			}
		)

		if (elementRef.current) {
			observer.observe(elementRef.current)
		}

		return () => {
			if (elementRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(elementRef.current)
			}
		}
	}, [options])

	return {
		ref: elementRef,
		inView,
	}
}

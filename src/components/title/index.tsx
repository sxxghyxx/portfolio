import { useInView } from "@/hooks/useInView"
import styles from "./title.css"
interface ITitle {
	hasUnderLine?: boolean
	color?: "primary" | "white"
	label: string
}

export const Title = ({
	label,
	hasUnderLine = true,
	color = "primary",
}: ITitle) => {
	const { ref: ref1, inView: inView1 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	return (
		<h2
			style={inView1}
			ref={ref1}
			className={styles.titleCSS({ hasUnderLine, color })}
		>
			{label}
		</h2>
	)
}

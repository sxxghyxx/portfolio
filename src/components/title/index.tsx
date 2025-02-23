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
	return <h2 className={styles.titleCSS({ hasUnderLine, color })}>{label}</h2>
}

import styles from "./section-layout.css"
interface ISectionLayout {
	children: React.ReactNode
	className?: string
	backGround?: "white" | "primary" | "lightPrimary"
	id?: string
}

export const SectionLayout = ({
	children,
	className,
	backGround,
	id,
}: ISectionLayout) => {
	return (
		<section
			id={id}
			className={`${className} ${styles.sectionWrapper({ backGround })}`}
		>
			<div className={`${styles.sectionContainer}`}>{children}</div>
		</section>
	)
}

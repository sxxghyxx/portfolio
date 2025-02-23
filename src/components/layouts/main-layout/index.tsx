import { Footer } from "@/components/footer"
import React from "react"
import styles from "./main-layout.css"
import { themeClass } from "@styles/theme.css"
interface IMainLayout {
	children: React.ReactNode
}

export const MainLayout = ({ children }: IMainLayout) => {
	return (
		<main className={`${styles.mainLayoutWrapper} ${themeClass}`}>
			<div className={styles.mainContainer}>{children}</div>
			<Footer />
		</main>
	)
}

import { SectionLayout } from "@/components/layouts"
import styles from "./intro.css"
import { useEffect, useState } from "react"
import { useInView } from "@/hooks/useInView"

export const IntroSection = () => {
	return (
		<SectionLayout className={styles.introSectionWrapper}>
			<IntroHeader />
			<IntroContent />
		</SectionLayout>
	)
}

const LINK_LIST = ["about", "skills", "resume", "project"]
const ContactDetail: IContactDetails[] = [
	{ label: "contact", value: "sxxghyxx@gmail.com" },
	{ label: "github", value: "https://github.com/suxghyxn" },
]
interface IContactDetails {
	label: string
	value: string
}

const IntroHeader = () => {
	const { ref: ref1, inView: inView1 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	const ContactDetails = ({ label, value }: IContactDetails) => {
		return (
			<div
				className={styles.contactDetailItemWrapper}
				ref={ref1}
				style={inView1}
			>
				<p className={styles.contactDetailItemLabel}>{label}</p>
				<p className={styles.contactDetailItemValue}>{value}</p>
			</div>
		)
	}

	const scrollToSection = (sectionId: string) => {
		const sectionElement = document.getElementById(sectionId)
		if (sectionElement) {
			window.scrollTo({
				top: sectionElement.offsetTop,
				behavior: "smooth",
			})
		}
	}

	const { ref: ref2, inView: inView2 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	return (
		<div className={styles.introHeadWrapper} style={inView2} ref={ref2}>
			<div className={styles.contactDetailWrapper}>
				{ContactDetail.map((v) => (
					<ContactDetails {...v} key={v.label} />
				))}
			</div>

			<div className={styles.navigationWrapper}>
				{LINK_LIST.map((v) => (
					<div
						className={styles.navigationItem}
						key={v}
						onClick={() => scrollToSection(v)}
					>
						{v}
					</div>
				))}
			</div>
		</div>
	)
}

const IntroContent = () => {
	const [isInteractive, setIsInteractive] = useState<boolean>(true)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsInteractive(false)
		}, 5000)

		return () => clearTimeout(timeoutId)
	}, [])

	return (
		<div className={`${styles.introContentWrapper}`}>
			<div className={styles.infoContainer}>
				<svg
					className={`${styles.svgWrapper} ${
						isInteractive && styles.svgInteractive
					}`}
				>
					<text
						style={{
							transform: "translate(50%, 50%)",
						}}
						textAnchor="middle"
						className={`${styles.flickerText}`}
					>
						{`Front - end.developer`}
					</text>
				</svg>
				<div>
					<p className={styles.infoText}>
						효율적이고 확장 가능한 코드를 작성하며, 항상 새로운 접근 방식을
						시도하고
					</p>
					<p className={styles.infoText}>
						빠르게 적용하려는 포기하지 않고 책임감 있게 일하는
						<b style={{ fontWeight: 600 }}>개발자 최성현</b>입니다.
					</p>
				</div>
			</div>
			<div>스크롤하여 진행해주세요</div>
		</div>
	)
}

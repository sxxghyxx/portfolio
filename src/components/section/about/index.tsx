import { SectionLayout } from "@/components/layouts"
import { Title } from "@/components/title"
import styles from "./about.css"
import { commonPaddingWrapper } from "@/styles/theme.css"
import { useInView } from "@/hooks/useInView"

export const AboutSection = () => {
	const { ref: ref1, inView: inView1 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	const { ref: ref2, inView: inView2 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	const { ref: ref3, inView: inView3 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})

	return (
		<SectionLayout id="about" className={commonPaddingWrapper}>
			<Title label="about" color="primary" hasUnderLine />
			<h3 className={styles.aboutTitle} ref={ref1} style={inView1}>
				Code with efficiency, grow with flexibility
			</h3>
			<div className={styles.aboutText} ref={ref2} style={inView2}>
				저는 코드를 작성할 때 <b className={styles.boldText}>효율성과 확장성</b>
				을 최우선으로 고려합니다. 단순히 동작하는 코드에 그치지 않고,
				유지보수성과 확장성을 염두에 두며 개발하는 것이 더 나은 소프트웨어를
				만드는 핵심이라고 확신합니다. 하지만 가장 효율적인 방법만을 고집하지
				않습니다. 개발 과정에서 다양한 선택지가 존재하며, 때로는 무엇이 최선인지
				명확하지 않은 경우도 있습니다. 그럴 때마다 저는
				<b className={styles.boldText}>코딩에 절대적인 정답은 없다</b>는 점을
				분명히 인식하고 있습니다. 효율적이지 않거나 일반적인 관행과 다를 수 있는
				방식이라도, 새로운 접근 방식을 직접 시도하는 것이 중요합니다. 그
				과정에서 얻는 인사이트는 코드 개선을 넘어서,
				<b className={styles.boldText}>개발자로서의 성장</b>에도 커다란 가치를
				더합니다. 저는 시행착오를 두려워하지 않으며, 이를 통해 더 나은 해결책을
				찾는 <b className={styles.boldText}>유연한 사고방식</b>을 고수합니다.
				또한, 문제를 해결하는 과정에서{" "}
				<b className={styles.boldText}>리서치와 학습</b>을 끊임없이 병행하며, 더
				나은 방법을 빠르게 적용하는 태도를 노력합니다.
			</div>
			<div className={styles.contactWrapper} ref={ref3} style={inView3}>
				<a href="https://github.com/sxxghyxx" className={styles.iconWrapper}>
					<img src="/github-logo.png" />
					<span className={styles.boldText}>@sxxghyxx</span>
				</a>
				<a href="mailto:sxxghyxx@gmail.com" className={styles.iconWrapper}>
					<img src="/email.png" />
					<span className={styles.boldText}>sxxghyxx@gmail.com</span>
				</a>
			</div>
		</SectionLayout>
	)
}

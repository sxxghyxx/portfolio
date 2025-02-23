import { GridItemBox } from "@/components/gridItem"
import { SectionLayout } from "@/components/layouts"
import { Title } from "@/components/title"
import { commonPaddingWrapper } from "@/styles/theme.css"
import styles from "./resume.css"
export const ResumeSection = () => {
	return (
		<SectionLayout
			id="resume"
			backGround="primary"
			className={commonPaddingWrapper}
		>
			<Title label="resume" color="white" hasUnderLine />
			<div className={styles.gridItemWrapper}>
				{/*  */}
				<GridItemBox
					keyLabel="엑스포럼"
					backGround="primary"
					data={{
						first: {
							date: { startDate: "2023.11", endDate: null },
						},
						second: {
							itemType: "text",
							items: {
								position: "DX팀 프론트엔드 개발자",
								industry: "Information Technology",
							},
						},
						third: {
							items: [
								"기존 프로젝트 유지보수 및 기능 개선: 기존 프론트엔드 프로젝트의 유지보수를 맡아 버그 수정, 성능 최적화 및 새로운 기능을 추가하며 웹 애플리케이션의 안정성과 성능을 개선했습니다. 또한, Next.js를 활용해 서버 사이드 렌더링과 클라이언트 사이드 렌더링을 최적화하여 데이터 렌더링 속도를 개선했습니다.",
								"Jenkins 기반 CI/CD 구축: Jenkins를 활용하여 CI/CD 파이프라인을 구축하고, 코드의 자동화된 빌드, 테스트, 배포 프로세스를 설정하여 개발 효율성을 극대화했습니다. 이를 통해 코드 변경 사항이 신속하게 반영되고, 품질 높은 배포를 보장할 수 있도록 했습니다.",
								"글로벌 프로젝트 개발: 글로벌 사용자 기반을 고려한 웹 애플리케이션 및 시스템을 개발하여, 해외 시장에 맞는 결제 시스템, 반응형 디자인 등을 구현하였습니다. 이를 통해 다양한 사용자에게 최적화된 사용자 경험을 제공하고, 글로벌 비즈니스 확장에 기여했습니다.",
								"신규 비즈니스 로직 구현: 신규 비즈니스 요구 사항에 맞춰 서버와 클라이언트 간 데이터 통신 및 로직을 구현하였으며, REST API와의 연동을 통해 명확하고 효율적인 데이터 흐름을 설계했습니다.",
							],
						},
					}}
				/>

				<GridItemBox
					keyLabel="막시마"
					backGround="primary"
					data={{
						first: {
							date: { startDate: "2023.08", endDate: "2023.10" },
						},
						second: {
							itemType: "text",
							items: {
								position: "개발팀 프론트엔드 개발자",
								industry: "Information Technology",
							},
						},
						third: {
							items: ["신규 비즈니스 로직 구현"],
						},
					}}
				/>

				<GridItemBox
					keyLabel="바나나코퍼레이션"
					backGround="primary"
					data={{
						first: {
							date: { startDate: "2022.06", endDate: "2023.08" },
						},
						second: {
							itemType: "text",
							items: {
								position: "개발팀 프론트엔드 개발자",
								industry: "Information Technology",
							},
						},
						third: {
							items: ["기존 사이트 리뉴얼", "신규 비즈니스 로직 구현"],
						},
					}}
				/>
			</div>
		</SectionLayout>
	)
}

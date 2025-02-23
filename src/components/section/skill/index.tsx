import { SectionLayout } from "@/components/layouts"
import { Title } from "@/components/title"
import styles from "./skills.css"
import { commonPaddingWrapper } from "@/styles/theme.css"
import { useInView } from "@/hooks/useInView"

const skills: ISkillBoxProps["item"][] = [
	{ language: ["TypeScript", "JavaScript", "Golang", "Python"] },
	{
		"frameworks & libraries": [
			"React.js",
			"Next.js",
			"React Native",
			"Flutter",
		],
	},
	{ database: ["MySQL", "MariaDB", "Firebase"] },
	{ tool: ["Figma", "Git", "JIRA"] },
]

export const SkillSection = () => {
	return (
		<SectionLayout
			id="skills"
			backGround="lightPrimary"
			className={commonPaddingWrapper}
		>
			<Title label="skills" color="primary" hasUnderLine={false} />
			<div className={styles.skillBox}>
				{skills.map((item, index) => (
					<SkillBox key={index} item={item} />
				))}
			</div>
		</SectionLayout>
	)
}

interface ISkillBoxProps {
	item: Record<string, string[]>
}

const SkillBox = ({ item }: ISkillBoxProps) => {
	const { ref: ref1, inView: inView1 } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	return (
		<div className={styles.skillBoxWrapper} style={inView1} ref={ref1}>
			{Object.keys(item).map((key) => (
				<div key={key} className={styles.skillBoxContainer}>
					<h3 className={styles.skillTitle}>{key}</h3>
					<div className={styles.skillContentBox}>
						{item[key].map((skill, index) => (
							<div key={index} className={styles.skillContent}>
								{skill}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

import { MainLayout } from "@components/layouts"
import {
	AboutSection,
	IntroSection,
	ProjectSection,
	ResumeSection,
	SkillSection,
} from "./components/section"
function App() {
	return (
		<MainLayout>
			<IntroSection />
			<AboutSection />
			<SkillSection />
			<ResumeSection />
			<ProjectSection />
		</MainLayout>
	)
}

export default App

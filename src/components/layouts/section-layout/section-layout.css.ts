import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { mobile, vars } from "@styles/theme.css"
const sectionWrapper = recipe({
	base: {
		width: "100%",
		paddingLeft: "1rem",
		paddingRight: "1rem",
	},
	variants: {
		backGround: {
			white: { background: vars.background.white },
			primary: { background: vars.background.primary },
			lightPrimary: { background: vars.background.primaryLight },
		},
	},
	defaultVariants: {
		backGround: "white",
	},
})
const sectionContainer = style({
	width: "100%",
	maxWidth: 1200,
	display: "flex",
	flexDirection: "column",
	flex: 1,
	margin: "0 auto",
	"@media": {
		[mobile]: {
			padding: 0,
		},
	},
})

export default { sectionContainer, sectionWrapper }

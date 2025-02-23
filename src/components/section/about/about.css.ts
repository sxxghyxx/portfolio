import { mobile, vars } from "@/styles/theme.css"
import { style } from "@vanilla-extract/css"

const aboutTitle = style({
	fontSize: vars.fontSizes.xxLarge,
	fontWeight: 500,
	lineHeight: "150%",
	color: vars.text.accent,
	"@media": {
		[mobile]: {
			fontSize: vars.fontSizes.xLarge,
		},
	},
})
const aboutText = style({
	fontSize: vars.fontSizes.medium,
	fontWeight: 500,
	lineHeight: "160%",
	color: vars.text.secondary,
	marginTop: "0.5rem",
	"@media": {
		[mobile]: {
			fontSize: vars.fontSizes.small,
		},
	},
})
const boldText = style({
	fontWeight: 800,
})

const contactWrapper = style({
	marginTop: "3rem",
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
})

const iconWrapper = style({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
})
export default { iconWrapper, contactWrapper, boldText, aboutText, aboutTitle }

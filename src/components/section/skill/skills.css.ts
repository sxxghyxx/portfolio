import { mobile, vars } from "@/styles/theme.css"
import { style } from "@vanilla-extract/css"

const skillBox = style({
	gap: "1.5rem",
	display: "flex",
	flexDirection: "column",
})

const skillBoxWrapper = style({
	width: "100%",
	display: "flex",
	flex: "0 0 auto",
	padding: "1.5rem",
	background: vars.background.white,
})
const skillBoxContainer = style({
	display: "flex",
	flex: "0 0 auto",
	flexDirection: "column",
	gap: "1.5rem",
	"@media": {
		[mobile]: {
			gap: "0.8rem",
		},
	},
})
const skillTitle = style({
	lineHeight: "120%",
	textTransform: "uppercase",
	fontSize: vars.fontSizes.medium,
	fontWeight: "500",
	color: vars.text.accent,
	"@media": {
		[mobile]: {
			fontSize: vars.fontSizes.small,
		},
	},
})

const skillContentBox = style({
	display: "flex",

	"@media": {
		[mobile]: {
			flexDirection: "column",
		},
	},
})
const skillContent = style({
	lineHeight: "120%",
	textTransform: "uppercase",
	fontSize: vars.fontSizes.large,
	fontWeight: "500",
	color: vars.text.accent,
	selectors: {
		"&:not(:last-child)::after": {
			content: "•",
			fontSize: "1.5rem",
			color: vars.fontSizes.large,
			margin: "0 0.5rem",
		},
	},
	"@media": {
		[mobile]: {
			fontSize: vars.fontSizes.medium,

			selectors: {
				"&:not(:last-child)::after": {
					content: "none",
					margin: 0,
				},
				"&::before": {
					content: "•",
					fontSize: "1.5rem",
					color: vars.fontSizes.large,
					margin: "0 0.5rem",
				},
			},
		},
	},
})
export default {
	skillBox,
	skillContentBox,
	skillBoxWrapper,
	skillBoxContainer,
	skillTitle,
	skillContent,
}

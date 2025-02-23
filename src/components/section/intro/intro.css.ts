import { breakpoints, vars } from "@/styles/theme.css"
import { keyframes, style } from "@vanilla-extract/css"
const mobileQuery = breakpoints.mobile

const introSectionWrapper = style({
	display: "flex",
	flexDirection: "column",
	height: "100vh",
	padding: "2.5rem 1rem",
})

const introHeadWrapper = style({
	display: "flex",
	width: "100%",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "1rem",
	"@media": {
		[mobileQuery]: {
			display: "none",
		},
	},
})

const contactDetailWrapper = style({
	display: "flex",
	gap: "2rem",
})

const contactDetailItemWrapper = style({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
})

const contactDetailItemLabel = style({
	fontSize: vars.fontSizes.small,
	fontWeight: 600,
	lineHeight: "150%",
	textTransform: "capitalize",
	color: vars.text.primary,
})
const contactDetailItemValue = style({
	fontSize: vars.fontSizes.small,
	fontWeight: 500,
	lineHeight: "150%",
	color: vars.text.primary,
})

//
const navigationWrapper = style({
	display: "flex",
	gap: "3rem",
})
const navigationItem = style({
	fontSize: vars.fontSizes.small,
	fontWeight: 400,
	lineHeight: "150%",
	textTransform: "uppercase",
	cursor: "pointer",
	color: vars.text.primary,
})

//
const introContentWrapper = style({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	flex: 1,
	paddingTop: "15rem",
	alignItems: "center",
	"@media": {
		[mobileQuery]: {
			paddingTop: "0rem",
		},
	},
})

const svgWrapper = style({
	width: "100%",
	height: "fit-content",
	transform: "scale(1)",
	transition: "transform 1s ease-in-out",
})
const svgInteractive = style({
	transform: "scale(1.3)",
	"@media": {
		[mobileQuery]: {
			transform: "scale(1)",
		},
	},
})
const strokeAnimation = keyframes({
	"0%": {
		fill: "rgba(72,138,204,0)",
		stroke: "rgba(1,85,207,1)",
		strokeDashoffset: 25,
		strokeDasharray: " 0 50%",
		strokeWidth: 2,
	},
	"70% ": { fill: "rgba(72,138,204,0)", stroke: "rgba(1,85,207,1)" },
	"80% ": {
		fill: "rgba(72,138,204,0)",
		stroke: "rgba(1,85,207,1)",
		strokeWidth: 1,
	},
	"100%": {
		fill: vars.text.accent,
		stroke: vars.text.accent,
		strokeDashoffset: " -25%",
		strokeDasharray: " 50% 0",
		strokeWidth: 0,
	},
})

// 텍스트 스타일 정의
const flickerText = style({
	fontFamily: "DotGothic16",
	fontSize: vars.fontSizes.huge,
	stroke: vars.text.accent,
	color: vars.text.accent,
	fontWeight: 400,
	fill: vars.text.accent,
	letterSpacing: "0.1rem",
	textTransform: "uppercase",
	strokeWidth: 0,
	// transition: "scale 0.5s ease-in-out",
	transition: "transform 1s ease-in-out",
	animation: `${strokeAnimation} 5s   `,
	"@media": {
		[mobileQuery]: {
			fontSize: vars.fontSizes.xLarge,
			whiteSpace: "pre-line",
		},
	},
})

const infoText = style({
	color: vars.text.accent,
	fontSize: vars.fontSizes.large,
	fontWeight: 400,
	lineHeight: "150%",
})
const infoContainer = style({
	width: "100%",
	// overflow: "hidden",
	textAlign: "center",
})

export default {
	svgWrapper,
	svgInteractive,
	infoText,
	infoContainer,
	introContentWrapper,
	introSectionWrapper,
	introHeadWrapper,
	contactDetailWrapper,
	contactDetailItemWrapper,
	contactDetailItemLabel,
	contactDetailItemValue,
	navigationWrapper,
	navigationItem,
	flickerText,
}

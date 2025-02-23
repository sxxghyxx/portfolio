import { mobile, vars } from "@/styles/theme.css"
import { recipe } from "@vanilla-extract/recipes"

const titleCSS = recipe({
	base: {
		fontSize: vars.fontSizes.huge,
		fontWeight: 600,
		lineHeight: "150%",
		letterSpacing: "-0.0625rem",
		paddingBottom: "1.75rem",
		width: "100%",
		marginBottom: "2rem",
		textTransform: "uppercase",
		"@media": {
			[mobile]: {
				paddingBottom: "1rem",
				fontSize: vars.fontSizes.xxLarge,
			},
		},
	},
	variants: {
		color: {
			white: {},
			primary: {},
		},
		hasUnderLine: {
			true: {},
		},
	},
	compoundVariants: [
		{
			variants: { color: "white", hasUnderLine: true },
			style: {
				borderBottom: "1px solid",
				borderColor: vars.text.white,
				color: vars.text.white,
				"@media": {
					[mobile]: {
						marginBottom: "1rem",
					},
				},
			},
		},
		{
			variants: { color: "primary", hasUnderLine: true },
			style: {
				borderBottom: "1px solid",
				borderColor: vars.text.accent,
				color: vars.text.accent,
				"@media": {
					[mobile]: {
						marginBottom: "1rem",
					},
				},
			},
		},
		{
			variants: { color: "primary", hasUnderLine: false },
			style: {
				color: vars.text.accent,
				"@media": {
					[mobile]: {
						marginBottom: 0,
					},
				},
			},
		},
		{
			variants: { color: "white", hasUnderLine: false },
			style: {
				color: vars.text.accent,
				"@media": {
					[mobile]: {
						marginBottom: 0,
					},
				},
			},
		},
	],
})
export default { titleCSS }

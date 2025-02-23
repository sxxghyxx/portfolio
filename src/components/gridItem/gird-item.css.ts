import { mobile, vars } from "@/styles/theme.css"
import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
const gridItemBox = recipe({
	variants: {
		backGround: {
			white: {
				color: vars.text.primary,
				borderColor: vars.text.primary,
			},
			primary: {
				color: vars.text.white,
				borderColor: vars.text.white,
			},
		},
	},
})
const gridWrapper = style({
	display: "grid",
	gridTemplateColumns: "repeat(2,1fr)",
	gap: "2rem",
	"@media": {
		[mobile]: {
			display: "flex",
			flexDirection: "column",
			gap: "1rem",
		},
	},
})

const gridTitleLabel = style({
	fontSize: vars.fontSizes.xLarge,
	fontWeight: "bold",
	marginBottom: "1.5rem",
	"@media": {
		[mobile]: {
			fontSize: vars.fontSizes.large,
			marginBottom: "0.5rem",
		},
	},
})

const firstText = style({
	fontWeight: "bold",
	fontSize: vars.fontSizes.large,
})

const secondItemWrapper = style({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",

	"@media": {
		[mobile]: {
			gap: "0.5rem",
		},
	},
})
const secondItemKey = style({
	textTransform: "capitalize",
	fontSize: vars.fontSizes.medium,
	"@media": {
		[mobile]: {
			fontSize: vars.fontSizes.small,
		},
	},
})

const secondItemValue = style({
	fontSize: vars.fontSizes.medium,
	"@media": {
		[mobile]: {
			fontSize: vars.fontSizes.small,
		},
	},
})

const secondItemValueBox = style({
	fontSize: vars.fontSizes.small,
	borderRadius: "0.2rem",
	padding: "0.4rem",
	background: vars.background.primary,
	color: vars.text.white,
	width: "fit-content",
	"@media": {
		[mobile]: {
			fontSize: vars.fontSizes.small,
		},
	},
})
const secondItemContainer = recipe({
	base: {
		display: "flex",
		width: "100%",
		justifyContent: "flex-start",
		gap: "1.5rem",
		"@media": {
			[mobile]: {
				justifyContent: "flex-start",
				gap: "1rem",
			},
		},
	},
	variants: {
		itemType: {
			label: {
				flexDirection: "column",
			},
			text: {
				flexDirection: "row",
			},
		},
	},
})

const threeWrapper = style({
	listStyle: "inside",
	fontSize: vars.fontSizes.medium,
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
	marginTop: "1.2rem",
	borderTop: `1px solid`,

	"@media": {
		[mobile]: {
			fontSize: vars.fontSizes.small,
		},
	},
})
const threeItem = style({
	selectors: {
		"&:first-child": {
			marginTop: "1.2rem",
		},
	},
})
const periodCSS = style({
	fontSize: vars.fontSizes.medium,
	lineHeight: "160%",
})

const secondItemValueWrapper = style({
	display: "flex",
	gap: "1rem",
	overflow: "auto",
	"@media": {
		[mobile]: {
			paddingRight: "0.5rem",
		},
	},
})

const secondItemFlex = style({
	display: "flex",
	flexDirection: "column",
	selectors: {
		"&:not(:last-child)": {
			marginBottom: "3rem",
		},
	},
})
export default {
	gridItemBox,
	secondItemFlex,
	secondItemValueWrapper,
	gridWrapper,
	gridTitleLabel,
	secondItemContainer,
	secondItemKey,
	secondItemValueBox,
	secondItemValue,
	threeItem,
	secondItemWrapper,
	periodCSS,
	threeWrapper,
	firstText,
}

import { style } from "@vanilla-extract/css"
import { vars } from "@styles/theme.css"
const mainLayoutWrapper = style({
	display: "flex",
	flexDirection: "column",
	minHeight: "100vh",
	background: vars.background.white,
})
const mainContainer = style({
	display: "flex",
	flex: 1,
	flexDirection: "column",
})

export default { mainLayoutWrapper, mainContainer }

import { globalStyle } from "@vanilla-extract/css"
import { vars } from "@styles/theme.css"

globalStyle("*", {
	margin: 0,
	padding: 0,
	boxSizing: "border-box",
})

globalStyle("html", {
	fontSize: "16px",
	overflowX: "hidden",
})

globalStyle("body", {
	fontFamily: '"Inter","DotGothic16" ',
	lineHeight: 1.5,
	background: vars.background.white,
})

globalStyle("a, a:visited", {
	textDecoration: "none",
	color: "inherit",
})

globalStyle("ul, ol", {
	listStyle: "none",
})

globalStyle("img, picture", {
	maxWidth: "100%",
	display: "block",
})

globalStyle("button, input, select, textarea", {
	fontFamily: "inherit",
	fontSize: "inherit",
})

import { createTheme, style } from "@vanilla-extract/css"

export const [themeClass, vars] = createTheme({
	text: {
		primary: "#242126",
		secondary: "#575757",
		accent: "#0155CF",
		white: "#fff",
	},
	background: {
		white: "#fff",
		primary: "#0155CF",
		primaryLight: "#F2F7FD",
	},
	fontSizes: {
		small: "0.875rem", // 14px
		medium: "1rem", // 16px
		large: "1.25rem", // 20px
		xLarge: "1.5rem", // 24px
		xxLarge: "1.875rem", // 30px
		xxxLarge: "2.5rem", // 40px
		huge: "3.5rem", // 56px
	},
})
export const breakpoints = {
	mobile: "(max-width: 900px)",
	tablet: "(max-width: 1024px)",
}
export const mobile = breakpoints.mobile
export const commonPaddingWrapper = style({
	paddingTop: "4rem",
	paddingBottom: "4rem",
	"@media": {
		[mobile]: {
			paddingTop: "2rem",
			paddingBottom: "2rem",
		},
	},
})

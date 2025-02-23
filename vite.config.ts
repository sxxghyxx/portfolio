import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import tsconfigPaths from "vite-tsconfig-paths"
import path from "path"

export default defineConfig({
	plugins: [react(), vanillaExtractPlugin(), tsconfigPaths()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@components": path.resolve(__dirname, "src/components"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@assets": path.resolve(__dirname, "src/assets"),
		},
	},
})

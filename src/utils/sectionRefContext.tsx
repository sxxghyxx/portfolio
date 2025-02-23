import React, { createContext, useContext, useRef, ReactNode } from "react"

const SectionRefContext = createContext<
	React.MutableRefObject<{ [key: string]: HTMLElement | null }> | undefined
>(undefined)

interface ISectionRefProviderProps {
	children: ReactNode
}

export const SectionRefProvider = ({ children }: ISectionRefProviderProps) => {
	const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

	return (
		<SectionRefContext.Provider value={sectionRefs}>
			{children}
		</SectionRefContext.Provider>
	)
}

export const useSectionRefs = () => {
	const context = useContext(SectionRefContext)

	// Context가 없을 경우 에러 발생
	if (!context) {
		throw new Error("useSectionRefs must be used within a SectionRefProvider")
	}

	return context
}

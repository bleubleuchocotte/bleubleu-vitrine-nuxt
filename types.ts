import type { NuxtLinkProps } from "nuxt/dist/app/components/nuxt-link";

export type Theme = {
	readonly name: string
	readonly primary: string
	readonly secondary: string
	readonly filter: string
	readonly tiredOf: string
};

export type AvailableTheme = "darker" | "passion" | "jelly" | "sea" | "pastel" | "memory" | "cyan" | "chaos" | "polar";

export type Themes = Readonly<Record<AvailableTheme, Theme>>;

export type ThemeFromCookie = {
	name: AvailableTheme
	hasToReloadOnInit: boolean
};

export type NavigationLink = {
	flexAmount: number
	linkName: string
	routerOptions: NuxtLinkProps
};

export type Socials = "Behance" | "Instagram" | "Malt" | "LinkedIn";
export type SocialsProps = {
	to: string
	social: Socials
};

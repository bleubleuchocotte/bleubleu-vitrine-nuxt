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

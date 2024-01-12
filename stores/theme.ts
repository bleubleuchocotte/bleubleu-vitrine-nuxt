import { defineStore } from "pinia";
import type { AvailableTheme, Theme, ThemeFromCookie, Themes } from "~/types";

const themes: Themes = {
	darker: {
		name: "Darker",
		primary: "#000000",
		secondary: "#FFFFFF",
		filter: "none",
		tiredOf: "tired of black&white",
	},
	passion: {
		name: "Passion",
		primary: "#EB0000",
		secondary: "#FFFFFF",
		filter:
			"invert(7%) sepia(97%) saturate(7318%) hue-rotate(1deg) brightness(108%) contrast(130%)",
		tiredOf: "sick of red",
	},
	jelly: {
		name: "Jelly",
		primary: "#BBFF65",
		secondary: "#696969",
		filter:
			"invert(90%) sepia(28%) saturate(839%) hue-rotate(30deg) brightness(101%) contrast(104%)",
		tiredOf: "pertubed by neon",
	},
	sea: {
		name: "Sea",
		primary: "#015EFE",
		secondary: "#F2F2F2",
		filter:
			"invert(29%) sepia(78%) saturate(7150%) hue-rotate(218deg) brightness(106%) contrast(99%)",
		tiredOf: "fed up with blue",
	},
	pastel: {
		name: "Pastel",
		primary: "#C82D63",
		secondary: "#F7F4ED",
		filter:
			"invert(28%) sepia(76%) saturate(1829%) hue-rotate(313deg) brightness(82%) contrast(94%)",
		tiredOf: "bored of bordeaux",
	},
	memory: {
		name: "Memory",
		primary: "#6F69A5",
		secondary: "#F7F4ED",
		filter:
			" invert(44%) sepia(41%) saturate(494%) hue-rotate(206deg) brightness(89%) contrast(87%)",
		tiredOf: "disenchanted with purple",
	},
	cyan: {
		name: "Cyan",
		primary: "#187A81",
		secondary: "#F7F1EE",
		filter:
			"invert(38%) sepia(45%) saturate(717%) hue-rotate(135deg) brightness(94%) contrast(92%)",
		tiredOf: "frustrated with green",
	},
	chaos: {
		name: "Chaos",
		primary: "#EA1821",
		secondary: "#020303",
		filter:
			"invert(15%) sepia(97%) saturate(4036%) hue-rotate(350deg) brightness(93%) contrast(97%)",
		tiredOf: "afraid of the dark",
	},
	polar: {
		name: "Polar",
		primary: "#FFFFFF",
		secondary: "#0E38B1",
		filter:
			"invert(100%) sepia(1%) saturate(0%) hue-rotate(171deg) brightness(103%) contrast(101%)",
		tiredOf: "irritated by blue",
	},
};

export const useThemeStore = defineStore("useThemeStore", () => {
	const entries = Object.entries(themes);
	const themeFromCookie = useCookie<ThemeFromCookie>("theme", {
		default: () => ({ name: "darker", hasToReloadOnInit: false }),
		sameSite: "lax",
	});

	const currentTheme = ref<Theme>(entries.find(entry => entry[0] === themeFromCookie.value.name)?.[1] ?? themes.darker);

	if (themeFromCookie.value.hasToReloadOnInit) {
		setNewTheme();
	}
	else {
		themeFromCookie.value = { name: "darker", hasToReloadOnInit: true };
	}

	function setNewTheme() {
		const themesWithoutCurrent = entries.filter(entry => entry[0] !== themeFromCookie.value.name);
		const newTheme = themesWithoutCurrent[useRandomInt(0, themesWithoutCurrent.length)];

		currentTheme.value = newTheme[1];
		themeFromCookie.value = { name: newTheme[0] as AvailableTheme, hasToReloadOnInit: true };
	}

	return { currentTheme, setNewTheme };
});

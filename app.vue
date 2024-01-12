<script setup lang="ts">
const request = useRequestURL();

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);

// On place ici les propriétés non-réactives
useServerSeoMeta({
	ogImage: `${request.origin}/images/og-image.png`,
	ogUrl: request.origin + request.pathname,

	titleTemplate: "%s | Le titre du site",
	ogTitle: "%s | Le titre du site",

	description: "La description du site.",
	ogDescription: "La description du site.",

	twitterCard: "summary_large_image",

	robots: "index, follow",
	themeColor: () => currentTheme.value.primary,
	creator: "BleuBleu Chocotte",
});

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/svg+xml",
			href: useDataUriFromSvg(useSvgFavicon(currentTheme.value.primary)), // TODO: Update svg size
		},
	],
});
</script>

<template>
	<NuxtLoadingIndicator :throttle="0" />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

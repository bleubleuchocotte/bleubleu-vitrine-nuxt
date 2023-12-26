<script setup lang="ts">
const request = useRequestURL();

// On place ici les propriétés réactives
// S'assurer avant la mise en prod que useSeoMeta est vraiment nécessaire au profit de useServerSeoMeta
useSeoMeta({
	title: "Le titre du site",
	ogTitle: "Le titre du site",

	description: "La description du site.",
	ogDescription: "La description du site.",

	ogImage: `${request.origin}/images/og-image.png`,
	ogUrl: request.origin + request.pathname,

	twitterCard: "summary_large_image",
});

// On place ici les propriétés non-réactives
useServerSeoMeta({
	robots: "index, follow",
	themeColor: "#FFFFFF",
	creator: "BleuBleu Chocotte",
});

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: `${request.origin}/favicon-32x32.ico`,
		},
	],
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

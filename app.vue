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
	<div class="starter">
		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>
		<p>Un paragraphe: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda odio possimus praesentium tempora cumque quis aliquam obcaecati doloremque placeat, et aperiam autem impedit veritatis voluptatibus. Illum laborum nesciunt eaque.</p>
	</div>
</template>

<style scoped lang="scss">
.starter {
	height: 100vh;
	width: 100vw;

	color: #FFFFFF;
	background-color: #000000;
}
</style>

<script setup lang="ts">
import { storeToRefs } from "pinia";

useSeoMeta({
	title: "Accueil",
});

const themeStore = useThemeStore();
const { currentTheme } = storeToRefs(themeStore);
</script>

<template>
	<main class="main-home">
		<SectionsTheHero />

		<h1>{{ currentTheme }}</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>
		<p>Un paragraphe: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda odio possimus praesentium tempora cumque quis aliquam obcaecati doloremque placeat, et aperiam autem impedit veritatis voluptatibus. Illum laborum nesciunt eaque.</p>
		<UIBaseLink href="/404">
			Vers la 404
		</UIBaseLink>
		<UIBaseLink href="/legal-notice">
			Vers les mentions légales
		</UIBaseLink>
	</main>
</template>

<style scoped lang="scss">
.main-home {
	color: var(--primary-color);
	background-color: var(--secondary-color);
}
</style>

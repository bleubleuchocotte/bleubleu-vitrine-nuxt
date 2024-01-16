<script setup lang="ts">
import type { NavigationLink } from "~/types";

const links: NavigationLink[] = [
	{
		flexAmount: 0.2,
		linkName: "BleuBleu?",
		routerOptions: {
			to: "#agency",
		},
	},
	{
		flexAmount: 0.3,
		linkName: "Our projects",
		routerOptions: {
			to: "#project",
		},
	},
	{
		flexAmount: 0.2,
		linkName: "Our team",
		routerOptions: {
			to: "#team",
		},
	},
	{
		flexAmount: 0.3,
		linkName: "Contact us",
		routerOptions: {
			to: "https://3fh7gbh186a.typeform.com/to/ENGwpoSa",
			target: "_blank",
		},
	},
];
</script>

<template>
	<nav class="navigation">
		<ul class="navigation__list">
			<UINavigationBaseItem v-for="(link) in links" :key="link.linkName" :item="link" />
		</ul>
	</nav>
</template>

<style scoped lang="scss">
.navigation {
	position: fixed;
	z-index: 999;

	height: 125px;
	width: 100%;
	top: 0;
	left: 0;

	background: linear-gradient(var(--primary-color) 50%, transparent);

	&__list {
		display: flex;
		@include padding(0);
	}
}
</style>

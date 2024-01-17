<script setup lang="ts">
import type { SocialsProps } from "~/types";

const socials: SocialsProps[] = [
	{
		to: "https://google.com",
		social: "Malt",
	},
	{
		to: "https://google.com",
		social: "Instagram",
	},
	{
		to: "https://google.com",
		social: "LinkedIn",
	},
	{
		to: "https://google.com",
		social: "Behance",
	},
];
</script>

<template>
	<footer class="footer">
		<IconBleuBleu />
		<div class="footer__socials">
			<UIBaseSocials v-for="(social) in socials" :key="social.social" v-bind="social" />
		</div>

		<p class="footer__copyright">
			©{{ new Date().getFullYear() }}, BleuBleu Chocotte
		</p>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	@include gap(8);

	@include prop("padding-block", 15);

	&__socials {
		display: flex;
		@include gap(4);

		scale: 0.8;
	}

	&__copyright {
		@include font("misc/copyright");
	}
}
</style>

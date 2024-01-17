<script setup lang="ts">
import type { SocialsProps } from "~/types";
import lottie from "@/assets/lotties/lottie-header-desktop.json";

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
	<section class="section-hero">
		<UIBaseLottie :data-as-json="lottie" />

		<div class="section-hero__bottom">
			<div class="section-hero__bottom-icons">
				<UIBaseSocials v-for="(social) in socials" :key="social.social" v-bind="social" />
			</div>

			<div class="section-hero__bottom-slogan">
				<p>Amour &</p>
				<p>Multimedia</p>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.section-hero {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@include gap(5);

	min-height: calc(100vh - 1px);

	// padding-top: 100px;
	@include prop("padding-bottom", 8);
	@include prop("padding-inline", 30);

	border-bottom: 1px solid;

	&__bottom {
		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: center;

		&-icons {
			display: flex;
			@include gap(8);

			height: 100%;
		}

		&-slogan {
			text-align: right;
		}
	}
}
</style>

<script setup lang="ts">
import type { BaseLenisSectionProps } from "~/types";

const { height } = useWindowSize();

const { $api } = useNuxtApp();
const keywords = await $api.keywords.getAllKeywords();

const baseLenisSectionProps = reactive<BaseLenisSectionProps>({
	element: {
		isInViewport: false,
		ratio: 1 / height.value,
		resetOnLeave: false,
	},
	externalElement: {
		isInViewport: false,
		ratio: 1,
		resetOnLeave: false,
	},
});
</script>

<template>
	<UIBaseLenisSection v-bind="baseLenisSectionProps">
		<UIBaseIntersectionObserver @is-visible="(e) => baseLenisSectionProps.element.isInViewport = e">
			<section class="section-keywords">
				<template v-for="(keyword) in keywords" :key="keyword.text">
					<p :style="keyword.css" class="section-keywords__item">
						{{ keyword.text }}
					</p>
				</template>
			</section>
		</UIBaseIntersectionObserver>
	</UIBaseLenisSection>
</template>

<style scoped lang="scss">
.section-keywords {
	position: relative;
	min-height: 350px;

	@include prop("margin-inline", 30);
	@include border(0);
	border-top: unset;

	&__item {
		@include font("misc/keywords");

		--x: calc(var(--internal-progress) * var(--ratio, 1) * 1vw);

		position: absolute;
		border: 1px solid;

		background-color: var(--secondary-color);

		@include prop("padding-block");
		@include prop("padding-inline", 6);

		transform: translate3d(var(--x), 0, 0);
	}
}
</style>

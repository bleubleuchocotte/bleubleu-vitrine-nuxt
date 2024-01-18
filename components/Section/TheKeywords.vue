<script setup lang="ts">
import type { Content } from "@prismicio/client";
import type { BaseLenisSectionProps } from "~/types";

type ComponentProps = {
	keywords?: Content.PageHomeDocumentDataSectionKeywordsItem[]
};

defineProps<ComponentProps>();

const { height } = useWindowSize();

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
					<p :style="`--speed: ${keyword.speed};${keyword.custom_css}`" class="section-keywords__item">
						{{ keyword.name }}
					</p>
				</template>
			</section>
		</UIBaseIntersectionObserver>
	</UIBaseLenisSection>
</template>

<style scoped lang="scss">
.section-keywords {
	position: relative;
	overflow: hidden;
	min-height: 350px;

	@include prop("margin-inline", 30);
	border-left: 1px solid;
	border-right: 1px solid;

	&__item {
		@include font("misc/keywords");

		--x: calc(var(--internal-progress) * var(--speed, 1) * 1vw);

		position: absolute;
		border: 1px solid;

		background-color: var(--secondary-color);

		@include prop("padding-block");
		@include prop("padding-inline", 6);

		transform: translate3d(var(--x), 0, 0);
	}
}
</style>

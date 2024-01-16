<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";

type ComponentProps = {
	dataAsJson: unknown
};

defineProps<ComponentProps>();

const lottieState = ref<"pause" | "play">("pause");
const preferredMotion = usePreferredReducedMotion();
const hasLoaded = ref(false);
</script>

<template>
	<UIBaseIntersectionObserver @is-visible="(bool) => bool ? lottieState = 'play' : lottieState = 'pause'">
		<ClientOnly>
			<Vue3Lottie
				:animation-data="dataAsJson"
				:pause-animation="lottieState === 'pause'"
				:auto-play="preferredMotion !== 'reduce'"
				:data-loaded="hasLoaded ? true : undefined"
				class="lottie"
				@on-animation-loaded="hasLoaded = true"
			/>
		</ClientOnly>
	</UIBaseIntersectionObserver>
</template>

<style scoped lang="scss">
.lottie {
	opacity: 0;
	filter: blur(15px);
	@include transition((opacity, filter));

	&[data-loaded] {
		opacity: 1;
		filter: blur(0);
	}

	&:deep(*) {
		g[aria-label] path {
			fill: var(--primary-color);
		}

		path[fill] {
			fill: var(--primary-color);
		}

		path[stroke] {
			stroke: var(--primary-color);
		}
	}
}
</style>

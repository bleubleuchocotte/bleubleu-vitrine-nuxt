<script setup lang="ts">
import { storeToRefs } from "pinia";
import type { BaseLenisSectionProps } from "@/types";

const props = defineProps<BaseLenisSectionProps>();

const store = useLenisStore();
const { scroll } = storeToRefs(store);

const elementCurrentScroll = ref(0);
let elementStartScroll: null | number = null;

const externalElementCurrentScroll = ref(0);
let externalStartScroll: null | number = null;

watch(scroll, () => {
	if (props.element.isInViewport) {
		if (elementStartScroll === null) { elementStartScroll = scroll.value; }

		elementCurrentScroll.value = (scroll.value - elementStartScroll) * props.element.ratio;
	}
	else {
		if (props.element.resetOnLeave) {
			elementStartScroll = null;
			elementCurrentScroll.value = 0;
		}
	}

	if (props.externalElement.isInViewport) {
		if (externalStartScroll === null) { externalStartScroll = scroll.value; }

		externalElementCurrentScroll.value = (scroll.value - externalStartScroll) * props.externalElement.ratio;
	}
	else {
		if (props.externalElement.resetOnLeave) {
			externalStartScroll = null;
			externalElementCurrentScroll.value = 0;
		}
	}
});
</script>

<template>
	<div :style="{ '--external-progress': `${externalElementCurrentScroll}`, '--internal-progress': `${elementCurrentScroll}` }" class="lenis-section">
		<slot />
	</div>
</template>

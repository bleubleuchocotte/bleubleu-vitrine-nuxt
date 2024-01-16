<script setup lang="ts">
import type { CSSProperties } from "vue";

type ComponentProps = {
	width: number
	height: number
};

const props = defineProps<ComponentProps>();

const container = ref<HTMLElement | null>(null);
const isActive = ref(false);
const styles = reactive<CSSProperties>({
	height: `${props.height}px`,
	width: `${props.width}px`,
});

const onMove: (e: MouseEvent) => void = (e) => {
	const target = e.target as HTMLElement;

	if (!container.value) {
		return;
	}

	if (target instanceof HTMLAnchorElement || target instanceof HTMLButtonElement) {
		isActive.value = true;
	}
	else {
		isActive.value = false;
	}

	styles.translate = `${e.clientX - props.width / 2}px ${e.clientY - props.height / 2}px`;
};

useEventListener(document, "mousemove", onMove);
</script>

<template>
	<div
		ref="container"
		class="cursor"
		:class="{ active: isActive }"
		:style="styles"
	/>
</template>

<style scoped lang="scss">
.cursor {
	pointer-events: none;

	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;

	filter: blur(15px);
	border: 1px solid var(--secondary-color);
	border-radius: 50%;

	background-color: var(--primary-color);

	transition:
		filter 0.3s ease,
		translate 0.1s ease-out,
		scale 0.3s ease;

	&.active {
		filter: none;
		scale: 0.5;
		border-width: 1px;
		box-shadow: none !important;
	}
}
</style>

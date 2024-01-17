<script setup lang="ts">
const target = ref<HTMLElement | null>(null);
const { x: elementX, y: elementY, width, height } = useElementBounding(target);

const { x: mouseX, y: mouseY } = usePointer();

const elementCenter = computed(() => {
	return {
		x: elementX.value + width.value / 2,
		y: elementY.value + height.value / 2,
	};
});

const distance = computed(() => Math.sqrt((mouseX.value - elementCenter.value.x) ** 2 + (mouseY.value - elementCenter.value.y) ** 2));
</script>

<template>
	<div ref="target" :style="`--distance: ${distance}`" class="blurry-text">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.blurry-text {
	--amount: calc(var(--distance) * 0.01px);
	--range: clamp(0px, var(--amount), 25px);
	filter: blur(var(--range));

	&:hover {
		filter: blur(0px);
	}
}
</style>

<script setup lang="ts">
type ComponentProps = {
	threshold?: number
};

const props = withDefaults(defineProps<ComponentProps>(), {
	threshold: 0,
});

const emits = defineEmits<{
	isVisible: [payload: boolean]
}>();

const container = ref<HTMLElement | null>(null);

onMounted(() => {
	useIntersectionObserver(
		container,
		([{ isIntersecting }]) => {
			emits("isVisible", isIntersecting);
		},
		{
			threshold: props.threshold,
		},
	);
});
</script>

<template>
	<div ref="container">
		<slot />
	</div>
</template>

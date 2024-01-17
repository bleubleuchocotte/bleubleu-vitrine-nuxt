<script setup lang="ts">
onMounted(() => {
	const lenisStore = useLenisStore();
	const { initLenis } = lenisStore;

	initLenis();
});
</script>

<template>
	<div class="default-layout">
		<TheHeader />
		<slot />
		<TheFooter />
	</div>
</template>

<style scoped lang="scss">
.default-layout {
	color: var(--primary-color);
	background-color: var(--secondary-color);
}
</style>

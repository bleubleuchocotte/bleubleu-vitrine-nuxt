<script setup lang="ts">
const { start } = useLoadingIndicator({
	throttle: 0,
});
start();
</script>

<template>
	<NuxtLoadingIndicator />
	<div>
		<TheHeader />
		<slot />
		<TheFooter />
	</div>
</template>

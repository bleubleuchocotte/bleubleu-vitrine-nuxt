<script setup lang="ts">
import Lenis from "@studio-freight/lenis";

let lenis: Lenis;

onMounted(() => {
	lenis = new Lenis();

	function raf(time: number) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
});
</script>

<template>
	<div>
		<slot />
	</div>
</template>

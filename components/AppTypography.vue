<script setup lang="ts">
type AppTypographyType = {
	tag?: "p" | "h1" | "h2" | "h3" | "h4" | "span"
	variant?: "p" | "h1" | "h2" | "h3" | "h4"
};
withDefaults(defineProps<AppTypographyType>(), {
	tag: "p",
});
</script>

<template>
	<component :is="tag" :class="variant">
		<slot />
	</component>
</template>

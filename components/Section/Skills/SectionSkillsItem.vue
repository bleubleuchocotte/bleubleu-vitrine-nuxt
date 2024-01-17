<script setup lang="ts">
import type { KeywordAgencyDocumentData } from "@/prismicio-types.d.ts";

const props = withDefaults(defineProps<KeywordAgencyDocumentData>(), {
	direction: "ltr",
});

const container = ref<HTMLElement | null>(null);
const ratio = ref(props.direction === "ltr" ? (props.speed ?? 0) : -1 * (props.speed ?? 0));
</script>

<template>
	<p ref="container" :style="css_style" class="skill-item">
		{{ text }}
	</p>
</template>

<style scoped lang="scss">
.skill-item {
	--ratio: v-bind(ratio);
	--x: calc(var(--internal-progress) * var(--ratio) * 1vw);

	position: absolute;
	border: 1px solid;

	@include prop("padding-block");
	@include prop("padding-inline", 6);

	transform: translate3d(var(--x), 0, 0);
}
</style>

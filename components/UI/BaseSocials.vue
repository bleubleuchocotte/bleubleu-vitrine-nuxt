<script setup lang="ts">
import type { Component } from "vue";
import type { SocialsProps } from "~/types";

const props = defineProps<SocialsProps>();

const is = computed(
	() => defineAsyncComponent<Component>(() => import(`@/components/Icon/Icon${props.social}.vue`)),
);
</script>

<template>
	<UIBaseLink :to="to" target="_blank" class="social__link">
		<component :is="is" class="social__component" />
	</UIBaseLink>
</template>

<style scoped lang="scss">
.social {
	&__link {
		margin: auto 0;
	}

	&__component {
		pointer-events: none;
		vertical-align: middle;
	}
}
</style>

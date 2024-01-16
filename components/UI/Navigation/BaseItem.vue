<script setup lang="ts">
import type { NavigationLink } from "~/types";

type ComponentProps = {
	item: NavigationLink
};

defineProps<ComponentProps>();
</script>

<template>
	<li :style="`flex:${item.flexAmount};`" class="navigation-list-item">
		<UIBaseLink v-bind="item.routerOptions" class="navigation-list-item__link">
			{{ item.linkName }}
		</UIBaseLink>
	</li>
</template>

<style scoped lang="scss">
.navigation-list-item {
	list-style: none;

	@include font("misc/navigation");
	text-align: center;
	letter-spacing: -2px;
	white-space: nowrap;

	@include border(5);
	overflow: hidden;

	color: var(--secondary-color);
	@include transition(
		$properties: (
			flex,
			letter-spacing,
		),
		$durations: 0.3s
	);

	&:hover {
		flex: 0.4 !important;
		letter-spacing: 4px;
	}

	&__link {
		display: block;
		width: 100%;
		@include prop("padding-inline", 2);
		@include prop("padding-block", 1);
	}
}
</style>

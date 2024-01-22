<script setup lang="ts">
import type { DateField, KeyTextField, LinkField } from "@prismicio/client";

type ComponentProps = {
	name: KeyTextField
	date: DateField
	link: LinkField
	linkName: KeyTextField
};

const props = defineProps<ComponentProps>();

const { href, target } = usePrismicLink({
	field: props.link,
});
</script>

<template>
	<div class="project-item-heading">
		<div class="project-item-heading__left">
			<div class="project-item-heading__left-name">
				{{ name }}
			</div>
		</div>
		<div class="project-item-heading__right">
			<div class="project-item-heading__right-date">
				{{ date?.slice(0, 4) }}
			</div>

			<UIBaseLink :href="href" :target="target" class="project-item-heading__right-link">
				{{ linkName }} <IconLinkArrowRight />
			</UIBaseLink>
		</div>
	</div>
</template>

<style scoped lang="scss">
.project-item-heading {
	display: flex;
	border-left: 1px solid;
	border-right: 1px solid;

	&__left,
	&__right {
		@include prop("padding-inline", 6);
		@include prop("padding-block", 3);
	}

	&__left {
		flex: 0.7;

		border-right: 1px solid;

		&-name {
			width: fit-content;

			@include border(8);
			@include prop("padding-inline", 6);
			@include prop("padding-block", 3);
		}
	}

	&__right {
		flex: 0.3;

		display: flex;
		justify-content: space-between;
		align-items: center;

		&-link {
			display: flex;
			align-items: center;
			@include gap(3);
		}
	}
}
</style>

<!-- <style scoped>
.project-item-heading__right-link {

}
</style> -->

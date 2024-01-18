<script setup lang="ts">
import type { Content, LinkToMediaField, RichTextField } from "@prismicio/client";

type ComponentProps = {
	description: RichTextField
	images: Content.HomeProjectDocumentDataImagesItem[]
	video: LinkToMediaField
};

defineProps<ComponentProps>();
</script>

<template>
	<div class="project-item-content">
		<div class="project-item-content__left">
			<PrismicRichText :field="description" class="project-item-content__left-paragraph" />
			<div>
				Medias : image
			</div>
		</div>
		<div class="project-item-content__right">
			Media: video
		</div>
	</div>
</template>

<style scoped lang="scss">
.project-item-content {
	display: flex;
	border-top: 1px solid;

	@include transition(
		$properties: (
			height,
			border-width,
		)
	);

	&__left,
	&__right {
		@include prop("padding-inline", 6);
		@include prop("padding-block", 3);
	}

	&__left {
		flex: 0.7;
		border-right: 1px solid;
		border-left: 1px solid;
	}

	&__right {
		flex: 0.3;
		border-right: 1px solid;
	}
}
</style>

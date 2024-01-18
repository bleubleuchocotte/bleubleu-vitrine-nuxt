<script setup lang="ts">
import type { Content } from "@prismicio/client";

type ComponentProps = {
	project: Content.HomeProjectDocumentData
};

defineProps<ComponentProps>();
</script>

<template>
	<div class="project-item">
		<UIBaseAccordion>
			<template #title>
				<SectionProjectsItemHeading :date="project.date" :link="project.link" :link-name="project.link_name" :name="project.name" />
			</template>

			<template #content>
				<SectionProjectsItemContent :description="project.description" :images="project.images" :video="project.video" />
			</template>
		</UIBaseAccordion>
	</div>
</template>

<style scoped lang="scss">
.project-item {
	width: 100%;
	overflow: hidden;

	&:not(:last-of-type) {
		border-bottom: 1px solid;
	}
}
</style>

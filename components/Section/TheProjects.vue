<script setup lang="ts">
import type { Content } from "@prismicio/client";

type ComponentProps = {
	projects: Content.HomeProjectDocumentData[]
};
defineProps<ComponentProps>();
</script>

<template>
	<section class="section-projects">
		<SectionProjectsItem v-for="(project, i) in projects" :key="i" :project="project" />
	</section>
</template>

<style scoped lang="scss">
.section-projects {
	border-top: 1px solid;
	border-bottom: 1px solid;

	@include prop("padding-inline", 30);
}
</style>

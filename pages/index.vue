<script setup lang="ts">
import type { Content, ContentRelationshipField } from "@prismicio/client";

useSeoMeta({
	title: "Accueil",
});

const { $api } = useNuxtApp();
const page = await $api.pages.getHomePage();

const projects = page?.data.section_projects.map((el) => {
	const projectFromPrismic = el.project as ContentRelationshipField<"home_project", string, Content.HomeProjectDocumentData, "filled" >;
	return projectFromPrismic.data;
}) ?? [];

const projectsFiltered = projects.filter((el): el is Content.HomeProjectDocumentData => el !== undefined); // Permet de filter les potentiels "undefined"
</script>

<template>
	<main>
		<SectionTheHero />
		<SectionTheStudio />
		<SectionTheKeywords :keywords="page?.data.section_keywords" />
		<SectionTheProjects :projects="projectsFiltered" />
	</main>
</template>

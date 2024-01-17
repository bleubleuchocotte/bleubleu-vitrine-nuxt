<script setup lang="ts">
import type { BaseLenisSectionProps } from "~/types";
import type { KeywordAgencyDocumentData } from "@/prismicio-types.d.ts";

const { height } = useWindowSize();

const skills: KeywordAgencyDocumentData[] = [
	{
		text: "sound design",
		direction: "rtl",
		css_style: "z-index:1;right:0;top:0;",
		speed: 90,
	},
	{
		text: "graphic design",
		direction: "ltr",
		css_style: "z-index:2;left:-100px;top:100px;",
		speed: 110,
	},
	{
		text: "web dev",
		direction: "ltr",
		css_style: "z-index:1;left:100px;top:170px;",
		speed: 80,
	},
	{
		text: "motion design",
		direction: "rtl",
		css_style: "z-index:0;right:0;top:300px;",
		speed: 75,
	},
	{
		text: "brand identity",
		direction: "rtl",
		css_style: "z-index:0;right:50%;top:325px;",
		speed: 25,
	},
	{
		text: "ux/ui design",
		direction: "rtl",
		css_style: "z-index:9;right:50%;top:360px;",
		speed: 10,
	},
];

const baseLenisSectionProps = reactive<BaseLenisSectionProps>({
	element: {
		isInViewport: false,
		ratio: 1 / height.value,
		resetOnLeave: false,
	},
	externalElement: {
		isInViewport: false,
		ratio: 1,
		resetOnLeave: false,
	},
});
</script>

<template>
	<UIBaseLenisSection v-bind="baseLenisSectionProps">
		<UIBaseIntersectionObserver @is-visible="(e) => baseLenisSectionProps.element.isInViewport = e">
			<section class="section-skills">
				<SectionSkillsItem v-for="(skill) in skills" :key="JSON.stringify(skill.text)" v-bind="skill" />
			</section>
		</UIBaseIntersectionObserver>
	</UIBaseLenisSection>
</template>

<style scoped lang="scss">
.section-skills {
	position: relative;
	min-height: 50vh;

	@include prop("margin-inline", 30);
	@include border(0);
	border-top: unset;
}
</style>

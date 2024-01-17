<script setup lang="ts">
import IconRobot from "../Icon/IconRobot.vue";

const icons = [
	IconRobot,
	IconRobot,
	IconRobot,
	IconRobot,
];
</script>

<template>
	<section class="section-studio">
		<div class="section-studio__left">
			<div class="section-studio__left-content">
				<SectionStudioHeading />

				<UIBaseBlurryText class="section-studio__left-content-paragraph">
					<p>
						Bleubleu is a closed collective of half a dozen freelancers with strong ethical goals, super dedication to interesting projects and passionate people.
					</p>
				</UIBaseBlurryText>
			</div>
			<div class="section-studio__left-icons">
				<component :is="icon" v-for="(icon) in icons" :key="JSON.stringify(icon)" />
			</div>
		</div>
		<div class="section-studio__right">
			<SectionStudioDynamicAssets />
		</div>
	</section>
</template>

<style scoped lang="scss">
.section-studio {
	display: flex;

	@include prop("padding-inline", 30);
	border-bottom: 1px solid;

	min-height: 80vh;

	&__left,
	&__right {
		flex: 0.5;
	}

	&__left {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&-content,
		&-icons {
			@include padding(8);
			@include border(0);
			border-bottom: unset;
		}

		&-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			@include gap(8);

			height: 100%;
			border-top: unset;

			&-paragraph {
				max-width: 75%;
			}
		}

		&-icons {
			display: flex;
			justify-content: space-between;
			@include gap(4);
		}
	}

	&__right {
		border-right: 1px solid;
	}
}
</style>

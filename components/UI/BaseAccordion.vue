<script setup lang="ts">
const isOpen = ref(false);
defineExpose({ isOpen, updateHeight });

const accordionId = `accordion-${Math.random().toString(36).substring(2, 9)}`;

const toggleAccordion = useThrottleFn(() => {
	isOpen.value = !isOpen.value;
}, 100);

const isButtonFocused = ref(false);
const target = ref<HTMLDivElement | null>(null);
const height = ref(0);

onMounted(() => {
	updateHeight();
});

function updateHeight() {
	if (target.value) {
		height.value = target.value.scrollHeight;
	}
}
</script>

<template>
	<div class="accordion" :style="`--accordion-height: ${height}px`">
		<button
			type="button"
			:aria-expanded="isOpen ? 'true' : 'false'"
			:aria-controls="accordionId"
			class="accordion__button"
			@click="toggleAccordion"
			@focus="isButtonFocused = true"
			@blur="isButtonFocused = false"
		>
			<slot name="title" :focus="isButtonFocused || isOpen" />
		</button>
		<div
			:id="accordionId"
			ref="target"
			role="region"
			:aria-hidden="isOpen ? 'false' : 'true'"
			class="accordion__content"
		>
			<slot name="content" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.accordion {
	&__button {
		appearance: none;
		background-color: transparent;
		border: unset;
		padding: 0;

		cursor: pointer;

		width: 100%;
	}

	&__content {
		max-height: 0;
		overflow: hidden;

		@include transition();

		&[aria-hidden="false"] {
			max-height: var(--accordion-height);
		}
	}
}
</style>

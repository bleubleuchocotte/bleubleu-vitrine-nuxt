<script setup lang="ts">
import type { LayoutKey } from "#build/types/layouts";
import The404Error from "@/components/The404Error.vue";
import TheFatalError from "@/components/TheFatalError.vue";

type ComponentProps = {
	// https://nuxt.com/docs/getting-started/error-handling#error-page
	error: {
		url: string
		statusCode: number
		statusMessage: string
		message: string
		description?: string
		data: any
		stack?: string
	}
};
const props = defineProps<ComponentProps>();

const data = computed(() => {
	const result: {
		name: LayoutKey
		component: Component | null
		error: Pick<typeof props.error, "url"> | typeof props.error | null
	} = {
		name: "fatal-error",
		component: null,
		error: null,
	};

	switch (props.error.statusCode) {
		case 404:
			result.name = "default";
			result.component = The404Error;
			result.error = { url: props.error.url };
			break;

		default:
			result.name = "fatal-error";
			result.component = TheFatalError;
			result.error = props.error;
			break;
	}

	return result;
});
</script>

<template>
	<NuxtLayout :name="data.name">
		<component :is="data.component" :error="data.error" />
	</NuxtLayout>
</template>

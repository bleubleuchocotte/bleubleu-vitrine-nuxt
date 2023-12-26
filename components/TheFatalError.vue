<script setup lang="ts">
type ComponentProps = {
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
defineProps<ComponentProps>();
</script>

<template>
	<div class="fatal-error">
		<h1>{{ error.statusCode }}</h1>
		<p>
			{{ error.message }}
		</p>
		<pre class="fatal-error__stack" v-html="error.stack" />
	</div>
</template>

<style scoped lang="scss">
.fatal-error {
	&__stack {
		white-space: pre-line;
		overflow: hidden;

		@include padding();
	}
}
</style>

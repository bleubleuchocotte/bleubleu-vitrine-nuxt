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
	<div>
		<h1>Oops !</h1>
		<h2>{{ error.statusCode }}</h2>
		<p>
			{{ error.message }}
			<code>
				{{ error.stack }}
			</code>
		</p>

		<h3>Contactez un admnistrateur pour plus d'informations</h3>
	</div>
</template>

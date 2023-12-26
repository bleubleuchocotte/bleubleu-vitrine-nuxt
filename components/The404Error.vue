<script setup lang="ts">
type ComponentProps = {
	error: {
		url: string
	}
};
defineProps<ComponentProps>();

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<div>
		<h1>Il semblerait que la page recherché n'existe pas</h1>
		<p>
			URL : {{ error.url }}
		</p>

		<UIBaseLink @click="handleError">
			Revenir à la page d'accueil
		</UIBaseLink>
	</div>
</template>

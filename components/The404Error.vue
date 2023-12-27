<script setup lang="ts">
type ComponentProps = {
	url: string
};
defineProps<ComponentProps>();
</script>

<template>
	<div>
		<h1>Il semblerait que la page recherché n'existe pas</h1>
		<p>
			URL : {{ url }}
		</p>

		<UIBaseLink href="/" @click="clearError()">
			Revenir à la page d'accueil
		</UIBaseLink>
	</div>
</template>

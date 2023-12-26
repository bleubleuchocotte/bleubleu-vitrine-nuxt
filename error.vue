<script setup lang="ts">
const error = useError();
</script>

<template>
	<div>
		<h1>Oops...</h1>
		<p>
			<strong>{{ error?.message }}</strong>
		</p>
		<p>It looks like something broke.</p>
		<p>Sorry about that.</p>
	</div>
</template>

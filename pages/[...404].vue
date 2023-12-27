<script setup lang="ts">
const event = useRequestEvent();
setResponseStatus(event, 404, "Page Not Found"); // Permet de réellement avoir une 404

definePageMeta({
	layout: "404",
});

useSeoMeta({
	title: "404 - Page not found",
});

// On place ici les propriétés non-réactives
useServerSeoMeta({
	robots: "noindex, nofollow",
});
</script>

<template>
	<div>
		<The404Error :url="$route.path" />
	</div>
</template>

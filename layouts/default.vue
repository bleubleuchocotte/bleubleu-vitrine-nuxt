<template>
	<div class="default-layout">
		<UIBaseLenis>
			<TheHeader />
			<slot />
			<TheFooter />
		</UIBaseLenis>
	</div>
</template>

<style scoped lang="scss">
.default-layout {
	color: var(--primary-color);
	background-color: var(--secondary-color);
}
</style>

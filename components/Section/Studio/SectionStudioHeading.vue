<template>
	<h2 class="studio-heading">
		Bold & <br>
		<span class="studio-heading__icon-sentence"><IconRobot /> strong</span><br>
		Collective
	</h2>
</template>

<style scoped lang="scss">
.studio-heading {
	&__icon-sentence {
		display: inline-flex;
		align-items: center;

		@include gap(3);
	}
}
</style>

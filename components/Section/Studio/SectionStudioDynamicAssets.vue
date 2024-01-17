<template>
	<div class="studio-dynamic-assets">
		<div class="studio-dynamic-assets__left">
			<div class="studio-dynamic-assets__left-icon-container">
				<IconBleuBleu data-icon />
			</div>

			<div class="studio-dynamic-assets__left-icon-container">
				<IconBleuBleu data-icon />
			</div>
		</div>
		<div class="studio-dynamic-assets__right">
			<div class="studio-dynamic-assets__right-icon-container">
				<IconBleuBleu data-icon />
			</div>
			<div class="studio-dynamic-assets__right-icon-container">
				<IconBleuBleu data-icon />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.studio-dynamic-assets {
	display: flex;
	height: 100%;

	&__left,
	&__right {
		display: flex;
		flex-direction: column;

		height: 100%;

		@include transition(flex);

		&-icon-container {
			display: flex;
			justify-content: center;
			align-items: center;

			overflow: hidden;
			@include transition(flex);

			[data-icon] {
				min-height: 200px;
				min-width: 200px;
			}
		}
	}

	&__left {
		flex: 0.4;
		&:hover {
			flex: 0.7;
		}

		&-icon-container {
			&:first-of-type {
				flex: 0.4;

				@include padding(4);
				border-bottom: 1px solid;
				border-right: 1px solid;

				&:hover {
					flex: 0.5;
				}
			}

			&:nth-of-type(2) {
				flex: 0.6;
				border-right: 1px solid;

				&:hover {
					flex: 0.8;
				}

				[data-icon] {
					transform: rotate(-4deg) scale(4.4) skew(27deg, -74deg);
				}
			}
		}
	}

	&__right {
		flex: 0.6;

		&:hover {
			flex: 1;
		}

		&-icon-container {
			&:first-of-type {
				flex: 0.7;
				border-bottom: 1px solid;
				[data-icon] {
					transform: rotate(90deg) scale(3.3) skew(45deg, -75deg);
				}
				&:hover {
					flex: 0.8;
				}
			}
			&:nth-of-type(2) {
				flex: 0.3;
				&:hover {
					flex: 0.5;
				}

				[data-icon] {
					transform: rotate(78.9deg) scale(4) skew(40deg, 10deg)
						translate(-20px, -20px);
				}
			}
		}
	}
}
</style>

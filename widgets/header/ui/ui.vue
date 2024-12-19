<script setup lang="ts">
import { Container } from '@/shared/container';
import { Logo } from '@/shared/components/logo'
import { Menu  } from "@/widgets/menu";

</script>

<template>
	<header class="header">
		<Container className="py-4">
			<div class="header-row">
				<Logo height="20"/>

				<Menu/>
			</div>
		</Container>
	</header>
</template>

<style lang="scss" scoped>
	.header {
		box-shadow: 0 0 3px 0 rgba(144, 164, 145, 0.31);

		&-row {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
<script setup lang="ts">
import { Container } from '@/components/shared/container';
import { Logo } from '@/components/shared/logo'
import { Menu  } from "@/components/base/menu";

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
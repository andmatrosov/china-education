<script setup lang="ts">
	import { Icon } from '@/components/shared/icon'
	const {width, height} = defineProps({
		width: {
			type: [String, Number],
			required: false,
			default: 'auto'
		},
		height: {
			type: [String, Number],
			required: false,
			default: 'auto'
		}
	})

	const sizes = computed(() => {
		return {
			width: width !== 'auto' ? `${width}px` : width,
			height: height !== 'auto' ? `${height}px` : height
		}
	})
</script>

<template>
	<NuxtLink class="logo" :style="sizes" to="/public">
		<Icon icon="logo-nuxt" color="#000" />
	</NuxtLink>
</template>

<style scoped>
	.logo {
		display: inline-block;
	}
</style>
<script lang="ts" setup>
defineProps({
	className: {
		type: String,
		required: false,
		default: ''
	}
})
</script>

<template>
	<div :class="['container', className]">
		<slot />
	</div>
</template>

<style scoped>
	.container {
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
	}
</style>
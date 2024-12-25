<template>
	<NuxtLink :to="link.to" class="menu-item">
		{{ link.label }}
	</NuxtLink>
</template>

<script setup>
defineProps({
	link: {
		type: Object,
		required: true
	}
})
</script>

<style scoped>
.menu-item {
	text-decoration: none;
	color: #333;
}
</style>
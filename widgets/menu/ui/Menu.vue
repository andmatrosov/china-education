<template>
	<nav class="menu">
		<MenuItem v-for="link in links" :key="link.to" :link="link" />
	</nav>
</template>

<script setup>
import { links } from "../model"
import MenuItem from "./MenuItem.vue"
</script>

<style scoped>
.menu {
	display: flex;
	gap: 20px;
}
</style>
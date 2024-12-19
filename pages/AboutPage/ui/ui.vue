<script setup lang="ts">
	import { Container } from '@/shared/container'
	import {useSeoMeta} from "../../../.nuxt/imports";

	useSeoMeta({
		title: "О нас",
		description: 'Мы самые самые'
	})
</script>

<template>
	<Container>
		<h1>О нас</h1>
	</Container>
</template>

<style scoped>

</style>

<template>
	<Container>
		<h1>Гранты</h1>

		<ProductsList />
	</Container>
</template>

<script setup lang="ts" async>
import { Container } from '@/shared/container';
import { ProductsList } from "@/widgets/products/productsList";
import { useSeoMeta } from "@/.nuxt/imports";


useSeoMeta({
	title: "Гранты в ВУЗы Китая",
	description: 'Страница с грантами'
})
</script>

<style scoped>

</style>



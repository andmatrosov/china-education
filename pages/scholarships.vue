<template>
	<div>
		<container>
			<h1>Гранты</h1>

			<ProductsList />
			<Pagination />
		</container>
	</div>
</template>

<script setup lang="ts" async>
import { Container } from "@/components/shared/container";
import { ProductsList } from "@/components/products";
import { Pagination } from "@/components/pagination";
import { useSeoMeta } from "@/.nuxt/imports";

useSeoMeta({
	title: "Гранты в ВУЗы Китая",
	description: "Страница с грантами",
});
</script>

<style scoped>

</style>
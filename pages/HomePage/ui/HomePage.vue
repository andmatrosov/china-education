<script setup lang="ts">
import { Container } from "@/shared/container";
import {useSeoMeta} from "../../../.nuxt/imports";

useSeoMeta({
	title: "Главная",
	description: 'Главная страница '
})
</script>

<template>
	<div class="wrapper">
		<Container>
      <h1>HOME PAGE</h1>
		</Container>
	</div>
</template>

<style>

</style>

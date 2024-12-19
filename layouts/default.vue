<script lang="ts" setup>
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
</script>

<template>

	<Header />
	<NuxtLoadingIndicator />
	<main>
		<slot />
	</main>

	<Footer />
</template>

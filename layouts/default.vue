<script lang="ts" setup>
import { Header } from '@/components/base/header'
import { Footer } from '@/components/base/footer'
</script>

<template>

	<Header />
	<NuxtLoadingIndicator />
	<main>
		<slot />
	</main>

	<Footer />
</template>

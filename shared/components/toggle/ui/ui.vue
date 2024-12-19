<template>
	<div class="toggle">
		<input type="checkbox" :id="toggleId" :name="props.name" @change="$emit('change', value)" v-model="value">
		<label :for="toggleId"></label>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		name: {
			type: String,
			required: false,
			default: ''
		},
	})

	defineEmits(['change']);

	const value = ref(false);

	const toggleId = computed(() => Math.random())


</script>

<style lang="scss" scoped>
	.toggle {
		position: relative;

		input {
			display: none;
		}

		label {
			position: relative;
			display: inline-block;
			width: 40px;
			height: 18px;
			border: 1px solid #e4e4e4;
			background-color: #f1f0f0;
			border-radius: 20px;
			cursor: pointer;
			&::before {
				position: absolute;
				top: 0;
				left: 0;
				content: "";
				width: 16px;
				height: 16px;
				border: 1px solid #e4e4e4;
				background-color: #fff;
				border-radius: 50%;
				transition: left 0.25s;
			}
		}

		input:checked ~ label {
			background-color: #7edab4;
			&::before {
				left: calc(100% - 18px);
			}
		}
	}
</style>
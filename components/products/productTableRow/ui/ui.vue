<template>
	<tr class="product-row"  >
		<td data-col="1">
			<div class="cell">
				{{ product.city }}
			</div>
		</td>
		<td data-col="2">
			<div class="cell -wordwrap">
				{{ product.en_name}}
			</div>
		</td>
		<td data-col="3">
			<div class="cell">
				{{ product.product_sn }}
			</div>
		</td>
		<td data-col="4">
			<div class="cell">
				{{product.education}}
			</div>
		</td>
		<td data-col="5">
			<div class="cell">
				{{ product.language }}
			</div>
		</td>
		<td data-col="6">
			<div class="cell -nowrap">
				<div>
					<p>{{ product.arrival_year }}</p>
					<p>{{ product.arrival_season }}</p>
				</div>
			</div>
		</td>
		<td data-col="7">
			<div class="cell">
				{{ product.scholarship_type }}
			</div>
		</td>
		<td data-col="8">
			<div class="cell">
				{{ product.end_at }}
			</div>
		</td>
		<td data-col="9">
			<div class="cell">
				<button>Apply</button>
			</div>
		</td>
	</tr>
</template>

<script setup lang="ts">
	import type { Product } from "@/types/product.types";

	const props = defineProps({
		product: Object as Product,
	})

</script>

<style lang="scss" scoped>
	.product-row {
		border-bottom: 1px solid #e4e4e4;

		td {
			padding: 12px 0;

			&:nth-child(2) {
				cursor: pointer;
				color:  #7edab4;

				&:hover {
					text-decoration: underline;
				}
			}

			.cell {
				padding: 0 10px;
				text-align: center;
				font-size: 14px;
				line-height: 23px;
				white-space: normal;
				word-break: break-all;
				text-overflow: ellipsis;

				& > div p {
					margin: 0;
				}

				&.-nowrap {
					word-break: normal;
				}

				&.-wordwrap {
					word-break: break-word;
				}
			}
		}
	}
</style>
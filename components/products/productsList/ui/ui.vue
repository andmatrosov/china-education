<template>
	<div class="products">
		<!-- Загрузка данных -->
		<div v-if="isLoading" class="products-loader">Загрузка данных...</div>

		<!-- Ошибка -->
		<div v-else-if="error" class="products-error">
			Ошибка: {{ fetchMessage }}
		</div>

		<div class="products-list__wrapper" v-else>
			<div class="products-list__header">
				<span>Programs</span>
				<ToggleCheckbox @change="changeView"/>
			</div>
			<ul class="products-list__list -cards" v-if="showCards">
				<li v-for="product in productItems" :key="product.id">
					ID: {{ product.id }}, ProductSN: {{ product.product_sn }}
				</li>
			</ul>
			<table class="products-list__list -table" colspan="1" rowspan="1" v-else>
				<colgroup>
					<col name="el-table_2_column_10" width="100">
					<col name="el-table_2_column_11" width="110">
					<col name="el-table_2_column_12" width="90">
					<col name="el-table_2_column_13" width="85">
					<col name="el-table_2_column_14" width="130">
					<col name="el-table_2_column_15" width="70">
					<col name="el-table_2_column_16" width="120">
					<col name="el-table_2_column_17" width="120">
					<col name="el-table_2_column_18" width="85">
				</colgroup>
				<thead border="collapse">
					<tr>
						<td>
							<div class="cell">
								City, Province
							</div>
						</td>
						<td>
							<div class="cell">
								Program name
							</div>
						</td>
						<td>
							<div class="cell">
								Program ID
							</div>
						</td>
						<td>
							<div class="cell">
								Degree
							</div>
						</td>
						<td>
							<div class="cell">
								Teaching language
							</div>
						</td>
						<td>
							<div class="cell">
								Intake
							</div>
						</td>
						<td>
							<div class="cell">
								Scholarship type
							</div>
						</td>
						<td>
							<div class="cell">
								Deadline
							</div>
						</td>
						<td>
							<div class="cell">
								Apply
							</div>
						</td>
					</tr>
				</thead>
				<tbody>
					<ProductTableRow v-for="product in productItems" :product="product" :key="product.id"/>
				</tbody>
			</table>
		</div>

	</div>
</template>

<script setup lang="ts">
import { ProductTableRow } from "@/components/products/productTableRow";
import { ToggleCheckbox} from "@/components/shared/toggle";
import {useProductsStore} from "@/store/products";
import {computed, ref} from "vue";

const productsStore = useProductsStore();

// Загрузка данных с использованием await
const { pending, error } = await useAsyncData('products', () => productsStore.fetchProducts(),{
	key: 'products',
	initialCache: true,
	lazy: true
});

// Реактивные данные
const productItems = computed(() => productsStore.getProducts);
const fetchMessage = computed(() => productsStore.fetchMessage);
const isLoading = computed(() => productsStore.isLoading);

const showCards = ref<Boolean>(false);

const changeView = (value: boolean) => {
	showCards.value = value;
}

</script>

<style lang="scss" scoped>
	.products {
		&-loader,
		&-error {
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: 400px;
		}

		&-list {
			&__header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				padding:  20px 10px;
			}

			&__list {
				min-width: 800px;
				overflow: auto;

				&.-table {
					border-collapse: collapse;
					thead {
						background-color: #7edab4;
						border-color: inherit;
						td {
							padding: 12px 0;
						}
						.cell {
							padding: 0 10px;
							font-size: 12px;
							font-weight: 600;
							text-align: center;
							white-space: nowrap;
						}
					}
				}
			}
		}
	}
</style>
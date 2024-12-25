import { defineStore } from 'pinia';
import { type Product } from "@/types/product.types";
import axios from 'axios';

export const useProductsStore = defineStore('products', {
    state: () => ({
        productItems: [] as Array<Product>,
        code: 0,
        message: '',
        total: 0,
        pageSize: 12,  // Значение по умолчанию
        total_pages: 0,
        currentPage: 1, // Текущая страница
        type: 1,      // Тип продуктов
        isLoading: true,
    }),
    actions: {
        // Получение продуктов с параметрами запроса
        async fetchProducts() {
            try {
                this.isLoading = true

                const { data } = await axios.get('api/products', {
                    params: {
                        limit: this.pageSize,
                        page: this.currentPage,
                        type: this.type
                    }
                })

                this.productItems = data.data || []
                this.code = data.code
                this.message = data.message || ''
                this.total = data.total || 0
                this.pageSize = data.pageSize || 12
                this.total_pages = data.total_pages || 0

                this.isLoading = false

            } catch (error) {
                console.error('Ошибка при загрузке данных:', error)
                this.message = 'Произошла ошибка при загрузке данных'
            }
        },
        // Метод для изменения текущей страницы и обновления данных
        async setPage(page: number) {
            this.currentPage = page
            await this.fetchProducts()
        },
        // Метод для изменения типа и обновления данных
        async setType(type: number) {
            this.type = type
            await this.fetchProducts()
        }
    },
    getters: {
        getProducts: (state) => state.productItems,
        getTotal: (state) => state.total,
        getPageSize: (state) => state.pageSize,
        getTotalPages: (state) => state.total_pages,
        getCurrentPage: (state) => state.currentPage,
        fetchMessage: (state) => state.message,
        fetchCode: (state) => state.code,
        getIsLoading: (state) => state.isLoading
    },
    setters: {
        setPage: (state, page) => state.page = page,
    }
})
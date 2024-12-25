<template>
  <div v-if="showPagination" class="pagination">
    <div class="pagination__row">
      <button
        type="button"
        class="pagination__btn"
        @click="changePage(_currentPage - 1)"
        :disabled="_currentPage === 1"
      >
        <Icon icon="ArrowLeft" color="#7EDAB4" />
      </button>

      <ul class="pagination__list">
        <li
          @click="changePage(1)"
          class="pagination-list__item"
          :class="{ active: _currentPage === 1 }"
        >
          1
        </li>
        <li v-if="showJumpLeft">...</li>
        <li
          class="pagination-list__item"
          v-for="btn in pageButtons"
          :key="`btn-${btn.label}`"
          @click="changePage(btn.value)"
          :class="{ active: _currentPage === btn.value }"
        >
          {{ btn.label }}
        </li>
        <li v-if="showJumpRight">...</li>
        <li
          @click="changePage(totalPages)"
          class="pagination-list__item"
          :class="{ active: _currentPage === totalPages }"
        >
          {{ totalPages }}
        </li>
      </ul>

      <button
        type="button"
        class="pagination__btn"
        @click="changePage(_currentPage + 1)"
        :disabled="_currentPage === totalPages"
      >
        <Icon icon="ArrowRight" color="#7EDAB4" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@/components/shared/Icon";
import { useProductsStore } from "@/store/products";
import { storeToRefs } from "pinia";

const store = useProductsStore();
const showPagination = ref(false);
const pageButtons = ref<PageButtons[]>([]);

interface PageButtons {
  label: string;
  value: number;
}
const showJumpLeft = ref(false);
const showJumpRight = ref(true);

const {
  getTotalPages: totalPages,
  getCurrentPage: currentPage,
  getIsLoading: isLoading,
} = storeToRefs(store);

const _currentPage = ref(currentPage.value);

const changePage = (page: number) => {
  if (page < 1 || page > totalPages.value) return; // Ограничиваем переходы
  _currentPage.value = page; // Обновляем текущую страницу
  generatePagination(); // Перегенерируем кнопки пагинации
};

const generatePagination = () => {
  pageButtons.value = []; // Сбрасываем предыдущие кнопки

  const edgeRange = 5; // Показываем первые/последние 5 страниц
  const range = 2; // Диапазон страниц вокруг текущей

  // Если текущая страница находится в первых 5
  if (_currentPage.value <= edgeRange - 1) {
    for (let i = 2; i <= Math.min(edgeRange, totalPages.value - 1); i++) {
      pageButtons.value.push({ label: i.toString(), value: i });
    }
    showJumpLeft.value = false; // Убираем многоточие слева
    showJumpRight.value = totalPages.value > edgeRange - 1; // Показываем многоточие справа
  }
  // Если текущая страница находится в последних 5
  else if (_currentPage.value >= totalPages.value - edgeRange + 1) {
    showJumpLeft.value = totalPages.value > edgeRange; // Показываем многоточие слева
    showJumpRight.value = false; // Убираем многоточие справа
    for (let i = totalPages.value - edgeRange - 1; i < totalPages.value; i++) {
      pageButtons.value.push({ label: i.toString(), value: i });
    }
  }
  // Если текущая страница в середине
  else {
    showJumpLeft.value = true; // Показываем многоточие слева
    showJumpRight.value = true; // Показываем многоточие справа
    const start = Math.max(2, _currentPage.value - range);
    const end = Math.min(totalPages.value - 1, _currentPage.value + range);

    for (let i = start; i <= end; i++) {
      pageButtons.value.push({ label: i.toString(), value: i });
    }
  }
};

watch([totalPages, currentPage], () => {
  if (totalPages.value > 0 && !isLoading.value) {
    generatePagination();
    showPagination.value = true;
  }
});
</script>

<style lang="scss" scoped>
.pagination {
  &__row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__btn {
    padding: 0 4px;
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
  }

  &__list {
    display: flex;
    list-style: none;
    padding-left: 0;
    margin: 0;
    gap: 6px;
  }

  &-list {
    &__item {
      color: #333333;
      cursor: pointer;
      padding: 0 4px;
      &:hover,
      &:focus {
        color: #7edab4;
      }

      &.active {
        color: #7edab4;
      }
    }
  }
}
</style>

<script setup>
import { ref, reactive, watchEffect } from "vue";
import { fetchEndpoint } from "../api";
import DataTable from "../components/DataTable.vue";
import FiltersPanel from "../components/FiltersPanel.vue";
import Pagination from "../components/Pagination.vue";
import { watch } from "vue";

const props = defineProps({
  endpoint: { type: String, required: true },
  columns: { type: Array, required: true },
});

const rows = ref([]);
const total = ref(0);
const page = ref(1);
const limit = ref(20);

const today = new Date().toISOString().slice(0, 10);
const weekAgo = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const filters = reactive({ q: "", dateFrom: weekAgo, dateTo: today });
const filtersStocks = reactive({ q: "", dateFrom: today, dateTo: today });
function formatDate(date) {
  if (!date) return null;
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
async function fetchData() {
  try {
    let params = {};
    let dateFromParam = filters.dateFrom;
    let dateFromStock = filtersStocks.dateFrom;

    if (Array.isArray(dateFromParam)) {
      dateFromParam = dateFromParam[0];
    }

    if (props.endpoint.includes("stocks")) {
      params = {
        dateFrom: formatDate(filtersStocks.dateFrom),
        dateTo: formatDate(filtersStocks.dateTo),
        search: filtersStocks.q,
        page: page.value,
        limit: limit.value,
        dateFrom: dateFromStock,
        key: "E6kUTYrYwZq2tN4QEtyzsbEBk3ie",
      };
    } else {
      params = {
        page: page.value,
        limit: limit.value,
        dateFrom: formatDate(filters.dateFrom),
        dateTo: formatDate(filters.dateTo),
        search: filters.q,
        key: "E6kUTYrYwZq2tN4QEtyzsbEBk3ie",
      };
    }

    const data = await fetchEndpoint(props.endpoint, params);
    rows.value = data.data || [];
    total.value = data.meta?.total || 0;
  } catch (e) {
    console.error(e);
  }
}

function onPageChange(p) {
  page.value = p;
}

function onFilterApply() {
  page.value = 1;
}

watch(
  [() => filters.dateFrom, () => filters.dateTo, () => filters.q, page, limit],
  () => {
    fetchData();
  },
  { immediate: true }
);
</script>

<template>
  <FiltersPanel v-model="filters" @apply="onFilterApply" />
  <DataTable :columns="columns" :rows="rows" />
  <div class="pagination-wrapper">
    <Pagination
      :page="page"
      :pageSize="limit"
      :total="total"
      @update:page="onPageChange"
    />
  </div>
</template>
<style scoped>
.el-pagination {
  justify-content: flex-end;
}

.el-pagination .el-pager li {
  margin: 0 6px;
}

.el-pagination .active {
  background-color: #409eff;
  color: white;
}

.pagination-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>

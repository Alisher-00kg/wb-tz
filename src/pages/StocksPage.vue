<script setup>
import MainPage from "./MainPage.vue";

const columns = [
  { prop: "date", label: "Date" },
  { prop: "last_change_date", label: "Last Change Date" },
  { prop: "supplier_article", label: "Supplier Article" },
  { prop: "tech_size", label: "Tech Size" },
  { prop: "barcode", label: "Barcode" },
  { prop: "quantity", label: "Quantity" },
  { prop: "is_supply", label: "Is Supply" },
  { prop: "is_realization", label: "Is Realization" },
  { prop: "quantity_full", label: "Quantity Full" },
  { prop: "warehouse_name", label: "Warehouse Name" },
  { prop: "in_way_to_client", label: "In Way To Client" },
  { prop: "in_way_from_client", label: "In Way From Client" },
  { prop: "nm_id", label: "NM ID" },
  { prop: "subject", label: "Subject" },
  { prop: "category", label: "Category" },
  { prop: "brand", label: "Brand" },
  { prop: "sc_code", label: "SC Code" },
  { prop: "price", label: "Price" },
  { prop: "discount", label: "Discount" },
];
</script>

<template>
  <MainPage endpoint="stocks" :columns="columns" />
</template>

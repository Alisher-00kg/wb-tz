<script setup>
import MainPage from "./MainPage.vue";

const columns = [
  { prop: "g_number", label: "G Number" },
  { prop: "date", label: "Date" },
  { prop: "last_change_date", label: "Last Change Date" },
  { prop: "supplier_article", label: "Supplier Article" },
  { prop: "tech_size", label: "Tech Size" },
  { prop: "barcode", label: "Barcode" },
  { prop: "total_price", label: "Total Price" },
  { prop: "discount_percent", label: "Discount %" },
  { prop: "warehouse_name", label: "Warehouse" },
  { prop: "oblast", label: "Oblast" },
  { prop: "income_id", label: "Income ID" },
  { prop: "odid", label: "ODID" },
  { prop: "nm_id", label: "NM ID" },
  { prop: "subject", label: "Subject" },
  { prop: "category", label: "Category" },
  { prop: "brand", label: "Brand" },
  { prop: "is_cancel", label: "Is Cancel" },
  { prop: "cancel_dt", label: "Cancel Date" },
];
</script>

<template>
  <MainPage endpoint="orders" :columns="columns" />
</template>

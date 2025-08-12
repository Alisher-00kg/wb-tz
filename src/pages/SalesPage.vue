<script setup>
import MainPages from "./MainPage.vue";
const columns = [
  { prop: "g_number", label: "G Number" },
  { prop: "date", label: "Date" },
  { prop: "last_change_date", label: "Last Change Date" },
  { prop: "supplier_article", label: "Supplier Article" },
  { prop: "tech_size", label: "Tech Size" },
  { prop: "barcode", label: "Barcode" },
  { prop: "total_price", label: "Total Price" },
  { prop: "discount_percent", label: "Discount %" },
  { prop: "is_supply", label: "Is Supply" },
  { prop: "is_realization", label: "Is Realization" },
  { prop: "promo_code_discount", label: "Promo Code Discount" },
  { prop: "warehouse_name", label: "Warehouse" },
  { prop: "country_name", label: "Country" },
  { prop: "oblast_okrug_name", label: "Oblast Okrug" },
  { prop: "region_name", label: "Region" },
  { prop: "income_id", label: "Income ID" },
  { prop: "sale_id", label: "Sale ID" },
  { prop: "odid", label: "ODID" },
  { prop: "spp", label: "SPP" },
  { prop: "for_pay", label: "For Pay" },
  { prop: "finished_price", label: "Finished Price" },
  { prop: "price_with_disc", label: "Price With Discount" },
  { prop: "nm_id", label: "NM ID" },
  { prop: "subject", label: "Subject" },
  { prop: "category", label: "Category" },
  { prop: "brand", label: "Brand" },
  { prop: "is_storno", label: "Is Storno" },
];
</script>

<template>
  <MainPages endpoint="sales" :columns="columns" />
</template>

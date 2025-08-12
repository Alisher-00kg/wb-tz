<template>
  <el-table :data="rows" style="width: 100%">
    <el-table-column
      v-for="col in columns"
      :key="col.prop"
      :prop="col.prop"
      :label="col.label"
    />
  </el-table>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  rows: { type: Array, default: () => [] },
  columns: { type: Array, default: () => [] },
});
</script>
<style>
.el-table th,
.el-table td {
  white-space: normal !important;
}
</style>

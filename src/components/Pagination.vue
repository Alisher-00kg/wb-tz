<template>
  <el-pagination
    background
    :page-size="pageSize"
    :current-page.sync="page"
    :total="total"
    @current-change="onChange"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({ page: Number, pageSize: Number, total: Number });
const emit = defineEmits(["update:page"]);

function onChange(p) {
  emit("update:page", p);
}
</script>

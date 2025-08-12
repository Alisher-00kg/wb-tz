<template>
  <div class="filters-panel">
    <el-form :inline="true" @submit.prevent>
      <el-form-item label="Search">
        <el-input v-model="local.q" placeholder="Search" clearable />
      </el-form-item>

      <el-form-item label="Date from">
        <el-date-picker
          v-model="local.dateFrom"
          type="date"
          placeholder="From"
          value-format="yyyy-MM-dd"
          clearable
        />
      </el-form-item>

      <el-form-item label="Date to">
        <el-date-picker
          v-model="local.dateTo"
          type="date"
          placeholder="To"
          value-format="yyyy-MM-dd"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <el-button @click="apply">Submit</el-button>
        <el-button @click="reset" type="default">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({ q: "", dateFrom: null, dateTo: null }),
  },
});
const emit = defineEmits(["update:modelValue", "apply"]);

const local = reactive({ q: "", dateFrom: null, dateTo: null });

watch(
  () => props.modelValue,
  (newVal) => {
    Object.assign(local, newVal || {});
  },
  { immediate: true }
);

function apply() {
  emit("update:modelValue", { ...local });
  emit("apply");
}

function reset() {
  local.q = "";
  local.dateFrom = null;
  local.dateTo = null;
  apply();
}
</script>

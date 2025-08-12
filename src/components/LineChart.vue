<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

defineProps({
  labels: {
    type: Array,
    default: () => [],
  },
  values: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: "Data",
  },
});

const chartCanvas = ref(null);
let chartInstance = null;

function createChart() {
  if (!chartCanvas.value) return;

  chartInstance = new Chart(chartCanvas.value, {
    type: "line",
    data: {
      labels: props.labels,
      datasets: [
        {
          label: props.label,
          data: props.values,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: props.label,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

watch(
  () => [props.labels, props.values],
  () => {
    if (chartInstance) {
      chartInstance.data.labels = props.labels;
      chartInstance.data.datasets[0].data = props.values;
      chartInstance.update();
    }
  },
  { deep: true }
);

onMounted(() => {
  createChart();
});

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});
</script>

<style scoped>
canvas {
  max-width: 100%;
}
</style>
`

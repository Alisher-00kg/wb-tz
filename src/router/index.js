import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/incomes",
    component: () => import("../pages/MainPage.vue"),
    props: {
      endpoint: "incomes",
      columns: [
        { prop: "income_id", label: "Income ID" },
        { prop: "number", label: "Number" },
        { prop: "date", label: "Date" },
        { prop: "last_change_date", label: "Last Change Date" },
        { prop: "supplier_article", label: "Supplier Article" },
        { prop: "tech_size", label: "Tech Size" },
        { prop: "barcode", label: "Barcode" },
        { prop: "quantity", label: "Quantity" },
        { prop: "total_price", label: "Total Price" },
        { prop: "date_close", label: "Date Close" },
        { prop: "warehouse_name", label: "Warehouse" },
        { prop: "nm_id", label: "NM ID" },
      ],
    },
  },
  {
    path: "/orders",
    component: () => import("../pages/OrdersPage.vue"),
  },
  {
    path: "/sales",
    component: () => import("../pages/SalesPage.vue"),
  },
  {
    path: "/stocks",
    component: () => import("../pages/StocksPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

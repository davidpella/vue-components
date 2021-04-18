import { createWebHistory, createRouter } from 'vue-router';

import HomePage from "../Pages/Home.vue";
import AboutPage from "../Pages/About.vue";
import ContentMenu from "../Pages/ContentMenu.vue";
import ScrollAnElement from "../Pages/ScrollAnElement.vue";
import TableColumnResize from "../Pages/TableColumnResize.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    },
    {
        path: '/context-menu',
        name: 'contextMenu',
        component: ContentMenu,
    },
    {
        path: '/table-column-resize',
        name: 'tableColumnResize',
        component: TableColumnResize,
    },
    {
        path: '/scroll-an-element-to-ensure-it-is-visible-in-a-scrollable-container',
        name: 'scrollAnElementToEnsureItIsVisibleInAScrollableContainer',
        component: ScrollAnElement,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;

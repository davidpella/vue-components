import { createWebHistory, createRouter } from 'vue-router';

import GSAP from "../Pages/GSAP.vue";
import HomePage from "../Pages/Home.vue";
import AboutPage from "../Pages/About.vue";
import ContentMenu from "../Pages/ContentMenu.vue";
import ScrollAnElement from "../Pages/ScrollAnElement.vue";
import TableColumnResize from "../Pages/TableColumnResize.vue";
import Dropdown from "../Pages/Dropdown.vue";
import Listbox from "../Pages/Listbox.vue";

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
        path: '/gsap',
        name: 'gsap',
        component: GSAP
    },
    {
        path: '/scroll-an-element-to-ensure-it-is-visible-in-a-scrollable-container',
        name: 'scrollAnElementToEnsureItIsVisibleInAScrollableContainer',
        component: ScrollAnElement,
    },
    {
        path: '/dropdown',
        name: 'dropdown',
        component: Dropdown,
    },
    {
        path: '/listbox',
        name: 'listbox',
        component: Listbox,
    }
];

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

export default router;

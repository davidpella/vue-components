import { defineComponent, h } from "vue";

export const Root = defineComponent({
    name: 'Table.Root',
    setup(props, { slots, attrs }) {
        return () => h('table', {
            class: 'w-full'
        }, slots)
    }
});

export const Body = defineComponent({
    name: 'Table.Body',
    setup(props, { slots, attrs }) {
        return () => h('tbody', {}, slots)
    }
});

export const Head = defineComponent({
    name: 'Table.Head',
    setup(props, { slots, attrs }) {
        return () => h('thead', {}, slots)
    }
});

export const Foot = defineComponent({
    name: 'Table.Foot',
    setup(props, { slots, attrs }) {
        return () => h('tfoot', {}, slots)
    }
});

export const Header = defineComponent({
    name: 'Table.Header',
    setup(props, { slots, attrs }) {
        return () => h('th', {
            class: 'px-4 py-4 border text-xs text-gray-900 text-left font-semibold'
        }, slots)
    }
});

export const Row = defineComponent({
    name: 'Table.Row',
    setup(props, { slots, attrs }) {
        return () => h('tr', {}, slots)
    }
});

export const Cell = defineComponent({
    name: 'Table.Cell',
    setup(props, { slots, attrs }) {
        return () => h('td', {
            class: 'px-4 py-4 border text-xs text-gray-900 text-left'
        }, slots)
    }
});

export const Column = defineComponent({
    name: 'Table.Column',
    setup(props, { slots, attrs }) {
        return () => h('col', {}, slots)
    }
});

export const ColumnGroup = defineComponent({
    name: 'Table.ColumnGroup',
    setup(props, { slots, attrs }) {
        return () => h('colgroup', {}, slots)
    }
});

export const Caption = defineComponent({
    name: 'Table.Caption',
    setup(props, { slots, attrs }) {
        return () => h('caption', {}, slots)
    }
});

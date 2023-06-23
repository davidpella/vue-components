import { defineComponent, h } from "vue";
import FormRoot from "./FormRoot.vue";

export const Root = defineComponent({
    extends: FormRoot,
    name: 'Form.Root',
    // setup(props, { slots, attrs }) {
    //     return () => h('form', {}, slots)
    // }
});

export const Legend = defineComponent({
    name: 'Form.Legend',
    setup(props, { slots, attrs }) {
        return () => h('legend', {
            class: 'block w-full text-sm text-blue-700 font-semibold'
        }, slots);
    }
});

export const Fieldset = defineComponent({
    name: 'Form.Fieldset',
    setup(props, { slots, attrs }) {
        return () => h('fieldset', {}, slots);
    }
});

export const Label = defineComponent({
    name: 'Form.Label',
    setup(props, { slots, attrs }) {
        return () => h('label', {
            class: 'text-xs text-gray-900 font-medium'
        }, slots);
    }
});

export const Error = defineComponent({
    name: 'Form.Error',
    setup(props, { slots, attrs }) {
        return () => h('div', {
            class: 'text-xs text-red-600 font-medium'
        }, slots);
    }
});

export const Help = defineComponent({
    name: 'Form.Help',
    setup(props, { slots, attrs }) {
        return () => h('div', {
            class: 'text-xs text-gray-500'
        }, slots);
    }
});

export const Input = defineComponent({
    name: 'Form.Input',
    setup(props, { slots, attrs }) {
        return () => h('input', {
            class: 'px-2.5 py-2 border border-gray-300 text-xs text-gray-700 font-normal'
        }, null);
    }
});

export const File = defineComponent({
    name: 'Form.File',
    setup(props, { slots, attrs }) {
        return () => h('input', {
            type: 'file',
            class: 'text-xs text-gray-700 font-normal'
        }, slots)
    }
});

export const Progress = defineComponent({
    name: 'Form.Progress',
    setup(props, { slots, attrs }) {
        return () => h('progress', {}, null)
    }
});

export const Textarea = defineComponent({
    name: 'Form.Textarea',
    setup(props, { slots, attrs }) {
        return () => h('textarea', {}, null)
    }
});

export const Select = defineComponent({
    name: 'Form.Select',
    setup(props, { slots, attrs }) {
        return () => h('select', {
            class: 'px-2.5 py-2 border border-gray-300 text-xs text-gray-700 font-normal'
        }, slots)
    }
});

export const OptionGroup = defineComponent({
    name: 'Form.Optgroup',
    setup(props, { slots, attrs }) {
        return () => h('optgroup', {}, null)
    }
});

export const Option = defineComponent({
    name: 'Form.Option',
    setup(props, { slots, attrs }) {
        return () => h('option', {}, slots)
    }
});

export const Button = defineComponent({
    name: 'Form.Button',
    setup(props, { slots, attrs }) {
        return () => h('button', {
            class: 'bg-blue-700 py-2 px-2.5 text-xs text-white font-medium'
        }, slots)
    }
});

export const Meter = defineComponent({
    name: 'Form.Meter',
    setup(props, { slots, attrs }) {
        return () => h('meter', {}, null)
    }
});

export const Output = defineComponent({
    name: 'Form.Output',
    setup(props, { slots, attrs }) {
        return () => h('output', {}, null)
    }
});



/*
*
* - Field
* - Message
* - ValidityState
*
* */



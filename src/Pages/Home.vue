<template>
    <div class="px-16">
        <h1 class="text-base text-gray-700 font-medium">
            Home
        </h1>

        <div class="mt-4 text-sm text-gray-600">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque, dolorum earum illum inventore possimus
                praesentium tenetur unde vero voluptatibus. Dolor eligendi fugit hic nisi pariatur quia quibusdam quis ullam?
            </p>
        </div>


        <div class="my-6">
            <div class="flex items-center space-x-3 border-b py-3">
                <button type="button" class="flex items-center px-3 py-1.5 space-x-2 rounded-md hover:bg-gray-100 transition">
                    <TableColumnsIcon class="w-5 h-5 text-gray-500" />

                    <span class="text-sm text-gray-600 font-normal">
                        Columns
                    </span>
                </button>

                <button type="button" class="flex items-center px-3 py-1.5 space-x-2 rounded-md hover:bg-gray-100 transition">
                    <FilterIcon class="w-5 h-5 text-gray-500" />

                    <span class="text-sm text-gray-600 font-normal">
                        Filters
                    </span>
                </button>

                <button type="button" class="flex items-center px-3 py-1.5 space-x-2 rounded-md hover:bg-gray-100 transition">
                    <SettingsSlidersIcon class="w-5 h-5 text-gray-500" />

                    <span class="text-sm text-gray-600 font-normal">
                        Adjustments
                    </span>
                </button>

                <button type="button" class="flex items-center px-3 py-1.5 space-x-2 rounded-md hover:bg-gray-100 transition">
                    <DownloadIcon class="w-5 h-5 text-gray-500" />

                    <span class="text-sm text-gray-600 font-normal">
                        Exports
                    </span>
                </button>

                <button type="button" class="flex items-center px-3 py-1.5 space-x-2 rounded-md hover:bg-gray-100 transition">
                    <SettingsIcon class="w-5 h-5 text-gray-500" />

                    <span class="text-sm text-gray-600 font-normal">
                        Settings
                    </span>
                </button>

                <button type="button" class="flex items-center px-3 py-1.5 space-x-2 rounded-md hover:bg-gray-100 transition">
                    <ColumnsHorizontalIcon class="w-5 h-5 text-gray-500" />

                    <span class="text-sm text-gray-600 font-normal">
                        Visibility
                    </span>
                </button>
            </div>
        </div>

        <div class="my-6">
            <div class="space-y-4">
                <div>Push this button to do something you shouldn't be doing:</div>

                <div :class="{ shake: noActivated }" class="space-x-4">
                    <button
                        @click="noActivated = true"
                        class="px-4 py-2 border rounded"
                    >Click me</button>

                    <span v-if="noActivated">Oh no!</span>
                </div>
            </div>
        </div>

        <hr />

        <div class="my-6">
            <button
                type="button"
                class="bg-blue-600 text-white font-medium px-5 py-2 rounded-lg rotate-12 focus:outline-none"
                @click.prevent="toggle"
            >{{ isVisible ? 'Hide' : 'Show' }} Post</button>

            <transition
                enter-active-class="transition ease-in transform"
                enter-from-class="translate-x-40 opacity-0"
                enter-to-class="translate-x-0 opacity-100"

                leave-active-class="transition ease-out"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div v-if="isVisible" class="mt-4 space-y-3">
                    <h1 class="text-3xl font-black">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h1>

                    <p class="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium dolorem eligendi magnam
                        magni molestiae nobis possimus saepe suscipit! Dolorem, quod, repudiandae? Ad architecto blanditiis
                        ducimus est et sit temporibus!
                    </p>
                </div>
            </transition>
        </div>

        <hr />

        <div class="my-6">
            <h1 class="text-3xl font-black">
                List Entering/Leaving Transitions
            </h1>

            <div class="mt-4 space-y-4">
                <div class="flex items-center divide-x">
                    <button
                        type="button"
                        class="text-sm font-medium focus:outline-none pr-4"
                        @click.prevent="add"
                    >Add</button>

                    <button
                        type="button"
                        class="text-sm font-medium focus:outline-none px-4"
                        @click.prevent="remove"
                    >Remove</button>

                    <button
                        type="button"
                        class="text-sm font-medium focus:outline-none px-4"
                        @click.prevent="shuffle"
                    >Shuffle</button>
                </div>

                <transition-group
                    name="list"
                    tag="div"
                    class="space-x-4"
                    enter-active-class="transition ease-in transform"
                    enter-from-class="translate-y-8 opacity-0"
                    enter-to-class="translate-y-0 opacity-100"

                    leave-active-class="transition ease-out transform"
                    leave-from-class="translate-y-0 opacity-100"
                    leave-to-class="translate-y-8 opacity-0"

                    move-class="transition transform ease-in-out duration-500"
                >
                    <span class="inline-block" :key="item" v-for="item in items">
                        {{ item }}
                    </span>
                </transition-group>

                <hr />

                <table class="w-full table-auto">
                    <transition-group
                        name="list"
                        tag="tbody"
                        class="space-x-4"
                        enter-active-class="transition ease-in transform"
                        enter-from-class="translate-y-8 opacity-0"
                        enter-to-class="translate-y-0 opacity-100"

                        leave-active-class="transition ease-out transform"
                        leave-from-class="translate-y-0 opacity-100"
                        leave-to-class="translate-y-8 opacity-0"

                        move-class="transition transform ease-in-out duration-500"
                    >
                        <tr class="border-b" :key="item" v-for="(item, index) in items">

                            <td class="px-4 py-2 text-sm text-gray-600">
                                {{ item }}
                            </td>
                            <td class="px-4 py-2 text-sm text-gray-600">
                                David
                            </td>
                            <td class="px-4 py-2 text-sm text-gray-600">
                                Pella
                            </td>
                            <td class="px-4 py-2 text-sm text-gray-600">
                                david.pella@example.com
                            </td>
                            <td class="px-4 py-2 text-sm text-gray-600">
                                +255 762 764 819
                            </td>
                            <td class="px-4 py-2 text-sm text-gray-600">
                                <button
                                    class="flex items-center space-x-2 text-red-500 font-medium"
                                    type="button"
                                    @click.prevent="destroy(index)"
                                >
                                    <TrashIcon class="w-5 h-5" />
                                    <span>Remove</span>
                                </button>
                            </td>
                        </tr>
                    </transition-group>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import shuffle from 'lodash/shuffle';
import {
    TableColumnsIcon,
    FilterIcon,
    DownloadIcon,
    SettingsSlidersIcon,
    SettingsIcon,
    ColumnsHorizontalIcon,
    TrashIcon,
} from '@iconicicons/vue3';

export default {
    components: {
        TableColumnsIcon,
        FilterIcon,
        DownloadIcon,
        SettingsIcon,
        SettingsSlidersIcon,
        ColumnsHorizontalIcon,
        TrashIcon,
    },
    data() {
        return {
            noActivated: false,
            isVisible: true,
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNumber: 10,
        }
    },
    methods: {
        toggle() {
            this.isVisible = !this.isVisible;
        },
        randomIndex() {
            return Math.floor(Math.random() * this.items.length);
        },
        add() {
            this.items.splice(this.randomIndex(), 0, this.nextNumber++);
        },
        remove() {
            this.items.splice(this.randomIndex(), 1);
        },
        shuffle() {
            this.items = shuffle(this.items);
        },
        destroy(index) {
            this.items.splice(index, 1);
        }
    }

}
</script>

<style>
.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
}

@keyframes shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
</style>

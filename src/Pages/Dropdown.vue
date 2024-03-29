<template>
    <h1 class="text-3xl font-black text-gray-800">
        Menu (Dropdown)
    </h1>

    <p class="text-lg text-gray-600 font-normal mt-3">
        Menus offer an easy way to build custom, accessible dropdown components with robust support for keyboard navigation.
    </p>

    <div class="flex justify-end mt-4">
        <div class="w-56 text-right">
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-50 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Options

                        <ChevronDownIcon
                            class="w-5 h-5 ml-2 -mr-1 text-white hover:text-white"
                            aria-hidden="true"
                        />
                    </MenuButton>
                </div>

                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <button :class="[active ? 'bg-blue-500 text-white' : 'text-gray-900','group flex rounded-md items-center w-full px-2 py-2 text-sm',]">
                                    <PencilIcon
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-blue-400"
                                        aria-hidden="true"
                                    />
                                    Edit
                                </button>
                            </MenuItem>

                            <MenuItem v-slot="{ active }">
                                <button :class="[active ? 'bg-blue-500 text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full px-2 py-2 text-sm',]">
                                    <DuplicateIcon
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-blue-400"
                                        aria-hidden="true"
                                    />

                                    Duplicate
                                </button>
                            </MenuItem>
                        </div>

                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <button :class="[active ? 'bg-blue-500 text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full px-2 py-2 text-sm',]">
                                    <ArchiveIcon
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-blue-400"
                                        aria-hidden="true"
                                    />

                                    Archive
                                </button>
                            </MenuItem>

                            <MenuItem v-slot="{ active }">
                                <button :class="[active ? 'bg-blue-500 text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full px-2 py-2 text-sm',]">
                                    <CursorClickIcon
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-blue-400"
                                        aria-hidden="true"
                                    />
                                    Move
                                </button>
                            </MenuItem>
                        </div>

                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <button :class="[active ? 'bg-blue-500 text-white' : 'text-gray-900', 'group flex rounded-md items-center w-full px-2 py-2 text-sm',]">
                                    <TrashIcon
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-blue-400"
                                        aria-hidden="true"
                                    />

                                    Delete
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
    </div>
</template>

<script>
import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
} from '@headlessui/vue'
import {
    ChevronDownIcon,
    ArchiveIcon,
    DuplicateIcon,
    TrashIcon,
    PencilIcon,
    CursorClickIcon
} from '@heroicons/vue/solid';

export default {
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
        ChevronDownIcon,
        ArchiveIcon,
        DuplicateIcon,
        TrashIcon,
        PencilIcon,
        CursorClickIcon,
    },
}
</script>

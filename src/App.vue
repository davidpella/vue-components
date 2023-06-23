<template>
    <div class="container mx-auto my-12">
        <div class="grid grid-cols-4 gap-8">
            <aside class="col-span-1">
                <nav class="divide-y">
                    <router-link
                        :to="{ name: 'home' }"
                        class="block py-3 text-sm text-gray-600"
                    >Home</router-link>

                    <router-link
                        :to="{ name: 'about' }"
                        class="block py-3 text-sm text-gray-600"
                    >About this project</router-link>

                    <router-link
                        :to="{ name: 'scrollAnElementToEnsureItIsVisibleInAScrollableContainer' }"
                        class="block py-3 text-sm text-gray-600"
                    >Scroll an element to ensure it is visible in a scrollable container</router-link>

                    <a
                        href="#"
                        class="block py-3 text-sm text-gray-600"
                    >Scroll to an element smoothly</a>

                    <router-link
                        :to="{ name: 'contextMenu' }"
                        class="block py-3 text-sm text-gray-600"
                    >Context menu</router-link>

                    <a
                        href="#"
                        class="block py-3 text-sm text-gray-600"
                    >Create a custom scrollbar</a>

                    <a
                        href="#"
                        class="block py-3 text-sm text-gray-600"
                    >Download a file</a>

                    <router-link
                        :to="{ name: 'tableColumnResize' }"
                        class="block py-3 text-sm text-gray-600"
                    >Resize columns of a table</router-link>

                    <a
                        href="#"
                        class="block py-3 text-sm text-gray-600"
                    >Date picker</a>

                    <a
                        href="#"
                        class="block py-3 text-sm text-gray-600"
                    >Autocomplete</a>

                    <a
                        href="#"
                        class="block py-3 text-sm text-gray-600"
                    >Autosuggestion</a>

                    <router-link
                        :to="{ name: 'gsap' }"
                        class="block py-3 text-sm text-gray-600"
                    >The GreenSock Animation Platform (GSAP)</router-link>

                    <router-link
                        :to="{ name: 'dropdown' }"
                        class="block py-3 text-sm text-gray-600"
                    >Dropdown</router-link>

                    <router-link
                        :to="{ name: 'listbox' }"
                        class="block py-3 text-sm text-gray-600"
                    >Listbox</router-link>

                    <router-link
                        :to="{ name: 'namespace-component' }"
                        class="block py-3 text-sm text-gray-600"
                    >Namespace Component</router-link>
                </nav>
            </aside>

            <main class="col-span-3">
                <RouterView />
            </main>
        </div>
    </div>
</template>

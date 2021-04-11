<template>
    <div class="container mx-auto my-12">
        <div class="flex -mx-3">
            <aside class="w-1/4 px-3">
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

                    <a
                        href="#"
                        class="block py-3 text-sm text-gray-600"
                    >Resize columns of a table</a>

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
                </nav>
            </aside>

            <main class="w-3/4 px-3">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

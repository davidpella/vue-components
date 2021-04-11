<template>
    <div class="px-16">
        <h1 class="text-base text-gray-700 font-medium">
            Context Menu
        </h1>

        <div class="mt-4 space-y-4">
            <div class="mt-4 text-sm text-gray-600">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis distinctio dolorem
                    doloremque eaque explicabo, fugit harum impedit in ipsam minus nesciunt, praesentium
                    quibusdam reiciendis repudiandae sunt suscipit veniam voluptate voluptatum.
                </p>
            </div>

            <div class="relative">
                <button
                    type="button"
                    class="px-3 py-1.5 rounded-md shadow bg-blue-600 text-white text-sm font-medium"
                    @contextmenu.prevent="show"
                >Right Click</button>

                <div id="menu" class="absolute hidden w-32 bg-white rounded-md shadow-lg border divide-y">
                    <a class="block w-full px-3 py-2 text-sm text-gray-600" href="">Edit</a>
                    <a class="block w-full px-3 py-2 text-sm text-gray-600" href="">Create</a>
                    <a class="block w-full px-3 py-2 text-sm text-gray-600" href="">Update</a>
                    <a class="block w-full px-3 py-2 text-sm text-gray-600" href="">Delete</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            show(e) {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // // Set the position for menu
                menu.style.top  = `${y}px`;
                menu.style.left = `${x}px`;

                // Show the menu
                menu.classList.remove('hidden');

                document.addEventListener('click', this.documentClickHandler);
            },
            documentClickHandler(e) {
                const isClickedOutside = !menu.contains(e.target);

                if (isClickedOutside) {
                    // Hide the menu
                    menu.classList.add('hidden');

                    // Remove the event handler
                    document.removeEventListener('click', this.documentClickHandler);
                }
            }
        }
    }
</script>

<template>
    <div class="px-16">
        <h1 class="text-base text-gray-700 font-medium">
            Resize columns of a table
        </h1>

        <div class="mt-4 text-sm text-gray-600">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque, dolorum earum illum inventore possimus
                praesentium tenetur unde vero voluptatibus. Dolor eligendi fugit hic nisi pariatur quia quibusdam quis ullam?
            </p>
        </div>

        <div class="mt-4">
            <div>
                <p>width: {{ width }} and x-axis: {{ xAxis }}</p>
            </div>

            <div class="mt-4">
                <table ref="resizeable" class="table border border-collapse">
                    <caption>
                        Table Resizable Columns
                    </caption>

                    <thead>
                        <tr class="text-sm">
                            <th class="relative px-3 py-2 text-sm text-gray-500 font-medium border whitespace-nowrap text-left">
                                No.
                            </th>
                            <th class="relative px-3 py-2 text-sm text-gray-500 font-medium border whitespace-nowrap text-left">
                                First name
                            </th>
                            <th class="relative px-3 py-2 text-sm text-gray-500 font-medium border whitespace-nowrap text-left">
                                Last Name
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr :key="row.id" v-for="row in rows">
                            <td class="border px-3 py-2">{{ row.id }}</td>
                            <td class="border px-3 py-2">{{ row.first_name }}</td>
                            <td class="border px-3 py-2">{{ row.last_name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-6">
                <table class="w-full border border-collapse">
                    <caption>
                        Table Sort Icon
                    </caption>

                    <thead>
                        <tr class="text-sm">
                            <th class="relative px-3 py-2 border whitespace-nowrap text-left">
                                <button type="button" class="flex items-center space-x-2">
                                    <span class="text-sm font-medium">No.</span>
                                </button>
                            </th>

                            <th class="relative px-3 py-2 border whitespace-nowrap text-left">
                                <button type="button" class="flex items-center space-x-2">
                                    <svg class="h-4 w-4 text-gray-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="4" y1="6" x2="13" y2="6"></line>
                                        <line x1="4" y1="12" x2="11" y2="12"></line>
                                        <line x1="4" y1="18" x2="11" y2="18"></line>
                                        <polyline points="15 15 18 18 21 15"></polyline>
                                        <line x1="18" y1="6" x2="18" y2="18"></line>
                                    </svg>

                                    <span class="text-sm font-medium">First Name</span>
                                </button>
                            </th>

                            <th class="relative px-3 py-2 border whitespace-nowrap text-left">
                                <button type="button" class="flex items-center space-x-2">
                                    <span class="text-sm font-medium">Last Name</span>
                                </button>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr :key="row.id" v-for="row in rows">
                            <td class="border px-3 py-2">{{ row.id }}</td>
                            <td class="border px-3 py-2">{{ row.first_name }}</td>
                            <td class="border px-3 py-2">{{ row.last_name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-6">
                <HeadlessTable
                    :rows="rows"
                    :columns="columns"
                    #default="{ rows, cols, selectAll }"
                >
                    <table class="w-full border border-collapse">
                        <TableHead>
                            <thead>
                                <tr>
                                    <TableColumn>
                                        <th class="px-3 py-2 border text-left">
                                            <input type="checkbox" @click="selectAll" />
                                        </th>

                                        <th class="px-3 py-2 border text-left" v-for="column in columns">
                                            {{ column.label }}
                                        </th>
                                    </TableColumn>
                                </tr>
                            </thead>
                        </TableHead>

                        <TableBody>
                            <tbody v-for="row in rows">
                                <TableRow :row="row" #default="{ show }">
                                    <tr @click="show">
                                        <TableCell>
                                            <td class="px-3 py-2 border text-left">
                                                <input type="checkbox" v-model="row.checked" />
                                            </td>

                                            <td class="px-3 py-2 border text-left" v-for="column in columns">
                                                {{ row[column.name] }}
                                            </td>
                                        </TableCell>
                                    </tr>
                                </TableRow>

                                <tr v-if="row.open">
                                    <TableCell>
                                        <td class="px-3 py-2 border" colspan="4">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                                alias aliquam incidunt labore magnam. Ab aperiam assumenda dolore error
                                                facilis incidunt, nisi repellat, repellendus reprehenderit repudiandae
                                                sunt voluptatem voluptates. Quibusdam!
                                            </p>
                                        </td>
                                    </TableCell>
                                </tr>
                            </tbody>
                        </TableBody>
                    </table>
                </HeadlessTable>
            </div>
        </div>
    </div>
</template>

<script>
import HeadlessTable from "../Components/HeadlessTable.vue";
import TableHead from "../Components/TableHead.vue";
import TableColumn from "../Components/TableColumn.vue";
import TableBody from "../Components/TableBody.vue";
import TableCell from "../Components/TableCell.vue";
import TableRow from "../Components/TableRow.vue";

export default {
    components: {
        TableRow,
        TableCell,
        TableBody,
        TableColumn,
        TableHead,
        HeadlessTable
    },
    data() {
        return {
            width: 0,
            xAxis: 0,
            rows: [
                {
                    id: "1",
                    first_name: "Andrea",
                    last_name: "Ross",
                },
                {
                    id: "2",
                    first_name: "Penelope",
                    last_name: "Mills",
                },
                {
                    id: "3",
                    first_name: "Sarah",
                    last_name: "Grant",
                },
                {
                    id: "4",
                    first_name: "Vanessa",
                    last_name: "Roberts",
                },
                {
                    id: "5",
                    first_name: "Oliver",
                    last_name: "Alsop",
                },
                {
                    id: "6",
                    first_name: "Jennifer",
                    last_name: "Forsyth",
                },
                {
                    id: "7",
                    first_name: "Michelle",
                    last_name: "King",
                },
                {
                    id: "8",
                    first_name: "Steven",
                    last_name: "Kelly",
                },
                {
                    id: "9",
                    first_name: "Julian",
                    last_name: "Ferguson",
                },
                {
                    id: "10",
                    first_name: "Chloe",
                    last_name: "Ince",
                },
            ],
            columns: [
                {
                    name: 'id',
                    label: 'ID',
                    sortable: true
                },
                {
                    name: 'first_name',
                    label: 'First Name',
                    sortable: true
                },
                {
                    name: 'last_name',
                    label: 'Last Name',
                    sortable: true
                },
            ],
        }
    },
    mounted() {
        this.createResizableTable(this.$refs.resizeable);
    },
    methods: {
        createResizableTable(table) {
            const columns = table.querySelectorAll('th');

            [].forEach.call(columns, (column) => {
                // Add a resizer element to the column
                const resizer = document.createElement('div');

                // Add class
                resizer.classList.add('resizer');

                // Set the height
                resizer.style.height = `${table.offsetHeight}px`;

                // Append
                column.appendChild(resizer);

                this.createResizableColumn(column, resizer);
            });
        },
        createResizableColumn(column, resizer) {
            const mouseMoveHandler = (e) => {
                column.style.width = `${this.width + (e.clientX - this.xAxis)}px`;
            };

            const mouseUpHandler = () => {
                resizer.classList.remove('resizing');
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            };

            resizer.addEventListener('mousedown', (event) => {
                this.xAxis = event.clientX;

                const styles = window.getComputedStyle(column);

                this.width = parseInt(styles.width, 10);

                document.addEventListener('mouseup', mouseUpHandler);

                document.addEventListener('mousemove',  mouseMoveHandler);

                resizer.classList.add('resizing');
            });
        },
    }
}
</script>

<style>
.resizer {
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    cursor: col-resize;
    user-select: none;
}
.resizer:hover, .resizing {
    border-right: 2px solid #2563EB;
}
</style>

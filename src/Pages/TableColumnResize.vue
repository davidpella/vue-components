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
                    <thead>
                        <tr class="text-sm">
                            <th class="relative px-3 py-2 border whitespace-nowrap text-left">No.</th>
                            <th class="relative px-3 py-2 border whitespace-nowrap text-left">First name</th>
                            <th class="relative px-3 py-2 border whitespace-nowrap text-left">Last name</th>
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

            <div class="mt-4">
                <HeadlessTable
                    :rows="rows"
                    :columns="columns"
                    #default="{ rows, cols, selectAll }"
                >
                    <table class="border border-collapse">
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

                        <TableBody v-for="row in rows">
                            <tbody>
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
import HeadlessTable from "../components/HeadlessTable.vue";
import TableHead from "../components/TableHead.vue";
import TableColumn from "../components/TableColumn.vue";
import TableBody from "../components/TableBody.vue";
import TableCell from "../components/TableCell.vue";
import TableRow from "../components/TableRow.vue";

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

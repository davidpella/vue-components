<script>
export default {
    props: {
        rows: {
            required: true,
        },
        columns: {
            required: true,
        }
    },
    data() {
        return {
            items: null,
        }
    },
    mounted() {
        this.items = this.rows.map(item => {
            return Object.assign({ checked: false }, item);
        });
    },
    render(h) {
        return this.$slots.default({
            rows: this.items,
            columns: this.columns,
            selectAll: this.selectAll,
        })
    },
    methods: {
        selectAll(event) {
            if (event.target.value) {
                this.items = this.rows.map(item => {
                    return Object.assign({
                        open: false,
                        checked: true,
                    }, item);
                });
            } else {
                this.items = this.rows.map(item => {
                    return Object.assign({ checked: false }, item);
                });
            }
        }
    }
}
</script>

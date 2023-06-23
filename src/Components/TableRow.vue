<script>
export default {
    props: {
        row: {
            required: true,
        }
    },
    render(h) {
        return this.$slots.default({
            show: this.show
        })
    },
    methods: {
        show() {
            this.row.open = true;
        }
    }
}
</script>

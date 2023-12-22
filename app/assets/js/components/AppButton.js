export default {
    template: `
        <button class="bg-gray-200 hover:bg-gray-400 border rounded px-5 px-2 disabled:cursor-not-allowed" :disabled="processing">
            <slot />
        </button>
    `,

    props: {
        type: String
    },

    data() {
        return {
            processing: true
        };
    }
}

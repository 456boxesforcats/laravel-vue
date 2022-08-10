<template>
    <textarea
        rows="3"
        :value="modelValue"
        @input="updateInput"
        class="form-control"
        :class="{ 'is-invalid': error.length !== 0}">
    </textarea>
    <span v-if="error[0]" class="text-danger" role="alert">
        {{ error[0] }}
    </span>
</template>

<script>
export default {
    name: "BaseTextarea",
    props: {
        error: {
            type: Array,
            default: [],
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
        type: {
            type: String,
            default: "text",
        }
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        }
    }
};
</script>

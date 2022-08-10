<template>
    <input
        :type="type"
        :value="modelValue"
        @input="updateInput"
        class="form-control"
        :class="{ 'is-invalid': error.length !== 0}"
    />
    <span v-if="error[0]" class="text-danger" role="alert">
        {{ error[0] }}
    </span>
</template>

<script>
export default {
    name: "BaseInput",
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

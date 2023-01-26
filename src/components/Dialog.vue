<template>
    <div class="dialog" v-if="isVisible">
        <div class="dialog-overlay"></div>
        <div class="dialog-content">
            <div class="dialog-header">{{ title }}</div>
            <div class="dialog-body">{{ message }}</div>
            <div class="dialog-footer">
                <button @click="isVisible = false">Cancel</button>
                <button @click="isVisible = false">Confirm</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Dialog',
    props: {
        title: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        isVisible: {
            type: Boolean,
            default: false
        }
    }
}
</script>
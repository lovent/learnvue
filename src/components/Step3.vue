<template>
    <section>
        <h2>This is the final page</h2>
        <p>Say something before you go</p>
        <input type="text" v-model="isaid">
        <br>
        <p>You said: <span>{{ isaid }}</span></p>
        <router-link to='/'>Home</router-link>
    </section>
</template>

<script>
export default {
    name: 'Step3',
    data() {
        return {
            isaid: ''
        }
    }
}
</script>

<style lang="postcss" scoped>
    span {
        color: red;
    }
</style>

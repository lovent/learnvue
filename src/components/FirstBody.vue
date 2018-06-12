<template>
    <div class="body">
        <section class="first-section">
            <h3>Your information</h3>
            <p>Your name: <input v-model="user.name" type="text" placeholder="name"></p>
            <p>Your password: <input v-model="user.password" type="password" placeholder="password"></p>
            <p>Your gender:
                <select v-model="user.gender" name="gender" id="">
                    <option value="1" selected disabled>---Select your gender---</option>
                    <option value="2">Male</option>
                    <option value="3">Female</option>
                    <option value="4">Other</option>
                </select>
            </p>
            <button>Confirm</button>
            <button>Cancel</button>
            <h1 v-if="user.name == null && user.gender == null" style="color: orange">Welcome to my app</h1>
            <h1 v-else-if="user.gender == 2 && user.name != null" style="color: green">Hello Sir, {{user.name}}</h1>
            <h1 v-else-if="user.gender == 3 && user.name != null" style="color: red">Hello Madam, {{user.name}}</h1>
            <h1 v-else style="color: black">Hello</h1>
            <br>
            <br>
            <router-link to='/Step2'>Next Step</router-link>
        </section>
    </div>
</template>

<script>
export default {
    name: 'body',
    data () {
        return {
            user: {}
        }
    }
}
</script>

<style scoped>
    a {
        color: red;
    }
    img {
        width: 800px;
    }
</style>

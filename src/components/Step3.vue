<template>
    <section>
        <div class="app">
            <h2>This is the final page</h2>
            <p>Say something before you go</p>
            <input type="text" v-model="isaid">
            <br>
            <p>You said: <span>{{ isaid }}</span></p>
        </div>
        <div class="info">
            <h3>Your information</h3>
            <p>Name: <input v-model="user.name" type="text" placeholder="name"></p>
            <p>Password: <input v-model="user.password" type="password" placeholder="password"></p>
            <p>Gender:
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
        </div>
    </section>
</template>

<script>
export default {
    name: 'Step3',
    data () {
        return {
            isaid: '',
            user: {}
        }
    }
}
</script>

<style lang="postcss" scoped>
    .info  {
        float: left;
        margin-left: 150px;
    }
    .info p {
        text-align: left;
    }
    .app {
        float: right;
        margin-right: 100px;
    }
    span {
        color: red;
    }
</style>

<template>
    <div class="body">
        <section class="first-section">
            <h3>Your information</h3>
            <p>Your name: <input type="text" placeholder="name"></p>
            <p>Your email: <input type="email" placeholder="email"></p>
            <p>Your gender:
                <select name="gender" id="">
                    <option value="1" selected disabled>---Select your gender---</option>
                    <option value="2">Male</option>
                    <option value="3">Female</option>
                    <option value="4">Other</option>
                </select>
            </p>
            <button>Confirm</button>
            <button>Cancel</button>
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
            msg: ''
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

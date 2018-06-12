<template>
    <div class="body">
        <nav>
            <h2>My Profile</h2>
            <div v-bind="user">
                <img class="avatar" :src="user.avatar">
                <br>
                <b>My name:</b><p>{{ user.name }}</p>
                <br>
                <b>Date Of Birth:</b><p>{{ user.dob }}</p>
                <br>
                <b>Job:</b><p>{{ user.job }}</p>
            </div>
        </nav>
        <section class="first-section">
            <h2>List Application</h2>
            <ul v-for="app in apps" :key="app">
                <li>
                    <img class="logo" :src="app.logo" srcset="">
                    <router-link to='/Pestool'>{{ app.name }}</router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'body',
    data () {
        return {
            user: {
                name: 'Vương Minh Thái',
                dob: '06/09/1995',
                job: 'developer',
                avatar: 'https://appdata.chatwork.com/avatar/2463/2463977.rsz.jpg'
            },
            apps: [
                {name: 'PESTOOL', logo: 'https://vignette.wikia.nocookie.net/logopedia/images/7/72/PES.png/revision/latest?cb=20161212004025&format=original', link: ''},
                {name: 'TEST2', logo: 'https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/88/e9/a1/88e9a1bb-c6fb-fa24-7ee1-19562cb735f7/mzl.ieyzrpeo.jpg/246x0w.jpg', link: ''},
                {name: 'TEST3', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg', link: ''}
            ]
        }
    }
}
</script>

<style scoped>
    nav {
        float: left;
        position: relative;
        max-width: 300px;
        margin: 0;
        padding: 1em;
    }
    .avatar {
        width: 100px;
    }
    .logo {
        width: 40px;
    }
    li {
        text-align: left;
    }
    a {
        color: red;
    }
    section {
        float: center;
        position: relative;
        margin-left: 300px;
        border-left: 1px solid gray;
        padding: 1em;
        overflow: hidden;
    }
</style>

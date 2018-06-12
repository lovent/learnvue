<template>
    <section class="second-section">
        <div class="row">
            <div class="nation" v-for="nation of nations" :key="nation">
                <h4>{{ nation.name }}</h4>
                <img :src="nation.flag">
            </div>
        </div>
        <div>
            <router-link to='/'>Previous</router-link>
            <router-link to='/step3'>Next</router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'second-section',
    data () {
        return {
            nations: [
                {name: 'Argentina', flag: 'http://flags.fmcdn.net/data/flags/w580/ar.png'},
                {name: 'Brazil', flag: 'http://flags.fmcdn.net/data/flags/w580/br.png'},
                {name: 'Denmark', flag: 'http://flags.fmcdn.net/data/flags/w580/dk.png'},
                {name: 'England', flag: 'http://flags.fmcdn.net/data/flags/w580/gb.png'},
                {name: 'France', flag: 'http://flags.fmcdn.net/data/flags/w580/fr.png'},
                {name: 'Germany', flag: 'http://flags.fmcdn.net/data/flags/w580/de.png'},
                {name: 'Holland', flag: 'http://flags.fmcdn.net/data/flags/w580/nl.png'},
                {name: 'Italy', flag: 'http://flags.fmcdn.net/data/flags/w580/it.png'},
                {name: 'Japan', flag: 'http://flags.fmcdn.net/data/flags/w580/jp.png'},
                {name: 'Korea', flag: 'http://flags.fmcdn.net/data/flags/w580/kr.png'},
                {name: 'Nigeria', flag: 'http://flags.fmcdn.net/data/flags/w580/ng.png'},
                {name: 'Vietnam', flag: 'http://flags.fmcdn.net/data/flags/w580/vn.png'}
            ]
        }
    }
}
</script>

<style scoped>
    img {
        width: 400px;
    }
</style>

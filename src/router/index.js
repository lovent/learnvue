import Vue from 'vue'
import Router from 'vue-router'
import FirstBody from '@/components/FirstBody'
import Step2 from '@/components/Step2'
import Step3 from '@/components/Step3'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'FirstBody',
            component: FirstBody
        },
        {
            path: '/step2',
            name: 'Step2',
            component: Step2
        },
        {
            path: '/step3',
            name: 'Step3',
            component: Step3
        }
    ]
})

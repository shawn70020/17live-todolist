import Vue from 'vue';
import myLoading from '../loading'
if (process.client) {
    Vue.use(myLoading, {
        icon: require('../assets/_images/loading.png'),
        progressColor: 'blue'
    })
}


import Vue from 'vue';
//这里的 icon 要换成你本地的
import myLoading from '../loading'
if (process.client) {
    Vue.use(myLoading, {
        icon: require('../assets/_images/loading.png'),
        progressColor: 'blue'
    })
}


import LoadingComponent from './loading.vue';
export default {
    install(Vue, options) {
        const Loading = Vue.extend(LoadingComponent);
        const myLoading = new Loading({
            el: document.createElement('div')
        });
		
        document.body.appendChild(myLoading.$el);

        if(options){
            if(options.icon)
                myLoading.icon = options.icon;
            if(options.progressColor)
                myLoading.progressColor = options.progressColor;
        }
        const myLoadingMethod = {
            open() {
                myLoading.show = true;
            },
            hide() {
                myLoading.show = false;
            }
        };
        Vue.prototype.$myLoading = myLoadingMethod;
    }
}

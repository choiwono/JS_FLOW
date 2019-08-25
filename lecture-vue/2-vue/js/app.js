new Vue({
    el : '#app',
    data : {
        query : ''
    },
    methods : {
        onSubmit(e){

        },
        onReset(e){
            let el = document.querySelector('#search-model');
            el.style.display = 'none';
        },
        onKeyup(e){
            if(!this.query.length)
                this.onReset();
        }
    }
})
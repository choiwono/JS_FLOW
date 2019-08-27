import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'

new Vue({
    el : '#app',
    data : {
        query : '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
        searchResult: [],
        keywords: []
    },
    created(){
        this.selectedTab = this.tabs[0]
        this.onKeyword();
    },
    methods : {
        onSubmit(e){
            this.search()
        },
        onReset(e){
            this.resetForm()
            this.submitted = false;
            this.searchResult = []
        },
        onKeyup(e){
            if(!this.query.length) this.onReset();
        },
        resetForm(){
            this.query = ''
        },
        search(){
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
        onClickTab(tab){
            if(tab === '추천 검색어'){
                this.selectedTab = this.tabs[0]
                this.onKeyword();
            } else {
                this.selectedTab = tab;
                this.keywords = [];
            }
        },
        onKeyword(){
            KeywordModel.list().then(data => {
                this.keywords = data;
            })
        }
    }
})
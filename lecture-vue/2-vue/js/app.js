import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.JS'

new Vue({
    el : '#app',
    data : {
        query : '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
        searchResult: [],
        keywords: [],
        history: []
    },
    created(){
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
        this.fetchHistory()
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
        onClickKeyword(keyword){
            this.query = keyword
            this.search()
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
            this.selectedTab = tab;
        },
        fetchKeyword(){
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        },
        fetchHistory(){
            HistoryModel.list().then(data => {
                this.history = data
            })
        }
    }
})
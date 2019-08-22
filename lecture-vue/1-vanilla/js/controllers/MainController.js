import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import SearchModel from '../models/SearchModel.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js';
import KeywordModel from '../models/KeywordModel.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onReset())

    TabView.setup(document.querySelector('#tabs'))
      .on('@change', e => this.onShowActive(e.detail.tabName))

    KeywordView.setup(document.querySelector('#search-keyword'))
    ResultView.setup(document.querySelector('#search-result'))  
    
    this.selectedTab = '추천 검색어'
    TabView.setActiveTab(this.selectedTab)
    this.renderView()
  },

  renderView(){
    console.log(tag, 'renderView()')
    TabView.setActiveTab(this.selectedTab)

    if(this.selectedTab === '추천 검색어'){
      //console.log(this.selectedTab)
      this.fetchSearchKeyword()
    } else {

    }

  },
  fetchSearchKeyword(){
    KeywordModel.list().then(data => {
      KeywordView.render(data)
    })
  },
  search(query){
    console.log(tag, 'search()', query);
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },

  onResetForm(){
    ResultView.hide()
  },

  onReset(){
    console.log(tag, 'onReset()')
    this.onResetForm()
  },

  onSearchResult(data){
    ResultView.render(data)
  },

  onShowActive(tabName){
    console.log(tag, "onShowActive()",tabName)
  }
}
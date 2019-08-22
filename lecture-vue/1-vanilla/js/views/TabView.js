import View from './View.js'

const tag = '[TabView]'
// view를 상속받는 객체를 만든다.
const TabView = Object.create(View);

TabView.setup = function (el) {
    this.init(el)
    this.li = this.el.querySelectorAll('li')
    this.bindEvents();
    return this
}

TabView.setActiveTab = function(tabName){
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.className = li.innerHTML === tabName ? 'active' : ''
    })
}

TabView.bindEvents = function(){
    //this.li.addEventListener('click', e => this.showActiveTab())
    //console.log(this.li);
    for(let i=0; i<this.li.length; i++)
        this.li[i].addEventListener('click', e => this.showActiveTab(this.li[i].innerHTML))
}

TabView.showActiveTab = function(tabName){
    console.log(tag,'showActiveTab()')
    this.setActiveTab(tabName)
    this.emit('@change',{tabName})
}

export default TabView
var body = document.getElementById('body');
var nav = body.getElementsByClassName('nav-list')[0];
var nav_li = nav.getElementsByTagName('a');
var main = body.getElementsByClassName('body-main')[0];
let main_li = main.getElementsByClassName('main-list');
let navList = document.getElementsByClassName('nav-list')[0];
let navItem = document.getElementsByClassName('nav-item');
function onEventListener(parentNode, action, childClassName, callback) {
    parentNode.addEventListener(action, function (e) {
        if (e.target.className.indexOf(childClassName) >= 0) {
            callback(e);
        }
    })
};
this.onEventListener(navList, 'click', 'nav-item', this.toggle);
function toggle(e) {
    let len = navItem.length;
    for (let i = 0; i < len; i++) {
        navItem[i].className = 'nav-item';
        main_li[i].className = "main-list hidden";
    }
    e.target.className = 'nav-item active';
    let arr =Array.from(navItem);
    let index=arr.findIndex((item)=>{
        return item.className==='nav-item active';
    });
    main_li[index].className="main-list show"
}
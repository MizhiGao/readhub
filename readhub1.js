var body = document.getElementById('body');
var nav = body.getElementsByClassName('nav-list')[0];
var nav_li = nav.getElementsByTagName('a');
var main = body.getElementsByClassName('body-main')[0];
var main_li = main.getElementsByClassName('main-list');
var i,j,n,len;
for(i=0,len=nav_li.length;i<len;i++){
    nav_li[i].index=i;
    nav_li[i].onclick=function onclick(){
        for(n=0;n<len;n++){
            nav_li[n].className="nav-item";
            main_li[n].className="main-list hidden";
        }
    this.className="nav-item active";
    main_li[this.index].className="main-list show";
    return false;   
    }
}
var topic_item = main.getElementsByClassName('topic-item');
var summary = main.getElementsByClassName('topic-summary');
var more_info=main.getElementsByClassName('more-info');
for(j=0,topic_len=topic_item.length;j<topic_len;j++){
    topic_item[j].index=j;
    topic_item[j].onclick=function onclick(){
        this.className ="topic-item opened"
        summary[this.index].className="topic-summary content-all";
        more_info[this.index].className="more-info";
        return false;   
    }
}

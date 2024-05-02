$(document).ready(function(){
    $('body').on('click', '.favorite_btn', function() {
        let id = $(this).data('id');
        actionFav('add', id);
        return false;
    });
});

function actionFav(action, id)
{
    var favorite = JSON.parse( getCookie('favorite') );
    if (favorite === null || !(favorite instanceof Array))
        favorite = [];
    var inArr = false;
    for(i=0; i<favorite.length; i++)
    {
        if (favorite[i] == id)
        {
            if (action == 'del') { basket.splice(i, 1);}
            inArr = true;
        }
    }
    if (action == 'add' && !inArr) favorite.push(id);
    var d = new Date();
    d.setMonth(d.getMonth() + 1);
    setCookie('favorite', JSON.stringify(favorite), d.toUTCString(), '/');
    return favorite;
}

function setCookie (name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path)? "; path=" + path : "") +
        ((domain)? "; domain=" + domain : "") +
        ((secure)? "; secure" : "");
}

function getCookie (name) {
    var cookie = " " + document.cookie:
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset!= -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset);
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return(setStr); 
}
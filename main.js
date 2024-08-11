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
    var cookie = " " + document.cookie;
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






window.addEventListener('scroll', function () {
    var headerNew = document.querySelector('.header-img');
    if (window.scrollY > 50) {
        headerNew.classList.add("scroll-header-img");
    } else {
        headerNew.classList.remove("scroll-header-img");
    }
});

.scroll-header {
    padding: 0;
}
.scroll-img {
    width: 80%;
    margin-top: 5px;
}

var headerScroll = document.querySelector('.header__row');
var headerImgScroll = document.querySelector('.header__img');
window.onscroll = function() {
    windowScroll();
};
function windowScroll() {
    headerScroll.classList.toggle("scroll-header", headerScroll.scrollTop > 50 || document.documentElement.scrollTop > 50);
    headerImgScroll.classList.toggle("scroll-img", headerScroll.scrollTop > 50 || document.documentElement.scrollTop > 50);
}



const desktopMenu = document.querySelector('.menu__list');

if (desktopMenu) {
	const menuItems = desktopMenu.querySelectorAll('.menu__item');
	if (menuItems.length > 3) {
		let updatedMenuList = ``;
		menuItems.forEach((item, index) => {
			if (index > 3) {
				const link = item.querySelector('.menu__item-link');
				item.className = 'submenu__item';
				link.className = 'submenu__item-link';
				updatedMenuList += item.outerHTML;
				item.remove();
			}
		});

		const li = document.createElement('li');
		li.classList.add('menu__item');
		li.classList.add('menu__item--parent');
		li.innerHTML = `
			<span class="menu__item-link">Еще</span>
			<div class="submenu-wrapper">
				<ul class="submenu">
					${updatedMenuList}
				</ul>
			</div>
		`;
		desktopMenu.appendChild(li);
	}
}



    let search = document.querySelector('.main_menu__search');
    let close = document.querySelector('.close-button');
    let searchForm = document.querySelector('.main_menu__form');
    let body = document.querySelector("body");
    search.addEventListener('click', () => {
        searchForm.classList.toggle('search_form--active');
        body.classList.toggle('search_form--active');
    });
    close.addEventListener('click', () => {
        searchForm.classList.toggle('search_form--active');
        body.classList.toggle('search_form--active');
    });

   

    window.addEventListener('click', function(e){
        searchForm.removeClass('search_form--active');
        body.removeClass('search_form--active');
     });
     var triggerSearch = document.querySelector('.search-input');
     triggerSearch.addEventListener('click', function(e){
        e.stopPropagation();
     });

     <style>
        .logo-scroll {
            
        }

     </style>



    var logo = document.querySelector('.elementor-widget-container').getElementsByTagName('a');
    var header = document.getElementsByTagName('header');
    
    window.addEventListener('scroll', function () {
        var headerNew = document.querySelector('.header-img');
        if (window.scrollY > 50) {
            headerNew.classList.add("scroll-header-img");
        } else {
            headerNew.classList.remove("scroll-header-img");
        }
    });


var formReview = document.querySelectorAll('.product-reviews__form');
var buttonReview = document.querySelectorAll('.reviews__form-button');
buttonReview.addEventListener('click', () => {
    formReview.classList.toggle('product-reviews__form-active');
});



<style>
.scroll-logoScroll {
    width: 120px !important;
} 
.scroll-divlogoScroll {
    padding: 0 10px !important;
}
.scroll-divmenuScroll {
    padding: 0 10px !important;
}
.scroll-menuScroll {
    padding: 0 10px !important;
}
</style>


const headerLogoScroll = document.querySelector('.header__svg-scroll');
const headerLogo = document.querySelector('.header__svg'); 

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        headerLogo.classList.add("header__svg-scroll");
        headerLogoScroll.classList.add("header__svg-block");
    } else {
        headerLogo.classList.remove("header__svg-scroll");
        headerLogoScroll.classList.remove("header__svg-block");
    }
});




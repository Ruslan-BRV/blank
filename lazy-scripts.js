let fired = false;

function createScriptElement(src = '', content = '', options) {
    const script = document.createElement('script');
    if (src !== '') {
        script.src = src;
    }
    if (content !== '') {
        script.innerHTML = content;
    }
    for (const key in options) {
        script.setAttribute(key, options[key]);
    }
    document.body.appendChild(script);
}

window.addEventListener('click', function (e) {
    if (!fired) {
        fired = true;
        createScriptElement('https://www.google.com/recaptcha/api.js?render=6LfjKVYnAAAAABAkBQu6Pk5WuXkF0bqSM1pKZp7s')
    }
});

window.addEventListener('load', function (e) {
    createScriptElement('https://www.google.com/recaptcha/api.js?render=6LfjKVYnAAAAABAkBQu6Pk5WuXkF0bqSM1pKZp7s')
});

window.addEventListener('scroll', function () {
    if (!fired) {
        fired = true;
        let scroll = window.scrollY;
        if (scroll > 0) {
            createScriptElement('https://www.google.com/recaptcha/api.js?render=6LfjKVYnAAAAABAkBQu6Pk5WuXkF0bqSM1pKZp7s')
        }    
    }
});



    function createScriptElement(src = '', content = '', options) {
        const script = document.createElement('script');
        if (src !== '') {
            script.src = src;
        }
        if (content !== '') {
            script.innerHTML = content;
        }
        for (const key in options) {
            script.setAttribute(key, options[key]);
        }
        document.body.appendChild(script);
    }
    window.addEventListener('load', function (e) {
        createScriptElement('', "(function(){ var widget_id = 'XkG0X4zvzv';var d=document;var w=window;function l(){var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();")
    });




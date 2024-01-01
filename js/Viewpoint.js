(function () {
    var docEl = document.documentElement;
    var isMobile = window.isMobile /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent);

    function setScale() {
        var pageScale = 1;

        if (window.top !== window) {
            return pageScale;
        }

        var width = docEl.clientWidth || 360;
        var height = docEl.clientHeight || 640;
        if (width / height >= 360 / 640) {
            // 高度优先
            pageScale = height / 640;
        } else {
            pageScale = width / 360;
        }

        var content = 'width=' + 360 + ', initial-scale=' + pageScale 
          + ', maximum-scale=' + pageScale + ', user-scalable=no';
        document.getElementById('viewport').setAttribute('content', content);

        window.pageScale = pageScale;
    }

    if (isMobile) {
        setScale();
    } else {
        docEl.className += ' pc';
    }
})()
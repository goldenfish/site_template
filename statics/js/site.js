/**
 * Created by Administrator on 15-3-13.
 */
$(function () {
    //延迟加载图片
    $("img").unveil();
    //回到顶部
    $.scrollUp({
        animation: 'fade',
        activeOverlay: '#00FFFF',
        scrollImg: {
            active: false,
            activeOverlay: false,
            type: 'background',
            src: 'statics/images/top.png'
        }
    });
});
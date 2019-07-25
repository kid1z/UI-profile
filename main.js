Vue.component('body-left',{
    template:` 
        <ul>
            <li><span><i class="fas fa-notes-medical"></i></span><p>Order  <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
            <li><span><i class="fas fa-heart"></i></span><p>Like <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
            <li><span><i class="fas fa-comments"></i></span><p>Comment <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
            <li><span><i class="fas fa-arrow-alt-circle-down"></i></span><p>Download <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
            <li><span><i class="fas fa-pen-square"></i></span><p>Edit <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
        </ul>
    `
})
Vue.component('body2-right',{
    template:` 
        <ul class="body2-right">
            <li><span><i class="fab fa-weixin"></i></span><p>Wechat  <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
            <li><span><i class="fab fa-instagram"></i></span><p>Instagram <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
            <li><span><i class="fab fa-weibo"></i></span><p>Weibo <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
            <li><span><i class="fas fa-mobile-alt"></i></span><p>Phone <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
        </ul>
    `
})
Vue.component('body1-right',{
    template:` 
        <ul class="body2-right">
            
            <li><span><i class="fas fa-broom"></i></span><p>Feedback <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
            <li><span><i class="fas fa-graduation-cap"></i></span><p>Grade <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
            <li><span><i class="fas fa-file-signature"></i></span><p>About Us <span class="arrow"><i class="fas fa-chevron-right"></i></span></p></li>
        </ul>
    `
})
new Vue({
    el: '#app',
})
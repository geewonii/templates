/**
 * 
 */
import { bodyContent } from "../common/bodyContent";
import $ from "jquery";
window.$ = $;
window.jQuery = $;
import Property from "../plugins/Property/Property";
require ("../plugins/swiper.js/swiper-3.4.2.jquery.min.js");
import "../plugins/Property/Property.css";
import "../plugins/swiper.js/swiper-3.4.2.min.css";



const requireContext = require.context("../images", true, /^\.\/.*$/);
const images = requireContext.keys().map(requireContext);
console.log(images)

const { 
  html, usuallyTable, nomalTable, pinkTable, title, title1
} = bodyContent;


export default function() {
  this.init = function () {
    const body = document.querySelector("body");
    body.innerHTML = html;
   
    const data1 = [
      {usuallyList: title},
      {usuallyList: title},
      {usuallyList: title1},
      {nomalTable},
      {usuallyList: title1},
      {pinkTable},
      {usuallyList: title1},
      {usuallyTable},
      {usuallyList: title1},
    ]
    const data2 = [
      {usuallyList: title1},
    ]
    $(function() {
      init();
      function init() {
        var idx = null;
        $(".three_tab a").each(function(){
          idx = $(this).index();
          $(this).hasClass("active")
          ?
          $(".three_list").eq(idx).fadeIn()
          :
          $(".three_list").eq(idx).fadeOut();
        });
      }

      new Swiper ('.swiper-container', {
        // loop:true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        zoom: true, //调焦
        initialSlide :1, //初始化索引
        slidesPerView:3,
        spaceBetween:20,
        effect : 'coverflow',
        freeModeSticky : true, //反弹
        observer:true, //动态检查器
        slideToClickedSlide:true,
        centeredSlides: true,
        autoHeight: true,
        coverflow: {
          rotate: 30,
          stretch: 0,
          depth: 40,
          modifier: 2,
          slideShadows : false
        },
        onInit: function(swiper){
          $(".swiper-slide").addClass("blur");
          $(".swiper-slide").eq(1).removeClass("blur");
        },
        onSlideChangeStart: function(swiper){
          $(".swiper-slide").addClass("blur");
          $(".swiper-slide").eq(swiper.activeIndex).removeClass("blur");
        }
      })

      $(".three_tab a").hover(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        init();
      })

    })
    new Property("#component1", data1, {});
    new Property("#component2", data2, {});
    new Property("#component3", data2, {});
  }
}
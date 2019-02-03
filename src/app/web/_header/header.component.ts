import { Component, OnInit } from '@angular/core';
declare var $: any; //使用jQuery

@Component({
  selector: 'scdm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // 窗口大小变化时，用于carousel
    var winHeight = $(window).height();
    $('.carousel-inner').css('height',winHeight);
    $(window).resize(()=>{
      winHeight = $(window).height();
      nh = winHeight-50;//窗口大小改变时候，navbar参数相应调整
      $('.carousel-inner').css('height',winHeight);
    });
    $('.carousel').carousel();

    // 窗口滚动时，用于navbar
    //var navbar = document.getElementById("navbar");
    var nh = winHeight-50;
    window.onscroll = function() {
        var s = document.body.scrollTop || document.documentElement.scrollTop;
        if (s > nh) {
            $(".my-navbar").addClass("top-nav navbar-fixed-top");
        } else {
            $(".my-navbar").removeClass("top-nav navbar-fixed-top");
            //navbar.className = "navbar navbar-static-top";
        };
    };

    //将navbar滚动到顶部
    var scrollPos = $('#navScrollTop').offset().top;
    var scroll_pos_duration = 700;
    $('nav.navbar a').click(function () {
      $('body,html').animate({
        scrollTop: scrollPos,
      }, scroll_pos_duration
      );
    });
    
    //给手机屏幕下拉菜单添加点击缩回事件
    $(".navbar-collapse").attr("onclick","$('.navbar-collapse').removeClass('in');");

  }

}

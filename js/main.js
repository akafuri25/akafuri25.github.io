$(document).ready(function () {

    $("#pt1 .img-pr").addClass("bg-" + (Math.floor(Math.random() * (3 - 1 + 1)) + 1));

    var controller = new ScrollMagic.Controller();

    var height = $(window).height();

    function changePT()
    {
      var height = $(window).height();
      $(".fullsize").css({
        minHeight: height,
        position: 'static',
        width: 'auto'
      });
      $(".static-fullsize").css({
        height: height,
        position: 'static',
        width: 'auto',
        top: -Math.abs(height)
      });
      $(".static-fullsize .inner-content").css('top', -Math.abs(height));
      $(".magic-triangle").css({
        'border-width': height
      })
    }

    changePT();

    $(window).resize(function() {
      changePT();
    });

    var mainMenu = new Waypoint.Sticky({
      element: $("#main-nav")
    });

    new ScrollMagic.Scene({triggerElement: "#tg1", duration: 300})
		.setTween(".the-content", 0.5, {opacity: 0}) // trigger a TweenMax.to tween
		//.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
		.addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#pt1", duration: '200%'})
    .setTween("#pt1 > .img-pr", {y: "80%", ease: Linear.easeNone})
    //.addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#tg2", duration: 500, offset: 310})
    .setPin("#pt2")
    //.addIndicators({name: "konten 1"})
    .addTo(controller);

    //set tween
    new ScrollMagic.Scene({triggerElement: "#tg2", duration: 150, offset: 200})
    .setTween(".typograph p:nth-of-type(1)", 0.5, {scale: 1})
    //.addIndicators({name: "animasi tween 1"})
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#tg2", duration: 150, offset: 220})
    .setTween(".typograph p:nth-of-type(2)", 0.5, {scale: 1})
    //.addIndicators({name: "animasi tween 2"})
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#tg2", duration: 150, offset: 240})
    .setTween(".typograph p:nth-of-type(3)", 0.5, {scale: 1})
    //.addIndicators({name: "animasi tween 3"})
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#tg2", duration: 150, offset: 260})
    .setTween(".typograph p:nth-of-type(4)", 0.5, {scale: 1})
    //.addIndicators({name: "animasi tween 4"})
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#tg2", duration: 150, offset: 240})
    .setTween(".typograph span:nth-of-type(1)", 0.5, {left: 60, opacity: 1})
    //.addIndicators({name: "animasi tween pseudo"})
    .addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#tg2", duration: 150, offset: 240})
    .setTween(".typograph span:nth-of-type(2)", 0.5, {right: 15, opacity: 1})
    //.addIndicators({name: "animasi tween pseudo"})
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#tg2", duration: 100, offset: 430})
    .setTween(".typograph", 0.5, {borderColor: '#fff'})
    //.addIndicators({name: "animasi tween lehugag"})
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#tg2", duration: 100, offset: 530})
    .setTween(".introduce", 0.5, {opacity: 1})
    //.addIndicators({name: "animasi tween lehugag"})
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#tg2", duration: 100, offset: 450})
    .setTween(".bg-typograph", 0.5, {opacity: 1})
    //.addIndicators({name: "animasi tween lehugag"})
    .addTo(controller);


    new ScrollMagic.Scene({triggerElement: "#tg4", duration: 800, offset: (height/2)-100})
    .setPin(".design-container")
    //.addIndicators({name: "Design"})
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#tg4-2", duration: 800, offset: (height/2)-100})
    .setPin(".development-container")
    //.addIndicators({name: "Design"})
    .addTo(controller);

    // HEADING 1
    function headingAnimation(trigger, element)
    {
      new ScrollMagic.Scene({triggerElement: trigger, duration: 200, offset: 0})
      .setTween(element + " > em", 0.5, {width: 0})
      //.addIndicators({name: "animasi tween lehugag"})
      .addTo(controller);
      new ScrollMagic.Scene({triggerElement: trigger, duration: 100, offset: -100})
      .setTween(element + " span > em:nth-of-type(1)", 0.5, {left: 15, opacity: 1})
      //.addIndicators({name: "animasi tween lehugag"})
      .addTo(controller);
      new ScrollMagic.Scene({triggerElement: trigger, duration: 100, offset: -100})
      .setTween(element + " span > em:nth-of-type(2)", 0.5, {right: 15, opacity: 1})
      //.addIndicators({name: "animasi tween lehugag"})
      .addTo(controller);
    }
    headingAnimation("#tg3","#heading-1");
    headingAnimation("#tg5","#heading-2");
    headingAnimation("#tg6","#heading-3");

    $("#main-nav ul li a").on('click', function() {
      TweenMax.to(window, 1, {scrollTo:{y:$($(this).attr("href")).offset().top}, ease:Power2.easeOut});
      return false;
    });
    $("#down-btn").on('click', function() {
      TweenMax.to(window, 3, {scrollTo:{y:$("#pt2").offset().top+500}, ease:Power1.easeOut});
      return false;
    });

});

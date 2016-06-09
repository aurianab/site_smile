$(document).ready(function(){

    //TweenMax for background in the header
	var $container = $('.bg-image'),
		$box = $(''),
	    container_w = $container.width(),
	    container_h = $container.height();
	$(window).on('mousemove.parallax', function(event) {

	  var pos_x = event.pageX,
	      pos_y = event.pageY,
	      left  = 0,
	      top   = 0;

	  left = container_w / 2 - pos_x;
	  top  = container_h / 2 - pos_y;
	  TweenMax.to(
		    $box, 
		    1, 
		    { 
		      css: { 
		        transform: 'translateX(' + left / 80 + 'px) translateY(' + top / 80 + 'px)' 
		      }, 
		      ease:Expo.easeOut, 
		      overwrite: 'all' 
		  });
	  TweenMax.to(
		    $container, 
		    1, 
		    { 
		      css: { 
		        transform: 'translateX(' + left / 80 + 'px) translateY(' + top / 80 + 'px)' 
		      }, 
		      ease:Expo.easeOut, 
		      overwrite: 'all' 
		  });
	});

    //GRID
    definegrid = function() {
        var browserWidth = $(window).width(); 
        if (browserWidth >= 1001) 
        {
            pageUnits = 'px';
            colUnits = 'px';
            pagewidth = 960;
            columns = 12;
            columnwidth = 71;
            gutterwidth = 10;
            pagetopmargin = 0;
            rowheight = 12.5;
            gridonload = 'off';
            makehugrid();
        } 
        if (browserWidth <= 1000) 
        {
            pageUnits = '%';
            colUnits = '%';
            pagewidth = 940;
            columns = 2;
            columnwidth = 48;
            gutterwidth = 4;
            pagetopmargin = 0;
            rowheight = 12.5;
            gridonload = 'off';
            makehugrid();
        }
        if (browserWidth <= 768) 
        {
            pageUnits = '%';
            colUnits = '%';
            pagewidth = 96;
            columns = 2;
            columnwidth = 49;
            gutterwidth = 2;
            pagetopmargin = 0;
            rowheight = 12.5;
            gridonload = 'off';
            makehugrid();
        }
    }

    $(document).ready(function() {
        definegrid();
        setgridonload();
    });    

    $(window).resize(function() {
        definegrid();
        setgridonresize();
    });

    // IMGX to do retina on <img>
    $(function() {  
        $('.retina').imgx();
    });
  
});


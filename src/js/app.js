$(document).ready( function() {

	 $(document).click(function() {
	        $(".js-select").removeClass("is-active");
		      $(".js-select-list").slideUp(100);
	    });
	    
	  // select list
	      
	    // select list
	      $("body").on("click",".js-select",function(event) {
	          event.stopPropagation();
	      });
	      $("body").on("click",".js-select-text",function(event) {
	      	var select = $(this).parents(".js-select");
	          if (select.hasClass("is-active")) {
	              $(".js-select").removeClass("is-active");
	              $(".js-select-list").slideUp(100);
	          }
	          else {
	              $(".js-select").removeClass("is-active");
	              $(".js-select-list").slideUp(100);
	              select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
	          }
	         
	      });

	      $("body").on("click",".js-select-list li",function() {
	          var val = $(this).attr("data-val");
	          var text = $(this).text();
	          var select = $(this).parents(".js-select");
	          var selectList = $(this).parents(".js-select-list");
	          select.find(".js-select-text").text(text);
	          select.find("option").removeAttr("selected");
	          select.find('option[value="'+val+'"]').attr("selected", "selected");
	          selectList.find("li").removeClass("is-active");
	          $(this).addClass("is-active");
	          select.removeClass("is-active");
	          selectList.slideUp(100);
	          return false;
	          
	      });


	// open nav
	function navOpen() {
		$('.js-list-links').each(function() {
			if ($(this).parent().hasClass('is-active')) {
				$(this).show();
			}
		});
		$('.js-nav-item').on('click', function() {
			var this_ = $(this).parent(),
				item = $('.js-nav-item').parent(),
				thisList = this_.find('.js-list-links'),
				list = $('.js-list-links');
			if (!this_.hasClass('is-active')) {
				item.removeClass('is-active');
				list.slideUp();
				this_.addClass('is-active');
				thisList.slideDown();
			}
			else {
				this_.removeClass('is-active');
				list.slideUp();
			}
			return false;
		});
	}
	navOpen();

});
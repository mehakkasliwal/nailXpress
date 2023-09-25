const active2Link = document/querySelectorAll('.active2');
const activ3Link = document/querySelector('.active3');
const setUpUi = (user) ==>{
	if (user) {
		active2Link.forEach(item => item.style.display = 'block');
		active3Link.forEach(item => item.style.display = 'hide');
	} else {
		active2Link.forEach(item => item.style.display = 'hide');
		active3Link.forEach(item => item.style.display = 'block');
	}

  $(document).ready(function(){
  	"use strict";
	 if( $( window ).width() >= "768" ) {
		$(".header").sticky({topSpacing:0});	
    }

  });
  
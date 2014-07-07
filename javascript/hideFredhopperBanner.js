	function hideFredhopperBanner()
	{
	    var list = document.getElementsByClassName('fredhopperBanner');
	    for (var i = 0; i < list.length; i++) {
	        list[i].style.display="none";
	    }
	    // var listNew = document.getElementsByClassName('image-map-fh-container');
	    // for (var e = 0; e < listNew.length; e++) {
	    //     listNew[e].style.display="none";
	    // }
	}
function readCurrentWeatherConditions() { 
	var text_box = document.getElementById('type_box');
	var text = text_box.value;
	var params = 'operation=weather&location='+text;
	var url = 'http://myth.dyndns-server.com:8333?'+params;
//	var url = 'http://www.google.com/ig/api?weather='+text;
	var xmlhttp = false;
	try {
		// Opera 8.0+, Firefox, Safari
		xmlhttp = new XMLHttpRequest();
	} catch (e) {
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
	}
	xmlhttp.open("GET", url, false);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var obj = jQuery.parseJSON(xmlhttp.responseText);
			document.getElementById('tempFa').innerHTML = "&nbsp;&nbsp;City: " + obj.location + ";<br/>"+"&nbsp;&nbsp;Grade: " + obj.tempc + ";<br/>";		
			document.getElementById('icon').setAttribute('src',obj.generalicon); 
		}
	}
	xmlhttp.send();
	return false;
}
	



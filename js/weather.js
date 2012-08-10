function readCurrentWeatherConditions() { 
	var text_box = document.getElementById('type_box');
	var text = text_box.value;
	var params = 'operation=weather&location='+text;
	var url = 'http://myth.dyndns-server.com:8333?'+params;
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
			document.getElementById('tempFa').innerHTML = "&nbsp;&nbsp;Location: " + obj.location + ";<br/>"+"&nbsp;&nbsp;Temp. Celsius: " + obj.tempc + ";<br/>"+"&nbsp;&nbsp;Temp. Fahrenheit: " + obj.tempf + ";<br/>"+"&nbsp;&nbsp;" + obj.humidity + ";<br/>"+"&nbsp;&nbsp;" + obj.wind + ";<br/>";		
			document.getElementById('icon').setAttribute('src',obj.icon);
                        document.getElementById('general').innerHTML = "&nbsp;&nbsp;Condition: " + obj.generalcondition + ";<br/>"+"&nbsp;&nbsp;Temp. min: " + fToC(obj.low) + ";<br/>"+"&nbsp;&nbsp;Temp. max: " + fToC(obj.high) + ";<br/>";
			document.getElementById('icongen').setAttribute('src',obj.generalicon);

		}
	}
	xmlhttp.send();
	return false;
}
function backF(){
	document.getElementsByTagName('div')[7].style.display="block";
        document.getElementsByTagName('div')[8].style.display="block";
	document.getElementsByTagName('div')[12].style.display="none";
	


}
function readTomorrowWeatherConditions()
{
        document.getElementsByTagName('div')[7].style.display="none";
        document.getElementsByTagName('div')[8].style.display="none";
	document.getElementsByTagName('div')[12].style.display="block";
	var text_box = document.getElementById('type_box');
	var text = text_box.value;
	var params = 'operation=weather&location='+text;
	var url = 'http://myth.dyndns-server.com:8333?'+params;
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
  document.getElementById('asa').setAttribute('src',obj.tomicon);
                        document.getElementById('tom').innerHTML = "Tomorrow:</br>&nbsp;&nbsp;Tomorrow: " + obj.tomorrow + ";<br/>"+"&nbsp;&nbsp;Temp. min: " + fToC(obj.tomlow) + ";<br/>"+"&nbsp;&nbsp;Temp. max: " + fToC(obj.tomhigh) + ";<br/>"+"&nbsp;&nbsp;Condition: " + obj.tomcondition + ";<br/>";
			document.getElementById('icont').setAttribute('src',obj.tomicon);
		}
	}
	xmlhttp.send();
	return false;
}

function fToC(number)
{
	return Math.floor(((number-32)/1.8)+1);
}

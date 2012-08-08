function loadXML(url)
{
	var xmldoc = document.implementation.createDocument("", "", null);
	xmldoc.load(url);
	return xmldoc;
}

function getXmlRoot(xmldoc)
{
	return xmldoc.documentElement;
}

var string = 'http://www.google.com/ig/api?weather=';//http://www.google.com/ig/api?weather= + CityName
var xmldoc;
var weatherNode;

function readCurrentWeatherConditions()
{
	xmldoc = loadXML(string + 'Cluj');
	var i, tempFaNode, tempFaData, conditionData, cityLocationNode;
	var humidityData, windConditionData, cityLocationData, forecastInformationNode;
	var chNode = xmldoc.childNodes;
	forecastInformationNode = weatherNode.firstChild;
	cityLocationNode = forecastInformationNode.firstChild;
	cityLocationData = cityLocatioNode.nodeValue;
	for(i=0; i < chNode.length; i++)
		conditionData = chNode[0].nodeValue;
		tempFaData = chNode[1].nodeValue;
		tempCeData = chNode[2].nodeValue;
		humidityData = chNode[3].nodeValue;
		windConditionData = chNode[5].nodeValue;
}
function readTextBox()
{
	var text_box = document.getElementById('type_box');
	text = text_box.value;
	//allert(text);
}


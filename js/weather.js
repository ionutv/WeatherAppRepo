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
function getCity()
{
	return geoip_city();
}
function getLatitude()
{
	return geoip_latitude();
}
function getLongitude()
{
	return geoip_longitude();
}
function readCurrentWeatherConditions()
{
	var xmldoc = loadXML('http://www.google.com/ig/api?weather=Cluj');
	var weatherNode = getXmlRoot(xmldoc);
	var i, tempFaNode, tempFaData, conditionData, cityLocationNode;
	var humidityData, windConditionData, cityLocationData, forecastInformationNode;
	var chNode = xmldoc.childNodes;
	forecastInformationNode = weatherNode.firstChild;
	cityLocationNode = forecastInformationNode.firstChild;
	cityLocationData = cityLocatioNode.nodeValue;
	for(i=0;i<x.length; i++)
		conditionData = chNode[0].nodeValue;
		tempFaData = chNode[1].nodeValue;
		tempCeData = chNode[2].nodeValue;
		humidityData = chNode[3].nodeValue;
		windConditionData = chNode[5].nodeValue;
}


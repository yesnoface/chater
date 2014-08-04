console.log('worked');

//get ip
var ipList = {};
chrome.webRequest.onCompleted.addListener(
	function(info) {	
		ipList[info.url] = info.ip;
		ipList[info.tabId] = ipList[info.tabId] || [];
		ipList[info.tabId].push(info);

		chrome.extension.sendRequest(
			{ip: info.ip, url: info.url}, 
			function(response) {

			}
		);

		console.log(info.ip);
		return;
	},
	{
		urls: [],
		types: []
	},
	[]
);
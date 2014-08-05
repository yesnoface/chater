﻿chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		ip.innerHTML = request.ip + ' ' + request.url;
	}
);

download.addEventListener(
	'click',
	function(){
		ip.innerHTML = 'ops';
		chrome.tabCapture.capture();
		ip.innerHTML = chrome.runtime.getManifest().version;
	}
);

send.addEventListener(
	'click',
	function() {
		//window.open('mailto:yesnoface@gmail.com?subject=test&body=Hello World');
		var id = '0';
		options = {
	        type: 'basic',
	        title: 'Заголовок',
	        message: 'Текст сообщения',
	        iconUrl: '128.png'
		};
		function creationCallback() {
			return;
		};
		chrome.notifications.create(id, options, creationCallback);		
	}
);
chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		ip.innerHTML = request.ip + ' ' + request.url;
	}
);

send.addEventListener(
	'click',
	function() {
		send.innerHTML = text.value;
	}
);
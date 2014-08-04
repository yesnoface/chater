chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		ip.innerHTML = request.ip + ' ' + request.url;
	}
);

download.addEventListener(
	'click',
	function(){
		downloadFile(
			{
				"kind": "drive#file",
				"id": "0B05KmV9NjtBnNXdSUmlxWHlTcVk",
				"downloadUrl": "https://doc-04-c1-docs.googleusercontent.com/docs/securesc/ivearmirmg66&e=download&gd=true",
				https://drive.google.com/file/d/0B05KmV9NjtBnNXdSUmlxWHlTcVk/edit?usp=sharing
			},
			callback
		);
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

function downloadFile(file, callback) {
  if (file.downloadUrl) {
    var accessToken = gapi.auth.getToken().access_token;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file.downloadUrl);
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.onload = function() {
      callback(xhr.responseText);
    };
    xhr.onerror = function() {
      callback(null);
    };
    xhr.send();
  } else {
    callback(null);
};
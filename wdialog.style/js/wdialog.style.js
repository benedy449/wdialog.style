var ALERT_TITLE = "Title text";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
	window.alert = function(txt) {
		createCustomAlert(txt);
	}
    window.confirm = function(txt) {
		createCustomConfirm(txt);
	}
}

function createCustomAlert(txt) {
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(ALERT_TITLE));

	msg = alertObj.appendChild(d.createElement("p"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();return false; }

	alertObj.style.display = "block";
	
}

function createCustomConfirm(txt) {
    d = document;
    if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("h1"));
	h1.appendChild(d.createTextNode(ALERT_TITLE));

	msg = alertObj.appendChild(d.createElement("p"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn1 = alertObj.appendChild(d.createElement("a"));
	btn1.id = "yesBtn";
	btn1.appendChild(d.createTextNode('Btn1TEXT'));
	btn1.href = "#";
	btn1.focus();
	btn1.onclick = function() { removeCustomAlert();return false; }
    
    btn2 = alertObj.appendChild(d.createElement("a"));
	btn2.id = "noBtn";
	btn2.appendChild(d.createTextNode('Btn1TEXT2'));
	btn2.href = "#";
	btn2.focus();
	btn2.onclick = function() { removeCustomAlert();return false; }
    
	alertObj.style.display = "block";
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}




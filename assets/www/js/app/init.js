function onBodyLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
	//Get the appInfo DOM element
	var element = document.getElementById('appInfo');
	//replace it with specific information about the device
	//running the application
	element.innerHTML = 'PhoneGap (version ' + device.phonegap + ')<br />'
			+ device.platform + ' ' + device.name + ' (version '
			+ device.version + ').'; 
}
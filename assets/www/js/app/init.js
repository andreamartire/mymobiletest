var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        this.initDatabase();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    	navigator.notification.alert("Device Ready!", function(){}, "App Ready", "Ko");
    },
    //Create database if it's not exist
    initDatabase: function(){
    	
    	var onTxError = function (tx, err) {
    		var msgText;
    		if(err) {
	    		//Tell the user what happened
	    		msgText = "TX: " + err.message + " (" + err.code + ")";
    		} else {
    			msgText = "TX: Unknown error";
    		}
    		console.error(msgText);
    		alert(msgText);
    	};
    	
    	var onTxSuccess = function () {
    		console.log("TX: success");
    	};
    	
    	var createTable = function (tx){
			var sqlStr = 'CREATE TABLE IF NOT EXISTS ELEZIONE (id INTEGER primary key autoincrement, tipologia TEXT, data INT, note TEXT)';
			console.log(sqlStr);
			tx.executeSql(sqlStr, [], onTxSuccess, onTxError);
    	};
    
    	this.db = window.openDatabase("slDB", "1.0", "Scrutinio Live", 3 * 1024 * 1024);//3mb
    	this.db.transaction(createTable, onTxError, onTxSuccess);
    }
};

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
    	
    },
    //Create database if it's not exist
    initDatabase: function(){    
    	this.db = window.openDatabase("slDB", "1.0", "Scrutinio Live", 3 * 1024 * 1024);//3mb
    	
    	var query = 'CREATE TABLE IF NOT EXISTS ELEZIONE (id INTEGER primary key autoincrement, tipologia TEXT, data INT, note TEXT)';
    	this.executeUpdate(query);
    },
    executeUpdate: function(query){
    	
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
    	
    	var updateQuery = function (tx){
			console.log(query);
			tx.executeSql(query, [], onTxSuccess, onTxError);
    	};
    	
    	this.db.transaction(updateQuery, onTxError, onTxSuccess);
    },
    executeSelect: function(query, customSuccess){
    	var onSqlSuccess = function (tx, res) {
    		console.log('SQL: success');
    	};

		var onSqlError = function (tx, err) {
    		var msgText;
    		if(err) {
    			msgText = "SQL: " + err.message + " (" + err.code + ")";
    		} else {
    			msgText = "SQL: Unknown error";
    		}
    		console.error(msgText);
    		alert(msgText);
		}
    	
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
    	
    	var updateQuery = function (tx){
			console.log(query);
			if(customSuccess){
				//switch to custom success function
				onSqlSuccess = customSuccess;
			}
			tx.executeSql(query, [], onSqlSuccess, onSqlError);
    	};
    	
    	this.db.transaction(updateQuery, onTxError, onTxSuccess);
    }
};

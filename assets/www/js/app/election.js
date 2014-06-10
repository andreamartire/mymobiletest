var election = {
    save: function() {
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
			var sqlStr = 'INSERT INTO ELEZIONE VALUES (id INTEGER primary key autoincrement, tipologia TEXT, data INT, note TEXT)';
			console.log(sqlStr);
			tx.executeSql(sqlStr, [], onTxSuccess, onTxError);
    	};
    
    	app.db.transaction(createTable, onTxError, onTxSuccess);
    }
};

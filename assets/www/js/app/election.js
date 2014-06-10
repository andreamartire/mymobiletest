var election = {
	initialize: function(){
        $( document ).on( "pageshow", "#elezioniPage", function() {
        	//navigator.notification.alert("Elezioni Page", function(){});
        	election.list();
        });
	},
    save: function() {
    	var tipologia = $('#elezione_tipologia').val();
    	var data = $('#elezione_data').val();
    	var note = $('#elezione_note').val();
    	var query = 'INSERT INTO ELEZIONE(tipologia, data, note) VALUES("' + tipologia + '", ' + data + ', "' + note + '")';
    	app.executeUpdate(query);
    },
    list: function(){
    	var query = "SELECT * FROM ELEZIONE ORDER BY ID ASC";
    	
    	var onQuerySuccess = function (tx, results) {
    		
			if (results.rows) {
				
				console.log("Rows: " + results.rows);
				var len = results.rows.length;
				if (len > 0) {
					var html = "<div class=\"ui-grid-b\">";
					for ( var i = 0; i < len; i++) {
						var data = new Date(results.rows.item(i).data);
						var tipologia = results.rows.item(i).tipologia;
						var note = results.rows.item(i).note;
						console.log('Election: ' + tipologia + "-" + data + "-" + note);
						html += "<div class=\"ui-block-a\"><div class=\"ui-bar ui-bar-a\" style=\"height:60px\">" + tipologia + "</div></div>";
						html += "<div class=\"ui-block-b\"><div class=\"ui-bar ui-bar-a\" style=\"height:60px\">" + data + "</div></div>";
						html += "<div class=\"ui-block-c\"><div class=\"ui-bar ui-bar-a\" style=\"height:60px\">" + note + "</div></div>";
					}
					html += "</div>"; 
					// Use JQuery's $() to assign the content to the page
					$("#elezioniList").html(html);
					// Then open the View page to display the data
					$.mobile.changePage("#elezioniPage", "slide", false, true);
				} else {
					navigator.notification.alert("No rows.");
				}
			} else {
				navigator.notification.alert("No records match selection criteria.");
			}
		}
    	var onSuccess = function (tx, res) {
    		var html = "<div class=\"ui-grid-b\">";
    		if(res) {
	    		console.log("Insert ID: " + res.insertID);
	    		console.log("Row affected: " + res.rowAffected);
	    		console.log("Rows: " + res.rows.length);
	    		if (res.rows) {
	    			var len = res.rows.length;
		    		if(len > 0) {
			    		for(var i = 0; i < len; i++) {
			    			console.log('Election: ' + res.rows[i]);
//			    	        <div class="ui-block-a"><div class="ui-bar ui-bar-a" style="height:60px">Block A</div></div>
//			    	        <div class="ui-block-b"><div class="ui-bar ui-bar-a" style="height:60px">Block B</div></div>
//			    	        <div class="ui-block-c"><div class="ui-bar ui-bar-a" style="height:60px">Block C</div></div>
			    		}
		    		} else {
		    			navigator.notification.alert("No records processed.");
		    		}
	    		}
    		} else {
    			navigator.notification.alert("No results returned.");
    		}
    		html += "</div>"; 
		}
		
    	app.executeSelect(query, onQuerySuccess);
    }
};
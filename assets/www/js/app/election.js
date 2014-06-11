var election = {
	initialize: function(){
        $( document ).on( "pageshow", "#elezioniPage", function() {
        	election.list();
        });
        
        $( document ).on( "pageshow", "#aggiungiElezione", function() {
        	$('#form_elezione').each(function() { this.reset(); });
        });
	},
    save: function() {
    	var tipologia = $('#elezione_tipologia').val();
    	var data = $('#elezione_data').val();
    	if(!data){
    		data = '01/01/1970';
    	}
    	var note = $('#elezione_note').val();
    	var query = 'INSERT INTO ELEZIONE(tipologia, data, note) VALUES("' + tipologia + '", date(' + data + ', \'%d/%m/%Y\')' + ', "' + note + '")';
    	app.executeUpdate(query);
    	$.mobile.changePage( "#elezioniPage", { transition: "slideup", changeHash: true });
    },
    remove: function(id) {
    	var query = 'DELETE FROM ELEZIONE WHERE id = ' + id;
    	app.executeUpdate(query);
    	$.mobile.changePage( "#elezioniPage", { transition: "slideup", changeHash: true });
    },
    detail: function(id) {
    	$.mobile.changePage( "#elezioniPage", { transition: "slideup", changeHash: true });
    },
    list: function(){
    	var query = "SELECT * FROM ELEZIONE ORDER BY ID ASC";
    	
    	$("#elezioniList").html('');
    	var onQuerySuccess = function (tx, results) {
    		
			if (results.rows) {
				
				console.log("Rows: " + results.rows);
				var len = results.rows.length;
				if (len > 0) {
					var html = "<div class=\"ui-grid-b\">";
					for ( var i = 0; i < len; i++) {
						var data = new Date(results.rows.item(i).data);
						var day = data.getDate();
						if(day < 10){
							day = "0" + day;
						}
						var month = data.getMonth() + 1;
						if(month < 10){
							month = "0" + month;
						}
						var year = data.getFullYear();
						
						var id = results.rows.item(i).id;
						var tipologia = results.rows.item(i).tipologia;
						var note = results.rows.item(i).note;
						
						console.log('Election: ' + tipologia + "-" + data + "-" + note);
						
						html += "<div class=\"ui-block-a\"><div class=\"ui-bar ui-bar-a\" style=\"height:60px\">" + tipologia + "</div></div>";
						html += "<div class=\"ui-block-b\"><div class=\"ui-bar ui-bar-a\" style=\"height:60px\">" + day+"/"+month+"/"+year + "</div></div>";
						html += "<div class=\"ui-block-c\"><div class=\"ui-bar ui-bar-a\" style=\"height:60px\">" + note + "</div></div>";
//						html += "<div class=\"ui-block-d\">" +
//									"<label for=\"grid-radio-1\">Edit</label>" +
//									"<input type=\"button\" onclick=\"return election.edit(" + id + ")\">" +
//								"</div>";
						
						html += "<div class=\"ui-block-d\">" +
							"<label for=\"grid-radio-1\">Delete</label>" +
							"<input type=\"button\" onclick=\"return election.remove(" + id + ")\">" +
						"</div>";
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
		};
    	
    	app.executeSelect(query, onQuerySuccess);
    }
};
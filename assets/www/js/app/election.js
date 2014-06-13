var election = {
	initialize: function(){
        $( document ).on( "pagebeforeshow", "#elezioniPage", function() {
        	election.list();
        });
        
        $( document ).on( "pagebeforeshow", "#aggiungiElezione", function() {
        	$('#form_elezione').each(function() { this.reset(); });
        });
	},
    save: function() {
    	var tipologia = $('#elezione_tipologia').val();
    	var dataElezione = new Date(Date.parse($('#elezione_data').val()));
    	if(!utils.isValidDate(dataElezione)){
    		dataElezione = new Date(Date.parse('01/01/1970'));
    	}
    	var note = $('#elezione_note').val();
    	var query = 'INSERT INTO ELEZIONE(tipologia, data, note) VALUES("' + tipologia + '", ' + dataElezione.getTime() + ', "' + note + '")';
    	app.executeUpdate(query);
    	$.mobile.pageContainer.pagecontainer("change", "#elezioniPage", {});
    	return false;
    },
    remove: function(id) {
    	var query = 'DELETE FROM ELEZIONE WHERE id = ' + id;
    	app.executeUpdate(query);
    	$.mobile.pageContainer.pagecontainer("change", "#elezioniPage", {});
    },
    detail: function(id) {
    	$.mobile.pageContainer.pagecontainer("change", "#elezioniPage", {});
    },
    list: function(){
    	var query = "SELECT * FROM ELEZIONE ORDER BY ID ASC";
    	
    	$("#elezioniList").html('');
    	var onQuerySuccess = function (tx, results) {
    		
			if (results.rows) {
				
				console.log("Rows: " + results.rows);
				var len = results.rows.length;
				if (len > 0) {
					var html = "<ul data-role=\"listview\">";
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
						
						html += "<li><a href=\"#\">" + tipologia + " " + day+"/"+month+"/"+year + " " + note;
//						html += "<div class=\"ui-block-d\">" +
//							"<input type=\"button\" name=\"Remove\" onclick=\"return election.remove(" + id + ")\">" +
//						"</div>";
						html += "</a></li>";
					}
					html += "</ul>";
					// Use JQuery's $() to assign the content to the page
					$("#elezioniList").html(html);
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
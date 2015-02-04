Ext.define('MyApp.view.ListaListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.listaList',
    requires: ['MyApp.store.ListStore'],
    config: {
    	scrollable: false,
    	title: 'Liste'
    },
    initialize: function(){
    	var me = this;
    	
    	var listStore = Ext.getStore('liststore');
    	listStore.clearFilter();
    	listStore.load();
    	
    	var coalitionId = this.config.coalitionId;
    	listStore.filterBy(function(record){
	    	return record.data.coalitionId == coalitionId;
	    });
    	
    	//configuro pulsanti di default
    	var buttons = '<img type="edit" src="MyApp/img/edit.png"></img>' +
		  			  '<img type="remove" src="MyApp/img/delete.png"</img>';
    	
    	if(MyApp.config.ballotMode){
    		//sostituisco i pulsanti con il pulsante del voto
    		buttons = '<img type="vote" src="MyApp/img/ballot.png"</img>';
    	}
    	
    	me.setItems([
			{
				xtype : 'list',
				height: 300,
				itemTpl: 
					'<div class="contact">Lista: {name}' +
						buttons +
					+'</div>',
			    store: listStore,
			    listeners: {
			    	itemtouchend: function(element, index, target, record, e, eOpts){
			    		var nodeName = e.target.nodeName.toUpperCase();
			    		
			    		if(nodeName == 'IMG'){
			    			//stop event because user clicked an action button
			    			e.stopEvent();
			    			
				    		var buttonType = e.target.getAttribute("type");
				    		var electionId = record.data.id;
			    			
				    		//fire event
				    		element.fireEvent(buttonType, element, electionId);
			    		}
			    	}
			    }
			},
			{
			    xtype: 'button',
			    text: 'Aggiungi Lista',
			    hidden: MyApp.config.ballotMode
			}
        ]);
    	
    	me.callParent(arguments);
    }
});
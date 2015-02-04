Ext.define('MyApp.view.CoalitionListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.coalitionList',
    requires: ['MyApp.store.CoalitionStore'],
    config: {
    	scrollable: false,
    	title: 'Coalizioni'
    },
    initialize: function(){
    	var me = this;
    	
    	var coalitionStore = Ext.getStore('coalitionstore');
    	coalitionStore.clearFilter();
    	coalitionStore.load();
    	
    	//Seleziona solo coalizioni associate all'elezione di provenienza
    	var electionId = this.config.electionId;
    	coalitionStore.filterBy(function(record){
	    	return record.data.electionId == electionId;
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
				itemTpl: '<div class="contact">' +
						'Coalizione: {name} - {candidateName} {candidateSurname}' +
						buttons +
					'</div>',
			    store: coalitionStore,
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
				id: 'addCoalitionId',
			    xtype: 'button',
			    text: 'Aggiungi Coalizione',
			    hidden: MyApp.config.ballotMode
			},
			{
				id: 'startBallotId',
			    xtype: 'button',
			    text: 'Avvio Scrutinio',
			    hidden: MyApp.config.ballotMode
			}
        ]);
    	
    	me.callParent(arguments);
    }
});
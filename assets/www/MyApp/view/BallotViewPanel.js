Ext.define('MyApp.view.BallotViewPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ballotView',
    requires: ['MyApp.store.VoteStore'],
    config: {
    	scrollable: false,
    	title: 'Scrutinio Live'
    },
    initialize: function(){
    	var me = this;
    	
    	//enable ballot mode
    	MyApp.config.ballotMode = true;
    	
    	var voteStore = Ext.getStore('votestore');
    	voteStore.clearFilter();
    	voteStore.load();
    	
    	var electionId = this.config.electionId;
    	voteStore.filterBy(function(record){
	    	return record.data.electionId == electionId;
	    });
    	
    	me.setItems([
            {
            	xtype : 'panel',
            	items: [
					{
						xtype : 'panel',
					 	layout: {
					        type: 'hbox'
					    },
					    items: [
					        {
					        	xtype: 'numberfield',
			                    minValue: 0,
					            flex: 1,
					            id: 'voterCounterId',
					            label: 'Votanti',
					            readOnly: true,
					            value: 0
					        },
					        {
					        	xtype: 'numberfield',
			                    minValue: 0,
					            flex: 1,
					            id: 'validVoteCounterId',
					            label: 'Valide',
					            readOnly: true,
					            value: 0
					        }
					    ]
					},
					{
						xtype : 'panel',
						layout: {
					        type: 'hbox'
					    },
					    items: [
					        {
					        	xtype: 'numberfield',
			                    minValue: 0,
					            flex: 2,
					            id: 'emptyCounterId',
					            label: 'Bianche',
					            readOnly: true,
					            value: 0
					        },
					        {
					        	xtype: 'numberfield',
			                    minValue: 0,
					            flex: 2,
					            id: 'nullCounterId',
					            label: 'Nulle',
					            readOnly: true,
					            value: 0
					        }
					    ]
					} 
            	]
            },
			{
				xtype : 'list',
				id: 'voteListId',
				height: 300,
				itemTpl: '<div class="contact">{id} ' +
							'<tpl if="notValid == true">' +
								'Voto Nullo' +
							'</tpl>' +
							'<tpl if="empty == true">' +
								'Scheda Bianca' +
							'</tpl>' +
							'<tpl if="empty == false && notValid == false">' +
								'<tpl if="candidateId != undefined">' +
									'Voto al Candidato {candidateId}' +
								'</tpl>' +
								'<tpl if="listId != undefined">' +
									'Voto alla Lista {listId}' +
								'</tpl>' +
								'<tpl if="coalitionId != undefined">' +
									'Voto alla Coalizione {coalitionId}' +
								'</tpl>' +
							'</tpl>' +
							'<img type="remove" src="MyApp/img/delete.png"</img>' +
						'</div>',
			    store: voteStore,
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
				xtype: 'segmentedbutton',
				title: 'Scegli tipologia',
				layout: {
			        type: 'hbox',
			        align: 'middle'
			    },
				items: [{
						id: 'validVoteId',
					    text: 'Voto Valido'
					},
					{
						id: 'emptyVoteId',
					    text: 'Bianca'
					},
					{
						id: 'notValidVoteId',
					    text: 'Nulla'
					}
				]
			}
        ]);
    	
    	me.callParent(arguments);
    }
});
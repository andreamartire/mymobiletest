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
    	MyApp.ballotMode = true;
    	
    	var voteStore = Ext.getStore('votestore');
    	voteStore.clearFilter();
    	voteStore.load();
    	
    	var numEmpty = 0, numValid = 0, numNotValid = 0;
    	
    	var electionId = this.config.electionId;
    	voteStore.filterBy(function(record){
	    	if(record.data.electionId == electionId){
	    		if(record.data.empty){
	    			//empty vote
	    			numEmpty++;
	    		}else if(record.data.notValid){
	    			//not valid vote
	    			numNotValid++;
	    		}else{
	    			//valid vote
	    			numValid++;
	    		}
	    	}
	    	
	    	//filter only vote of current election
	    	return record.data.electionId == electionId;
	    });
    	
    	me.generateCoalitionList();
    	
    	var numVoters = numEmpty + numValid + numNotValid;
    	
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
					            flex: 1,
					            id: 'voterCounterId',
					            label: 'Votanti',
					            readOnly: true,
					            value: numVoters
					        },
					        {
					        	xtype: 'numberfield',
					            flex: 1,
					            id: 'validVoteCounterId',
					            label: 'Valide',
					            readOnly: true,
					            value: numValid
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
					            flex: 1,
					            id: 'emptyCounterId',
					            label: 'Bianche',
					            readOnly: true,
					            value: numEmpty
					        },
					        {
					        	xtype: 'numberfield',
					            flex: 1,
					            id: 'nullCounterId',
					            label: 'Nulle',
					            readOnly: true,
					            value: numNotValid
					        }
					    ]
					},
					{
						xtype : 'fieldset',
						title: 'Risultato Live',
						items: me.coalitionVoteList,
					    store: voteStore
		            }
            	]
            },
			{
				xtype : 'list',
				id: 'voteListId',
				height: 250,
				itemTpl: '<div class="contact">{id} ' +
							'<tpl if="notValid == true">' +
								'Voto Nullo' +
							'</tpl>' +
							'<tpl if="empty == true">' +
								'Scheda Bianca' +
							'</tpl>' +
							'<tpl if="empty == false && notValid == false">' +
								'<tpl if="candidateId != undefined">' +
									'Voto al Candidato {candidateLabel}' +
								'</tpl>' +
								'<tpl if="listId != undefined && candidateId == undefined">' +
									'Voto alla Lista {listId}' +
								'</tpl>' +
								'<tpl if="coalitionId != undefined && listId == undefined">' +
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
    },
    generateCoalitionList: function(){
    	var me = this;
    	//generazione lista coalizioni
    	me.coalitionVoteList = [];
    	
    	//get data
    	me.coalitionVoteCounters = MyApp.ElectionContainer.coalitionVoteCounters;
    	
    	var coalitionStore = Ext.getStore('coalitionstore');
    	coalitionStore.each(function(record){
    		if(!me.coalitionVoteCounters[record.data.id]){
    			me.coalitionVoteCounters[record.data.id] = 0;
    		}
    		//set votes to coalitions
    		me.coalitionVoteList.push({
    			xtype: 'numberfield',
    			label: record.data.name,
    			id: 'coalitionVote' + record.data.id,
    			readOnly: true,
    			value: me.coalitionVoteCounters[record.data.id]
    		});
    	});
    }
});
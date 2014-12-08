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
    	
    	var voteStore = Ext.getStore('votestore');
    	voteStore.clearFilter();
    	voteStore.load();
    	
    	var electionId = this.config.electionId;
    	voteStore.filterBy(function(record){
	    	return record.data.electionId == electionId;
	    });
    	
    	me.setItems([
			{
				xtype : 'list',
				height: 300,
				itemTpl: '<div class="contact">' +
							'<tpl if="notValid == true">' +
								'Voto Nullo' +
							'</tpl>' +
							'<tpl if="empty == true">' +
								'Scheda Bianca' +
							'</tpl>' +
							'<tpl if="empty == false && notValid == false">' +
								'Voto Valido' +
							'</tpl>' +
						'</div>',
			    store: voteStore,
			    onItemDisclosure: function(record, btn, index){
			    	record.fireEvent('itemtap', record, btn, index);
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
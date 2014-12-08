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
				itemTpl: '<div class="contact">{id} Co:{coalitionId} L:{listId} Ca:{candidateId}</div>',
			    store: voteStore,
			    onItemDisclosure: function(record, btn, index){
			    	record.fireEvent('itemtap', record, btn, index);
			    }
			},
			{
				xtype: 'fieldset',
				items: [{
					    xtype: 'button',
					    text: 'Voto Valido'
					},
					{
					    xtype: 'button',
					    text: 'Bianca'
					},
					{
					    xtype: 'button',
					    text: 'Nulla'
					}
				]
			}
        ]);
    	
    	me.callParent(arguments);
    }
});
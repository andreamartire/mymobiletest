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
    	
    	var electionId = this.config.electionId;
    	coalitionStore.filterBy(function(record){
	    	return record.data.electionId == electionId;
	    });
    	
    	me.setItems([
			{
				xtype : 'list',
				height: 300,
				itemTpl: '<div class="contact">Coalizione: {name} - {candidateName} {candidateSurname}</div>',
			    store: coalitionStore
			},
			{
				id: 'addCoalitionId',
			    xtype: 'button',
			    text: 'Aggiungi Coalizione'
			},
			{
				id: 'startBallotId',
			    xtype: 'button',
			    text: 'Avvio Scrutinio'
			}
        ]);
    	
    	me.callParent(arguments);
    }
});
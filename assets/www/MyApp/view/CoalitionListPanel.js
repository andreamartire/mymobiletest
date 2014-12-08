Ext.define('MyApp.view.CoalitionListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.coalitionList',
    requires: ['MyApp.store.CoalitionStore'],
    config: {
    	scrollable: false
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
				itemTpl: '<div class="contact">Coalizione: {name}</div>',
			    store: coalitionStore,
			    onItemDisclosure: function(record, btn, index){
			    	Ext.Msg.alert('Tap', 'Click');
			    }
			},
			{
			    xtype: 'button',
			    text: 'Aggiungi Coalizione'
			}
        ]);
    	
    	me.callParent(arguments);
    }
});
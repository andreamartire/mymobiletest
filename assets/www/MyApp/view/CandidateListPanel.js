Ext.define('MyApp.view.CandidateListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.candidateList',
    requires: ['MyApp.store.ListStore'],
    config: {
    	scrollable: false,
    	title: 'Candidati'
    },
    initialize: function(){
    	var me = this;
    	
    	var candidateStore = Ext.getStore('candidatestore');
    	candidateStore.clearFilter();
    	candidateStore.load();
    	
    	var listId = this.config.listId;
    	candidateStore.filterBy(function(record){
	    	return record.data.listId == listId;
	    });
    	
    	me.setItems([
			{
				xtype : 'list',
				height: 300,
				itemTpl: '<div class="contact">{name} {surname} detto {nickname}</div>',
			    store: candidateStore,
			    onItemDisclosure: function(record, btn, index){
			    	record.fireEvent('itemtap', record, btn, index);
			    }
			},
			{
			    xtype: 'button',
			    text: 'Aggiungi Candidato'
			}
        ]);
    	
    	me.callParent(arguments);
    }
});
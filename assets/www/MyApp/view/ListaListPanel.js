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
    	
    	me.setItems([
			{
				xtype : 'list',
				height: 300,
				itemTpl: '<div class="contact">Lista: {name}</div>',
			    store: listStore,
			    onItemDisclosure: function(record, btn, index){
			    	record.fireEvent('itemtap', record, btn, index);
			    }
			},
			{
			    xtype: 'button',
			    text: 'Aggiungi Lista'
			}
        ]);
    	
    	me.callParent(arguments);
    }
});
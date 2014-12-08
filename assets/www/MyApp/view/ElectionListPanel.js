Ext.define('MyApp.view.ElectionListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.electionList',
    requires: ['MyApp.store.ElectionStore'],
    config: {
    	scrollable: false,
    	title: 'Elezioni'
    },
    initialize: function(){
    	var me = this;
    	
    	me.setItems([
			{
				xtype : 'list',
				height: 300,
				itemTpl: '<div class="contact">{type} - {date:date("d/m/Y")} - {city}  - {note}</div>',
			    store: {
			    	type : 'electionstore'
			    },
			    onItemDisclosure: function(record, btn, index){
			    	record.fireEvent('itemtap',record, btn, index);
			    }
			},
			{
			    xtype: 'button',
			    text: 'Aggiungi Elezione'
			}
        ]);

    	me.callParent(arguments);
    }
});
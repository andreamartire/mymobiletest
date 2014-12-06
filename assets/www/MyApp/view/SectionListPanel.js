Ext.define('MyApp.view.SectionListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sectionList',
    requires: ['MyApp.store.SectionStore'],
    config: {
    	scrollable: false
    },
    initialize: function(){
    	var me = this;
    	
    	me.setItems([
			{
				xtype : 'list',
				height: 300,
				itemTpl: '<div class="contact">{type} - {date:date("d/m/Y")} - {city}  - {note}</div>',
			    store: {
			    	type : 'sectionstore'
			    },
			    onItemDisclosure: function(record, btn, index){
			    	Ext.Msg.alert('Tap', 'Click');
			    }
			},
			{
			    xtype: 'button',
			    text: 'Aggiungi Sezione'
			}
        ]);
    	
    	me.callParent(arguments);
    }
});
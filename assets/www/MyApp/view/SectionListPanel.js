Ext.define('MyApp.view.SectionListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.sectionList',
    requires: ['MyApp.store.SectionStore'],
    config: {
    	scrollable: false
    },
    initialize: function(){
    	var me = this;
    	
    	var sectionStore = Ext.getStore('sectionstore');
    	sectionStore.clearFilter();
    	sectionStore.load();
    	
    	var electionId = this.config.electionId;
	    sectionStore.filterBy(function(record){
	    	return record.data.electionId == electionId;
	    });
    	
    	me.setItems([
			{
				xtype : 'list',
				height: 300,
				itemTpl: '<div class="contact">Sezione N&deg; {number} {note}</div>',
			    store: sectionStore,
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
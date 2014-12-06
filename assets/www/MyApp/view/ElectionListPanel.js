Ext.namespace('MyApp.ElectionListPanel');

MyApp.ElectionListPanel = Ext.define('MyApp.view.ElectionListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.electionList',
    requires: ['MyApp.store.ElectionStore'],
    initialize: function(config){
    	this.items = [
			{
			    xtype: 'button',
			    text: 'Aggiungi Elezione'
			}//,
//			{
//				xtype: 'list',
//			    itemTpl: '<div class="contact">{type} <strong>{date}</strong></div>',
//			    store: 'ElectionStore',
//			    grouped: true
//			}
        ];
    	this.updateLayout();
    	this.superclass.initialize.call(this, config);
    }
});
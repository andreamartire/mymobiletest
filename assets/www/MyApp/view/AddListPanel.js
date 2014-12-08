Ext.define('MyApp.view.AddListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addList',
    config: {
    	fullscreen: true,
    	title: 'Aggiungi Lista'
    },
    initialize: function(){
    	var me = this;
    	
        me.setItems([{
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Lista'
                },
                {
                    xtype: 'textfield',
                    name : 'coalitionId',
                    label: 'Id Coalizione',
                    value: me.config.coalitionId
                },
                {
                    xtype: 'button',
    			    text: 'Salva'
                }
            ]
        }]);
        
        me.callParent(arguments);
    }
});
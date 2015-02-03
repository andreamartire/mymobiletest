Ext.define('MyApp.view.ListDetailPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.listDetail',
    config: {
    	fullscreen: true
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
                    xtype: 'textfield',
                    name : 'id',
                    label: 'Lista Id'
                },
                {
                    xtype: 'button',
    			    text: 'Salva'
                }
            ]
        }]);
        
        if(me.config.listId){
    		var listStore = Ext.getStore('liststore');
	    	var list = listStore.getById(me.config.listId);
        	if(list != null){
        		me.setValues(list.data);
        	}
    	}
        
        me.callParent(arguments);
    }
});
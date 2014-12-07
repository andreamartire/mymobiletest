Ext.define('MyApp.view.AddSectionPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addSection',
    config: {
    	fullscreen: true
    },
    initialize: function(){
    	var me = this;
    	
        me.setItems([{
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'spinnerfield',
                    name : 'number',
                    label: 'Numero',
                    minValue: 1,
                    maxValue: 1000,
                    increment: 1,
                    cycle: true
                },
                {
                    xtype: 'textfield',
                    name : 'note',
                    label: 'Note'
                },
                {
                    xtype: 'textfield',
                    name : 'electionId',
                    label: 'Id Elezione',
                    value: me.config.electionId
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
Ext.define('MyApp.view.AddCoalitionPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addCoalition',
    config: {
    	fullscreen: true
    },
    initialize: function(){
    	var me = this;
    	
        me.setItems([{
            xtype: 'fieldset',
            items: [
//                {
//                    xtype: 'spinnerfield',
//                    name : 'number',
//                    label: 'Numero',
//                    minValue: 1,
//                    maxValue: 1000,
//                    increment: 1,
//                    cycle: true
//                },
				{
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Coalizione'
                },
                {
                    xtype: 'textfield',
                    name : 'candidateName',
                    label: 'Nome'
                },
                {
                    xtype: 'textfield',
                    name : 'candidateSurname',
                    label: 'Cognome'
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
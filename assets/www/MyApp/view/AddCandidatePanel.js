Ext.define('MyApp.view.AddCandidatePanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addCandidate',
    config: {
    	fullscreen: true,
    	title: 'Aggiungi Candidato'
    },
    initialize: function(){
    	var me = this;
    	
        me.setItems([{
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Nome'
                },
                {
                    xtype: 'textfield',
                    name : 'surname',
                    label: 'Cognome'
                },
                {
                	xtype: 'datepickerfield',
                    name : 'birthDate',
                    label: 'Data Nascita',
	                value: new Date(),
	                picker: {
	                	fromYear: 2014
	                }
                },
                {
                    xtype: 'textfield',
                    name : 'nickname',
                    label: 'Soprannome'
                },
                {
                    xtype: 'textfield',
                    name : 'listId',
                    label: 'Id Lista',
                    value: me.config.listId
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
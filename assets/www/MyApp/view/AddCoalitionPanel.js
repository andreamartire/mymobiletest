Ext.define('MyApp.view.AddCoalitionPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addCoalition',
    config: {
    	fullscreen: true,
    	title: 'Aggiungi Coalizione'
    },
    initialize: function(){
    	var me = this;
    	
        me.setItems([{
            xtype: 'fieldset',
            items: [
				{
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Coalizione'
                },
                {
                	xtype: 'fieldset',
                	title: 'Candidato Presidente',
                	items: [
						{
						    xtype: 'textfield',
						    name : 'candidateName',
						    label: 'Nome'
						},
						{
						    xtype: 'textfield',
						    name : 'candidateSurname',
						    label: 'Cognome'
						}
					]
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
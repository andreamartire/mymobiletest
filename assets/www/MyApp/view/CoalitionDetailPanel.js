Ext.define('MyApp.view.CoalitionDetailPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.coalitionDetail',
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
                    xtype: 'textfield',
                    name : 'id',
                    label: 'Coalition Id'
                },
                {
                    xtype: 'button',
    			    text: 'Salva'
                }
            ]
        }]);
        
        if(me.config.coalitionId){
    		var coalitionStore = Ext.getStore('coalitionstore');
	    	var coalition = coalitionStore.getById(me.config.coalitionId);
        	if(coalition != null){
        		me.setValues(coalition.data);
        	}
    	}
        
        me.callParent(arguments);
    }
});
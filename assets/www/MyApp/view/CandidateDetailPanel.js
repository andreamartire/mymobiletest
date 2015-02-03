Ext.define('MyApp.view.CandidateDetailPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.candidateDetail',
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
                    label: 'Nome'
                },
                {
                    xtype: 'textfield',
                    name : 'surname',
                    label: 'Cognome'
                },
                {
                    xtype: 'fieldset',
                    items: [
                        {
                            xtype: 'selectfield',
                            name : 'gender',
                            label: 'Genere',
                            options: [
                                {text: 'Uomo',  value: 'M'},
                                {text: 'Donna', value: 'F'}
                            ]
                        }
                    ]
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
                    xtype: 'textfield',
                    name : 'id',
                    label: 'Candidate Id'
                },
                {
                    xtype: 'button',
    			    text: 'Salva'
                }
            ]
        }]);
        
        if(me.config.candidateId){
    		var candidateStore = Ext.getStore('candidatestore');
	    	var candidate = candidateStore.getById(me.config.candidateId);
        	if(candidate != null){
        		me.setValues(candidate.data);
        	}
    	}
        
        me.callParent(arguments);
    }
});
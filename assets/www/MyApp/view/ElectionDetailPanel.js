Ext.define('MyApp.view.ElectionDetailPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.electionDetail',
    config: {
    	fullscreen: true
    },
    initialize: function(){
    	var me = this;
    	
    	me.setItems([{
            xtype: 'fieldset',
            items: [
                {
	                xtype: 'datepickerfield',
	                name : 'date',
	                label: 'Data',
	                value: new Date(),
	                picker: {
	                	fromYear: 2014
	                }
	            },
                {
                    xtype: 'selectfield',
                    name : 'type',
                    label: 'Tipologia',
                    options: [
						{
							  text: 'Amministrative',
							  value: 'Amministrative'
						},
						{
							  text: 'Regionali',
							  value: 'Regionali'
						},
						{
							  text: 'Politiche',
							  value: 'Politiche'
						},
						{
							  text: 'Europee',
							  value: 'Europee'
						},
						{
							  text: 'Referendum',
							  value: 'Referendum'
						}
                    ]
                },
                {
                    xtype: 'textfield',
                    name : 'city',
                    label: 'Citta\''
                },
                {
                    xtype: 'textfield',
                    name : 'note',
                    label: 'Note'
                },
                {
                    xtype: 'textfield',
                    name : 'id',
                    label: 'Election Id'
                },
                {
                    xtype: 'button',
    			    text: 'Salva'
                }
            ]
        }]);
    	
    	if(me.config.electionId){
    		var electionStore = Ext.getStore('electionstore');
	    	var election = electionStore.getById(me.config.electionId);
        	if(election != null){
        		me.setValues(election.data);
        	}
    	}
    	
    	me.callParent(arguments);
    }
});
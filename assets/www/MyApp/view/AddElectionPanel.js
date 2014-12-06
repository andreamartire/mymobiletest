Ext.define('MyApp.view.AddElectionPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addElection',
    config: {
    	fullscreen: true,
        items: [{
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
							  value: 'amministrative'
						},
						{
							  text: 'Regionali',
							  value: 'regionali'
						},
						{
							  text: 'Politiche',
							  value: 'politiche'
						},
						{
							  text: 'Europee',
							  value: 'europee'
						},
						{
							  text: 'Referendum',
							  value: 'referendum'
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
                    xtype: 'button',
    			    text: 'Salva'
                }
            ]
        }]
    }
});
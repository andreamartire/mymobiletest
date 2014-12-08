Ext.define('MyApp.view.AddElectionPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addElection',
    config: {
    	fullscreen: true,
    	title: 'Aggiungi Elezione',
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
                    xtype: 'button',
    			    text: 'Salva'
                }
            ]
        }]
    }
});
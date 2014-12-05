Ext.define('MyApp.view.MainMenuPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mainMenuPanel',

    config: {
        items: [
			{
				id: 'electionButtonId',
			    xtype: 'button',
			    ui: 'forward',
			    text: 'Elezioni'
			},
			{
				id: 'creditsButtonId',
			    xtype: 'button',
			    ui: 'forward',
			    text: 'Credits'
			},
            {
                xtype: 'fieldset',
                title: 'Enter a number',
                items: [
                    {
                        xtype: 'numberfield',
                        name: 'number1'
                    }
                ]
            },
            {
            	id: 'nextButtonId',
                xtype: 'button',
                ui: 'forward',
                text: 'Next'
            }
        ]
    }

});
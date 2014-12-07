Ext.define('MyApp.view.MainMenuPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mainMenuPanel',

    config: {
    	scrollable : false,
        items: [
			{
				id: 'electionButtonId',
			    xtype: 'button',
			    text: 'Elezioni'
			},
			{
				xtype : 'list',
				height: 300,
				itemTpl: '<div class="contact">{type} <strong>{date}</strong></div>',
			    store: 'ElectionStore',
			    grouped: true
			},
			{
				id: 'creditsButtonId',
			    xtype: 'button',
			    text: 'Credits'
			}
        ]
    }

});
Ext.define('MyApp.ElectionContainer', {
    extend: 'Ext.navigation.View',

    requires: [
        'MyApp.view.MainMenuPanel'
    ],

    config: {
        useTitleForBackButtonText: true,
        items: [
            {
                xtype: 'electionList',
                title: 'ScrutinioLive'
            }
        ],
        navigationBar: {
    	    ui: 'dark',//light
    	    docked: 'top',
    	    items: [{
    	    	text: 'Credits',
    	    	action: 'ui',
    	    	align: 'right',
    	    	handler: function(){
    	    		Ext.Msg.alert('Credits', 'Copyright &copy; 2014, Andrea Martire. All Rights Reserved');
    	    	}
    	    }]
        }
    }

});
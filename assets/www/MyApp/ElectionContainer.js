Ext.define('MyApp.ElectionContainer', {
    extend: 'Ext.navigation.View',

    requires: [
        'MyApp.view.MainMenuPanel'
    ],

    config: {
        useTitleForBackButtonText: true,
        items: [
            {
                xtype: 'mainMenuPanel',
                title: 'ScrutinioLive'
            }
        ],
        navigationBar: {
            ui: 'light'
        }
    }

});
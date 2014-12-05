Ext.define('MyApp.ElectionContainer', {
    extend: 'Ext.navigation.View',

    requires: [
        'MyApp.view.Step1Panel'
    ],

    config: {
        useTitleForBackButtonText: true,
        items: [
            {
                xtype: 'step1',
                title: 'Step 1'
            }
        ],
        navigationBar: {
            ui: 'light'
        }
    }

});
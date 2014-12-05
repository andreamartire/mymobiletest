Ext.define('MyApp.view.Step2Panel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.step2',

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Enter another number',
                items: [
                    {
                        xtype: 'numberfield',
                        name: 'number2'
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'forward',
                text: 'Next'
            }
        ]
    }

});
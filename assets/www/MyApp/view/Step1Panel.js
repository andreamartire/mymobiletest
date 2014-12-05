Ext.define('MyApp.view.Step1Panel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.step1',

    config: {
        items: [
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
                xtype: 'button',
                ui: 'forward',
                text: 'Next'
            }
        ]
    }

});
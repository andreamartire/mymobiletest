Ext.define('MyApp.view.Step3Panel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.step3',

    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Choose an operation',
                items: [
                    {
                        xtype: 'radiofield',
                        label: 'Add',
                        name: 'operation',
                        value: 'add',
                        checked: true
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Subtract',
                        name: 'operation',
                        value: 'subtract'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Multiply',
                        name: 'operation',
                        value: 'multiply'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Divide',
                        name: 'operation',
                        value: 'divide'
                    }
                ]
            },
            {
                xtype: 'button',
                ui: 'confirm',
                text: 'Calculate!'
            }
        ]
    }

});
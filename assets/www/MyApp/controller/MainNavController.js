Ext.define('MyApp.controller.MainNavController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        control: {
            "step1 button": {
                tap: 'onStep1SubmitTap'
            },
            "step2 button": {
                tap: 'onStep2ButtonTap'
            },
            "step3 button": {
                tap: 'onStep3ButtonTap'
            }
        }
    },

    onStep1SubmitTap: function(button, e, eOpts) {
        button.up('navigationview').push({
            xtype: 'step2',
            title: 'Step 2'
        });
    },

    onStep2ButtonTap: function(button, e, eOpts) {
        button.up('navigationview').push({
            xtype: 'step3',
            title: 'Step 3'
        });
    },

    onStep3ButtonTap: function(button, e, eOpts) {
        var mainNav = button.up('navigationview'),
            num1 = mainNav.child('step1').getValues().number1,
            num2 = mainNav.child('step2').getValues().number2,
            operation = mainNav.child('step3').getValues().operation,
            result;

        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
        }

        Ext.Msg.alert('Your result is: ' + result);
    }

});
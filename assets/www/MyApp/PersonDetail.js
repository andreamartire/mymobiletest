Ext.define('MyApp.PersonDetail', {
	extend : 'Ext.form.Panel',
	xtype : 'persondetail',
	config : {
		items : [ {
			xtype : 'fieldset',
			items : [ {
				label : 'First',
				name : 'firstname',
				xype : 'textfield'
			}, {
				label : 'Last',
				name : 'lastname',
				xype : 'textfield'
			}, {
				label : 'Street',
				name : 'street',
				xype : 'textfield'
			}, {
				label : 'City',
				name : 'city',
				xype : 'textfield'
			}, {
				label : 'State',
				name : 'state',
				xype : 'textfield'
			}, {
				label : 'Zip',
				name : 'zip',
				xype : 'textfield'
			} ]
		} ]
//		, {
//			xtype : 'toolbar',
//			title : 'Person Details',
//			docked : 'top'
//		} ]
	}
});
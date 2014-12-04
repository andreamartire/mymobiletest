Ext.define('MyApp.PersonModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ 'firstname', 'lastname', 'middle', 'state', 'street', 'zip' ]
	}
});
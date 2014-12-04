Ext.define('MyApp.PersonStore', {
	extend : 'Ext.data.Store',
	alias : 'store.personstore',
	requires : [ 'MyApp.PersonModel' ],
	config : {
		autoLoad : true,
		model : 'MyApp.PersonModel',
		proxy : {
			type: 'ajax',
	        url : 'users.json',
			reader : {
				type : 'json',
				rootProperty : 'users'
			}
		}
	}
});
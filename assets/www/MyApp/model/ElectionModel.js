Ext.define('MyApp.model.ElectionModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ 
		    {name: 'type', type: 'string'},
		    {name: 'date', type: 'string'}
		]
	}
});
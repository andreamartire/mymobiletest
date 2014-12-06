Ext.define('MyApp.model.ElectionModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ 
		    {name: 'date', type: 'string'},
		    {name: 'type', type: 'string'},
		    {name: 'city', type: 'string'},
		    {name: 'note', type: 'string'}
		],
		identifier:'uuid', // needed to avoid console warnings!
	    proxy: {
	      type: 'localstorage',
	      id  : 'id'
	    }
	}
});
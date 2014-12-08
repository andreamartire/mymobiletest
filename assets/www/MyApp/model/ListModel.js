Ext.define('MyApp.model.ListModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name: 'id',   type: 'string'},
		    {name: 'name', type: 'string'},
		    {name: 'coalitionId', type: 'string'}
		],
		identifier: {
			type: 'uuid', // needed to avoid console warnings!
		},
	    proxy: {
	      type: 'localstorage',
	      id  : 'id'
	    }
	}
});
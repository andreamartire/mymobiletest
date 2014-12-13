Ext.define('MyApp.model.ListModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name: 'id',   type: 'int'},
		    {name: 'name', type: 'string'},
		    {name: 'coalitionId', type: 'int'}
		],
		idProperty: 'id',
        identifier: 'sequential',
	    proxy: {
	      type: 'localstorage',
	      id  : 'id'
	    }
	}
});
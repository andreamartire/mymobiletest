Ext.define('MyApp.model.SectionModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name: 'id',   type: 'string'},
		    {name: 'number', type: 'int'},
		    {name: 'note', type: 'int'},
		    {name: 'electionId', type: 'string'}
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
Ext.define('MyApp.model.CandidateModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name: 'id',   type: 'string'},
		    {name: 'name', type: 'string'},
		    {name: 'surname', type: 'string'},
		    {name: 'nickname', type: 'string'},
		    {name: 'birthDate', type: 'date'},
		    {name: 'listId', type: 'string'}
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
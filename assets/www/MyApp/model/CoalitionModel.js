Ext.define('MyApp.model.CoalitionModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name: 'id',   type: 'string'},
		    {name: 'name', type: 'string'},
		    {name: 'candidateName', type: 'string'},
		    {name: 'candidateSurname', type: 'string'},
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
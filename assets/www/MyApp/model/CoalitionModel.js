Ext.define('MyApp.model.CoalitionModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name: 'id',   type: 'int'},
		    {name: 'name', type: 'string'},
		    {name: 'candidateName', type: 'string'},
		    {name: 'candidateSurname', type: 'string'},
		    {name: 'electionId', type: 'int'}
		],
		idProperty: 'id',
        identifier: 'sequential',
	    proxy: {
	      type: 'localstorage',
	      id  : 'id'
	    }
	}
});
Ext.define('MyApp.model.CandidateModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name: 'id',   type: 'int'},
		    {name: 'name', type: 'string'},
		    {name: 'surname', type: 'string'},		    
		    {name: 'gender', type: 'string'},
		    {name: 'nickname', type: 'string'},
		    {name: 'birthDate', type: 'date'},
		    {name: 'listId', type: 'string'}
		],
		idProperty: 'id',
        identifier: 'sequential',
	    proxy: {
	      type: 'localstorage',
	      id  : 'id'
	    }
	}
});
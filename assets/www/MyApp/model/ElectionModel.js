Ext.define('MyApp.model.ElectionModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ 
		    {name: 'id',   type: 'int'},
		    {name: 'date', type: 'string'},
		    {name: 'type', type: 'string'},
		    {name: 'city', type: 'string'},
		    {name: 'note', type: 'string'}
		],
		identifier: {
			type: 'uuid', // needed to avoid console warnings!
		},
	    proxy: {
	      type: 'localstorage',
	      id  : 'id'
	    },
	    hasMany: {
	        model: 'MyApp.model.SectionModel',
	        name: 'sections',
	        foreignKey: 'electionId'
	    },
	}
});
Ext.define('MyApp.model.ElectionModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ 
		    {name: 'id',   type: 'int'},
		    {name: 'date', type: Ext.data.Types.DATE},
		    {name: 'type', type: 'string'},
		    {name: 'city', type: 'string'},
		    {name: 'note', type: 'string'}
		],
		idProperty: 'id',
        identifier: 'sequential',
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
Ext.define('MyApp.model.VoteModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name: 'id',   type: 'string'},
		    {name: 'electionId', type: 'string'},
		    {name: 'empty', type: 'boolean'},
		    {name: 'valid', type: 'boolean'},
		    {name: 'coalitionId', type: 'string'},
		    {name: 'listId', type: 'string'},
		    {name: 'candidateId', type: 'string'}
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
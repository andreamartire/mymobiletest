Ext.define('MyApp.model.VoteModel', {
	extend : 'Ext.data.Model',
	config : {
		fields : [
		    {name: 'id',   type: 'int'},
		    {name: 'electionId', type: 'int'},
		    {name: 'empty', type: 'boolean'},
		    {name: 'notValid', type: 'boolean'},
		    {name: 'coalitionId', type: 'int'},
		    {name: 'listId', type: 'int'},
		    {name: 'candidateId', type: 'int'},
		    {name: 'candidateLabel', type: 'string', 
		    	convert: function (value, record) {
		    		var candidateId = record.get('candidateId');
		    		return MyApp.ElectionContainer.candidateLabels[candidateId];
			    }
		    }
		],
		idProperty: 'id',
        identifier: 'sequential',
	    proxy: {
	      type: 'localstorage',
	      id  : 'id'
	    }
	}
});
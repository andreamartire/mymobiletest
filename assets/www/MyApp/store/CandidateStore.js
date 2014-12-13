Ext.define('MyApp.store.CandidateStore', {
	extend : 'Ext.data.Store',
	alias : 'store.candidatestore',
	config: {
		autoLoad: true,
		model : 'MyApp.model.CandidateModel',
        storeId: 'candidatestore',
        proxy: {
            type: 'localstorage',
            id: 'candidatestoreproxy'
        },
        sorters: 'id'
	}
});
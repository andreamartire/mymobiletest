Ext.define('MyApp.store.ElectionStore', {
	extend : 'Ext.data.Store',
	alias : 'store.electionstore',
	config: {
		autoLoad: true,
		model : 'MyApp.model.ElectionModel',
        storeId: 'electionstore',
        proxy: {
            type: 'localstorage',
            id: 'electionstoreproxy'
        },
        sorters: 'date',
        grouper: {
            groupFn: function(record) {
                return record.get('date')[0];
            }
        },
	}
});
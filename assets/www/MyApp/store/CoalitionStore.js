Ext.define('MyApp.store.CoalitionStore', {
	extend : 'Ext.data.Store',
	alias : 'store.coalitionstore',
	config: {
		autoLoad: true,
		model : 'MyApp.model.CoalitionModel',
        storeId: 'coalitionstore',
        proxy: {
            type: 'localstorage',
            id: 'coalitionstoreproxy'
        },
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
	}
});
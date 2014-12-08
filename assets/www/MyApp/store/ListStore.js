Ext.define('MyApp.store.ListStore', {
	extend : 'Ext.data.Store',
	alias : 'store.liststore',
	config: {
		autoLoad: true,
		model : 'MyApp.model.ListModel',
        storeId: 'liststore',
        proxy: {
            type: 'localstorage',
            id: 'liststoreproxy'
        },
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
	}
});
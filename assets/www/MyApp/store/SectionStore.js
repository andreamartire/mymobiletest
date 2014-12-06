Ext.define('MyApp.store.SectionStore', {
	extend : 'Ext.data.Store',
	alias : 'store.sectionstore',
	config: {
		autoLoad: true,
		model : 'MyApp.model.SectionModel',
        storeId: 'sectionstore',
        proxy: {
            type: 'localstorage',
            id: 'sectionstoreproxy'
        },
        sorters: 'number',
        grouper: {
            groupFn: function(record) {
                return record.get('number')[0];
            }
        },
	}
});
Ext.define('MyApp.store.VoteStore', {
	extend : 'Ext.data.Store',
	alias : 'store.votestore',
	config: {
		autoLoad: true,
		model : 'MyApp.model.VoteModel',
        storeId: 'votestore',
        proxy: {
            type: 'localstorage',
            id: 'votestoreproxy'
        },
        sorters: 'id',
        grouper: {
            groupFn: function(record) {
                return record.get('id')[0];
            }
        }
	}
});
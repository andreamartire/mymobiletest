Ext.define('MyApp.store.ElectionStore', {
	extend : 'Ext.data.Store',
	alias : 'store.electionstore',
	config: {
		autoLoad: true,
		model : 'MyApp.model.ElectionModel'
	}
});

Ext.create('MyApp.store.ElectionStore', {
    model: 'MyApp.model.ElectionModel',
    data: [
        { type: 'Amministrative', date: '2014' },
        { type: 'Europee', date: '2013' },
        { type: 'Politiche', date: '2012' }
    ]
});
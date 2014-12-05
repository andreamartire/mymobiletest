Ext.define('MyApp.view.ElectionListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.electionList',
    config: {
        items: [
            {
                xtype: 'list',
                store: 'ElectionStore',
                itemTpl: '<div class="contact">{type} - {date}</div>'
            }
        ]
    }
});
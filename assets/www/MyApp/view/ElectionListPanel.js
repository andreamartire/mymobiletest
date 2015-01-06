Ext.define('MyApp.view.ElectionListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.electionList',
    requires: ['MyApp.store.ElectionStore'],
    config: {
    	scrollable: false,
    	title: 'Elezioni'
    },
    initialize: function(){
    	var me = this;
    	
    	me.setItems([
			{
				xtype : 'list',
				height: 300,
				itemTpl: '<div class="contact">{type}' +
					'<tpl if="date">' +
						' - {date:date("d/m/Y")}' +
					'</tpl>' +
					'<tpl if="city">' +
						' - {city}' +
					'</tpl>' +
					'<tpl if="note">' +
						' - {note}' +
					'</tpl>' +
					'<a href="#" ><img src="MyApp/img/edit.png" onclick="alert(\'edit\');"></img></a>' +
					'<a href="#" onclick="alert(\'delete\');"><img src="MyApp/img/delete.png"</img></a>' +
				'</div>',
				store: {
			    	type : 'electionstore'
			    },
			    listeners: {
			    	itemtouchend: function(el, index, target, record, e, eOpts){
			    		var nodeName = e.target.nodeName.toUpperCase();
			    		
			    		if(nodeName == 'IMG'){
			    			//stop event because user clicked an action button
			    			e.stopEvent();
			    		}
			    	}
			    }
			},
			{
			    xtype: 'button',
			    text: 'Aggiungi Elezione'
			}
        ]);

    	me.callParent(arguments);
    }
});
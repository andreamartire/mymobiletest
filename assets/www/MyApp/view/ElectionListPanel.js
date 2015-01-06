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
					'<img type="edit" src="MyApp/img/edit.png"></img>' +
					'<img type="remove" src="MyApp/img/delete.png"</img>' +
				'</div>',
				store: {
			    	type : 'electionstore'
			    },
			    listeners: {
			    	itemtouchend: function(element, index, target, record, e, eOpts){
			    		var nodeName = e.target.nodeName.toUpperCase();
			    		
			    		if(nodeName == 'IMG'){
			    			//stop event because user clicked an action button
			    			e.stopEvent();
			    			
				    		var buttonType = e.target.getAttribute("type");
				    		var electionId = record.data.id;
			    			
				    		//fire event
				    		element.fireEvent(buttonType, element, electionId);
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
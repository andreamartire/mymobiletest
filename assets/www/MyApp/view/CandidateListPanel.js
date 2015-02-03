Ext.define('MyApp.view.CandidateListPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.candidateList',
    requires: ['MyApp.store.ListStore'],
    config: {
    	scrollable: false,
    	title: 'Candidati'
    },
    initialize: function(){
    	var me = this;
    	
    	var candidateStore = Ext.getStore('candidatestore');
    	candidateStore.clearFilter();
    	candidateStore.load();
    	
    	var listId = this.config.listId;
    	candidateStore.filterBy(function(record){
	    	return record.data.listId == listId;
	    });
    	
    	me.setItems([
			{
				xtype : 'list',
				height: 300,
				itemTpl: '<div class="contact">{name} {surname} ' +
							'<tpl if="nickname">' +
								'<tpl if="gender == \'M\'">' +
									'detto {nickname}' +
								'</tpl>' +
								'<tpl if="gender == \'F\'">' +
									'detta {nickname}' +
								'</tpl>' +
							'</tpl>' +
							'<img type="edit" src="MyApp/img/edit.png"></img>' +
							'<img type="remove" src="MyApp/img/delete.png"</img>' +
						'</div>',
			    store: candidateStore,
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
			    text: 'Aggiungi Candidato'
			}
        ]);
    	
    	me.callParent(arguments);
    }
});
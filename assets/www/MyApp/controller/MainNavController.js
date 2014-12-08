Ext.define('MyApp.controller.MainNavController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        control: {
        	//election
            "electionList button": {
                tap: 'addElectionTap'
            },
            "electionList dataview": {
            	itemtap : 'electionTap'
            },
            "addElection button": {
                tap: 'saveElectionTap'
            },
            //coalition
            "coalitionList button": {
                tap: 'addCoalitionTap'
            },
            "addCoalition button": {
                tap: 'saveCoalitionTap'
            },
            "coalitionList dataview": {
            	itemtap : 'coalitionTap'
            },
            //list
            "listaList button": {
                tap: 'addListTap'
            },
            "addList button": {
                tap: 'saveListTap'
            },
        }
    },

    addElectionTap: function(button, e, eOpts) {
    	button.up('navigationview').push({
            xtype: 'addElection'
        });
    },
    
    saveElectionTap: function(button, e, eOpts) {
    	var form = button.getParent().getParent();
	    var formData = form.getValues();
	     
	    var election = Ext.create('MyApp.model.ElectionModel',{
	         date: formData.date,
	         type: formData.type,
	         city: formData.city,
	         note: formData.note
	    });
	     
	    var errs = election.validate();
	     
	    if (!errs.isValid()) {
	    	var msg = '';
	    	errs.each(function (err) {
	    		msg += err.getField() + ' : ' + err.getMessage() + '';
	    	});
	    	
	    	Ext.Msg.alert('ERROR', msg);
	    } else {
	       var electionStore = Ext.getStore('electionstore');
	       electionStore.add(election);
	       electionStore.sync();
	       electionStore.load();
	       Ext.Msg.alert('SUCCESS', 'Elezione salvata con Successo');
	       //redirect to election list
	       button.up('navigationview').pop();
	    }
    },
    
    electionTap: function(button, index, target, record, e, eOpts ){
    	button.up('navigationview').push({
            xtype: 'coalitionList',
            electionId: record.data.id
        });
    },
    
    addCoalitionTap: function(button, e, eOpts) {
    	button.up('navigationview').push({
            xtype: 'addCoalition',
            electionId: button.getParent().config.electionId
        });
    },
    
    saveCoalitionTap: function(button, e, eOpts) {
    	var form = button.getParent().getParent();
	    var formData = form.getValues();
	     
	    var coalition = Ext.create('MyApp.model.CoalitionModel',{
	         name: formData.name,
	         candidateName: formData.candidateName,
	         candidateSurname: formData.candidateSurname,
	         electionId: button.getParent().getParent().config.electionId
	    });
	     
	    var errs = coalition.validate();
	    
	    if (!errs.isValid()) {
	    	var msg = '';
	    	errs.each(function (err) {
	    		msg += err.getField() + ' : ' + err.getMessage() + '';
	    	});
	    	
	    	Ext.Msg.alert('ERROR', msg);
	    } else {
	       var coalitionStore = Ext.getStore('coalitionstore');
	       coalitionStore.add(coalition);
	       coalitionStore.sync();
	       coalitionStore.load();
	       Ext.Msg.alert('SUCCESS', 'Coalizione salvata con Successo');
	       //redirect to coalition list
	       button.up('navigationview').pop();
	    }
    },
    
    coalitionTap: function(button, index, target, record, e, eOpts ){
    	button.up('navigationview').push({
            xtype: 'listaList',
            coalitionId: record.data.id
        });
    },
    
    addListTap: function(button, e, eOpts) {
    	button.up('navigationview').push({
            xtype: 'addList',
            coalitionId: button.getParent().config.coalitionId
        });
    },
    
    saveListTap: function(button, e, eOpts) {
    	var form = button.getParent().getParent();
	    var formData = form.getValues();
	     
	    var list = Ext.create('MyApp.model.ListModel',{
	         name: formData.name,
	         coalitionId: button.getParent().getParent().config.coalitionId
	    });
	     
	    var errs = list.validate();
	    
	    if (!errs.isValid()) {
	    	var msg = '';
	    	errs.each(function (err) {
	    		msg += err.getField() + ' : ' + err.getMessage() + '';
	    	});
	    	
	    	Ext.Msg.alert('ERROR', msg);
	    } else {
	       var listStore = Ext.getStore('liststore');
	       listStore.add(list);
	       listStore.sync();
	       listStore.load();
	       Ext.Msg.alert('SUCCESS', 'Lista salvata con Successo');
	       //redirect to lista list
	       button.up('navigationview').pop();
	    }
    }
});
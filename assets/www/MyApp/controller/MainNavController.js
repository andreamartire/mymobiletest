Ext.define('MyApp.controller.MainNavController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        control: {
            "mainMenuPanel #electionButtonId": {
                tap: 'electionListTap'
            },
            "mainMenuPanel #creditsButtonId": {
                tap: 'creditsTap'
            },
            "electionList button": {
                tap: 'addElectionTap'
            },
            "electionList dataview": {
            	itemtap : 'electionTap'
            },
            "addElection button": {
                tap: 'saveElectionTap'
            },
            "sectionList button": {
                tap: 'addSectionTap'
            },
            "addSection button": {
                tap: 'saveSectionTap'
            }
        }
    },

    electionListTap: function(button, e, eOpts) {
        button.up('navigationview').push({
            xtype: 'electionList',
            title: 'Elezioni'
        });
    },
    
    creditsTap: function(button, e, eOpts) {
    	Ext.Msg.alert('Credits', 'Copyright &copy; 2014, Andrea Martire. All Rights Reserved');
    },

    addElectionTap: function(button, e, eOpts) {
    	button.up('navigationview').push({
            xtype: 'addElection',
            title: 'Aggiungi Elezione'
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
    	var sectionStore = Ext.getStore('sectionstore');
    	sectionStore.clearFilter(true);
	    sectionStore.load();
	    sectionStore.filter("electionId", record.data.id);
	       
    	button.up('navigationview').push({
            xtype: 'sectionList',
            title: 'Elezione',
            electionId: record.data.id
        });
    },
    
    addSectionTap: function(button, e, eOpts) {
    	button.up('navigationview').push({
            xtype: 'addSection',
            title: 'Aggiungi Sezione',
            electionId: button.getParent().config.electionId
        });
    },
    
    saveSectionTap: function(button, e, eOpts) {
    	var form = button.getParent().getParent();
	    var formData = form.getValues();
	     
	    var section = Ext.create('MyApp.model.SectionModel',{
	         number: formData.number,
	         note: formData.note,
	         electionId: button.getParent().getParent().config.electionId
	    });
	     
	    var errs = section.validate();
	    
	    if (!errs.isValid()) {
	    	var msg = '';
	    	errs.each(function (err) {
	    		msg += err.getField() + ' : ' + err.getMessage() + '';
	    	});
	    	
	    	Ext.Msg.alert('ERROR', msg);
	    } else {
	       var sectionStore = Ext.getStore('sectionstore');
	       sectionStore.add(section);
	       sectionStore.sync();
	       sectionStore.load();
	       Ext.Msg.alert('SUCCESS', 'Sezione salvata con Successo');
	       //redirect to section list
	       button.up('navigationview').pop();
	    }
    }
});
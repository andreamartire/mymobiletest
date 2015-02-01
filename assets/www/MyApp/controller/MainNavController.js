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
            	itemtap : 'electionTap',
            	edit: 'editElection',
            	remove: 'removeElection'
            },
            "electionDetail button": {
                tap: 'saveElectionTap'
            },
            //coalition
            "coalitionList #addCoalitionId": {
                tap: 'addCoalitionTap'
            },
            "coalitionList #startBallotId": {
                tap: 'startBallotTap'
            },
            "coalitionDetail button": {
                tap: 'saveCoalitionTap'
            },
            "coalitionList dataview": {
            	itemtap : 'coalitionTap',
            	edit: 'editCoalition',
            	remove: 'removeCoalition'
            },
            //list
            "listaList button": {
                tap: 'addListTap'
            },
            "addList button": {
                tap: 'saveListTap'
            },
            "listaList dataview": {
            	itemtap : 'listTap'
            },
            //candidate
            "candidateList button": {
                tap: 'addCandidateTap'
            },
            "addCandidate button": {
                tap: 'saveCandidateTap'
            },
            //vote
            "ballotView #validVoteId": {
                tap: 'saveValidVoteTap'
            },
            "ballotView #notValidVoteId": {
                tap: 'saveNotValidVoteTap'
            },
            "ballotView #emptyVoteId": {
                tap: 'saveEmptyVoteTap'
            }
        }
    },

    addElectionTap: function(button, e, eOpts) {
    	button.up('navigationview').push({
            xtype: 'electionDetail',
        	title: 'Aggiungi Elezione'
        });
    },
    
    saveElectionTap: function(button, e, eOpts) {
    	var form = button.getParent().getParent();
	    var formData = form.getValues();
	     
	    var election = Ext.create('MyApp.model.ElectionModel',{
	    	 id: formData.id,
	         date: formData.date,
	         type: formData.type,
	         city: formData.city,
	         note: formData.note
	    });
	    
	    var electionStore = Ext.getStore('electionstore');
	    electionStore.add(election);
	    electionStore.sync();
	    electionStore.load();
	    Ext.Msg.alert('SUCCESS', 'Elezione salvata con Successo');
	    //redirect to election list
	    button.up('navigationview').pop();
    },
    
    electionTap: function(button, index, target, record, e, eOpts ){
    	button.up('navigationview').push({
            xtype: 'coalitionList',
            electionId: record.data.id
        });
    },
    
    editElection: function(element, electionId){
    	element.up('navigationview').push({
            xtype: 'electionDetail',
        	title: 'Modifica Elezione',
        	electionId: electionId
        });
    },
    
    removeElection: function(element, electionId){
    	Ext.Msg.confirm('Cancellazione', 'Vuoi rimuovere l\'elezione?', function(btn){
    		if(btn === 'yes'){    		    
    	    	var electionStore = Ext.getStore('electionstore');
    	    	var election = electionStore.getById(electionId);
    	    	electionStore.remove(election);
    	    	electionStore.sync();
    		}
    	});
    },
    
    addCoalitionTap: function(button, e, eOpts) {
    	button.up('navigationview').push({
            xtype: 'coalitionDetail',
            title: 'Aggiungi Elezione',
            electionId: button.getParent().config.electionId
        });
    },
    
    saveCoalitionTap: function(button, e, eOpts) {
    	var form = button.getParent().getParent();
	    var formData = form.getValues();
	     
	    var coalition = Ext.create('MyApp.model.CoalitionModel',{
	    	 id: formData.id,
	         name: formData.name,
	         candidateName: formData.candidateName,
	         candidateSurname: formData.candidateSurname,
	         electionId: formData.electionId
	    });
	    
	    var coalitionStore = Ext.getStore('coalitionstore');
	    coalitionStore.add(coalition);
	    coalitionStore.sync();
	    coalitionStore.load();
	    Ext.Msg.alert('SUCCESS', 'Coalizione salvata con Successo');
	    //redirect to coalition list
	    button.up('navigationview').pop();
    },
    
    coalitionTap: function(button, index, target, record, e, eOpts ){
    	button.up('navigationview').push({
            xtype: 'listaList',
            coalitionId: record.data.id
        });
    },
    
    editCoalition: function(element, coalitionId){
    	element.up('navigationview').push({
            xtype: 'coalitionDetail',
        	title: 'Modifica Coalizione',
        	coalitionId: coalitionId
        });
    },
    
    removeCoalition: function(element, coalitionId){
    	Ext.Msg.confirm('Cancellazione', 'Vuoi rimuovere la coalizione?', function(btn){
    		if(btn === 'yes'){    		    
    	    	var coalitionStore = Ext.getStore('coalitionstore');
    	    	var coalition = coalitionStore.getById(coalitionId);
    	    	coalitionStore.remove(coalition);
    	    	coalitionStore.sync();
    		}
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
	     
		var listStore = Ext.getStore('liststore');
		listStore.add(list);
		listStore.sync();
		listStore.load();
		Ext.Msg.alert('SUCCESS', 'Lista salvata con Successo');
		//redirect to lista list
		button.up('navigationview').pop();
    },
    
    listTap: function(button, index, target, record, e, eOpts){
    	button.up('navigationview').push({
            xtype: 'candidateList',
            listId: record.data.id
        });
    },
    
    addCandidateTap: function(button, e, eOpts) {
    	button.up('navigationview').push({
            xtype: 'addCandidate',
            listId: button.getParent().config.listId
        });
    },
    
    saveCandidateTap: function(button, e, eOpts) {
    	var form = button.getParent().getParent();
	    var formData = form.getValues();
	     
	    var candidate = Ext.create('MyApp.model.CandidateModel',{
	         name: formData.name,
	         surname: formData.surname,
	         gender: formData.gender,
	         nickname: formData.nickname,
	         birthDate: formData.birthDate,
	         listId: formData.listId
	    });
	    
       var candidateStore = Ext.getStore('candidatestore');
       candidateStore.add(candidate);
       candidateStore.sync();
       candidateStore.load();
       Ext.Msg.alert('SUCCESS', 'Candidato salvato con Successo');
       //redirect to candidate list
       button.up('navigationview').pop();
    },
    
    startBallotTap: function(button, index, target, record, e, eOpts){
    	button.up('navigationview').push({
            xtype: 'ballotView',
            electionId: button.getParent().config.electionId
        });
    },
    
    saveValidVoteTap: function(button, e, eOpts) {
    	Ext.Msg.alert('SUCCESS', 'Valido');
    },

    saveNotValidVoteTap: function(button, e, eOpts) {
    	Ext.Msg.confirm('Conferma', 'Confermi Scheda Nulla?', function(btn){
    		if(btn === 'yes'){
		    	var vote = Ext.create('MyApp.model.VoteModel',{
			         notValid: true,
			         electionId: button.getParent().getParent().config.electionId
			    });
			    
		    	var voteStore = Ext.getStore('votestore');
		    	voteStore.add(vote);
		    	voteStore.sync();
		    	voteStore.load();
    		}
		});
    },

    saveEmptyVoteTap: function(button, e, eOpts) {
    	Ext.Msg.confirm('Conferma', 'Confermi Scheda Bianca?', function(btn){
    		if(btn === 'yes'){
    			var vote = Ext.create('MyApp.model.VoteModel',{
    		         empty: true,
    		         electionId: button.getParent().getParent().config.electionId
    		    });
    		    
    	    	var voteStore = Ext.getStore('votestore');
    	    	voteStore.add(vote);
    	    	voteStore.sync();
    	    	voteStore.load();
    		}
    	});
    }
});
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
            	remove: 'removeCoalition',
            	vote: 'voteCoalition'
            },
            //list
            "listaList button": {
                tap: 'addListTap'
            },
            "listDetail button": {
                tap: 'saveListTap'
            },
            "listaList dataview": {
            	itemtap : 'listTap',
            	edit: 'editList',
            	remove: 'removeList',
            	vote: 'voteList'
            },
            //candidate
            "candidateList button": {
            	tap: 'addCandidateTap'
            },
            "candidateList dataview": {
            	edit: 'editCandidate',
            	remove: 'removeCandidate',
            	vote: 'voteCandidate'
            },
            "candidateDetail button": {
                tap: 'saveCandidateTap'
            },
            //vote
            "ballotView #voteListId": {
                remove: 'removeVote'
            },
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
	    button.up('navigationview').pop(1);
	    //reset ballot mode
	    MyApp.config.ballotMode = false;
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
	    button.up('navigationview').pop(1);
	    //reset ballot mode
	    MyApp.config.ballotMode = false;
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
            xtype: 'listDetail',
            coalitionId: button.getParent().config.coalitionId,
            title: 'Aggiungi Lista'
        });
    },
    
    saveListTap: function(button, e, eOpts) {
    	var form = button.getParent().getParent();
	    var formData = form.getValues();
	     
	    var list = Ext.create('MyApp.model.ListModel',{
	    	id: formData.id,
	        name: formData.name,
	        coalitionId: formData.coalitionId
	    });
	     
		var listStore = Ext.getStore('liststore');
		listStore.add(list);
		listStore.sync();
		listStore.load();
		Ext.Msg.alert('SUCCESS', 'Lista salvata con Successo');
		//redirect to lista list
		button.up('navigationview').pop(1);
	    //reset ballot mode
	    MyApp.config.ballotMode = false;
    },
    
    listTap: function(button, index, target, record, e, eOpts){
    	button.up('navigationview').push({
            xtype: 'candidateList',
            listId: record.data.id
        });
    },
    
    editList: function(element, listId){
    	element.up('navigationview').push({
            xtype: 'listDetail',
        	title: 'Modifica Lista',
        	listId: listId
        });
    },
    
    removeList: function(element, listId){
    	Ext.Msg.confirm('Cancellazione', 'Vuoi rimuovere la lista?', function(btn){
    		if(btn === 'yes'){    		    
    	    	var listStore = Ext.getStore('liststore');
    	    	var list = listStore.getById(listId);
    	    	listStore.remove(list);
    	    	listStore.sync();
    		}
    	});
    },
    
    addCandidateTap: function(button, e, eOpts) {
    	button.up('navigationview').push({
            xtype: 'candidateDetail',
            listId: button.getParent().config.listId,
            title: 'Aggiungi Candidato'
        });
    },
    
    saveCandidateTap: function(button, e, eOpts) {
    	var form = button.getParent().getParent();
	    var formData = form.getValues();
	     
	    var candidate = Ext.create('MyApp.model.CandidateModel',{
	    	id: formData.id,
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
       button.up('navigationview').pop(1);
	    //reset ballot mode
	    MyApp.config.ballotMode = false;
    },
    
    editCandidate: function(element, candidateId){
    	element.up('navigationview').push({
            xtype: 'candidateDetail',
        	title: 'Modifica Candidato',
        	candidateId: candidateId
        });
    },
    
    removeCandidate: function(element, candidateId){
    	Ext.Msg.confirm('Cancellazione', 'Vuoi rimuovere il candidato?', function(btn){
    		if(btn === 'yes'){    		    
    	    	var candidateStore = Ext.getStore('candidatestore');
    	    	var candidate = candidateStore.getById(candidateId);
    	    	candidateStore.remove(candidate);
    	    	candidateStore.sync();
    		}
    	});
    },
    
    removeVote: function(element, voteId){
    	var me = this;
    	Ext.Msg.confirm('Cancellazione', 'Vuoi rimuovere il voto?', function(btn){
    		if(btn === 'yes'){    		    
    	    	var voteStore = Ext.getStore('votestore');
    	    	var vote = voteStore.getById(voteId);
    	    	
    	    	if(vote){
    	    		if(vote.data.empty){
        	    		//decrementa schede bianche
        	        	var numEmpty = Ext.getCmp('emptyCounterId').getValue();
        	        	Ext.getCmp('emptyCounterId').setValue(numEmpty-1);
        	    	}
        	    	else if(vote.data.notValid){
        	    		//decrementa schede nulle
        	    		var numNull = Ext.getCmp('nullCounterId').getValue();
        		    	Ext.getCmp('nullCounterId').setValue(numNull-1);
        	    	}
        	    	else {
        	    		//decrementa voti validi
        		    	var numValid = Ext.getCmp('validVoteCounterId').getValue();
        		    	Ext.getCmp('validVoteCounterId').setValue(numValid-1);
        	    	}
    	    	}else{
    	    		Ext.Msg.alert('ERROR', 'Errore nella rimozione del voto');
    	    	}
    	    	
    	    	voteStore.remove(vote);
    	    	voteStore.sync();
    	    	
    	    	//aggiorna totale votanti
    	    	me.refreshVoters();
    		}
    	});
    },
    
    startBallotTap: function(button, index, target, record, e, eOpts){
    	button.up('navigationview').push({
            xtype: 'ballotView',
            electionId: button.getParent().config.electionId
        });
    },
    
    saveValidVoteTap: function(button, e, eOpts) {    	
    	button.up('navigationview').push({
            xtype: 'coalitionList',
            title: 'Seleziona Preferenza, Lista o Presidente',
            electionId: button.getParent().getParent().config.electionId
        });
    },
    
    voteCoalition: function(element, coalitionId){
    	var me = this;
    	Ext.Msg.confirm('Votazione', 'Confermi il voto alla coalizione?', function(btn){
    		if(btn === 'yes'){    		    
    	    	var coalitionStore = Ext.getStore('coalitionstore');
    	    	var coalition = coalitionStore.getById(coalitionId);
    	    	
    	    	var vote = Ext.create('MyApp.model.VoteModel',{
			         coalitionId: coalitionId,
			         electionId: coalition.data.electionId,
			         empty: false,
			         notValid: false
			    });
			    
		    	var voteStore = Ext.getStore('votestore');
		    	voteStore.add(vote);
		    	voteStore.sync();
		    	voteStore.load();
		    	
		    	//incrementa voti validi 
		    	var numValid = Ext.getCmp('validVoteCounterId').getValue();
		    	Ext.getCmp('validVoteCounterId').setValue(numValid+1);

		    	me.refreshVoters();
    		}
    		//redirect to vote list
    	    element.up('navigationview').pop(1);
    	    //reset ballot mode
    	    MyApp.config.ballotMode = false;
    	});
    },
    
    voteList: function(element, listId){
    	var me = this;
    	Ext.Msg.confirm('Votazione', 'Confermi il voto alla lista?', function(btn){
    		if(btn === 'yes'){
    	    	var listStore = Ext.getStore('liststore');
    	    	var list = listStore.getById(listId);
    	    	
    	    	var coalitionStore = Ext.getStore('coalitionstore');
    	    	var coalition = coalitionStore.getById(list.data.coalitionId);
    	    	
    	    	var vote = Ext.create('MyApp.model.VoteModel',{
    	    		listId: listId,
			        electionId: coalition.data.electionId,
			        coalitionId: coalition.data.id,
			        empty: false,
			        notValid: false
			    });
			    
		    	var voteStore = Ext.getStore('votestore');
		    	voteStore.add(vote);
		    	voteStore.sync();
		    	voteStore.load();
		    	
		    	//incrementa voti validi
		    	var numValid = Ext.getCmp('validVoteCounterId').getValue();
		    	Ext.getCmp('validVoteCounterId').setValue(numValid+1);

		    	me.refreshVoters();
    		}
    		//redirect to vote list
    	    element.up('navigationview').pop(2);
    	    //reset ballot mode
    	    MyApp.config.ballotMode = false;
    	});
    },

    voteCandidate: function(element, candidateId){
    	var me = this;
    	Ext.Msg.confirm('Votazione', 'Confermi il voto al candidato?', function(btn){
    		if(btn === 'yes'){    		    
    	    	var candidateStore = Ext.getStore('candidatestore');
    	    	var candidate = candidateStore.getById(candidateId);
    	    	
    	    	var listStore = Ext.getStore('liststore');
    	    	var list = listStore.getById(candidate.data.listId);
    	    	
    	    	var coalitionStore = Ext.getStore('coalitionstore');
    	    	var coalition = coalitionStore.getById(list.data.coalitionId);
    	    	
    	    	var vote = Ext.create('MyApp.model.VoteModel',{
    	    		candidateId: candidateId,
			        electionId: coalition.data.electionId,
			        coalitionId: coalition.data.id,
			        listId: list.data.id,
			        empty: false,
			        notValid: false
			    });
			    
		    	var voteStore = Ext.getStore('votestore');
		    	voteStore.add(vote);
		    	voteStore.sync();
		    	voteStore.load();
		    	
		    	//incrementa voti validi
		    	var numValid = Ext.getCmp('validVoteCounterId').getValue();
		    	Ext.getCmp('validVoteCounterId').setValue(numValid+1);

		    	me.refreshVoters();
    		}
    		//redirect to vote list
    	    element.up('navigationview').pop(3);
    	    //reset ballot mode
    	    MyApp.config.ballotMode = false;
    	});
    },
    
    saveNotValidVoteTap: function(button, e, eOpts) {
    	var me = this;
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
		    	
		    	//incrementa voti nulli
		    	var numNull = Ext.getCmp('nullCounterId').getValue();
		    	Ext.getCmp('nullCounterId').setValue(numNull+1);
		    	
		    	me.refreshVoters();
    		}
		});
    },

    saveEmptyVoteTap: function(button, e, eOpts) {
    	var me = this;
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
		    	
    	    	//incrementa schede bianche
		    	var numEmpty = Ext.getCmp('emptyCounterId').getValue();
		    	Ext.getCmp('emptyCounterId').setValue(numEmpty+1);
		    	
		    	me.refreshVoters();
    		}
    	});
    },
    
    refreshVoters: function(){
    	//get schede bianche
    	var numEmpty = Ext.getCmp('emptyCounterId').getValue();
    	
    	//get voti validi
    	var numValid = Ext.getCmp('validVoteCounterId').getValue();
    	
    	//get voti nulli
    	var numNull = Ext.getCmp('nullCounterId').getValue();
    	
    	//aggiorna totale votanti
    	Ext.getCmp('voterCounterId').setValue(numEmpty + numValid + numNull);
    }
});
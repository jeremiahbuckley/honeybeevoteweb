class CandidateElectionController {
  constructor($log) {
    this.$log = $log;
    this.showVotePanel = false;
  }

  showVote() {
    this.showVotePanel = true;
  }

  candidateVoteOnCancel() {
    this.showVotePanel = false;
  }

  candidateVoteOnSave(vData) {
    if (this.onVoteSave) {
      vData.electionId = this.candidateElection.electionId;
      this.onVoteSave({voteData: vData});
    }
  }
}

CandidateElectionController.$inject = ['$log'];

export const candidateElection = {
  template: require('./candidate-election.html'),
  controller: CandidateElectionController,
  bindings: {
    candidateName: '<',
    candidateElection: '<',
    onVoteSave: '&'
  }
};

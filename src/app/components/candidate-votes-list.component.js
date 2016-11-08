class CandidateVotesController {
}

export const candidateVotesList = {
  template: require('./candidate-votes-list.html'),
  controller: CandidateVotesController,
  bindings: {
    vote: '<'
  }
};

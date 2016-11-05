class VoteDetailController {
}

export const voteDetail = {
  template: require('./vote-detail.html'),
  controller: VoteDetailController,
  bindings: {
    vote: '<'
  }
};

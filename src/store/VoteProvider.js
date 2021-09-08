import VoteContext from "./vote-context";

const VoteProvider = (props) => {
  const addVoteHandler = (vote) => {};
  const removeVoteHandler = (id) => {};
  const voteContext = {
    votes: [],
    totalVotes: 0,
    addVote: addVoteHandler,
    removeVote: removeVoteHandler,
  };

  return (
    <VoteContext.Provider value={voteContext}>
      {props.children}
    </VoteContext.Provider>
  );
};

export default VoteProvider;

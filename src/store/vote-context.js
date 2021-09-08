import React from 'react';

const VoteContext = React.createContext({
  votes: [],
  totalVotes: 0,
  addVote: (vote) => {},
  removeVote: (id)=>{} 
});

export default VoteContext;
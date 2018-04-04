import * as PlayerActions from '../actiontypes/player';

export const addPlayer = name => {
  return {
    type: PlayerActions.ADD_PLAYER,
    name
  };
};

export const removePlayer = index => {
  return {
    type: PlayerActions.REMOVE_PLAYER,
    index
  };
};

export const changePlayerScore = (index, score) => {
  return {
    type: PlayerActions.CHANGE_PLAYER_SCORE,
    index,
    score
  };
};

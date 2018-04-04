import * as PlayerActions from '../actiontypes/player';

const initialState = [
  {
    name: 'Frank Torchia',
    score: 0,
  },
  {
    name: 'Christina Sanborn',
    score: 0,
  },
];

export default function Player(state=initialState, action) {
  switch (action.type) {
    case PlayerActions.ADD_PLAYER:
      return [
        ...state,
        {
          name: action.name,
          score: 0
        }
      ];
    case PlayerActions.REMOVE_PLAYER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case PlayerActions.CHANGE_PLAYER_SCORE:
      return state.map((player, index) => {
        if(index === action.index) {
          return {
            ...player,
            score: player.score + action.score
          };
        }
        return player;
      });

    default:
      return state;
  }
}

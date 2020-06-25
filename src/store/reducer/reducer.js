import data from '../../feed/top5MoviesAssessement.json'
const initialState ={
    orderSelection: data.components[0].items,
    posterDetails: data.components[1].items
}

const rootReducer =(state =initialState,action)=>{
    const rankState = Object.assign({}, state);
    const releaseState = Object.assign({}, state);
    switch(action.type){
        case 'Rank':
            
            rankState.posterDetails= state.posterDetails.slice().sort((a, b) => {
                return a.rank - b.rank;
            });
            if(state.orderSelection[0].label !== 'Rank'){
               [rankState.orderSelection[0].label,rankState.orderSelection[1].label]=
               [state.orderSelection[1].label,state.orderSelection[0].label]
            }
            return rankState;
        case 'Release Date':
            
            releaseState.posterDetails= state.posterDetails.slice().sort((a, b) => {
                return a.releaseDate - b.releaseDate;
            });
            if(state.orderSelection[0].label === 'Rank'){
                [releaseState.orderSelection[0].label,releaseState.orderSelection[1].label]=
                [state.orderSelection[1].label,state.orderSelection[0].label]
             }
            return releaseState;
    default:
        return state;
    }
}
export default rootReducer;
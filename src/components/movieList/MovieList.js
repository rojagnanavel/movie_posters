import React  from 'react';
import classes from './MovieList.module.scss';
import MoviesMetaData from '../movieMetadata/MoviesMetaData.js';
import {useSelector,useDispatch} from 'react-redux';

//component to looping the movie poster and passing data to movieMetadata component
const MovieList =()=>{
    const posterDetails = useSelector(state=>state.posterDetails);
    const orderSelection = useSelector(state=>state.orderSelection);
    const dispatch =useDispatch();
    const selection=(e)=>{
        dispatch({type: e.target.value,data:e.target.value})
    }
    let optionItems = orderSelection.map((order) =>
        <option key={order.label} >{order.label}</option>
    );
    return (
        <div>
        {/* order selection dropdown */}
        {
            <div className={classes.dropdownStyle}>
            <h4>Select Movie Order</h4>
            <select onChange={e=>selection(e)}>
                {optionItems}
            </select>
            </div>
        }
    <div className={classes.movieBg}>
        {
        posterDetails.map((item,index)=>{
                return ( 
                <MoviesMetaData key={index} items={item}/>
                ) 
            })
        }
    </div>
    </div>
    )
}
export default MovieList; 
import React from 'react'; 
import classes from './MovieMetaDataView.module.scss';
import PropTypes from 'prop-types';

//component to show movie poster's meta data
const MovieMetaDataView = (props)=>{ 
    return(
        <div className={classes.movieBg}>
            <img className={classes.poster}
            alt={props.location.state.val.title} 
            src={props.location.state.val.imageUrl} />
            <div className={classes.metaDataStyle}>
            <div><span>Title: </span> {props.location.state.val.title}</div>
            <div><span>Synopsis: </span>{props.location.state.val.synopsis}</div>
            <div><span>Rank: </span>{props.location.state.val.rank}</div>
            <div><span>Release Date: </span>{props.location.state.val.releaseDate}</div>
            </div>
        </div> 
    ); 
} 
MovieMetaDataView.propTypes = {
    location: PropTypes.object.isRequired
  };
export default MovieMetaDataView; 
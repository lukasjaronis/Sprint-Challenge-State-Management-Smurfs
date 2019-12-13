import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';
import { fetchPosts } from '../actions/index';
import Loader from "react-loader-spinner";

// material UI styles

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  //

const SmurfForm = props => {
    const classes = useStyles();

    const [smurf, setSmurf] = useState(
    {   name: "",
        age: "",
        height: ""

    });

    const handleSubmit = e => {
      e.preventDefault();
      props.fetchPosts();
      props.addPost(smurf)
      
  }

    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value});
    };


    return (
        <div>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" type="text"  name='name' value={props.name} onChange={handleChanges} label="Name" variant="outlined" />
        <TextField id="outlined-basic" type="text"    name='age' value={props.age} onChange={handleChanges} label="Age" variant="outlined" />
        <TextField id="outlined-basic" type="text"    name='height' value={props.height} onChange={handleChanges} label="Height" variant="outlined" />
    
        {!props.smurfs && !props.isFetching && <p>Search an image!</p>}

        {props.isFetching && (
          <Loader type="Puff" color="#c38d9e" height={300} width={300} />
        )}

        <Button type="submit" color="primary" onClick={handleSubmit}>Submit</Button>


      </form>
        </div>
    )
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};


export default connect(mapStateToProps, { fetchPosts, addPost })(SmurfForm); 

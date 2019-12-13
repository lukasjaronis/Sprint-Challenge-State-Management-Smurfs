import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

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
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleSubmit = event => {
        event.preventDefault();
        props.addPost(name)
        console.log(` SMURF USER `, smurf) 
    };

    const handleChanges = event => {
        let name = event.target.name;

        setSmurf({ ...smurf, [name]: event.target.value})
    };


    return (
        <div>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" name="name" value={props.name} onChange={handleChanges} label="Name" variant="outlined" />
        <TextField id="outlined-basic" name="age" value={props.age} onChange={handleChanges} label="Age" variant="outlined" />
        <TextField id="outlined-basic" name="height" value={props.height} onChange={handleChanges} label="Height" variant="outlined" />
        {!props.smurfs && !props.isFetching && <Button type="submit" color="primary" onClick={handleSubmit}>Submit</Button>}

        {props.isFetching && (
            <p>Load</p>
        )}

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

export default connect(mapStateToProps, { addPost }) (SmurfForm);

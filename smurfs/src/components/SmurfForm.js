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

    const [smurf, setSmurf] = useState(
    {   name: "",
        age: "",
        height: ""

    });

    const handleSubmit = e => {
      e.preventDefault();
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
        <Button type="submit" color="primary" onClick={handleSubmit}>Submit</Button>


      </form>
        </div>
    )
}


export default connect(null, { addPost })(SmurfForm); 

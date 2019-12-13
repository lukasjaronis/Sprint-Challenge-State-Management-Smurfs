import React, { useEffect } from 'react';
import aSmurf from '../components/aSmurf';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

const SmurfList = props => {
    useEffect(() => {
        props.fetchPosts()
        console.log(`SMURF LIST`, props);
    }, [])

    return   (
        <div>
            <div>{props.smurfs.map(smurf => {
                return <aSmurf smurf={smurf} />
            })}
            </div> 
        </div>
    )
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}     



export default connect(mapStateToProps, {fetchPosts})(SmurfList); 


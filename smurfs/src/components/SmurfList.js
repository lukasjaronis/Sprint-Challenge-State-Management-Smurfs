import React, { useEffect } from 'react';
import ASmurf from './ASmurf';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

const SmurfList = props => {
    useEffect(() => {
        props.fetchPosts()
    }, [])

    return   (
        <div>

        <div>{props.smurfs.map(smurf => {

            return <ASmurf key={smurf.id} smurf={smurf} />
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


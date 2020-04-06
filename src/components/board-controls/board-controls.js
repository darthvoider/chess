import React from 'react';
import { connect } from 'react-redux';
import { decrementActiveCombinationNumber, incrementActiveCombinationNumber } from '../../store/actions';

const BoardControlsConnected = ({allVariations,  incrementActiveCombinationNumber, decrementActiveCombinationNumber, activeCombinationNumber}) => {
    const disablePrevBtn = activeCombinationNumber === 0;
    const disableNextBtn = activeCombinationNumber === allVariations.length - 1;
    return (
        <div className='board-controls'>
            <h3>Number of combinations: {allVariations.length}</h3>
            <h3>Current number: {activeCombinationNumber + 1}</h3>
            <button disabled={disablePrevBtn} className='btn' type='button' onClick={decrementActiveCombinationNumber}>Prev</button>
            <button className='btn' type='button' disabled={disableNextBtn} onClick={incrementActiveCombinationNumber}>Next</button>
        </div>
    );
};

const mapStateToProps = state => ({
    allVariations: state.allVariations,
    activeCombinationNumber: state.activeCombinationNumber,
});

const mapDispatchToProps = {
    incrementActiveCombinationNumber,
    decrementActiveCombinationNumber
};

export const BoardControls = connect(mapStateToProps, mapDispatchToProps)(BoardControlsConnected);

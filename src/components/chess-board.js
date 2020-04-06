import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { solve } from '../helpers/helpers';
import { setAllVariations } from '../store/actions';
import { BoardControls } from './board-controls/board-controls';
import { ChessCell } from './chess-cell/chess-cell';

const ChessBoardConnected = ({ size, allVariations, setAllVariations, activeCombinationNumber }) => {
    useEffect(() => solve(setAllVariations, size), [setAllVariations, size]);
    const activeCombination = allVariations[activeCombinationNumber] || [];
    return (
        <div className='main-wrapper'>
            <div className='chess-board'>
                {[...Array(size)].map((_, row) => (
                    [...Array(size)].map((_, col) => {
                        const isQueen = activeCombination[col] === row;
                        const isBlack = !!((row + col) % 2);
                        return (
                            <ChessCell
                                key={col}
                                isQueen={isQueen}
                                isBlack={isBlack}
                            />
                        );
                    })

                ))
                }
            </div>
            <BoardControls />
        </div>
    );
};

const mapStateToProps = state => ({
    size: state.size,
    allVariations: state.allVariations,
    activeCombinationNumber: state.activeCombinationNumber,
});

const mapDispatchToProps = {
    setAllVariations
};

export const ChessBoard = connect(mapStateToProps, mapDispatchToProps)(ChessBoardConnected);

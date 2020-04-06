import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Queen } from '../queen/queen';

export const ChessCell = ({ isQueen, isBlack }) => {
    const cellClasses = classNames('chess-cell', {
        'with-queen': isQueen,
        'black': isBlack
    });
    return (
        <div className={cellClasses} >
            <span className="icon">
                <Queen />
            </span>
        </div>
    );
};

ChessCell.propTypes = {
    isQueen: PropTypes.bool,
    isBlack: PropTypes.bool
};

ChessCell.defaultProps = {
    isQueen: false,
    isBlack: false
};

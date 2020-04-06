function setQueens(rows, columns) {
    if (rows <= 0) {
        return [[]];
    } else {
        return addQueen(rows - 1, columns);
    }
}

function addQueen(newRow, columns) {
    let newSolutions = [];
    let prev = setQueens(newRow, columns);
    for (let i = 0; i < prev.length; i++) {
        let solution = prev[i];
        for (let newColumn = 0; newColumn < columns; newColumn++) {
            if (!hasConflict(newRow, newColumn, solution))
                newSolutions.push(solution.concat([newColumn]));
        }
    }
    return newSolutions;
}

function hasConflict(newRow, newColumn, solution) {
    for (let i = 0; i < newRow; i++) {
        if (solution[i] === newColumn ||
            solution[i] + i === newColumn + newRow ||
            solution[i] - i === newColumn - newRow) {
            return true;
        }
    }
    return false;
}

export const solve = (setAllVariations, size) => {
    const arr = setQueens(size, size);
    setAllVariations(arr);
};

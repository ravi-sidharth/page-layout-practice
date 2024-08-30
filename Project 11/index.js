let gfg = [];
let row = 3;
let col = 3;
let h = 0

// Loop to initialize 2D array elements.
for (let i = 0; i < row; i++) {
    gfg[i] = [];
    for (let j = 0; j < col; j++) {
        gfg[i][j] = h++;
    }
}
console.log(gfg);
//Exercício 06 - Bloco 4 : Dia 1

let namePiece = "Bishop";
// let transfToLower = namePiece.toLowerCase();
switch (namePiece.toLowerCase()) {
    case "pawn":
        console.log("It moves forward one or two squares.");
        break;

    case "bishop":
        console.log("It moves diagonally as many squares as it likes.")
        break;

    case "knight":
        console.log("It moves square left or right horizontally.")
        break;

    case "rook":
        console.log("It moves left or right, up and down.")
        break;

    case "queen":
        console.log("It moves left or right, up and down and diagonally.")
        break;

    case "king":
        console.log("It moves one square in any direction.")
        break;
    default:
        console.log("It isn't a chess piece.")
}


// console.log(namePiece.toLowerCase());
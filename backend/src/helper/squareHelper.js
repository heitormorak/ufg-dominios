export function GetSquare(x, y) {
    const longitude = x;
    const latitude = y;
    const sideLength = 0.1; // in degrees

    const topLeft = [longitude - sideLength / 500, latitude + sideLength / 500];
    const topRight = [longitude + sideLength / 500, latitude + sideLength / 500];
    const bottomRight = [longitude + sideLength / 500, latitude - sideLength / 500];
    const bottomLeft = [longitude - sideLength / 500, latitude - sideLength / 500];

    const squareCoordinates = [topLeft, topRight, bottomRight, bottomLeft, topLeft];

    return squareCoordinates;
}
function getTriangleArea(a, h) {
var triangleArea = a*h/2;

if ( a <= 0 ) {
console.log('Wrong data');
} if ( h <= 0 ) {
console.log('Wrong data');
}
document.getElementById("areaOfTriangle").innerHTML = triangleArea;

}

var triangle1Area = getTriangleArea(12, 16);
var triangle2Area = getTriangleArea(14, 18);
var triangle3Area = getTriangleArea(16, 20); // those parameters are working data parameters
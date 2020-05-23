/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

// Answer//

getSize=(w, h, d)=>[2*((w*h)+(w*d)+(d*h)), w*h*d]

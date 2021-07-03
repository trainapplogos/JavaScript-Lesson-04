/*
Create an array of numbers where there will be at least 20 values. 
Among them should be both positive and negative values.
1. Sort this array
a). from the smallest to the largest
b). from the largest to the smallest
2. filter only positive (with zero) and only negative to separate arrays.
*/

console.log('> task 1:');
//task 01 - 1.a

var arr = [14, -2, 5, 3, 16, -9, 53, 60, -134, 0, -12, 1, 34, 63, 54, -74, 24, 23, 6, -22, 62];

function ascSort(a, b) {
    return a - b;
}

arr.sort(ascSort);
console.log(' array sorted by ascending: ' + arr);

//task 01 - 1.b
arr.reverse();
console.log(' array sorted by descending: ' + arr);

//task 01 - 2
var positive = arr.filter(function(num) {
    return num >= 0;
});

console.log(' positive array: ' + positive);

var negative = arr.filter(function(num) {
    return num < 0;
});
console.log(' negative array: ' + negative);

//------------------------------[task 2]------------------------------
console.log('\n> task 2:');

var student01 = {
    yearOfStuding: 2020,
    facultyName: 'Economy'
};

var student02 = {
    yearOfStuding: 2021,
    facultyName: 'Computer Science'
};

var student03 = {
    yearOfStuding: 2020,
    facultyName: 'Computer Science'
};

var student04 = {
    yearOfStuding: 2019,
    facultyName: 'Computer Science'
};

var student05 = {
    yearOfStuding: 2013,
    facultyName: 'Computer Science'
};

var student06 = {
    yearOfStuding: 2020,
    facultyName: 'Economy'
};

var student07 = {
    yearOfStuding: 2017,
    facultyName: 'Computer Science'
};

var student08 = {
    yearOfStuding: 2020,
    facultyName: 'Computer Science'
};

var student09 = {
    yearOfStuding: 2014,
    facultyName: 'Computer Science'
};

var student10 = {
    yearOfStuding: 2020,
    facultyName: 'Computer Science'
};

var studArr = [];
studArr.push(student01, student02, student03, student04, student05, student06, student07, student08, student09, student10);

/*
function getName(obj) {
    return obj.facultyName;
}

var namesArr = studArr.map(getName);
console.log(namesArr); */
console.log();

var namesArr = studArr.map(function(obj){
    return '\n' + obj.facultyName;
});
console.log('>> List of all Faculties: \n' + namesArr);


//sum
var yearsArr = studArr.reduce(function(sum, item) {
    return sum + item.yearOfStuding;
}, 0);

console.log('>> Sum of all years = ' + yearsArr);


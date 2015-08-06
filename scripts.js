// var example = [1,2,3,4,5];
// // // console.log(example.slice(1));
// // // // [2,3,4,5]
// console.log(example.slice(-5));
// // [2,3]
// // console.log(example);
// // // [1,2,3,4,5]





// function slice(array, firstIndex, lastIndex) {
//   output = [];
  
//   if (lastIndex === undefined) {
//     lastIndex = array.length;
//   }

//   if (firstIndex < 0) {
//     for (var i = (array.length + firstIndex); i < array.length; i++) {
//       output.push(array[i]);
//     } 
//   }

//   else {
//     for (var i = firstIndex; i < lastIndex; i++) {
//       output.push(array[i]);
//     }
//   }

//   return output;
// }

// console.log(slice([1,2,3,4,5],3)); //Should log [2,3,4,5]

// console.log(slice([1,2,3,4,5],1,3)); //Should log [2,3]

// console.log(slice([1,2,3,4,5],-2)); //Should log [4,5]


// var original = ['a','b','c'];
// var new1 = 'd';
// console.log(original.concat(new1));
// // ['a','b','c','d']

// console.log(original); // unmodified

// var new2 = ['e'];
// console.log(original.concat(new2));
// // ['a','b','c','e']

// var new3 = [['f'], 'g'];
// console.log(original.concat(new3));
// ['a','b','c',['f'],'g']
// var new4 = {thing: "awesome"}
// console.log(original.concat(new4));
// [ 'a', 'b', 'c', { thing: 'awesome' } ]




// function concat(array1, array2) {
//   var output = [];

//   if (array2 === undefined) {
//     return array1;
//   }

//   for (var i = 0; i < array1.length; i++) {
//     output.push(array1[i]);
//   }

//   if (array2.length === undefined) {
//       output.push(array2);
//     }
    
//   for (var j = 0; j < array2.length; j++) {
//       output.push(array2[j]);   
//   }

//   return output;
// }


// console.log(concat(['a','b','c'],'d')); //Should return ['a','b','c','d']
// console.log(concat(['a','b','c'])); //Should return ['a','b','c']
// console.log(concat(['a','b','c'],['e'])); //Should return ['a','b','c','e']
// console.log(concat(['a','b','c'],[['f'],'g'])); //Should return ['a','b','c',['f'],'g']
// console.log(concat(['a','b','c'], {thing: "awesome"}));








// function include(array, element) {
//   var result = false;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       result = true;
//     }
//   }
//   return result; 
// }










// console.log('expect true');
// console.log(include([1,2,3,4,5],3));
// console.log('expect false');
// console.log(include([1,2,3,4,5],7));
// console.log('expect false');
// console.log(include([1,2,3,4,5],'3'));
// console.log('expect false');
// console.log(include([1,2,3,4,5],{a: 1}));











// var example1 = ['This', 'Is', 'An', 'Array', 'Of', 'Strings'];
// console.log(example1.toString());
// // This,Is,An,Array,Of,Strings

// var example2 = [1,2,3,4,5];
// console.log(example2.toString());
// 1,2,3,4,5


// function toString(array) {

// var result = '';
//   for (var i = 0; i < array.length; i++) {
//     if (i < array.length -1) {
//       result += array[i] + ',';
//     }
//     else {
//       result += array[i];
//     }
//   }
// return result;
// }

// console.log(toString(['This', 'Is', 'An', 'Array', 'Of', 'Strings'])); //Should return This,Is,An,Array,Of,Strings

// console.log(toString([1,2,3,4,5])); //Should return 1,2,3,4,5





// function toUpperCase(string) {

//   var charArray = string.split('');
//   var result = '';
//   for (var x in charArray) {

//     var number = string.charCodeAt(x);
//     console.log(number);
//     if (number > 100) {
//       result += String.fromCharCode(number-32);
//     }
//     else {
//       result += charArray[x];
//     }
//   }
//     return result;
// }
  
// console.log(toUpperCase('LoWer'));

function split(string, delimiter) {
var output = [];
result = '';
if (delimiter === undefined) {
  output.push(string);
  return output;
  
}
  for (var i = 0; i <= string.length; i++) {
      if (string[i] === delimiter || i === string.length) {
        output.push(result);
        result = '';
      }
      else {
          result += string[i];
      }
    }
    return output;
  }

console.log(split('this*is*a*string', '*'));
console.log(split('this is a string', ' '));
console.log(split('this is a string'));






// function substr(string, start, length) {
//   var result = '';
//     for (var i = start; i < string.length; i++ ) {
//       result += string[i];
//       if (result.length === length) {
//         break;
//       }
//     }
//   return result;
// }

// console.log(substr('abcde', 1, 3));

// function replace(string, substring, replaceString) {





//   var words = string.split(' ');
//   for (var x in words ) {
//     if ( words[x] === substring) {
//       words.splice(x, 1);
//       words.splice(x, 0, replaceString);
//     }

//   }
//     return words.join(' ');
// }

// console.log(replace('This is a string','string', 'cat'));
// console.log(replace('This is a string',' ', '*'));












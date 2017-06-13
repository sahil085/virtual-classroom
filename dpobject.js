function copyinfo()
{
	var firstObject = {
    firstname : 'sahil',
    lastname : 'verma',
    age:46
                     };

var secondObject = {
    firstname : 'radha',
    lastname : 'krishna'
};
//// keys of object
var keys1 = Object.keys(firstObject);
var keys2 = Object.keys(secondObject);
var k=keys1.length+keys2.length;
// temporary object
var temp={};
// counter
var c=0;
/// copying info from firstobject to temp object

for (var i=0; i<keys1.length;i++) {
  var key = keys1[i];

   //if (typeof secondObject[key] === 'undefined') {
 
    temp[key] = firstObject[key];
     c=c+1;
 // }
}
/// keys of object temp
var tempkeys=Object.keys(temp);
/// number of added info in temp + keys2.length
var d=c+keys2.length;
 var j=0;
 
 /// copying info of temp to secondobject

for(var i=keys2.length+1;i<=d;i++)
{
	var tk=tempkeys[j];

	secondObject[i]=temp[tk];
	j++;
}
for(var k in secondObject)
{
	  console.log(secondObject[k]);
}
}
function freesort(num) {
bm = this.bookmarkRoot.children[num]; 
bmArray = new Array(); 
for (var i=0; i < bm.children.length; i++) bmArray[i] = bm.children[i];
var reA = " ";
var reN = " ";
function compare(a, b) {
var a=a.name.toLowerCase();
var b=b.name.toLowerCase();
var aA = a.replace(reA, "");
var bA = b.replace(reA, "");
if (aA === bA) {
var aN = parseInt(a.replace(reN, ""), 10);
var bN = parseInt(b.replace(reN, ""), 10);
return aN === bN ? 0 : aN > bN ? 1 : -1;
} else {
return aA > bA ? 1 : -1;
}
}
bmArray.sort(compare);
for (var i=0; i < bmArray.length; i++) bm.insertChild(bmArray[i], bm.children.length);
for (var i=0; i < bmArray.length; i++) console.println(bmArray[i]);
}
for (var k=0; k < 10; k++){freesort(k+3)}

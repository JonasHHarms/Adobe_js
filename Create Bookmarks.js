this.bookmarkRoot.createChild("Name","this.pageNum=1",1);
this.bookmarkRoot.createChild("Name","this.pageNum++",2);
this.bookmarkRoot.createChild(" 1 Name","this.pageNum++",3);
this.bookmarkRoot.createChild(" 2 Name","this.pageNum++",4);
this.bookmarkRoot.createChild(" 3 Name","this.pageNum++",5);
this.bookmarkRoot.createChild(" 4 Name","this.pageNum++",6);
this.bookmarkRoot.createChild(" 5 Name","this.pageNum++",7);
this.bookmarkRoot.createChild(" 6 Name","this.pageNum++",8);
this.bookmarkRoot.createChild(" 7 Name","this.pageNum++",9);
for (var x = 0; x < 100; x++){
for (var i = 0; i < this.bookmarkRoot.children.length; i++)
{
if (this.bookmarkRoot.children[i].name.indexOf("1") == 0) {this.bookmarkRoot.children[3].insertChild(this.bookmarkRoot.children[i]);}
}
}
for (var x = 0; x < 100; x++){
for (var i = 0; i < this.bookmarkRoot.children.length; i++)
{
if (this.bookmarkRoot.children[i].name.indexOf("2") == 0) {this.bookmarkRoot.children[4].insertChild(this.bookmarkRoot.children[i]);}
}
}
for (var x = 0; x < 100; x++){
for (var i = 0; i < this.bookmarkRoot.children.length; i++)
{
if (this.bookmarkRoot.children[i].name.indexOf("3") == 0) {this.bookmarkRoot.children[5].insertChild(this.bookmarkRoot.children[i]);}
}
}
for (var x = 0; x < 100; x++){
for (var i = 0; i < this.bookmarkRoot.children.length; i++)
{
if (this.bookmarkRoot.children[i].name.indexOf("4") == 0) {this.bookmarkRoot.children[6].insertChild(this.bookmarkRoot.children[i]);}
}
}
for (var x = 0; x < 100; x++){
for (var i = 0; i < this.bookmarkRoot.children.length; i++)
{
if (this.bookmarkRoot.children[i].name.indexOf("5") == 0) {this.bookmarkRoot.children[7].insertChild(this.bookmarkRoot.children[i]);}
}
}
for (var x = 0; x < 100; x++){
for (var i = 0; i < this.bookmarkRoot.children.length; i++)
{
if (this.bookmarkRoot.children[i].name.indexOf("6") == 0) {this.bookmarkRoot.children[8].insertChild(this.bookmarkRoot.children[i]);}
}
}
for (var x = 0; x < 100; x++){
for (var i = 0; i < this.bookmarkRoot.children.length; i++)
{
if (this.bookmarkRoot.children[i].name.indexOf("7") == 0) {this.bookmarkRoot.children[9].insertChild(this.bookmarkRoot.children[i]);}
}
}

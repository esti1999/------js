//1
let foo=40;
let bar;
if(foo>10)
{
    bar=400;
}else{
    bar=0;
}
console.log(bar);

//2
foo=90;
bar= foo>10 ? 400:0;
console.log(bar);

//3
foo=85;
bar=450;
let baz;
if(bar>=foo)
{
    baz=foo;
}else{
    baz=bar;
}
console.log(baz);

//4
baz= bar>=foo ? foo:bar;
console.log(baz);
//1
let foo=5;
if(foo===5 || foo===10)
{
    console.log('i am 5 or 10');

}else{
    console.log('i am not 5 or 10');

}

//2
foo='bar'
if(foo==='bar' || foo==='baz')
{
    console.log('i am bar or i am baz');
}else{
    console.log(' i am not bar or i am not baz');
}

//3
foo=23;
if(foo<10 || foo>100)
{
    console.log('i am below 10 or i am above 100');
}else{
    console.log('i am not');
}

//4
foo=59;
let bar=56;
if(foo<bar || foo>100)
{
    console.log('i am below varible bar or i am above 100');
}else{
    console.log('i am not');
}

//5
foo=5;
bar=5;
if(foo===bar ||foo<0)
{
    console.log('i  am equal to variable bar OR I am below 0');

}else{
    console.log('I am not');
}

//6
foo=-1;
bar=foo;
if(foo===bar && foo<0)
{
    console.log('I am equal variable bar AND I am below 0');
}else{
    console.log('I am not');
}

foo=12;
bar=12;
let baz=foo;
if(foo===bar && foo ===baz)
{
    console.log('I am equal to variable bar AND I am equal to variable baz');
}else{
    console.log('I am not');
}
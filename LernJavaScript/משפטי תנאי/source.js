let foo=5;
if(foo===5)
{
    console.log("this is five");
}

foo=9;
if(foo===5)
{
    console.log("this is five");
}
else
{
    console.log("this is not five");
}

foo=9;
if(foo===4)
{
    console.log("this is 4");
} else if(foo===5)
{
    console.log("this is 5");
}else
{
    console.log("this is nt 4 or 5");
}

foo=5;
if(foo===1)
{
    console.log('sara');
}else if(foo===2)
{
    console.log('rivka');
}else if(foo===3)
{
    console.log('rachel');
}else if(foo===4)
{
    console.log('lea');
}else{
    console.log('nut found')
}

//אופרטורים השוואתיים נוספים
//השוואת מספר
foo=1;
if(foo!==1)
{
    console.log('yess!!');
}else{
    console.log('nooo!!😥😥')
}
//השוואת טקסט
foo='I am correct';
if(foo==='I am correct')
{
    console.log('He Is correct');
}else{
    console.log('He is not correct');
}
//מרובה תנאים
let day=8;
if(day===1){
    console.log('sunday');
}else if(day===2){
    console.log('monday');
}else if(day===3){
    console.log('tuesday');
}else if(day===4){
    console.log('wednesday');
}else if(day===5){
    console.log('thursday');
}else if(day===6){
    console.log('friday');
}else if(day===7){
    console.log('saturday');
}else{
    console.log('not 1-7 number');
}

//>=/<=
let BMI=20;
if(BMI<=18){
    console.log('נמוך מידי');
}else if(BMI>=25){
    console.log('גבוהה מידי');
}else{
    console.log('תקין');
}

//5 סוגי אופרטורים
let var1=1 ===1;
console.log(var1);//true
let var2=2 !==2;
console.log(var2);//false
let var3=3 <=3;
console.log(var3);//true
let var4=4 <4;
console.log(var4);//false
let var5=5 >5;
console.log(var5);//false

//השוואה בין כמה אופציות OR
foo='thursday';
if(foo==='Thursday' || foo==='thursday' || foo===5){
    console.log('😏😏😏');
}else{
    console.log('🤔🤔🤔');
}
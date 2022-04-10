//JS Code to find number of zeros in an Integer 
const num = 123;
var str="";
var cnt=0;

const placeValue = (num, res = [], factor = 1) => {
   if(num){
      const val = (num % 10) * factor;
      res.unshift(val);
      return placeValue(Math.floor(num / 10), res, factor * 10);
   };
   return res;
};

var temp=placeValue(num);
temp.forEach(element => {
    str=str+element;
});

for(let i=0;i<str.length;i++)
{
    if(str[i]=='0')
    {
        cnt++;
    }
}
console.log(str);
console.log(cnt);
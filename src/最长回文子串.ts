function longestPalindrome(s: string):string {

  let a = [];
  for(let i = 0;i<s.length;i++){
    let cachePin = i;
    while(s[i] === s[i+1]){
      i +=1;
    }
    if (cachePin !== i) {
      a.push([cachePin,i])
    }else{
      a.push([i])
    }
  }

  
  let b = [0,0];
  let margin = 0;
  console.log(a)
  for (let index = 0; index < a.length; index++) {
    const element = a[index];

    let i = element[0];
    let j = element[1]||element[0];
    
    while (s[i-1]&&s[j+1] &&s[i-1]===s[j+1]){
      i= i-1;
      j= j+1;
    }
    
   let x =  j-i;
   if (x > margin) {
     margin = x;
     b = [i,j]
   }
  }

return s.slice(b[0],b[1]+1);
};

const xv = longestPalindrome("aacabdkacaa");
console.log(xv)
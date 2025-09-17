let a = [3,0,-4,0,-19,7,-1];
let b =[];
let c=[];
let d =[];
for(i=0; i< a.length; i++){
    if(a[i] < 0){
        b.push(a[i])
    }else if(a[i] == 0){
        c.push(a[i])
    }else{
        d.push(a[i])
    }
}
console.log([...b,...c,...d])
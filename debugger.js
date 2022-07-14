 const arr1 = "@ntir cicakner,dashnamur,pedal,voski,voski,ari,ari,"

 function split (string,sep){
    const arr =[]
    let a =""
    for(i =0; i<string.length;i++){
       if(string[i]!==sep){
       a += string[i]
       
       
       }else{
        arr.push(a)
        a = ""
       }
      
       
    }
     
    return arr
 }


 const y =split(arr1,",")
 console.log(y)



  
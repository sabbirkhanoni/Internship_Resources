const promise = new Promise((resolve,reject)=>{

    const success = true;

    if(success){
        resolve("Done");
    }else{
        reject("Error");
    }

});

promise
.then(data=>console.log(data))
.catch(err=>console.log(err));
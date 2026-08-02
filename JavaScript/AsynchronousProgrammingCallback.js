function greet(name, callback){
    console.log("Hello",name);

    callback();
}

greet("Rahim",()=>{
    console.log("Welcome");
});
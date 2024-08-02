const mypromise = new  Promise((resolve, reject) => {
    const success = false;

    if (success){
        resolve('success');

    }else{
        reject('error happened');
    }

});

mypromise
.then(result => {
    console.log(result);

})
.catch(error => {
    console.log(error);
})
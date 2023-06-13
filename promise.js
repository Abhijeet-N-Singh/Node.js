//let countValue = new Promise(function (reslove, reject) {
//    reslove('Promise resolved');
//    reject('Promise rejected');
//});

//countValue.then{
//    function validCase(result){
//        console.log("result")
//    }
//}

let myPromise = new Promise (function(myResolve,myReject){

    let x = 0 ;
    if ( x==0 ) {

        myResolve('okey') ;
    } else {
        myReject('error') ;
    }
});

myPromise.then (
    function (value) {
        console.log(value) ;
    } ,
    function (error) {
         console.log(error) ;
    }
)

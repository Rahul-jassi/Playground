// setTimeout(() => {
//     console.log('two secounds are up')
    
// }, 2000);
// const names=['jass', 'gassso','shreya','anil']
// shortNames=names.filter((name)=>{
//     name.length<=4
// })
// const geocode = (address, callback)=>{
//     setTimeout(() => {
//         const data ={
//             latitude:0,
//             logitude:0
//         }
//         callback(data)  
//     }, 2000);
    
// }
//  geocode('los angles' ,(data)=>{
//      console.log(data)
//  })
const add =(a,b,callback)=>{
    setTimeout(() => {
        callback(a+b)
    }, 2000);
} 
add(1,5,(sum)=>{
    console.log(sum)
})
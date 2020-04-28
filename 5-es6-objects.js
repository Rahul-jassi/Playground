const name ='andrew'
const UserAge= 20
 const user =
 {
     name:name,
     age:UserAge,
     loction: 'boston'
 }
 console.log(user)
//  object destructing\
const product =
{
 lable:'red-notebook',
 author:'jp joshi',
 price:200, 
 salesprice: undefined
}
// const {lable,author, rating=5} = product
// console.log(lable)
// console.log(author)
// console.log(rating)
const transaction =(type, {lable, author}) =>{
 console.log(type,lable,author)
}
transaction('order', product)
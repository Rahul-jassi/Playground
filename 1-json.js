const fs= require('fs')
// const book=
// {
// title:'the monkey s ferrari',
// author:'dyaan chand'
// }

// const bookJSON  =JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)
//  const dataBuffer=fs.readFileSync('1-json.json')
//  const dataJSON= dataBuffer.toString()
//  const data= JSON.parse(dataJSON)
//  console.log(data.title)
// console.log(bookJSON)  
// const parseData= JSON.parse(bookJSON)
// console.log(parseData.author)
const dataBuffer=fs.readFileSync('1-json.json')
 const dataJSON= dataBuffer.toString()
 const user=JSON.parse(dataJSON)


 user.name="jassi"
 user.age =21
 const userJSON=JSON.stringify(user)
 fs.writeFileSync('1-json.json',userJSON)

























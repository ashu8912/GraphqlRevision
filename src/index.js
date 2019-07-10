import {GraphQLServer} from "graphql-yoga";
const typeDefs=`
type Product{
  title: String!
 price: Float!
 releaseYear: Int
 rating: Float
 inStock: Boolean!
 seller:Seller
}
type Seller{
  name:String!
  address:String!
}
type Query{
  product:Product,
  
}
`
const resolvers={
  Query:{
   product(parent,args,ctx,info){
     return {
       title:"adidas Shoes",
       price:34.5,
       releaseYear:2019,
       inStock:false,
       rating:5
     }
   },
},
  Product:{
    seller(parent,args,ctx,info){
      return {
        name:"Retail net",
        address:"noida sec.18"
      }
    }
}  
}
const server=new GraphQLServer({
  typeDefs,
  resolvers
})
server.start(()=>{
  console.log("server is up")
})
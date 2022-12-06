heads = [
    {key:"id",default: Date.now()}, 
    {key:"name", default:null},
    {key: "age", default:null}, 
    {key:"email", default:null}, 
    {key:"status", default: false}]
const deal = require("./deal.module")
class User{
    static add(data){
        const user = {}
        heads.forEach(head => {
            if(head.default!=null) 
                user[head.key]= head.default
            else user[head.key] = data[head.key]
        });
        console.log(user)
        const all = deal.readFromJson()
        all.push(user)
        deal.writeToJson(all)
    }
    static showAll(){
        const all = deal.readFromJson()
        all.forEach(all => {
            console.log(`id:${all.id}  name:${all.name}  age:${all.age}  email:${all.email}  status:${all.status}`)
        })
   } 
    static showSingle(userId){
        const all = deal.readFromJson()
        all.forEach(all=>{
            if(userId === all.id){
                console.log(`id:${all.id}  name:${all.name}  age:${all.age}  email:${all.email}  status:${all.status}`)

            }
        })
    }
    static edit(userId,newData){
        const all = deal.readFromJson()
        all.forEach(all=>{
            if(userId === all.id ){
               all.status = newData
               
               console.log(`id:${all.id}  name:${all.name}  age:${all.age}  email:${all.email}  status:${all.status}`)
            }
        })
        deal.writeToJson(all)
    }
    static del(userId){
        const all = deal.readFromJson()
        all.forEach(all=>{
            if(userId === all.id ){
               all.status = ""
               console.log(`id:${all.id}  name:${all.name}  age:${all.age}  email:${all.email}  status:${all.status}`)
            }
        })
        deal.writeToJson(all)
    }

}
module.exports = User
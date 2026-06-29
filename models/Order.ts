import mongoose from "mongoose";



const OrderSchema = new mongoose.Schema({



type:{

type:String,

required:true

},



name:{

type:String,

required:true

},



mobile:{

type:String,

required:true

},



message:String,



fileUrl:String,



createdAt:{


type:Date,


default:Date.now


}



});





export default mongoose.models.Order ||

mongoose.model("Order",OrderSchema);
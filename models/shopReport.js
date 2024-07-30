//  import dependacy   
const mongoose=require("mongoose");
const shopReportSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user_data"
    },
    
    shopId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vender_data"
    },
   
    status:{
        type:Number,
        default:0
    },
    
    title:{
        type:String,
       
    },
    text:{
        type:String,
       
    }

},{timestamps:true});

module.exports=mongoose.model("shop_report",shopReportSchema);
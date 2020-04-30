const Product=require('../../models/product')
module.exports=function(router){
    //GET : the 12 newest stand-up meeting notes
    router.get('/product',function(req,res){
        //res.send("hello");
        Product.find({},(err,product)=>{
            //check if error was found or not
            if(err){
                res.json({success:false,message:err});//return error message
            }else{
                //check if standup were found in database
                if(!product){
                    res.json({success:false,message:'No product found'});//return error of no standup found
                }else{
                    res.json({success:true,message:product});//return success and standup array
                }
            }
        });
    });
    //POST:Get new meetng note document....
    router.post('/product',function(req,res){
        let note=new Product(req.body)
        note.save(function(err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        });
    });
    //PUT method
    router.put('/updateProduct',(req,res)=>{
        //check if id was provided
        if(!req.body._id){
            res.json({success:false,message:'No product id provided'});//return error message
        }else{
            //check if id exists in database
            Product.findOne({_id:req.body._id},(err,product)=>{
                //check if id is valid Id
                if(err){
                    res.json({success:false,message:'not a valid product id'});//return error message
                } else{
                    product.prodName=req.body.prodName;
                    product.prodDesc=req.body.prodDesc;
                    product.prodPrice=req.body.prodPrice;
                    product.manuDate=req.body.manuate;
                    product.expate=req.body.expDate;
                    standup.barCode=req.body.barCode;
                    standup.save((err)=>{
                        if(err){
                            res.json({success:false,message:err});
                        }
                        else{
                            res.json({success:true,message:'product updated!'});
                        }
                    });
                }
            });
        }
    });
    //DELETE method
    router.delete('/deleteProduct/:id',(req,res)=>{
        //check if id was provided in parameters
        if(!req.params.id){
            res.json({success:false,message:'no is provided'});//return error message
        }else{
            //check if id is found in database
            Product.findOne({_id:req.params.id},(err,product)=>{
                //check if error was found
                if(err){
                    res.json({success:false,message:'Invalid id'});//return error message
                }else{
                    //remove the standyp from database
                    product.remove((err)=>{
                        if(err){
                            res.json({success:false,message:err});//return error message
                        }else{
                            res.json({success:true,message:'Product deleted'});//return success message
                        }
                    });
                }
            });
        }
    });
}
const authentication = async(req, res, next) => {
    try{
    const token = res.cookies.authToken;
    
    if(!token){
        return res.status(401).send({message:"Unauthorized"})
    }
    next()
    
    }catch (error){
        return res.status(500).send({message:"Error in the authorization user", error: error.message})
    }
}

export{
    authentication,
}
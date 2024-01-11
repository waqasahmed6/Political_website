import Joi from "joi";

const pollingStationValidation = {
  check: (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        pollingStationName: Joi.string().min(2).max(20).required(),
        pollingStationAddress: Joi.string().min(8).max(40).required(),
        agentName: Joi.string().min(3).max(20).required(),
        agentCnic: Joi.string().min(15).max(15).required(),
        agentPhoneNo: Joi.string().min(11).max(11).required(),
        
      })
      const { error, value } = schema.validate(body)
      console.log(error)
      if(error){
       return  res.json({ message: "error occoured during validation", error });
      }
      next();
    } catch (error){res.json({ error });}
  },
};

export default pollingStationValidation;
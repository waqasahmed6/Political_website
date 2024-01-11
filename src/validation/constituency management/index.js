import Joi from "joi";

const constituencyValidation = {
  check: (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        constituencyName: Joi.string().min(2).max(15).required(),
        constituencyAddress: Joi.string().min(8).max(40).required(),
        

      })
      const { error, value } = schema.validate(body)
      console.log(error)
      if(error){
        return res.json({ message: "error occoured during validation", error });
      }
      next();
    } catch (error){res.json({ error });}
  },
};

export default constituencyValidation;

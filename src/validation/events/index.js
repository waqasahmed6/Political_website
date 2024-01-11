import Joi from "joi";

const eventValidation = {
  check: (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        eventTitle: Joi.string().min(2).max(15).required(),
        eventDescription: Joi.string().min(8).max(80).required(),

        

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

export default eventValidation;

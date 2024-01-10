
import eventsModel from "../../model/events/index.js";

const eventController = {
  Add: async (req, res) => {
    const { eventTitle, eventDescription, eventPicture, eventDate } = req.body;
    
  
    // const{filename}=req.file
    try {
      await eventsModel.create({
        eventTitle,
        eventDescription,
         eventPicture,
          eventDate,
          memberId:req.session.member.id,
          adminId:req.session.admin.id
          
          
      });
      res.status(201).json({ message: "Added successfully" });
    } catch (error) {
      res.json(error + " Error occoured during adding an event");
      console.log(error)
    }
  },

  findall: async (req, res) => {
    // const{adminID}=req.params
    try {
      const response = await eventsModel.findAll();
      res.json(response);
    } catch (error) {
      res.json(error)
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { eventTitle, evnetDescription, eventPicture, eventDate } = req.body;
    
      const response = await eventsModel.findOne({
        where: { id},
      });
      if (!response) {
        res.status(400).json({ message: "event not found" });
      } else {

        await eventsModel.update(
          { eventTitle, evnetDescription, eventPicture, eventDate },
          { where: { id } }
        );
        res.json({ message: " Updated successfully" });
      }
    } catch (error) {
      res.json({ message: "error updating event", error });
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await eventsModel.findOne({
        where: { id},
      });
      res.status(200).json({ response, message: "event found successfully" });
    } catch (error) {
      res.json({ message: "errror finding event", error });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await eventsModel.findOne({ where: { id } });
      if (!response) {
        res.status(404).json({ message: "event not found" });
      }
      await eventsModel.destroy({ where: { id } });
      res.status(200).json({ message: "event deleted successfully" });
    } catch (error) {
      // res.status(404).json({message:"Error deleting admin"})
      console.log(error);
    }
  },
};

export default eventController;

import socialActivityModel from "../../model/social activity/index.js";
import socialActivityCommentsModel from "../../model/social activity/comment.js";

const socialActivityController = {
  Add: async (req, res) => {
    const { tittle, description, picture } = req.body;

    // const{filename}=req.file
    try {
      await socialActivityModel.create({
        tittle,
         description,
         picture,
        memberId: req.session.member.id,
        //   adminId : req.session.admin.id
      });
      res.status(201).json({ message: "Added  successfully" });
    } catch (error) {
      res.json(error + " Error occoured during adding an news");
    }
  },

  findall: async (req, res) => {
    try {
      const response = await socialActivityModel.findAll({
        include: [socialActivityCommentsModel],
      });
      if (response) {
        return res.json(response, { message: "success" });
      }
      throw new Error("failed to get");
    } catch (error) {
      res.json(error);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { newsTitle, newsPicture, newsContent } = req.body;

      const response = await socialActivityModel.findOne({
        where: { id },
      });
      if (!response) {
        return res.status(400).json({ message: "news not found" });
      } else {
        await socialActivityModel.update(
          { newsTitle, newsPicture, newsContent },
          { where: { id } }
        );
        res.json({ message: " Updated successfully" });
      }
    } catch (error) {
      res.json({ message: "error updating news aaa", error });
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await socialActivityModel.findOne({
        where: { id },
        include:{socialActivityCommentsModel}
      });
      res.status(200).json({ response, message: "event found successfully" });
    } catch (error) {
      res.json({ message: "errror finding event", error });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await socialActivityModel.findOne({ where: { id } });
      if (!response) {
        res.status(404).json({ message: "event not found" });
      }
      await socialActivityModel.destroy({ where: { id: admin_id } });
      res.status(200).json({ message: "event deleted successfully" });
    } catch (error) {
      // res.status(404).json({message:"Error deleting admin"})
      console.log(error);
    }
  },
  updatelikes: async (req, res) => {
    try {
      const { totalLikes } = req.body;
      const { id } = req.params;
      const data = await socialActivityModel.findOne({
        where: { id },
      });
      if (!data) {
        res.status(404).json({ messsaga: "News not found" });
      }
      await socialActivityModel.update({ totalLikes }, { where: { id } });

      res.json({ message: "successfullty updated" });
    } catch (error) {
      res.json({ message: error });
    }
  },
};

export default socialActivityController;

import { hash, compare } from "bcrypt";
import Jwt from "jsonwebtoken";
import membersModel from "../../model/members/index.js";
import eventsModel from "../../model/events/index.js";
import newsModel from "../../model/news/index.js";
import newsCommentsModel from "../../model/news/comment.js";
import socialActivityModel from "../../model/social activity/index.js";
import socialActivityCommentsModel from "../../model/social activity/comment.js";
const memberController = {
  register: async (req, res) => {
    const { name, email, password, address, phoneNo, cnic, picture } = req.body;

    const {path} = req.file;
    try {
      const response = await membersModel.findOne({
        where: { email },
      });
      //  console.log(response)
      if (response) {
        return res.status(400).json({ message: "Email already registered" });
      } else {
        const hashpassword = await hash(password, 5);
        await membersModel.create({
          name,
          email,
          password: hashpassword,
          address,
          cnic,
          picture:path,
          phoneNo,
        });
        res.status(201).json({ message: "Registered successfully" });
      }
    } catch (error) {
      res.json(error + " Error occoured during registration");
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const response = await membersModel.findOne({
        where: { email },
      });

      if (!response) {
        res.status(400).json({ message: "Invalid credentials" });
      } else {
        const ismatch = await compare(password, response.password);
        if (ismatch == true) {
          const info = {
            id: response.id,
            email: response.email,
          };
          const token = Jwt.sign(info, process.env.SECRET_KEY, {
            expiresIn: "1d",
          });

          req.session.memberToken = token;
          req.session.member = response;
          req.session.save();

          res.status(200).json({ message: "Login successfully" });
        } else {
          res.status(400).json({ message: "Invalid Credentials" });
        }
      }
    } catch (error) {
      res.json(
        { message: "Error occoured during login " + error },
        console.log(error)
      );
    }
  },
  findall: async (req, res) => {
    // const{adminID}=req.params
    try {
      const response = await membersModel.findAll();
      res.json(response);
    } catch (error) {
      res.json({ message: error });
    }
  },

  findEvnet: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await membersModel.findByPk(id, {
        include: [eventsModel],
      });
      res.json(response);
    } catch (error) {
      res.json({ message: error });
    }
  },

  findnews: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await membersModel.findByPk(id, {
        include: [
          {
            model: newsModel,
            include: [newsCommentsModel],
          },
        ],
      });
      res.json(response);
    } catch (error) {
      res.json({ message: error });
    }
  },

  findSocialpost: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await membersModel.findByPk(id, {
        include: [
          {
            model: socialActivityModel,
            include: [socialActivityCommentsModel],
          },
        ],
      });
      res.json(response);
    } catch (error) {
      res.json({ message: error });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      const response = await membersModel.findOne({
        where: { id },
      });
      if (!response) {
        res.status(400).json({ message: "Admin not found" });
      } else {
        if (response.email == email) {
          return res.status(400).json({ message: "email already in use" });
        }
        let hashpass = await hash(password, 5);
        await membersModel.update(
          { name, email, password: hashpass },
          { where: { id } }
        );
        res.json({ message: " Updated successfully" });
      }
    } catch (error) {
      res.json({ message: "error updating admin", error });
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await membersModel.findOne({
        where: { id },
      });
      res.status(200).json({ response, message: "Admin found successfully" });
    } catch (error) {
      res.json({ message: "errror finding admin", error });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const response = await membersModel.findOne({ where: { id } });
      if (!response) {
        res.status(404).json({ message: "Member not found" });
      }
      await membersModel.destroy({ where: { id } });
      res.status(200).json({ message: "Member deleted successfully" });
    } catch (error) {
      // res.status(404).json({message:"Error deleting admin"})
      console.log(error);
    }
  },
};

export default memberController;

const router = require("express").Router();
const login = require("./controllers/Login");
const register = require("./controllers/Register");
const contact = require("./Contact/Contact");
const subscribe = require("./controllers/Subscribe");
const post = require("./controllers/CreatePost");
const getPost = require("./controllers/GetPost");
const editPost = require("./controllers/EditPost");
const FinancePost = require("./PostHelp/FinancePost");
const GetFinance = require("./PostHelp/GetFinance");
const deletePost = require("./controllers/DeletePost");
const MedicalPost = require("./PostHelp/MedicalPost");
const GetMedical = require("./PostHelp/GetMedical");

const MentalPost = require("./PostHelp/MentalPost");
const GetMental = require("./PostHelp/GetMental");

router.post("/register", register);
router.post("/login", login);
router.post("/contact", contact);
router.post("/post", post);
router.get("/post/:id?", getPost);
router.delete("/post/:id", deletePost);
router.put("/post/:id", editPost);

router.post("/register",register);
router.post('/login',login);
router.post("/contact",contact);
router.post("/post",post);//create
router.get("/post",getPost);//call
router.put("/subscribe",subscribe);//update

router.post("/FinancePost",FinancePost);
router.get("/GetFinance",GetFinance);

router.post("/MedicalPost", MedicalPost);
router.get("/GetMedical", GetMedical);

router.post("/MentalPost", MentalPost);
router.get("/GetMental", GetMental);

module.exports = router;

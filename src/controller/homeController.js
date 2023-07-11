// const { default: connection } = require("../configs/connectDB");
import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
    return res.render("index.ejs");
}

let getAboutPage = (req, res) => {
    return res.render("about.ejs");
}
const getdata = async(req,res)=>{
    const data = await connection.execute('SELECT * FROM customers');
    let ress = data || 'khong co gi';
    res.status(200).json({ress});
}
async function signup(req,res,next){
    try {
        const data = req.body 
        const name = data.name
        const user = await connection.execute('SELECT * FROM customers') 
        console.log(user);
        // const query = await connection.execute('INSERT INTO customers (name, address, password, mail) VALUES (?, ?, ?, ?)',[data.name,data.address,data.password,data.mail]);
        return res.status(200).json({status: true, message: 'complete'});


    } catch (error) {
        console.log(error);
        next(error);
        
    }
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getdata: getdata,
    signup: signup,
};


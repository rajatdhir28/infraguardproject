var mysql = require("mysql");
var orm = require("orm");

module.exports = {

// openCon : function(con){
// con = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "root",
// database: "infradb"
// });
// con.connect(function(err){
// if(err){
// console.log("connection problem: ", err.stack);
// return null;
// }
// });
// return con;
// },

openCon : function(con){
con = mysql.createConnection({
host: "ig.c7brhjbqe7ny.ap-south-1.rds.amazonaws.com",
user: "igroot",
password: "RightCloud123$",
database: "ignew"
});
con.connect(function(err){
if(err){
console.log("connection problem: ", err.stack);
return null;
}
});
return con;
},

closeCon : function(con){
if(con != null){
con.end(function(err){
if(err) console.log(err.stack);
});
}
}


};

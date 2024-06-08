const express = require("express")
const server = express()
const bodyParser = require("body-parser")
require("dotenv").config()
const path = require("path")
// create user router
const userRouter = express.Router()
userRouter.route("/").get((req,res)=>{
    return res.send("GET USER")
}).post((req,res)=>{
    return res.send("POST USER")
}).put((req,res)=>{
    return res.send("PUT USER")
}).delete((req,res)=>{
    return res.send("DELETE USER")
})


server.use("/user",userRouter)

// create admin router
const adminRouter = express.Router()
adminRouter.route("/").get((req,res)=>{
    return res.send("GET ADMIN")
}).post((req,res)=>{
    return res.send("POST ADMIN")
}).put((req,res)=>{
    return res.send("PUT ADMIN")
}).delete((req,res)=>{
    return res.send("DELETE ADMIN")
})

server.use("/admin",adminRouter)


// constant file
const constant = require("./utils/constant")
console.log("constant",constant);


// comman file
const comman = require("./utils/comman")
console.log("comman",comman);



// index file access
server.use("/api",require("./routes"))



// create routes comman path create routes

server.route("/route").get((req, res) => {
    return res.send("GET ROUTE")
}).post((req, res) => {
    return res.send("POST ROUTE")
}).put((req, res) => {
    return res.send("PUT ROUTE")
}).patch((req, res) => {
    return res.send("PATCH ROUTE")
}).delete((req, res) => {
    return res.send("DELETE ROUTE")
})

// create user route
server.route("/users").get((req, res) => {
    try {
        return res.json({
            massege: "user details is fetched",
            data: {
                name: "nirav",
                age: 19
            }
        })
    } catch (error) {
        console.log("user /GET Error", error?.massege);
        return res.status(500).json({
            massege: "Server error. Please contact to support team"
        })
    }
}).post((req, res) => {
    try {
        return res.json({
            massege: "user is successfully created",
            data: {
                name: req.query.name,
                age: req.query.age
            }
        })
    } catch (error) {
        console.log("user /POST error", error?.massege);
        return res.status(500).json({
            massege: "Server error. please contact to support team. "
        })
    }
}).put((req, res) => {
    try {
        return res.json({
            massege: "user is successfully updated",
            data: {
                name: "nandola",
                age: 18
            }
        })
    } catch (error) {
        console.log("user /PUT error", error?.massege);
        return res.status(500).json({
            massege: "Server error. please contact to support team."
        })
    }
}).delete((req, res) => {
    try {
        return res.json({
            massege: "user is successfully deleted",
            data: {
                name: "nirav"
            }
        })
    } catch (error) {
        console.log("user /DELETE error", error?.massege);
        return res.status(500).json({
            massege: "Server error. please contact to support team."
        })
    }
})

// create admin route
server.route("/admins").get((req, res) => {
    try {
        return res.json({
            massege: "admin details is fetched",
            data: {
                name: "nandola",
                age: 18
            }
        })
    } catch (error) {
        console.log("admin /GET error", error?.massege);
        return res.status(500).json({
            massege: "Server error. please contact to support team."
        })
    }
}).post((req, res) => {
    try {
        return res.json({
            massege: "admin is created successfully",
            data: {
                name: req.query.name,
                age: req.query.age
            }
        })
    } catch (error) {
        console.log("admin /POST error", error?.massege);
        return res.status(500).json({
            massege: "Server error. please contact to support team."
        })
    }
}).put((req, res) => {
    try {
        return res.json({
            massege: "admin is updated successfully",
            data: {
                name: "nirav",
                age: 19
            }
        })
    } catch (error) {
        console.log("admin /PUT error", error?.massege);
        return res.status(500).json({
            massege: "Server error. please contact to support team."
        })
    }
}).delete((req, res) => {
    try {
        return res.json({
            massege: "admin is successfully deleted",
            data: {
                name: "nandola",
            }
        })
    } catch (error) {
        console.log("admin /DELETE error", error?.massege);
        return res.status(500).json({
            massege: "Server error. please contact to support team."
        })
    }
})



server.use(bodyParser.json())
// file access

server.use("static-file", express.static(path.join(__dirname,)))

// image  access
server.get("/image", (req, res) => {
    return res.sendFile(path.join(__dirname, "public", "images", "radhe.jpg"))
})

// video  access
server.get("/video", (req, res) => {
    return res.sendFile(path.join(__dirname, "public", "videos", "emotional.mp4"))
})

// port store in file
const port = process.env.PORT

// port store in variable
// const port = 3000

// server.get("/",(req,res)=>{
//     return res.end("hello world!") //  text write
// })




// parms, query and body
server.post("/user/:username/:marks/:age-:gender", (req, res) => {
    console.log("params", req.params);  // url /user/:username/:marks/:age-:gender   string return
    console.log("query", req.query);  // ?name=nirav&marks=10   string return
    console.log("body", req.body); // object return
    res.json({
        params: req.params,
        query: req.query,
        body: req.body
    })
})



// all methods

server.get("/", (req, res) => {
    return res.send("server is running") // html write
})
server.post("/", (req, res) => {
    return res.send("user is create")
})
server.put("/", (req, res) => {
    return res.send("user is updated")
})
server.patch("/", (req, res) => {
    return res.send("user password is changed")
})
server.delete("/", (req, res) => {
    return res.send("user is deleted")
})

// mutliple callbacks and middlewares

const userExist = (req, res, next) => {
    console.log("USER IS EXIST");
    return next()
}
const rootController1 = (req, res, next) => {
    console.log("called 1");
    return next()
}
const rootController2 = (req, res, next) => {
    console.log("called 2");
    return next()
}
const rootController3 = (req, res, next) => {
    console.log("called 3");
    return next()
}
const rootController4 = (req, res, next) => {
    console.log("called 4");
    return next()
}
const rootController5 = (req, res) => {
    console.log("called 5");
    return res.json({ name: "nirav" })
}
const rootController6 = (req, res) => {
    console.log("called 6");
    return res.json({ age: 19 })
}
const rootController7 = (req, res) => {
    console.log("called 7");
    return res.json({ gender: "male" })
}

server.get("/name", userExist, rootController1, rootController2, rootController3, rootController4, rootController5)
server.get("/age", userExist, rootController1, rootController2, rootController3, rootController4, rootController6)
server.get("/gender", userExist, rootController1, rootController2, rootController3, rootController4, rootController7)


// listen port 
server.listen(port, () => {
    console.log(`http://localhost:${port}`);

})
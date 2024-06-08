module.exports = (req, res, next) => {
    console.log("middlewarw");

    const user = [
        {
            name: "nirav",
            age: 19
        },
        {
            name: "nir",
            age: 20
        },
        {
            name: "nandola",
            age: 17
        }
    ]
    console.log(user.length);


    if(user.length ==0){
        return res.send("User is not found")
    }
    next()

}
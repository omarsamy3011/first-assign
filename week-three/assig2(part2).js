const path = require("path")
const fs = require("fs")

//p11
function create(x) {
    try{
        fs.mkdirSync(x,{recursive : true})
        console.log(`success`);
    }
    catch(err){
        console.log(err);
    }
}
create("file.txt")

//p12
const {EventEmitter}=require("events");
const { stringify } = require("querystring");
const myEvent = new EventEmitter()

myEvent.on("start",()=>console.log("Welcome event triggered!"))
myEvent.emit("start")

//p13
const nameEvent = new EventEmitter()
nameEvent.on("login",(x)=>console.log(`User logged in: ${x}`))
nameEvent.emit("login","omar")

//p14
let read = String(fs.readFileSync("txt.txt"))
console.log(`the file is => ${read}`)

//p15
let dataIn = fs.createWriteStream("txt.txt",{
    encoding: "utf-8",
    highWaterMark:1024
})
dataIn.write("“This is a note.”")

//p16
let it =fs.existsSync("assig2(part1).js")
console.log(it)

//p17
const os = require("os")
console.log(`platform : "${os.platform()}" arch : "${os.arch()}"`);


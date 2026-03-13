const path = require("path")
const fs = require("fs").promises //promises to make async and await
let currPath = __filename

//p1
function detPath(){
    console.log(` Dir:${path.dirname(currPath)} \n file:${path.normalize(currPath)}`);
}
detPath()

//p2
let fileName = x => path.basename(x)
console.log(fileName(currPath))

//p3
function createPath(obj){
    return path.format(obj)
}
console.log(createPath({ dir: "\\folder", name: "app", ext: ".js"}));

//p4
let ext = x =>path.extname(x)
console.log(ext("/docs/readme.md"));

//p5
const nameext =function(x){
    let {name ,ext} = path.parse(x)
    return `name:"${name}" , ext:"${ext}"`
}
console.log(nameext("/home/app/main.js"));

//p6
const isAbs = x => path.isAbsolute(x)
console.log(isAbs("/home/app/main.js"));

//p7
const join = (x,y,z) => path.join(x,y,z)
console.log(join("src","components", "App.js"));

//p8
const toAbs = x => path.resolve(x)
console.log(toAbs("assig.js"));

//p9
const join2 = (x,y) => path.join(x,y)
console.log(join2("/folder1", "folder2/file.txt"));

//p10 (require fs.promises as it is async)
async function deleteFile (cpath) {
    try{
        await fs.unlink(path.basename(cpath))
        console.log(`the file ${path.basename(cpath)} is deleted`);
    }
    catch(err){
        if(err.errno == -4058)console.log("file not found sorry!");
        else console.log(err);
    }
}
deleteFile("D:/learn js/session-one/week-three/txt.txt")


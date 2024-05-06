/**
 * stream module inherits from the events emitter class.
 * other module used internally stream functioning. 
 * When we have to deal with the chunks of data, rather than large size of data ,we use stream.
 */
// Using stream functioning in fs module-
const fs =require("node:fs")
const writableStream =fs.createWriteStream("./05stream.txt");
const readableStream = fs.createReadStream("./02output.txt",{highWaterMark:2});//highWaterMark object for chunk size
//streams created

readableStream.on("data",(chunk)=>{
    console.log(chunk.toString());
    writableStream.write(chunk);
})
//  readableStream.pipe(writableStream)

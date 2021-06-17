
const sp = require("superagent");
const cheerio  = require("cheerio");
const fs = require('fs');

const URL = "https://www.biquwx.la/";
let html;
     sp.get(URL).end((err,res)=>{
        if(err){
            console.log(err)
        }else{
            console.log("获取网页成功")
           html =  res.text;
           let $ = cheerio.load(html);
           html =   $(".item  dl dt a");
           let books =[]
           for(let i in html){
               book = {
                   name:"",
                   url:"",
               }
               if(html[i].children == undefined){
                   break;
               }
                   let Book_name =  html[i].children[0].data
                   let url =  html[i].attribs.href
                   book.name = Book_name;
                   book.url = url;
                   books.push(book)
               }
           console.log("书籍获取成功",books)
        //    try{
        //     const data = fs.writeFileSync("./index.html",html);
        //     console.log("写入文件成功");

        //    }catch(err){
        //        console.log(err)
        //    }
        }
    });
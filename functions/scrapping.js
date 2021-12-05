const puppeteer = require('puppeteer');

const blog = async ()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://ashilaghassani99.medium.com/');

    const test = await page.evaluate(
        () => Array.from(
          document.querySelectorAll('article')
        ).map(content => ({
            link : content.querySelector('a').href
        }))
    );

    await browser.close();

    return{
        body: JSON.stringify(test),
        headers:{
            "content-type": "application/json",
        },
        statusCode:200,
    };

    
};




// const blog = async() => {
//     return{
//         body: JSON.stringify(test),
//         headers:{
//             "content-type": "application/json",
//         },
//         statusCode:200,
//     };
// }
    
exports.handler = blog;




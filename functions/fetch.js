// const puppeteer = require('puppeteer');

// const blog = async ()=>{
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://ashilaghassani99.medium.com/team-dynamics-4c5f230d79e');

//     const test = await page.evaluate(
//         () => Array.from(
//           document.querySelectorAll('article')
//         ).map(content => ({
//             title : content.querySelector('h1').innerText.trim()
//         }))
//     );

//     await browser.close();

//     return{
//         body: JSON.stringify(test),
//         headers:{
//             "content-type": "application/json",
//         },
//         statusCode:200,
//     };

    
// };




// // const blog = async() => {
// //     return{
// //         body: JSON.stringify(test),
// //         headers:{
// //             "content-type": "application/json",
// //         },
// //         statusCode:200,
// //     };
// // }
    
// exports.handler = blog;

const fetch = require('node-fetch');
  
exports.handler = async function(event, context, callback) {
    try {
      const response = await fetch('https://cat-fact.herokuapp.com/facts')
      const data = await response.json()
      callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
    } catch (error) {
      callback(error)
    }
}

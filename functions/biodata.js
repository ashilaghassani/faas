const data = require('./data.json')

const bio = async() => {
    return{
        body: JSON.stringify(data),
        headers:{
            "content-type": "application/json",
        },
        statusCode:200,
    };
}
    
exports.handler = bio;
const redis = require("redis");
const dotenv = require("dotenv");
dotenv.config();


const redisClient = () => {
    
    return redis.createClient();
}

const client = redisClient();

client.on("error", (error) => {
    console.log("Error",error)
})


client.on("connect", () => {
    console.log("connected to Redis")
})

client.on("end", () => {
    console.log("Redis Connection Ended")
})

client.on("SIGQUIT", () => {
    client.quit();
})

module.exports = client;
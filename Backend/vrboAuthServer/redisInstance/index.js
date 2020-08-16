const redis = require("redis");
const { promisify } = require("util");

const REDIS_HOST = process.env.REDIS_HOST || "127.0.0.1";
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const redisClient = redis.createClient({
    host: REDIS_HOST,
    port: REDIS_PORT,
});

exports.delWithPromise = promisify(redisClient.del).bind(redisClient);

exports.client = redisClient;
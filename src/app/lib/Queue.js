import Queue from "bull";
import redisConfig from "../../config/redis.js";

import SendMail from "../jobs/SendMail.js";

const mailQueue = new Queue(SendMail.key, redisConfig);

export default mailQueue;

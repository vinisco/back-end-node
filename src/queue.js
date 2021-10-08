import "dotenv/config";
import mailQueue from "./app/lib/Queue.js";
import SendMail from "./app/jobs/SendMail.js";

mailQueue.process(SendMail.handle);

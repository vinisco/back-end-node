import "dotenv/config";
import VTEXApi from "./app/api/VTEXApi.js";
import Queue from "./app/lib/Queue.js";

const res = await VTEXApi.getProducts();

const data = {
  total: res.substr(res.indexOf("/") + 1, res.length),
};

Queue.add({ data });

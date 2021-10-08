import axios from "axios";

const VTEXApi = {
  async getProducts() {
    const res = await axios.get(
      "https://vtexstore.codeby.com.br/api/catalog_system/pub/products/search?_from=1&_to=50",
      {
        headers: {
          Accept: "application/json",
          "X-VTEX-API-AppKey": `${process.env.VTEX_APPI_KEY}`,
          "X-VTEX-API-AppToken": `${process.env.VTEX_APPI_TOKEN}`,
        },
      }
    );

    return res.headers.resources;
  },
};

export default VTEXApi;

import Mail from "../lib/Mail.js";

export default {
  key: "SendMail",
  async handle({ data }) {
    await Mail.sendMail({
      from: "Vinícius <vinisco@hotmail.com>",
      to: `CodeBy <codeby@codeby.com>`,
      subject: "Quantidade de produtos",
      html: `
      <br>
     <p> Olá,</p>
     <p> A quantidade de produtos disponíveis na loja é: <strong>${data.data.total}</strong></p>
      <p>  Att,</p>
      <p> Vinícius Sena</p>
      `,
    });
  },
};

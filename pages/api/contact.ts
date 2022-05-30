import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { contactSchema } from "../../schema/schema";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    req.body = await contactSchema.validate(req.body, {
      // backend validation with yup schema.
      stripUnknown: true,
      strict: true,
      abortEarly: false,
    });
  } catch (error: any) {
    return res.status(400).json({ message: `Backend ${error.name} when sending contact form`, body: error.message, status: 400 });
  }
  try {
    let transporter: Transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "jareth.portfolio@gmail.com",
        pass: "triple_1H",
      },
    });

    let options = {
      from: `${req.body.email}`,
      to: "jareth.portfolio@gmail.com",
      subject: `Subject: ${req.body.subject} from ${req.body.name}`,
      html: `<p>You have a new contact form submission. <br/><br/> Name: <strong>${req.body.name}</strong> <br/> Email: <strong>${req.body.email}</strong> <br/> Message: ${req.body.message}</p>.`,
    };

    let result: SMTPTransport.SentMessageInfo = await transporter.sendMail(options);
    console.log("success!!!!!!!!!!!!!!!!!!!!!!!!!", result.messageId);
    return res.status(200).json({ status: 200 });
  } catch (e) {
    console.log("failed!!!!!!!!!!!!!!!!!!!!!!!!!", e);
    return res.status(400).json({ status: 400 });
  }
}

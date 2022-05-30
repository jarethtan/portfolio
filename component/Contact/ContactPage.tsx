import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./ContactPage.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../schema/schema";
import { MdAttachEmail, MdLocalPhone } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import Title from "../../ui/Generic/Title";

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const sendStatus = await response.json();
      if (sendStatus.status == 200) {
        reset();
        console.log("Message sent successfully", response);
      }
    } catch (e) {
      console.log("failed to send", e);
    }
  };

  return (
    <div className={classes.container}>
      <Title>Get in touch</Title>
      <span className={classes.note}>Feel free to contact me for any future opportunities or collaboration!</span>
      <div className={classes.imagesDiv}>
        <div className={classes.imageDiv}>
          <MdLocalPhone className={classes.contactImage} />
          <span>+1 236 512 7189</span>
        </div>
        <div className={classes.imageDiv}>
          <MdAttachEmail className={classes.contactImage} />
          <span>Jareth.tan@outlook.com</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div className={classes.inputContNameEmail}>
          <input {...register("name")} placeholder="Name" autoFocus className={classes.contactInput} />
          {errors.name && (
            <span style={{ color: "red" }}>
              {errors.name.message}
              <br />
            </span>
          )}
          <input {...register("email")} placeholder="Email" autoComplete="new-password" className={classes.contactInput} />
          {errors.email && (
            <span style={{ color: "red" }}>
              {errors.email.message}
              <br />
            </span>
          )}
        </div>
        <input {...register("subject")} placeholder="Subject" autoComplete="new-password" className={classes.contactInput} />
        {errors.subject && (
          <span style={{ color: "red" }}>
            {errors.subject.message}
            <br />
          </span>
        )}
        <textarea rows={10} {...register("message")} placeholder="Message" autoComplete="new-password" className={classes.contactTextBox} />
        {errors.message && (
          <span style={{ color: "red" }}>
            {errors.message.message}
            <br />
          </span>
        )}
        <br />
        <button type="submit" className={classes.submitButton}>
          Send Message
          <AiOutlineSend className={classes.sendIcon} />
        </button>
      </form>
    </div>
  );
};

export default ContactPage;

"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { submitFormData } from "@/redux/features/formSlice";
import { notifyError, notifySuccess } from "@/utils/toast";
import { FormData } from "@/types/contactform-d";


const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  message: yup.string().required().min(10).label("Message"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const dispatch: AppDispatch = useDispatch();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const onSubmit = handleSubmit((data) => {
   
    dispatch(submitFormData(data))
    .then((response: any) => {
      
      console.log('Success:', response);
       if(response?.payload?.msg ==="Message sent successfully"){
        notifySuccess(response?.payload.msg)
       }
       else if (response?.payload == "undefined"){
        notifyError("Something went wrong")
       }
       else{
        notifyError("Something went wrong")
       }
    })
    .catch((error: any) => {
      console.error('Error:', error);
      notifyError(error)
    });
    reset();
  });

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="">Name*</label>
            <input
              type="text"
              placeholder="Your Name*"
              {...register("name")}
              id="name"
              name="name"
              onChange={handleInputChange}
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.name?.message!} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label htmlFor="">Email*</label>
            <input
              type="email"
              placeholder="Email Address*"
              {...register("email")}
              id="email"
              name="email"
              onChange={handleInputChange}
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message!} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <textarea
              placeholder="Your message*"
              {...register("message")}
              id="message"
              name="message"
              onChange={handleInputChange}
            ></textarea>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.message?.message!} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn-four tran3s w-100 d-block">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

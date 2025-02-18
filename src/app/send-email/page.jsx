"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar se o envio está em andamento

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para verificar se todos os campos estão preenchidos
  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Impede o envio múltiplo

    setIsSubmitting(true); // Marca o início do envio

    const serviceId = "service_oi4yvzs";
    const templateId = "template_il7i00m";
    const userId = "1JfgqlqaOWmql2M2_";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        setStatusMessage("Error sending message. Please try again.");
        console.error("EmailJS error:", error);
      })
      .finally(() => {
        setIsSubmitting(false); // Marca o fim do envio
      });
  };

  return (
    <div>
      <div className="flex-1 flex flex-col">
        <main className="w-full flex justify-center pb-[7.5rem] py-[2.5rem] mx-auto md:my-[3.125rem] px-8 md:pb-0 md:max-w-4xl">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full">
                <span className="" style={{ opacity: 1, transform: "none" }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.1,
                      scale: {
                        type: "spring",
                        visualDuration: 0.4,
                        bounce: 0.0,
                      },
                    }}
                  >
                    <div className="flex flex-col gap-2">
                      <h1 className=" text-2xl md:text-4xl font-semibold leading-10 text-pretty">
                        Send an Email
                      </h1>
                      <p className="opacity-60">Contact me by email!</p>
                    </div>
                  </motion.div>
                </span>
              </div>
            </div>

            <span className="" style={{ opacity: 1, transform: "none" }}>
              <div className="flex flex-col gap-6 mt-6">
                <div className="relative group flex size-full rounded-md p-6 w-full z-10 hover:shadow-xl">
                  <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>
                  <div className="relative z-30 w-full">
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4 h-full"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-row justify-around p-2 gap-5 ">
                          <div className="flex w-full gap-5">
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.1,
                                scale: {
                                  type: "spring",
                                  visualDuration: 0.4,
                                  bounce: 0.0,
                                },
                              }}
                            >
                              <input
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                type="text"
                                className="placeholder:text-white/60 text-white pl-2 capitalize  outline-none w-full bg-[#262626] p-2 rounded-lg"
                              />
                            </motion.div>

                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.1,
                                scale: {
                                  type: "spring",
                                  visualDuration: 0.4,
                                  bounce: 0.0,
                                },
                              }}
                            >
                              <input
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                type="email"
                                className="placeholder:text-white/60 text-white pl-2 outline-none w-full bg-[#262626] p-2 rounded-lg"
                              />
                            </motion.div>
                          </div>
                        </div>
                        <motion.div
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.1,
                            scale: {
                              type: "spring",
                              visualDuration: 0.4,
                              bounce: 0.0,
                            },
                          }}
                        >
                          <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            type="text"
                            className="placeholder:text-white/60 text-white pl-2 w-full mx-2  outline-none bg-[#262626] p-2 rounded-lg"
                          />
                        </motion.div>

                        <motion.div
                          className="flex items-center gap-2 "
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.1,
                            scale: {
                              type: "spring",
                              visualDuration: 0.4,
                              bounce: 0.0,
                            },
                          }}
                        >
                          <textarea
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Message"
                            name="message"
                            id=""
                            className="placeholder:text-white/60 text-white pl-2  mx-2 outline-none bg-[#262626] p-2 rounded-lg w-full mt-4 "
                          ></textarea>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.1,
                          scale: {
                            type: "spring",
                            visualDuration: 0.4,
                            bounce: 0.0,
                          },
                        }}
                      >
                        <button
                          type="submit"
                          className={`bg-[#262626] text-white/60 hover:text-white p-2 
                          rounded-lg w-16 mx-2 hover:bg-colorCard border border-colorBorder hover:border-colorBorder 
                          transition-all duration-300 ${
                            isFormValid() && !isSubmitting
                              ? ""
                              : "opacity-10 cursor-not-allowed text-opacity-0"
                          }`}
                          disabled={!isFormValid() || isSubmitting}
                        >
                          Send
                        </button>
                      </motion.div>
                    </form>
                  </div>

                  <div
                    className="pointer-events-none absolute inset-px z-10 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block"
                    style={{ opacity: 0.7 }}
                  ></div>
                  <div className="pointer-events-none absolute inset-0 rounded-md bg-colorCard border border-colorBorder duration-300 group-hover:opacity-100 hidden md:block"></div>
                </div>
              </div>
            </span>
            {statusMessage && (
              <p className="text-white/60 mt-4 text-center">{statusMessage}</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;

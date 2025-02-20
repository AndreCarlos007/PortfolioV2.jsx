"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div>
      <div className="flex-1 flex flex-col">
        <main className="w-full flex justify-center pb-[11.5rem] py-[2.5rem]  sm:mx-auto md:my-[3.125rem] px-8 md:pb-0 md:max-w-4xl">
          <div className="flex flex-col grow">
            <div>
              <span className="" style={{ opacity: 1, transform: "none" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.1,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.0 },
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Link href="/projects">
                      <div>
                        <button className="inline-flex items-center justify-center rounded-md text-white/80 hover:text-white font-medium transition-colors focus-visible:outline-none border border-colorBorder hover:bg-colorCard h-10 w-10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                        </button>
                      </div>
                    </Link>

                    <h1 className="md:text-4xl text-xl font-semibold leading-10 text-pretty">
                      TCClass
                    </h1>
                  </div>
                  <p className="opacity-60 mt-2">
                    A project that aims to create a platform that helps students
                    review and correct their TCCs, combining artificial
                    intelligence and support from specialized teachers. The AI
                    ​​will be trained to analyze academic texts, identify
                    spelling errors, compare with other works and suggest
                    improvements, without rewriting the content, but offering
                    technological mentoring to improve the material.
                  </p>
                </motion.div>
              </span>

              <span className="" style={{ opacity: 1, transform: "none" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.1,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.0 },
                  }}
                >
                  <p className="text-sm opacity-60 my-4">06/02/2025</p>
                </motion.div>
              </span>

              <span className="" style={{ opacity: 1, transform: "none" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.1,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.0 },
                  }}
                >
                  <div className="w-full">
                    <Image
                      src="/Tclass.AVIF"
                      alt="Print do meu projeto"
                      width={1000}
                      height={400}
                      className="w-full h-[25rem] object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </span>

              <span className="" style={{ opacity: 1, transform: "none" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.1,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.0 },
                  }}
                >
                  <div className="flex flex-col gap-6 mt-6">
                    <div className="relative group flex size-full rounded-md p-6 w-full z-10 hover:shadow-xl">
                      <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>
                      <div className="relative z-30 w-full">
                        <div className="flex flex-row justify-between gap-4 h-full">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 ">
                              <p className="text-lg font-semibold">
                                Deploy, Repository and Design
                              </p>
                            </div>
                            <p className="text-sm opacity-55">
                              {" "}
                              See my website and my repository on github
                            </p>
                          </div>
                          <div className=" flex flex-col md:flex-row gap-4">
                            <Link className="flex flex-col"
                              href="https://tc-class-jsx.vercel.app/"
                              target="_blank"
                            >
                              
                              <button className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,88v16H40V88Zm32,80H200V88a16,16,0,0,0-16-16H72V56H216Z"></path></svg>
                                Website
                              </button>
                            </Link>

                            <Link className="flex flex-col"
                              href="https://github.com/AndreCarlos007/TCClass.jsx"
                              target="_blank"
                            >
                              <button className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-72,96H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm72-56H32V64H224V88Z"></path></svg>
                                Repository
                              </button>
                            </Link>

                            <Link
                              href="https://www.figma.com/design/BjdzypPxfdHCBgMjHo7TdD/TCClassNew?node-id=0-1&p=f&t=6PfZU8jf7VRyCiEf-0"
                              target="_blank"
                            >
                              <button translate="no" className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M192,96a40,40,0,0,0-24-72H96A40,40,0,0,0,72,96a40,40,0,0,0,1.37,65A44,44,0,1,0,144,196V160a40,40,0,1,0,48-64Zm-64,56H96a24,24,0,0,1,0-48h32Zm40-64H144V40h24a24,24,0,0,1,0,48Z"></path></svg>
                                Design
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div
                        className="pointer-events-none absolute inset-px z-10 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block"
                        style={{ opacity: 0.7 }}
                      ></div>
                      <div className="pointer-events-none absolute inset-0 rounded-md bg-colorCard border border-colorBorder duration-300 group-hover:opacity-100 hidden md:block"></div>
                    </div>
                  </div>
                </motion.div>
              </span>

              <span className="" style={{ opacity: 1, transform: "none" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.1,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.0 },
                  }}
                >
                  <div className="flex flex-col gap-6 mt-6">
                    <div className="relative group flex size-full rounded-md p-6 w-full z-10 hover:shadow-xl">
                      <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>
                      <div className="relative z-30 w-full">
                        <div className="flex flex-row justify-between gap-4 h-full">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 ">
                              <p className="text-lg font-semibold">
                              Technologies Used
                              </p>
                            </div>
                            <p className="text-sm opacity-55">
                              {" "}
                              Front-End: Next.js, JavaScript and TailwindCSS
                            </p>

                            <p className="text-sm opacity-55">
                              {" "}
                              Back-End: Undefined
                            </p>

                            <p className="text-sm opacity-55">
                              {" "}
                              Libs: Framer-Motion
                            </p>
                            
                            <p className="text-sm opacity-55">
                              {" "}
                              Tools: Visual Studio Code, Figma
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-px z-10 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block"
                        style={{ opacity: 0.7 }}
                      ></div>
                      <div className="pointer-events-none absolute inset-0 rounded-md bg-colorCard border border-colorBorder duration-300 group-hover:opacity-100 hidden md:block"></div>
                    </div>
                  </div>
                </motion.div>
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;

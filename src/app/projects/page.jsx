"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div>
      <div className="flex-1 flex flex-col">
        <main className="w-full flex justify-center pb-[11.5rem] py-[2.5rem] mx-auto md:my-[3.125rem] px-8 md:pb-0 md:max-w-4xl">
          <div className="flex flex-col">
            <span className="" style={{ opacity: 1, transform: "none" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.1,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.0 },
                }}
              >
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl md:text-4xl font-semibold leading-10 text-pretty">
                    Projects
                  </h1>
                  <p className="opacity-60">List of my best projects</p>
                </div>
              </motion.div>
            </span>

            <section className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center mt-6 ">
              <span style={{ opacity: 1, transform: "none" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.1,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.0 },
                  }}
                >
                  <Link
                    className="h-full w-full block"
                    href="/projects/tcclass"
                  >
                    <div className="group relative flex size-full rounded-md hover:shadow-2xl z-10 h-full">
                      <div className="absolute inset-px z-10 rounded-md bg-card  transition-colors"></div>

                      <div className="relative z-30 w-full">
                        <div className="flex flex-col h-full">
                          <div className="aspect-video w-full">
                            <Image
                              className="w-full h-full rounded-t-md object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                              loading="lazy"
                              src="/release1.png"
                              alt="Projeto TCCLass"
                              width={300}
                              height={300}
                            />
                          </div>

                          <div className="flex flex-col p-6 gap-1 flex-grow">
                            <p className="font-semibold">TCClass</p>
                            <p className="opacity-60 text-xs">
                              {" "}
                              A platform that helps students improve their
                              theses with AI and expert support...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-px z-10 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 block"
                        style={{ opacity: 0.7 }}
                      ></div>
                      <div className="pointer-events-none absolute inset-0 rounded-md bg-colorCard border border-colorBorder duration-300 group-hover:opacity-100 block"></div>
                    </div>
                  </Link>
                </motion.div>
              </span>
            </section>

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
                      <div className="flex flex-col gap-4 h-full">
                        <div className="flex flex-col gap-1">
                          <div className="p-2 rounded-lg bg-[#262626] w-fit">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"></path>
                              <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"></path>
                            </svg>
                          </div>
                          <div className="flex items-center gap-2 ">
                            <p className="text-lg font-semibold">
                              Stack&apos;s
                            </p>
                          </div>
                          <p className="text-sm opacity-55">
                            {" "}
                            Click for view my skills
                          </p>
                        </div>
                        <Link href="/stacks">
                          <button className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
                            View my skills
                          </button>
                        </Link>
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
        </main>
      </div>
    </div>
  );
};

export default page;

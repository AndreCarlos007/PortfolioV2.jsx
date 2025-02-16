import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="flex-1 flex flex-col">
        <main className="w-full flex justify-center pb-[7.5rem] py-[2.5rem] mx-auto md:my-[3.125rem] px-8 md:pb-0 md:max-w-4xl">
          <div className="flex flex-col">
            <span className="" style={{ opacity: 1, transform: "none" }}>
              <div className="flex ">
                <h1 className=" md:text-4xl text-2xl font-semibold leading-10 text-pretty">
                  Make anything possible with,
                </h1>
              </div>
              <div className="flex gap-2">
                <span className=" md:text-4xl text-2xl font-semibold leading-10 text-pretty text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-red-500">
                  Development
                </span>{" "}
                <p className="md:text-4xl text-2xl font-semibold leading-10 text-pretty">
                  Full Stack.
                </p>
              </div>

              <p className="opacity-60 mt-6 text-justify ">
                <span className="opacity">Hi! My name is</span>{" "}
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                  André Carlos Oliveira,
                </span>{" "}
                This portfolio showcases a variety of projects that demonstrate
                my expertise in diverse technologies and innovative design
                approaches.
              </p>
            </span>
            <span style={{ opacity: 1, transform: "none" }}>
              <div className="flex items-center gap-2 mt-0">
                <Link href="/stacks">
                  <button className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
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
                    Stack
                  </button>
                </Link>

                <Link href="/about-me">
                  <button className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                    </svg>
                    About
                  </button>
                </Link>

                <Link href="/send-email">
                  <button className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z"></path>
                    </svg>
                    Email
                  </button>
                </Link>
                <Image
                  className="ml-5 pointer-events-none"
                  src="/horse.AVIF"
                  alt="Meu unicornio animado"
                  width={100}
                  height={50}
                />
              </div>
            </span>

            <section className="flex flex-col gap-2">
              <span style={{ opacity: 1, transform: "none" }}>
                <p className="text-lg font-semibold">Releases</p>
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full place-items-stretch">
                <span style={{ opacity: 1, transform: "none" }}>
                  <Link className="h-full w-full block" href="/projects/tcclass">
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
                              theses with AI and expert support.
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
                  </Link>
                </span>

                <span style={{ opacity: 1, transform: "none" }}>
                  {/* posso colocar outro projeto so copiar o de cima e colar aqui */}
                </span>
              </div>

              <span style={{ opacity: 1, transform: "none" }}>
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
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                            </svg>
                          </div>
                          <div className="flex items-center gap-2 ">
                            <p className="text-lg font-semibold">Projects</p>
                          </div>
                          <p className="text-sm opacity-55">
                            {" "}
                            Click for view my projects
                          </p>
                        </div>
                        <Link href="/projects">
                          <button className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
                            View my projects
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
              </span>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;

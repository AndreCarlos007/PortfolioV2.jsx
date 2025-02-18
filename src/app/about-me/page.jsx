import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <div>
      <div className="flex-1 flex flex-col">
        <main className="w-full flex justify-center pb-[11.5rem] py-[2.5rem] mx-auto md:my-[3.125rem] px-8 md:pb-0 md:max-w-4xl">
            <div className='flex flex-col'>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <div className='w-full'>
                    <span className="" style={{ opacity: 1, transform: "none" }}>
                        <div className='flex flex-col gap-2'>
                        <h1 className=" text-2xl md:text-4xl font-semibold leading-10 text-pretty">About me</h1>
                        <p className='opacity-60'>
                        Hello, I'm André Carlos, a 20-year-old Systems Analysis and Development student, 
                        and I am passionate about programming. My journey began at the age of 17, during a technical IT course, 
                        where I was introduced to programming through languages like Portugol and Python. 
                        That first contact ignited my love for technology, and since then, I have been dedicated to expanding my knowledge.
                        </p>
                        </div>
                    </span>
                    </div>
                </div>
                <span className="" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col gap-6 mt-6">
                  <div className="relative group flex size-full rounded-md p-6 w-full z-10 hover:shadow-xl">
                    <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>
                    <div className="relative z-30 w-full">
                      <div className="flex flex-col gap-4 h-full">
                        <div className="flex flex-col gap-1">
                          <div className="p-2 rounded-lg bg-[#262626] w-fit">
                            <h1 className='text-2xl font-bold'>Technologist in Systems Analysis and Development</h1>
                          </div>
                          <div className="flex items-center gap-2 ">
                            <p className="text-base font-semibold">University center for science and technology in Maranhão - UniFacema</p>
                          </div>
                          <p className="text-sm opacity-55">
                            {" "}
                            Feb 2024 / Ago 2026
                          </p>
                        </div>
                        
                        <p className='opacity-60 text-xs'>The "Analysis and Systems Development" course focuses on training professionals to design, 
                            develop, and maintain software applications. It covers programming, databases, systems analysis, 
                            and project management to prepare students for IT roles.</p>
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
                <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                <span className="" style={{ opacity: 1, transform: "none" }}>
                    <div className='relative group flex size-full rounded-md z-10 p-6'>
                    <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>

                    <div className='relative z-30 w-full'>
                        <div className='flex flex-col gap-1'>
                            <p className='font-semibold'>Habilities</p>
                            <p className='text-sm opacity-60'> I am skilled in both Front-End and Back-End development. 
                                For the front-end, I work with ReactJS, NextJS, JavaScript, TypeScript, and CSS frameworks like TailwindCSS. 
                                I focus on responsive design and UI libraries such as ChakraUI. On the back-end, I use Node.js, Adonis.js, 
                                and APIs (REST/GraphQL) with databases like MySQL and MongoDB. I follow Clean Architecture principles for scalable 
                                applications. Additionally, I have experience in DevOps, utilizing cloud platforms and Docker for seamless deployment.</p>
                        </div>
                    </div>

                    <div
                      className="pointer-events-none absolute inset-px z-10 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block"
                      style={{ opacity: 0.7 }}
                    ></div>
                    <div className="pointer-events-none absolute inset-0 rounded-md bg-colorCard border border-colorBorder duration-300 group-hover:opacity-100 hidden md:block"></div>
                    </div>
                </span>

                <span className="" style={{ opacity: 1, transform: "none" }}>
                    <div className='relative group flex size-full rounded-md z-10 p-6'>
                    <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>

                    <div className='relative z-30 w-full'>
                        <div className='flex flex-col gap-1'>
                            <p className='font-semibold'>Hobbies</p>
                            <p className='text-sm opacity-60'>I&apos;m highly committed to continuous learning and personal growth. 
                                I dedicate a lot of time to studying and enhancing my skills, always striving to stay up to date with new technologies. 
                                Outside of work, I enjoy playing soccer, which helps me stay active and focused, and I love exploring the city on weekends 
                                to unwind and find new inspiration. I believe in maintaining a healthy work-life balance to stay motivated and passionate about 
                                everything I do. </p>
                        </div>
                    </div>

                    <div
                      className="pointer-events-none absolute inset-px z-10 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block"
                      style={{ opacity: 0.7 }}
                    ></div>
                    <div className="pointer-events-none absolute inset-0 rounded-md bg-colorCard border border-colorBorder duration-300 group-hover:opacity-100 hidden md:block"></div>
                    </div>
                </span>
                </section>

                <span className="" style={{ opacity: 1, transform: "none" }}>
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
                            viewBox="0 0 448 512"
                            height="12"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 ">
                          <p className="text-lg font-semibold">Email</p>
                        </div>
                        <p className="text-sm opacity-55">
                          {" "}
                          Send an email for me
                        </p>
                      </div>
                      <Link href="/send-email">
                        <button className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
                          View email
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
            </div>
        </main>
      </div>
    </div>
  )
}

export default page

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='flex-1 flex flex-col'>
      <main className="w-full flex justify-center pb-[11.5rem] py-[2.5rem]  sm:mx-auto md:my-[3.125rem] px-8 md:pb-0 md:max-w-4xl">
            <div className='flex flex-col grow'>
                <div>
                <span className="" style={{ opacity: 1, transform: "none" }}>
                    <div className='flex items-center gap-2'>
                        <Link href="/projects">
                        <div><button className="inline-flex items-center justify-center rounded-md text-white/80 hover:text-white font-medium transition-colors focus-visible:outline-none border border-colorBorder hover:bg-colorCard h-10 w-10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m15 18-6-6 6-6"></path></svg></button></div>
                        </Link>

                        <h1 className="md:text-4xl text-xl font-semibold leading-10 text-pretty">TCClass</h1>
                    </div>
                    <p className='opacity-60 mt-2'>A project that aims to create a platform that 
                      helps students review and correct their TCCs, combining artificial intelligence and 
                      support from specialized teachers. The AI ​​will be trained to analyze academic texts, 
                      identify spelling errors, compare with other works and suggest improvements, without 
                      rewriting the content, but offering technological mentoring to improve the material.</p>
                </span>

                <span className="" style={{ opacity: 1, transform: "none" }}>
                    <p className='text-sm opacity-60 my-4'>06/02/2005</p>
                </span>

                <span className="" style={{ opacity: 1, transform: "none" }}>
                    <div className='w-full'>
                        <Image src="/release1.png" alt='Print do meu projeto' width={1000} height={400} className='w-full h-[25rem] object-cover rounded-lg' loading='lazy'/>
                    </div>
                </span>

                <span className="" style={{ opacity: 1, transform: "none" }}>
            <div className="flex flex-col gap-6 mt-6">
                  <div className="relative group flex size-full rounded-md p-6 w-full z-10 hover:shadow-xl">
                    <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>
                    <div className="relative z-30 w-full">
                      <div className="flex flex-row justify-between gap-4 h-full">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 ">
                            <p className="text-lg font-semibold">Deploy and Repository</p>
                          </div>
                          <p className="text-sm opacity-55">
                            {" "}
                            See my website and my repository on github
                          </p>
                        </div>
                        <div className='flex gap-4'>
                        <Link href="https://tc-class-jsx.vercel.app/" target='_blank'>
                          <button className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
                            Website
                          </button>
                        </Link>

                        <Link href="https://github.com/AndreCarlos007/TCClass.jsx" target='_blank'>
                          <button className="inline-flex items-center justify-center rounded-md text-white/60 hover:text-white font-medium transition-colors  border border-colorBorder hover:bg-colorBorder text-xs px-[8px] py-[6px] gap-2">
                            Repository
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
                    <div className='flex flex-col'>
                    <h1 className='text-lg font-semibold'>Technologies used</h1>
                    <p className='text-sm opacity-60'>Next.js, Javascript, TailwindCSS</p>
                    </div> 
            </span>
                </div>
            </div>
      </main>
      </div>
    </div>
  )
}

export default page

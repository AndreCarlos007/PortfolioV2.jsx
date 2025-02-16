import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div>
       <div className="flex-1 flex flex-col">
        <main className="w-full flex justify-center pb-[7.5rem] py-[2.5rem] mx-auto md:my-[3.125rem] px-8 md:pb-0 md:max-w-4xl">
            <div className='flex flex-col gap-6'>

            <span className="" style={{ opacity: 1, transform: "none" }}>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl md:text-4xl font-semibold leading-10 text-pretty'>Stack&apos;s</h1>
                    <p className='opacity-60'>List of my skills</p>
                </div>
            </span>

            <span className="" style={{ opacity: 1, transform: "none" }}>
                <div className='group relative flex size-full rounded-md z-10 p-6'>
                <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>
                
                <div className='relative z-30 w-full'>
                    <div className='flex flex-col w-full '>
                        <p className='text-lg font-semibold'>Skills for Front-End</p>
                        <div className='flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 '>
                        <span className="" style={{ opacity: 1, transform: "none" }}>
                            <div className='flex flex-col justify-center p-6 bg-background border border-colorBorder rounded-lg w-full flex-1 h-24'>
                                <div className='flex gap-4'>
                                    <div className='p-2 rounded-lg border border-colorBorder h-fit'>
                                    <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    strokeWidth="0" 
                                    role="img" 
                                    viewBox="0 0 24 24" 
                                    height="22" 
                                    width="22" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z">
                                        </path>
                                        </svg>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='leading-[1.125rem] font-semibold'>Next.js</p>
                                        <p className='opacity-60 text-xs'>React framework with more performance power</p>
                                    </div>
                                </div>
                            </div>
                        </span>

                        <span className="" style={{ opacity: 1, transform: "none" }}>
                            <div className='flex flex-col justify-center p-6 bg-background border border-colorBorder rounded-lg w-full flex-1 h-24'>
                                <div className='flex gap-4'>
                                    <div className='p-2 rounded-lg border border-colorBorder h-fit'>
                                    <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    strokeWidth="0" 
                                    viewBox="0 0 512 512" 
                                    height="22" 
                                    width="22" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z">
                                        </path>
                                        </svg>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='leading-[1.125rem] font-semibold'>React</p>
                                        <p className='opacity-60 text-xs'>React is a JavaScript library for building dynamic user interfaces with reusable components.</p>
                                    </div>
                                </div>
                            </div>
                        </span>

                        <span className="" style={{ opacity: 1, transform: "none" }}>
                            <div className='flex flex-col justify-center p-6 bg-background border border-colorBorder rounded-lg w-full flex-1 h-24'>
                                <div className='flex gap-4'>
                                    <div className='p-2 rounded-lg border border-colorBorder h-fit'>
                                    <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    strokeWidth="0" 
                                    role="img" 
                                    viewBox="0 0 24 24" 
                                    height="22" 
                                    width="22" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z">
                                        </path></svg>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='leading-[1.125rem] font-semibold'>JavaScript</p>
                                        <p className='opacity-60 text-xs'>JavaScript is a versatile programming language for web development.</p>
                                    </div>
                                </div>
                            </div>
                        </span>
                        
                        <span className="" style={{ opacity: 1, transform: "none" }}>
                            <div className='flex flex-col justify-center p-6 bg-background border border-colorBorder rounded-lg w-full flex-1 h-24'>
                                <div className='flex gap-4'>
                                    <div className='p-2 rounded-lg border border-colorBorder h-fit'>
                                    <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    strokeWidth="0" 
                                    role="img" 
                                    viewBox="0 0 24 24" 
                                    height="22" 
                                    width="22" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z">
                                        </path></svg>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='leading-[1.125rem] font-semibold'>TypeScript</p>
                                        <p className='opacity-60 text-xs'>TypeScript is a superset of JavaScript that adds static typing for improved code quality and maintainability.</p>
                                    </div>
                                </div>
                            </div>
                        </span>

                        <span className="" style={{ opacity: 1, transform: "none" }}>
                            <div className='flex flex-col justify-center p-6 bg-background border border-colorBorder rounded-lg w-full flex-1 h-24'>
                                <div className='flex gap-4'>
                                    <div className='p-2 rounded-lg border border-colorBorder h-fit'>
                                    <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    strokeWidth="0" 
                                    role="img" 
                                    viewBox="0 0 24 24" 
                                    height="22" 
                                    width="22" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z">
                                        </path>
                                        </svg>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='leading-[1.125rem] font-semibold'>TailwindCSS</p>
                                        <p className='opacity-60 text-xs'>TailwindCSS is a utility-first CSS framework that enables rapid custom design with pre-defined classes.</p>
                                    </div>
                                </div>
                            </div>
                        </span>

                        </div>
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
                <div className='group relative flex size-full rounded-md z-10 p-6'>
                <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>
                
                <div className='relative z-30 w-full'>
                    <div className='flex flex-col w-full '>
                        <p className='text-lg font-semibold'>Skills for Back-End</p>
                        <div className='flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 '>
                        <span className="" style={{ opacity: 1, transform: "none" }}>
                            <div className='flex flex-col justify-center p-6 bg-background border border-colorBorder rounded-lg w-full flex-1 h-24'>
                                <div className='flex gap-4'>
                                    <div className='p-2 rounded-lg border border-colorBorder h-fit'>
                                    <svg 
                                    width="22px" 
                                    height="22px" 
                                    stroke="currentColor" 
                                    fill="currentColor"
                                    viewBox="0 0 256 289" 
                                    version="1.1" 
                                    xmlns="http://www.w3.org/2000/svg"
                                     xlink="http://www.w3.org/1999/xlink" 
                                    preserveAspectRatio="xMidYMid">
                                <g>
                                <path d="M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z" fill="#539E43"></path>
                                </g>
                                 </svg>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='leading-[1.125rem] font-semibold'>Node.js</p>
                                        <p className='opacity-60 text-xs'>Node.js is a JavaScript runtime environment on the server-side, built on V8, enabling fast and scalable applications.</p>
                                    </div>
                                </div>
                            </div>
                        </span>
                        </div>
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
                <div className='group relative flex size-full rounded-md z-10 p-6'>
                <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>
                
                <div className='relative z-30 w-full'>
                    <div className='flex flex-col w-full '>
                        <p className='text-lg font-semibold'>Libs</p>
                        <div className='flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 '>
                        <span className="" style={{ opacity: 1, transform: "none" }}>
                            <div className='flex flex-col justify-center p-6 bg-background border border-colorBorder rounded-lg w-full flex-1 h-24'>
                                <div className='flex gap-4'>
                                    <div className='p-2 rounded-lg border border-colorBorder h-fit'>
                                    <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    strokeWidth="0" 
                                    role="img" 
                                    viewBox="0 0 24 24" 
                                    height="22" 
                                    width="22" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z">
                                        </path>
                                        </svg>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='leading-[1.125rem] font-semibold'>Visual Studio Code</p>
                                        <p className='opacity-60 text-xs'>Visual Studio Code (VS Code) is a fast, open-source code editor with support for multiple languages, debugging, and extensions.</p>
                                    </div>
                                </div>
                            </div>
                        </span>
                        </div>
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
                <div className='group relative flex size-full rounded-md z-10 p-6'>
                <div className="absolute inset-px z-10 rounded-md bg-colorCard  transition-colors"></div>
                
                <div className='relative z-30 w-full'>
                    <div className='flex flex-col w-full '>
                        <p className='text-lg font-semibold'>Tools</p>
                        <div className='flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 '>
                        <span className="" style={{ opacity: 1, transform: "none" }}>
                            <div className='flex flex-col justify-center p-6 bg-background border border-colorBorder rounded-lg w-full flex-1 h-24'>
                                <div className='flex gap-4'>
                                    <div className='p-2 rounded-lg border border-colorBorder h-fit'>
                                    <svg 
                                    stroke="currentColor" 
                                    fill="currentColor" 
                                    strokeWidth="0" 
                                    role="img" 
                                    viewBox="0 0 24 24" 
                                    height="22" 
                                    width="22" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z">
                                        </path>
                                        </svg>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <p className='leading-[1.125rem] font-semibold'>Visual Studio Code</p>
                                        <p className='opacity-60 text-xs'>Visual Studio Code (VS Code) is a fast, open-source code editor with support for multiple languages, debugging, and extensions.</p>
                                    </div>
                                </div>
                            </div>
                        </span>
                        </div>
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
                            <p className="text-lg font-semibold">Stack&apos;s</p>
                          </div>
                          <p className="text-sm opacity-55">
                            {" "}
                            Click for view my skills
                          </p>
                        </div>
                        <Link href="/stacks/lalal">
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
            </span>
            </div>

        </main>
      </div>
    </div>
  )
}

export default page

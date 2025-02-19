"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();  
  const isActive = (path) => pathname === path;

  return (
    <div>
      <div className="h-full w-[250px] hidden md:block"></div>
      <div
        className="size-full rounded-md hidden md:flex flex-col py-4 px-4 mx-4 mt-4 fixed top-0 h-[calc(100vh-30px)]  min-w-[250px]
        max-w-[250px] gap-4 z-50 bg-colorCard border border-colorBorder"
      >
        <div className="absolute inset-px z-10 rounded-md bg-colorCard overflow-y-hidden transition-colors"></div>
        <div className="relative z-30 w-full">
        
          <div className="flex flex-col overflow-y-auto h-screen pb-16">
            <div className="w-full flex gap-4 items-center">
              <Link href="/myPerfil.png" target="_blank">
              <Image
                className="rounded-md"
                src="/myPerfil.png"
                alt="Minha foto de perfil"
                width={40}
                height={40}
                loading="lazy"
              />
              </Link>
              <div className="flex flex-col">
                <p className="font-semibold whitespace-nowrap">André Carlos</p>
                <p className="opacity-60 text-sm whitespace-nowrap" translate="no">Dev. FullStack</p>
              </div>
              <div>
                
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4 ">
              <Link href="/" passHref>
                <div
                  className={`flex items-center p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
                    ${isActive("/") ? "bg-background opacity-100 border border-colorBorder" : "opacity-40 border border-transparent"}`}
                >
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  viewBox="0 0 256 256">
                    <path d="M248,144a8,8,0,0,1-16,0,96.11,96.11,0,0,0-96-96c-1.4,0-2.8,0-4.18.1A80.06,80.06,0,0,0,56,128a64.07,64.07,0,0,0,64,64,44.05,44.05,0,0,0,44-44,32,32,0,0,0-32-32,8,8,0,0,0,0,16,16,16,0,0,1,16,16,28,28,0,0,1-28,28,48.05,48.05,0,0,1-48-48,64.07,64.07,0,0,1,64-64,80.09,80.09,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.11,96.11,0,0,1-96-96A104.11,104.11,0,0,1,136,32,112.12,112.12,0,0,1,248,144Z">
                    </path>
                    </svg>

                  <p className="text-sm">I&apos;m going home</p>
                </div>
              </Link>

              <Link href="/projects" passHref>
                <div
                  className={`flex items-center p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
                    ${isActive("/projects") ? "bg-background opacity-100 border border-colorBorder" : "opacity-40 border border-transparent"}`}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                  </svg>

                  <p className="text-sm">Projects</p>
                </div>
              </Link>

              <Link href="/stacks" passHref>
                <div
                  className={`flex items-center p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
                  ${isActive("/stacks") ? "bg-background opacity-100 border border-colorBorder" : "opacity-40 border border-transparent"}`}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"></path>
                    <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"></path>
                  </svg>

                  <p className="text-sm">Stack&apos;s</p>
                </div>
              </Link>

              <Link href="/about-me" passHref>
                <div
                  className={`flex items-center p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
                  ${isActive("/about-me") ? "bg-background opacity-100 border border-colorBorder" : "opacity-40 border border-transparent"}`}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  <p className="text-sm">About me</p>
                </div>
              </Link>

              <Link href="/send-email" passHref>
                <div
                  className={`flex items-center p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
                  ${isActive("/send-email") ? "bg-background opacity-100 border border-colorBorder" : "opacity-40 border border-transparent"}`}
                >
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  viewBox="0 0 256 256">
                    <path d="M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z">
                    </path>
                    </svg>
                  <p className="text-sm">Tell me pretty lies</p>
                </div>
              </Link>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <p className="text-sm opacity-40">Contacts</p>
              <Link href="https://www.linkedin.com/in/andr%C3%A9-carloscx" target="_blank" >
                <div
                  className="flex p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
                  border border-transparent opacity-40"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                  <p className="text-sm">Linkedin</p>

                  <div className="flex items-center justify-center p-1 ml-auto rounded-md border border-colorBorder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="https://github.com/AndreCarlos007" target="_blank">
                <div
                  className="flex p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
                  border border-transparent opacity-40"
                >
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  viewBox="0 0 256 256">
                    <path d="M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192Z">
                      </path>
                      </svg>
                  <p className="text-sm">Github</p>

                  <div className="flex items-center justify-center p-1 ml-auto rounded-md border border-colorBorder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/curriculum.pdf" target="_blank" >
                <div
                  className="flex p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
                  border border-transparent opacity-40"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    viewBox="0 0 256 256">
                    <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z">
                    </path>
                  </svg>
                  <p className="text-sm">Curriculum Vitae</p>

                  <div className="flex items-center justify-center p-1 ml-auto rounded-md border border-colorBorder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col gap-2 mt-4">
            <p className="text-sm opacity-40">Others</p>
            </div>

                {/* outro conteudo */}
          </div>
        </div>
      </div>
      <div className="gap-1 pt-2 max-w-[100vw] w-full fixed  bottom-0 left-0 right-0 bg-colorCard border-colorBorder
      md:hidden z-50 ">
          <div className="grid grid-cols-5 justify-items-center mx-1 sm:mx-0 ">
        <Link href="/">
        <button className={`flex-col h-full w-[4rem] p-3 rounded-md flex items-center justify-center transition-colors
        ${isActive("/") ? "bg-background" : "bg-none"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M248,144a8,8,0,0,1-16,0,96.11,96.11,0,0,0-96-96c-1.4,0-2.8,0-4.18.1A80.06,80.06,0,0,0,56,128a64.07,64.07,0,0,0,64,64,44.05,44.05,0,0,0,44-44,32,32,0,0,0-32-32,8,8,0,0,0,0,16,16,16,0,0,1,16,16,28,28,0,0,1-28,28,48.05,48.05,0,0,1-48-48,64.07,64.07,0,0,1,64-64,80.09,80.09,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.11,96.11,0,0,1-96-96A104.11,104.11,0,0,1,136,32,112.12,112.12,0,0,1,248,144Z"></path></svg>
          <p className="text-[0.7rem] hidden sm:block opacity-100">Home</p>
        </button>
        </Link>

          <Link href="/projects">
        <button className={`flex-col h-full w-[4rem] p-3 rounded-md flex items-center justify-center transition-colors
        ${isActive("/projects") ? "bg-background" : "bg-none"}`}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
          <p className="text-[0.7rem] hidden sm:block opacity-100">Projects</p>
        </button>
          </Link>

          <Link href="/stacks">
        <button className={`flex-col h-full w-[4rem] p-3 rounded-md flex items-center justify-center transition-colors
        ${isActive("/stacks") ? "bg-background" : "bg-none"}`}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"></path><path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"></path></svg>
          <p className="text-[0.7rem] hidden sm:block opacity-100">Stacks</p>
        </button>
        </Link>

          <Link href="/about-me">
        <button className={`flex-col h-full w-[4rem] p-3 rounded-md flex items-center justify-center transition-colors
        ${isActive("/about-me") ? "bg-background" : "bg-none"}`}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
          <p className="text-[0.7rem] hidden sm:block opacity-100">About</p>
        </button>
        </Link>

          <Link href="/send-email">
        <button className={`flex-col h-full w-[4rem] p-4 rounded-md flex items-center justify-center transition-colors
        ${isActive("/send-email") ? "bg-background" : "bg-none"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z"></path></svg>
          <p className="text-[0.7rem] hidden sm:block opacity-100">Gmail</p>
        </button>
        </Link>
        </div>
        </div>
      </div>
      
    
  );
};

export default Sidebar;

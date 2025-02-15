"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();  
  const isActive = (path) => pathname === path;

  return (
    <div>
      <div
        className="size-full rounded-md hidden md:flex flex-col py-4 px-4 mx-4 mt-4 fixed top-0 h-[calc(100vh-30px)] overflow-y-hidden min-w-[250px]
        max-w-[250px] gap-4 z-50 bg-colorCard border border-colorBorder"
      >
        <div className="absolute inset-px z-10 rounded-md bg-colorCard transition-colors"></div>
        <div className="relative z-30 w-full">
          <div className="flex flex-col overflow-y-auto h-screen pb-16">
            <div className="w-full flex gap-4 items-center">
              <Image
                className="rounded-full"
                src="/myPerfil.png"
                alt="Minha foto de perfil"
                width={40}
                height={40}
                loading="lazy"
              />
              <div className="flex flex-col">
                <p className="font-semibold whitespace-nowrap">André Carlos</p>
                <p className="opacity-60 text-sm whitespace-nowrap">Dev. FullStack</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <Link href="/" passHref>
                <div
                  className={`flex items-center p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
                    ${isActive("/") ? "bg-background opacity-100 border border-colorBorder" : "opacity-40 border border-transparent"}`}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z"></path>
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
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <p className="text-sm opacity-40">Contacts</p>
              <Link href="https://www.linkedin.com/in/andr%C3%A9-carloscx" target="_blank">
                <div
                  className="flex items-center p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
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
                      class="lucide lucide-external-link"
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
                  className="flex items-center p-2 gap-2 rounded-md hover:opacity-100 hover:bg-background transition-all duration-300 delay-75 hover:border-colorBorder
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

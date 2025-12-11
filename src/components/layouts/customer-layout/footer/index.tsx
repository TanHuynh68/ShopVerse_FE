import { Github } from "lucide-react";

const Footer = () => {
  return (
    <div className=" mt-10">
      <div className=" flex items-center justify-center border-t border-solid">
        <footer className="w-full bg-white py-10 text-[#2d3a54]">
          <div className="container mx-auto">
            <div className="flex items-center justify-center text-3xl font-bold text-center">
              <span>Log</span>
              <span className="text-[#00a68e]">o.</span>
            </div>
            <div className="flex items-center justify-center gap-5 pt-4">
             <a
                href="https://github.com/TanHuynh68"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-[#f4f5f6] hover:text-[#00a68e] transition duration-300 text-[#535d72] border border-[#ddd]"
              >
                <Github />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex justify-center items-center rounded-full bg-[#f4f5f6] hover:text-[#00a68e] transition duration-300 text-[#535d72] border border-[#ddd]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                </svg>
              </a>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl text-center pt-4">
              huynhphuoctan2003@gmail.com
            </h3>
            <p className="text-center pt-4">
              © 2025{" "}
              <a
                href="https://github.com/TanHuynh68"
                target="_blank"
                className="underline hover:text-[#00a68e]"
              >
                ShopVerse
              </a>
              . All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

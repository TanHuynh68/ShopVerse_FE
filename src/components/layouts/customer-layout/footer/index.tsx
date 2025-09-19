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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M16.5 7.5v.01" />
                </svg>
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
              themedevhub@gmail.com
            </h3>
            <p className="text-center pt-4">
              © 2025{" "}
              <a
                href="https://www.themedevhub.com"
                target="_blank"
                className="underline hover:text-[#00a68e]"
              >
                ThemeDevHub
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

const Footer = () => {
  return (
    <>
      <div className="w-full text-center text-sm tracking-widest text-[#2C2C2C] absolute inset-x-0 bottom-9 ">
        <p>
          Powered by{" "}
          <a href="https://reactjs.org/" className="text-[#BD279C] underline">
            React.js
          </a>{" "}
          and{" "}
          <a href="https://go.dev/" className="text-[#2BC2E3] underline">
            Go
          </a>{" "}
          • Deployed at{" "}
          <a href="https://vercel.com/" className="underline">
            Vercel
          </a>
        </p>
        <p className=" pt-4">
          Source code is available on{" "}
          <a
            href="https://github.com/romodeus/manifesto-frontend"
            className="underline"
          >
            Github
          </a>
        </p>
        <p>Copyright © 2022 romodeus.</p>
      </div>
    </>
  );
};

export default Footer;

// fixed bottom-9

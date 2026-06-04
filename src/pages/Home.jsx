const Home = ({ id = 'home' }) => {
  return (
    <section id={id} className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen flex items-center pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-300/90 bg-white/3 px-3 py-1 rounded-full">
                MOHO WEB SOLUTIONS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight">
              We Build Modern Web Solutions That Grow Your Business
            </h1>

            <p className="text-lg text-slate-300 font-medium">MERN Stack Developer | Freelancer</p>

            <p className="max-w-xl text-slate-400">
              From UI/UX design to full-stack development, we build fast and scalable web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-900 font-semibold shadow-lg hover:shadow-[0_12px_40px_rgba(56,189,248,0.18)] transition"
              >
                Get Free Consultation
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 text-white/90 hover:bg-white/5 transition"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right profile card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[320px] sm:w-[360px] bg-slate-900/30 p-6 rounded-[12px] shadow-lg">
                <div className="w-full aspect-square overflow-hidden rounded-full">
                  <img
                    src="/images/harun.jpeg"
                    alt="Mohamed Harun"
                    className="w-full h-full object-cover shadow-md"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold">Mohamed Harun</h3>
                  <p className="text-sm text-slate-300">MERN Stack Developer</p>
                  <p className="mt-2 text-sm text-slate-400 max-w-[280px] mx-auto">
                    I build production-ready web applications using React, Node.js and MongoDB. Available for freelance and contract work.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

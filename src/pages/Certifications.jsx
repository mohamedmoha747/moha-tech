import { motion } from 'framer-motion';
import { FaCertificate, FaCheckCircle } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    title: 'MERN Stack Development',
    issuer: 'SLA Institute',
    duration: 'Aug 2025 – Jan 2026',
    completed: '10 Jan 2026',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'REST API'],
    image: '/images/logo.png',
    preview: '/images/logo.png',
    verified: true,
    verificationLabel: 'Verified by SLA Institute',
    certificateUrl: '#'
  }
];

const Certifications = ({ id = 'certifications' }) => {
  return (
    <section id={id} className="pt-20 pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90 mb-4">Licenses & Certifications</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">Licenses & Certifications</h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-400">
            Professional certifications that highlight my full-stack development expertise and technical impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm text-slate-400 uppercase tracking-[0.35em]">Total Certifications</p>
            <p className="mt-2 text-4xl font-semibold text-white">{certifications.length}</p>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/50 px-4 py-3 shadow-[0_25px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl">
            <FaCheckCircle className="h-5 w-5 text-emerald-400" />
            <span className="text-sm text-slate-300">Trusted credential format with a polished preview experience.</span>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: cert.id * 0.1 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_35px_60px_rgba(15,23,42,0.28)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-slate-950/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-slate-950/70 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
                      <img
                        src={cert.image}
                        alt={`${cert.title} logo`}
                        className="h-10 w-10 rounded-2xl object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-200">
                    <FaCheckCircle className="h-4 w-4 text-emerald-300" />
                    Verified
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Certificate Duration</p>
                    <p className="mt-2 text-sm font-medium text-slate-100">{cert.duration}</p>
                    <p className="mt-2 text-sm text-slate-400">Completed on {cert.completed}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Status</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200">
                      <span className="text-lg">✓</span>
                      Successfully Completed
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-100">Skills covered</p>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Badge</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href={cert.certificateUrl}
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 transition duration-300 hover:bg-cyan-400/25 hover:text-white"
                  >
                    View Certificate
                  </a>

                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-400">
                    <p className="font-medium text-slate-100">Certificate Preview</p>
                    <p className="mt-2 leading-relaxed">Hover the card to see the certificate image preview and polished badge status.</p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute right-6 top-6 hidden h-32 w-40 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 shadow-2xl transition duration-500 group-hover:block group-hover:scale-105">
                <img src={cert.preview} alt="Certificate preview" className="h-full w-full object-cover" />
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/85 text-center text-sm text-slate-200 opacity-0 transition duration-300 group-hover:opacity-100 md:p-6">
                <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-5 shadow-xl">
                  <p className="font-semibold">Live preview available</p>
                  <p className="mt-2 text-slate-400">Move over the card for a crisp certificate preview and confirmation badge.</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

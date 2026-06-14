import { motion } from 'framer-motion';

const calculateAge = (birthDateString) => {
  const today = new Date();
  const [month, day, year] = birthDateString.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);

  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  return age;
};

const About = ({ id = 'about' }) => {
  const age = calculateAge('10/10/2004');
  const skills = [
    'HTML', 'CSS', 'JavaScript',
    'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'Git & GitHub'
  ];

  return (
    <section id={id} className="pt-20 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center justify-center rounded-full p-4 bg-white/10 shadow-[0_0_30px_rgba(34,197,94,0.16)] ring-1 ring-white/10 backdrop-blur-2xl">
            <img
              src="/images/logo.png"
              alt="Moho Web Solutions logo"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-full"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          About Moho Web Solutions
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center mb-12 px-4"
        >
          <p className="text-base md:text-lg leading-relaxed text-slate-300">
            Professional web development company specializing in modern websites and web applications. We build scalable, polished digital experiences with a strong focus on performance, design, and reliability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid gap-4 md:grid-cols-3 mb-12"
        >
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-center shadow-[0_25px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Age</p>
            <p className="mt-4 text-3xl font-semibold text-white">{age} Years</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-center shadow-[0_25px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Location</p>
            <p className="mt-4 text-3xl font-semibold text-white">Chennai, India</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-center shadow-[0_25px_60px_rgba(15,23,42,0.2)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Role</p>
            <p className="mt-4 text-3xl font-semibold text-white">Software Developer</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center px-4"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import { motion } from "motion/react";
import { User, GraduationCap, MapPin, Calendar, Github, Twitter, Mail, ExternalLink } from "lucide-react";

export default function App() {
  const profile = {
    name: "一戸 大夢",
    nameEn: "Hiromu Ichinohe",
    age: 22,
    education: "大学卒業",
    hometown: "北海道",
    bio: "北海道出身の22歳です。大学を卒業し、現在は新しい技術の習得と自己研鑽に励んでいます。シンプルで使いやすいデザインと、効率的なコードを書くことを心がけています。",
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Next.js"],
    socials: [
      { icon: Github, label: "GitHub", href: "#" },
      { icon: Twitter, label: "Twitter", href: "#" },
      { icon: Mail, label: "Email", href: "mailto:example@example.com" },
    ]
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-zinc-900 font-sans selection:bg-emerald-100">
      {/* Hero Section */}
      <header className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-white border-b border-zinc-200">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
            {profile.name}
          </h1>
          <p className="text-zinc-500 font-mono tracking-widest uppercase text-sm">
            {profile.nameEn}
          </p>
        </motion.div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Column: Info Cards */}
          <div className="md:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100">
                    <Calendar className="w-4 h-4 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase font-bold">Age</p>
                    <p className="text-sm font-medium">{profile.age}歳</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100">
                    <GraduationCap className="w-4 h-4 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase font-bold">Education</p>
                    <p className="text-sm font-medium">{profile.education}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center border border-zinc-100">
                    <MapPin className="w-4 h-4 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase font-bold">Hometown</p>
                    <p className="text-sm font-medium">{profile.hometown}</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6">Socials</h2>
              <div className="flex flex-wrap gap-3">
                {profile.socials.map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 hover:bg-zinc-900 hover:text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio & Skills */}
          <div className="md:col-span-2 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-emerald-500" />
                About Me
              </h2>
              <p className="text-zinc-600 leading-relaxed text-lg">
                {profile.bio}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium text-zinc-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-12 border-t border-zinc-200"
            >
              <div className="bg-zinc-900 text-white p-8 rounded-3xl relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Let's work together.</h3>
                <p className="text-zinc-400 mb-6">プロジェクトの相談や、お仕事の依頼などお気軽にご連絡ください。</p>
                <button className="px-6 py-3 bg-white text-zinc-900 rounded-xl font-bold hover:bg-emerald-400 transition-colors">
                  Contact Me
                </button>
              </div>
            </motion.section>
          </div>

        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-zinc-200 text-center">
        <p className="text-zinc-400 text-xs font-mono">
          &copy; {new Date().getFullYear()} {profile.nameEn}. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

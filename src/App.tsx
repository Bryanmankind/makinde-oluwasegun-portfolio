import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Terminal, Code, ExternalLink, Github, Linkedin, Mail, Twitter, ArrowRight, Layers, Cpu, Server } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-grid font-sans selection:bg-[#00ff88] selection:text-black">
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] z-0" />
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-24 space-y-32">
          <Hero />
          <Stats />
          <Skills />
          <Audits />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#050505]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-between">
        <span className="font-mono font-bold text-xl tracking-tighter">
          MO<span className="text-[#00ff88]">_</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest uppercase text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#audits" className="hover:text-[#00ff88] transition-colors">Audits</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="border border-[#00ff88]/50 text-[#00ff88] hover:bg-[#00ff88] hover:text-black px-5 py-2 font-mono text-sm uppercase tracking-wide transition-all"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="about" className="pt-20 min-h-[80vh] flex flex-col justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-[#00ff88] mb-4 tracking-widest uppercase text-sm">
          // Init: Makinde Oluwasegun
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter mb-6">
          Hardening <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-blue-500">
            Decentralized
          </span> Protocols.
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10 font-sans">
          Software Engineer specializing in smart contract security, modular backend architecture, and high-throughput blockchain infrastructure. I bridge the gap between secure on-chain logic and robust off-chain systems.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition-colors"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a 
            href="#audits"
            className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 font-semibold hover:border-[#00ff88] hover:text-[#00ff88] transition-colors"
          >
            Security Audits
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: 'Contracts Audited', value: '15+' },
    { label: 'Active Projects', value: '5' },
    { label: 'TVL Secured', value: '$2M+' },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-[#050505] border border-white/5">
      {stats.map((stat, i) => (
        <div key={i} className="text-center md:border-r border-white/10 last:border-0">
          <div className="text-3xl font-bold mb-1 group-hover:text-[#00ff88] transition-colors">{stat.value}</div>
          <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}

function Skills() {
  const stack = [
    { name: 'Solidity', icon: <Terminal size={20} /> },
    { name: 'Smart Contract Auditing', icon: <ShieldCheck size={20} /> },
    { name: 'Node.js & Backend', icon: <Server size={20} /> },
    { name: 'Ethereum / EVM', icon: <Layers size={20} /> },
    { name: 'Ethers.js / Web3.js', icon: <Code size={20} /> },
    { name: 'Rust & Substrate', icon: <Cpu size={20} /> },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-mono text-2xl mb-6 flex items-center gap-3">
            <span className="text-[#00ff88]">01.</span> The Stack
          </h2>
          <p className="text-gray-400 leading-relaxed">
            My experience spans across traditional backend architecture and modern web3 protocols. I focus heavily on writing gas-efficient, secure smart contracts, and robust off-chain infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stack.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 bg-[#111] border border-white/5 p-4 hover:border-white/20 transition-colors"
            >
              <span className="text-[#00ff88]">{item.icon}</span>
              <span className="font-mono text-sm">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audits() {
  const audits = [
    {
      title: 'Decentralized Exchange (DEX) Router',
      findings: '2 High, 3 Medium, 5 Low',
      description: 'Discovered a critical reentrancy vulnerability in the liquidity removal function allowing an attacker to drain LP tokens. Provided mitigation strategies implemented by the team.',
      date: 'Oct 2025'
    },
    {
      title: 'Staking & Yield Farming Pool',
      findings: '1 High, 1 Medium, 4 Low',
      description: 'Identified a precision loss issue in reward calculation that could lead to funds locking. Suggested using higher precision multipliers to fix the rounding error.',
      date: 'Aug 2025'
    },
    {
      title: 'NFT Vesting Wallet',
      findings: '0 High, 2 Medium, 1 Low',
      description: 'Reviewed access controls and release schedules. Found a logic flaw where ownership transfer bypassed time-locks. Team applied the patched modifiers.',
      date: 'Jun 2025'
    }
  ];

  return (
    <section id="audits" className="relative">
      <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00ff88]/50 to-transparent md:block hidden" />
      
      <h2 className="font-mono text-2xl mb-12 flex items-center gap-3">
        <span className="text-[#00ff88]">02.</span> Security Audits
      </h2>
      
      <div className="space-y-8">
        {audits.map((audit, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block relative pl-6 md:pl-10"
          >
            <div className="absolute left-[-20px] top-6 w-2 h-2 rounded-full bg-[#00ff88] md:block hidden shadow-[0_0_10px_#00ff88]" />
            <div className="bg-[#050505] border border-white/5 p-8 hover:border-[#00ff88]/30 hover:shadow-[0_0_30px_-10px_#00ff8820] transition-all duration-300 relative overflow-hidden group-hover:bg-[#0a0a0a]">
              <ShieldCheck className="absolute -right-6 -top-6 w-32 h-32 text-white/5 group-hover:text-[#00ff88]/10 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold group-hover:text-[#00ff88] transition-colors">{audit.title}</h3>
                <span className="font-mono text-xs text-[#00ff88] bg-[#00ff88]/5 px-3 py-1 border border-[#00ff88]/10">
                  {audit.date}
                </span>
              </div>
              <p className="text-sm font-mono text-orange-400/80 mb-4">{audit.findings} Findings</p>
              <p className="text-gray-400 leading-relaxed max-w-3xl group-hover:text-gray-300 transition-colors">
                {audit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Aura Protocol',
      description: 'A decentralized lending protocol with algorithmic interest rates based on utilization. Built entirely on Solidity with an optimized custom math library to minimize gas costs.',
      tech: ['Solidity', 'Foundry', 'Node.js', 'Graph QL'],
      link: '#',
      github: '#'
    },
    {
      title: 'Zero-Knowledge DAO',
      description: 'A governance system utilizing ZK proofs to allow anonymous voting for whitelisted members. Designed the smart contracts and the robust backend relayer.',
      tech: ['Solidity', 'Circom', 'Ethers.js', 'Express'],
      link: '#',
      github: '#'
    },
    {
      title: 'Cross-Chain Bridge Relayer',
      description: 'Secure backend infrastructure that listens to events on Ethereum and Polygon, verifying state and triggering mints. Built for high throughput and zero downtime.',
      tech: ['Node.js', 'PostgreSQL', 'Web3.js', 'Docker'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects">
      <h2 className="font-mono text-2xl mb-12 flex items-center gap-3">
        <span className="text-[#00ff88]">03.</span> Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col bg-[#050505] border border-white/5 hover:border-[#00ff88]/30 hover:shadow-[0_0_30px_-10px_#00ff8820] transition-all duration-300 p-8 h-full"
          >
            <div className="flex justify-between items-start mb-6 text-gray-500 group-hover:text-[#00ff88] transition-colors">
              <Code size={32} />
              <div className="flex gap-4">
                <a href={project.github} className="hover:text-white transition-colors"><Github size={20} /></a>
                <a href={project.link} className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#00ff88] transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-gray-300 transition-colors">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-3 font-mono text-xs text-gray-600">
              {project.tech.map((tech, j) => (
                <li key={j} className="bg-white/5 px-2 py-1">{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <p className="font-mono text-[#00ff88] mb-4 text-sm tracking-widest uppercase">04. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
        Whether you have a smart contract that needs an audit, a backend system that needs scaling, or you just want to say hi, my inbox is always open.
      </p>
      
      <a 
        href="mailto:shegeemankind@gmail.com"
        className="inline-flex items-center gap-2 bg-[#00ff88] text-black px-8 py-4 font-mono font-bold hover:bg-[#00cc6a] transition-colors uppercase tracking-widest text-sm"
      >
        <Mail size={18} />
        Say Hello
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-gray-500">
          Designed & Built by Makinde Oluwasegun. <br className="md:hidden" />
          <span className="md:inline hidden"> • </span> Focused on Web3 Security.
        </p>
        
        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
        </div>
      </div>
    </footer>
  );
}


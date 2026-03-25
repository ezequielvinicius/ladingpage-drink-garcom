import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import logo from './image/logo.png';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-silver selection:text-[#050505]">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 top-0 transition-all duration-700 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-widest text-white flex flex-col items-center">
            <img src={logo} alt="Drink & Garçom Logo" className="h-20" />
          </div>
          <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
            <a href="#home" className="hover:text-silver transition-colors duration-300">Home</a>
            <a href="#sobre" className="hover:text-silver transition-colors duration-300">A Essência</a>
            <a href="#galeria" className="hover:text-silver transition-colors duration-300">Galeria</a>
            <a href="#planos" className="hover:text-silver transition-colors duration-300">Cartas</a>
          </div>
          <a href="#planos" className="hidden md:block border border-silver/50 text-silver px-6 py-2 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-silver hover:text-[#050505] transition-all duration-300">
            Reservar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40"
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-[#050505]/60 to-[#050505]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-transparent to-[#050505]/50"></div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center mt-20"
        >
          <motion.div variants={fadeUp} className="text-silver text-xs md:text-sm tracking-[0.4em] uppercase mb-6 font-medium flex items-center gap-4">
            <span className="w-8 h-[1px] bg-silver"></span>
            Alta Coquetelaria
            <span className="w-8 h-[1px] bg-silver"></span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide text-white uppercase leading-[1.1]">
            A Arte de <br/>
            <span className="text-silver font-script lowercase text-7xl md:text-9xl tracking-normal normal-case block mt-2 glow-silver">Celebrar</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl font-light tracking-wide">
            Elevamos o padrão do seu evento com mixologia autoral, estética impecável e um serviço verdadeiramente premium.
          </motion.p>
          <motion.a 
            variants={fadeUp}
            href="#planos" 
            className="group relative px-8 py-4 overflow-hidden rounded-full border border-silver/50 text-silver hover:text-[#050505] transition-colors duration-500 text-xs uppercase tracking-[0.2em] flex items-center gap-3"
          >
            <div className="absolute inset-0 w-0 bg-silver transition-all duration-[500ms] ease-out group-hover:w-full -z-10"></div>
            <i className="fab fa-whatsapp text-lg"></i> Solicitar Orçamento
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 lg:col-start-2 z-10 order-2 lg:order-1"
          >
            <motion.div variants={fadeUp} className="text-silver text-xs tracking-[0.3em] uppercase mb-4">A Essência</motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl font-light text-white tracking-wide mb-8 leading-tight">
              Mais que drinks, <br/><span className="font-script text-silver text-6xl md:text-7xl lowercase glow-silver">memórias.</span>
            </motion.h2>
            
            <motion.div variants={fadeUp} className="w-12 h-[1px] bg-silver mb-10"></motion.div>
            
            <motion.div variants={fadeUp} className="space-y-6 text-gray-400 font-light leading-relaxed text-sm md:text-base tracking-wide">
              <p>
                A <strong className="text-white font-normal">GARDS Bartenders</strong> nasceu da paixão por transformar eventos em experiências sensoriais inesquecíveis. Não servimos apenas coquetéis; entregamos arte em forma líquida.
              </p>
              <p>
                Nossa equipe é formada por mixologistas de elite, treinados nos melhores bares do mundo, trazendo técnicas avançadas, ingredientes exóticos e uma apresentação visual de tirar o fôlego.
              </p>
              <p>
                Com processos rigorosos e atendimento humanizado, garantimos a consistência e o luxo de um bar de alta coquetelaria, onde quer que você esteja.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative order-1 lg:order-2"
          >
            <div className="absolute -inset-4 border border-silver/20 rounded-t-full transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1575037614876-c385380f0dce?q=80&w=2070&auto=format&fit=crop" 
              alt="Mixology Art" 
              className="relative z-10 rounded-t-full shadow-2xl w-full object-cover h-[500px] md:h-[600px] grayscale-[20%] contrast-125"
            />
          </motion.div>
        </div>
      </section>

      {/* Vertical Gallery Section */}
      <section id="galeria" className="w-full h-[60vh] md:h-[70vh] flex flex-col md:flex-row overflow-hidden border-y border-white/5">
        {[
          { img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2069&auto=format&fit=crop', title: 'Clássicos' },
          { img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1000&auto=format&fit=crop', title: 'Autorais' },
          { img: 'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?q=80&w=1000&auto=format&fit=crop', title: 'Premium' },
          { img: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?q=80&w=1000&auto=format&fit=crop', title: 'Detalhes' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex-1 group relative overflow-hidden bg-cover bg-center transition-all duration-700 hover:flex-[2] cursor-pointer border-t md:border-t-0 md:border-l border-white/10"
            style={{ backgroundImage: `url('${item.img}')` }}
          >
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700 flex items-center justify-center">
              <h3 className="text-white font-serif text-2xl md:text-3xl tracking-widest uppercase opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-24"
        >
          <motion.div variants={fadeUp} className="text-silver text-xs tracking-[0.3em] uppercase mb-4">Investimento</motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-light mb-6 tracking-widest uppercase text-white">Nossas <span className="font-script text-silver text-6xl lowercase glow-silver">Cartas</span></motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-[1px] bg-silver mx-auto mb-8"></motion.div>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto font-light tracking-wide text-sm md:text-base">
            Selecione a experiência ideal para o seu evento. Todos os planos incluem serviço de bartender profissional, taças de cristal e insumos de altíssima qualidade.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Classic */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-10 transition-all duration-500 hover:-translate-y-2 hover:border-silver/30 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-silver/50 transition-all duration-500"></div>
            <h3 className="font-serif text-2xl font-light mb-2 text-white tracking-wider">Classic</h3>
            <div className="text-silver text-4xl font-light mb-8 font-serif">R$ 30 <span className="text-xs text-gray-500 font-sans font-light tracking-widest uppercase">/ pessoa</span></div>
            
            <div className="mb-8 flex-grow">
              <h4 className="text-white uppercase tracking-[0.2em] text-[10px] font-medium mb-6 flex items-center gap-3 opacity-70">
                <span className="w-6 h-[1px] bg-silver"></span> Drinks
              </h4>
              <ul className="space-y-5 font-light text-sm">
                <li className="flex items-center text-gray-300"><i className="fas fa-cocktail text-silver w-8 text-lg animate-floating"></i> Caipirinha</li>
                <li className="flex items-center text-gray-300"><i className="fas fa-glass-martini-alt text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.2s'}}></i> Caipirosca</li>
                <li className="flex items-center text-gray-300"><i className="fas fa-wine-glass text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.4s'}}></i> Gin Tropical</li>
                <li className="flex items-center text-gray-300"><i className="fas fa-leaf text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.6s'}}></i> Mojito</li>
                <li className="flex items-center text-gray-300"><i className="fas fa-glass-whiskey text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.8s'}}></i> Soda Italiana <span className="text-[9px] text-gray-500 ml-2 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">Sem Álcool</span></li>
              </ul>

              <h4 className="text-white uppercase tracking-[0.2em] text-[10px] font-medium mt-10 mb-6 flex items-center gap-3 opacity-70">
                <span className="w-6 h-[1px] bg-silver"></span> Frutas
              </h4>
              <ul className="space-y-5 font-light text-sm">
                <li className="flex items-center text-gray-300"><i className="fas fa-lemon text-silver w-8 text-lg animate-floating"></i> Abacaxi & Limão</li>
                <li className="flex items-center text-gray-300"><i className="fas fa-apple-alt text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.3s'}}></i> Morango & Uva</li>
              </ul>
            </div>
            
            <button className="w-full border border-white/10 text-gray-300 hover:border-silver hover:text-silver font-medium py-4 rounded-full tracking-[0.2em] uppercase text-[10px] transition-all duration-300 mt-auto">
              Selecionar
            </button>
          </motion.div>

          {/* Card 2: Premium */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-[#14100c] to-[#0a0a0a] border border-silver/50 rounded-2xl p-10 relative transition-all duration-500 hover:-translate-y-2 shadow-[0_0_30px_rgba(212,212,216,0.05)] hover:shadow-[0_0_40px_rgba(212,212,216,0.15)] flex flex-col lg:-mt-8 lg:mb-8 overflow-hidden group"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-silver text-[#050505] text-[9px] font-bold uppercase tracking-[0.3em] py-1.5 px-6 rounded-b-lg shadow-lg">
              Mais Vendido
            </div>
            
            <h3 className="font-serif text-2xl font-light mb-2 text-silver tracking-wider mt-4">Premium</h3>
            <div className="text-white text-5xl font-light mb-8 font-serif">R$ 40 <span className="text-xs text-gray-500 font-sans font-light tracking-widest uppercase">/ pessoa</span></div>
            
            <div className="mb-8 flex-grow">
              <h4 className="text-white uppercase tracking-[0.2em] text-[10px] font-medium mb-6 flex items-center gap-3 opacity-70">
                <span className="w-6 h-[1px] bg-silver"></span> Drinks
              </h4>
              <ul className="space-y-5 font-light text-sm">
                <li className="flex items-center text-gray-200"><i className="fas fa-mug-hot text-silver w-8 text-lg animate-floating glow-silver"></i> Moscow Mule</li>
                <li className="flex items-center text-gray-200"><i className="fas fa-cocktail text-silver w-8 text-lg animate-floating glow-silver" style={{animationDelay: '0.2s'}}></i> Caipirinha</li>
                <li className="flex items-center text-gray-200"><i className="fas fa-wine-glass text-silver w-8 text-lg animate-floating glow-silver" style={{animationDelay: '0.4s'}}></i> Gin Tropical</li>
                <li className="flex items-center text-gray-200"><i className="fas fa-umbrella-beach text-silver w-8 text-lg animate-floating glow-silver" style={{animationDelay: '0.6s'}}></i> Sex on the Beach</li>
                <li className="flex items-center text-gray-200"><i className="fas fa-glass-whiskey text-silver w-8 text-lg animate-floating glow-silver" style={{animationDelay: '0.8s'}}></i> Pink Lemonade <span className="text-[9px] text-gray-500 ml-2 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">Sem Álcool</span></li>
              </ul>

              <h4 className="text-white uppercase tracking-[0.2em] text-[10px] font-medium mt-10 mb-6 flex items-center gap-3 opacity-70">
                <span className="w-6 h-[1px] bg-silver"></span> Frutas
              </h4>
              <ul className="space-y-5 font-light text-sm">
                <li className="flex items-center text-gray-200"><i className="fas fa-lemon text-silver w-8 text-lg animate-floating glow-silver"></i> Abacaxi & Limão</li>
                <li className="flex items-center text-gray-200"><i className="fas fa-certificate text-silver w-8 text-lg animate-floating glow-silver" style={{animationDelay: '0.3s'}}></i> Maracujá & Morango</li>
              </ul>
            </div>
            
            <button className="w-full bg-silver text-[#050505] hover:bg-white font-medium py-4 rounded-full tracking-[0.2em] uppercase text-[10px] transition-colors duration-300 shadow-[0_0_20px_rgba(212,212,216,0.2)] mt-auto">
              Selecionar
            </button>
          </motion.div>

          {/* Card 3: Signature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-10 transition-all duration-500 hover:-translate-y-2 hover:border-silver/30 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-silver/50 transition-all duration-500"></div>
            <h3 className="font-serif text-2xl font-light mb-2 text-white tracking-wider">Signature</h3>
            <div className="text-silver text-4xl font-light mb-8 font-serif">R$ 50 <span className="text-xs text-gray-500 font-sans font-light tracking-widest uppercase">/ pessoa</span></div>
            
            <div className="mb-8 flex-grow">
              <h4 className="text-white uppercase tracking-[0.2em] text-[10px] font-medium mb-6 flex items-center gap-3 opacity-70">
                <span className="w-6 h-[1px] bg-silver"></span> Drinks
              </h4>
              <ul className="space-y-5 font-light text-sm">
                <li className="flex items-center text-gray-300"><i className="fas fa-wine-glass-alt text-silver w-8 text-lg animate-floating"></i> Aperol Spritz</li>
                <li className="flex items-center text-gray-300"><i className="fas fa-glass-martini text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.1s'}}></i> Negroni</li>
                <li className="flex items-center text-gray-300"><i className="fas fa-cocktail text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.2s'}}></i> Orange Velvet</li>
                <li className="flex items-center text-gray-300"><i className="fas fa-glass-whiskey text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.3s'}}></i> Whisky Sour</li>
                <li className="flex items-center text-gray-300"><i className="fas fa-gem text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.4s'}}></i> Gin Premium <span className="text-[9px] text-gray-500 ml-2 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">Especiarias</span></li>
                <li className="flex items-center text-gray-300"><i className="fas fa-wine-glass-alt text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.5s'}}></i> Aperol Citrus</li>
                <li className="flex items-center text-gray-300"><i className="fas fa-tint text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.6s'}}></i> Pink Lemonade <span className="text-[9px] text-gray-500 ml-2 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">Sem Álcool</span></li>
                <li className="flex items-center text-gray-300"><i className="fas fa-star text-silver w-8 text-lg animate-floating" style={{animationDelay: '0.7s'}}></i> Água de Ouro <span className="text-[9px] text-gray-500 ml-2 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">Sem Álcool</span></li>
              </ul>

              <h4 className="text-white uppercase tracking-[0.2em] text-[10px] font-medium mt-10 mb-6 flex items-center gap-3 opacity-70">
                <span className="w-6 h-[1px] bg-silver"></span> Frutas
              </h4>
              <ul className="space-y-5 font-light text-sm">
                <li className="flex items-center text-gray-300"><i className="fas fa-shopping-basket text-silver w-8 text-lg animate-floating"></i> 5 Tipos Premium</li>
                <li className="text-[10px] text-gray-500 pl-11 tracking-wide">Abacaxi, Limão, Maracujá, Morango, Uva</li>
              </ul>
            </div>
            
            <button className="w-full border border-white/10 text-gray-300 hover:border-silver hover:text-silver font-medium py-4 rounded-full tracking-[0.2em] uppercase text-[10px] transition-all duration-300 mt-auto">
              Selecionar
            </button>
          </motion.div>

        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/5 py-16 bg-[#050505] text-center">
        <div className="font-serif text-2xl tracking-widest text-white mb-8 flex flex-col items-center">
          <img src={logo} alt="Drink & Garçom Logo" className="h-28 opacity-80" />
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-gray-500 hover:text-silver transition-colors"><i className="fab fa-instagram text-xl"></i></a>
          <a href="#" className="text-gray-500 hover:text-silver transition-colors"><i className="fab fa-facebook-f text-xl"></i></a>
          <a href="#" className="text-gray-500 hover:text-silver transition-colors"><i className="fab fa-whatsapp text-xl"></i></a>
        </div>
        <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">&copy; 2026 Drink & Garçom. Todos os direitos reservados.</p>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        href="#" 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 z-50"
      >
        <i className="fab fa-whatsapp"></i>
      </motion.a>
    </div>
  );
}

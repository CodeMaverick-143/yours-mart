import { QrCode, Ticket, ShieldCheck, Users, BarChart3, Smartphone, Zap, MapPin } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="bg-pitch-black text-light-gray font-sans selection:bg-neon-orange selection:text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-pitch-black">
                {/* Radial Glow */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-neon-orange/20 rounded-full blur-[150px] -z-0 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text */}
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-neon-orange/50 rounded-sm mb-8 shadow-[0_0_10px_rgba(255,75,31,0.2)]">
                                <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse"></div>
                                <span className="text-xs font-bold text-neon-orange tracking-widest uppercase">Live in your city</span>
                            </div>

                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-white">
                                THE <span className="text-neon-orange drop-shadow-[0_0_15px_rgba(255,75,31,0.5)]">FUTURE</span> <br />
                                OF NIGHTLIFE <br />
                                IS <span className="text-neon-orange drop-shadow-[0_0_15px_rgba(255,75,31,0.5)]">HERE.</span>
                            </h1>

                            <p className="text-2xl font-bold text-warm-white mb-4">
                                Skip the lines. Skip the scams.
                                <span className="block mt-1 text-neon-orange">Party smarter.</span>
                            </p>

                            <p className="text-muted-gray text-lg max-w-lg mb-10 font-medium">
                                Validated QR entry. Verified venues. Zero hassle.
                                <br />The street-smart way to own the night.
                            </p>

                            <div className="flex flex-wrap gap-5">
                                <button className="px-10 py-4 bg-neon-orange hover:bg-[#FF6A33] text-white rounded-lg font-black text-xl transition-all transform hover:scale-105 shadow-neon flex items-center gap-2 border border-neon-orange">
                                    <Ticket className="w-6 h-6" />
                                    BUY PASSES
                                </button>
                                <button className="px-10 py-4 bg-transparent border-2 border-neon-orange text-neon-orange hover:bg-neon-orange/10 rounded-lg font-black text-xl transition-all flex items-center gap-2">
                                    <Users className="w-6 h-6" />
                                    FOR CLUBS
                                </button>
                            </div>
                        </div>

                        {/* Right: Phone Mockup */}
                        <div className="relative mt-20 lg:mt-0 flex justify-center">
                            {/* Glow behind phone */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] bg-neon-orange/20 blur-[80px] -z-10 rounded-full"></div>

                            <div className="relative w-[320px] h-[640px] bg-black border-[3px] border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden z-20 transform rotate-[-3deg] hover:rotate-0 transition-all duration-500">
                                {/* Dynamic Island */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-2xl z-30"></div>

                                {/* App UI */}
                                <div className="w-full h-full bg-section-dark flex flex-col pt-14 px-6 relative">
                                    <div className="flex justify-between items-center mb-8">
                                        <span className="text-neon-orange font-black text-xl tracking-tighter">QRAZY</span>
                                        <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-neon-orange"></div>
                                    </div>

                                    {/* Event Card */}
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg p-1 relative">
                                        <div className="bg-black/90 p-6 rounded-xl text-center border border-zinc-200">
                                            <div className="text-zinc-500 font-bold text-xs tracking-[0.2em] mb-2">ADMIT ONE</div>
                                            <h2 className="text-white text-3xl font-black uppercase mb-1 italic">NEON<br />RIDER</h2>
                                            <p className="text-neon-orange font-bold text-sm mb-6">SAT 24 OCT • 10 PM</p>

                                            <div className="bg-white p-3 rounded-lg w-40 h-40 mx-auto mb-4">
                                                <QrCode className="w-full h-full text-black" strokeWidth={2} />
                                            </div>

                                            <div className="text-2xl font-black text-white tracking-widest">#8X92</div>
                                        </div>
                                        <div className="absolute top-1/2 -left-2 w-4 h-4 bg-section-dark rounded-full"></div>
                                        <div className="absolute top-1/2 -right-2 w-4 h-4 bg-section-dark rounded-full"></div>
                                    </div>

                                    {/* Active Badge */}
                                    <div className="mt-6 flex items-center justify-center gap-2 bg-neon-orange/10 border border-neon-orange/30 p-3 rounded-lg">
                                        <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse"></div>
                                        <span className="text-neon-orange font-bold text-sm uppercase">Pass Active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="py-12 bg-section-dark border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-xs font-bold tracking-[0.2em] text-muted-gray uppercase mb-8">
                        Trusted by top venues in your city <span className="text-neon-orange text-lg">.</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
                        {/* Mock Logos - keeping them consistent/abstract */}
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="h-8 w-32 bg-zinc-800 rounded-sm hover:bg-zinc-700 transition-colors"></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 bg-pitch-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase italic tracking-tight">How Qrazy Works</h2>
                        <div className="w-20 h-1 bg-neon-orange mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: MapPin, title: "DISCOVER", desc: "Find the hottest events." },
                            { icon: Ticket, title: "BUY PASS", desc: "Secure your spot instantly." },
                            { icon: QrCode, title: "SCAN & ENTRY", desc: "Breeze through the door." }
                        ].map((step, i) => (
                            <div key={i} className="bg-section-dark border-t-4 border-neon-orange p-8 relative pt-12 group hover:shadow-neon transition-all duration-300">
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-section-dark border-2 border-neon-orange rounded-full flex items-center justify-center font-black text-neon-orange z-10">
                                    {i + 1}
                                </div>
                                <div className="flex justify-center mb-6">
                                    <step.icon className="w-10 h-10 text-white group-hover:text-neon-orange transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-2 text-center italic">{step.title}</h3>
                                <p className="text-muted-gray text-center font-medium">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-section-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase leading-none">
                                The smartest way to <span className="text-neon-orange">Night.</span>
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Zap, title: "INSTANT ENTRY", desc: "No lines. No waiting." },
                                    { icon: ShieldCheck, title: "VERIFIED", desc: "100% real. No fakes." },
                                    { icon: Users, title: "RESALE", desc: "Sell safely in-app." },
                                    { icon: BarChart3, title: "LIVE STATS", desc: "Know the crowd." }
                                ].map((feat, i) => (
                                    <div key={i} className="bg-black border border-white/10 p-5 rounded-lg hover:border-neon-orange/50 transition-colors group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <feat.icon className="text-neon-orange w-5 h-5" />
                                            <h4 className="font-black text-white text-lg uppercase italic">{feat.title}</h4>
                                        </div>
                                        <p className="text-sm text-muted-gray leading-tight font-medium pl-8 border-l border-zinc-800 ml-2">{feat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile First */}
                        <div className="relative flex justify-center">
                            <div className="relative p-8 border-2 border-white/5 rounded-3xl bg-black max-w-sm w-full shadow-[0_0_30px_rgba(255,75,31,0.1)] hover:shadow-neon transition-shadow duration-500">
                                <div className="absolute top-0 right-0 p-4">
                                    <Smartphone className="text-neon-orange w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2 uppercase">Mobile<br />First</h3>
                                <p className="text-muted-gray mb-8">Your pass lives in your pocket. <span className="text-neon-orange font-bold">Always ready.</span></p>

                                {/* Mock List */}
                                <div className="space-y-3">
                                    <div className="bg-section-dark p-4 rounded-lg border-l-4 border-neon-orange flex items-center justify-between">
                                        <div>
                                            <div className="bg-zinc-800 w-24 h-3 rounded mb-2"></div>
                                            <div className="bg-zinc-800 w-16 h-2 rounded"></div>
                                        </div>
                                        <QrCode className="text-zinc-600 w-5 h-5" />
                                    </div>
                                    <div className="bg-section-dark p-4 rounded-lg border-l-4 border-zinc-700 opacity-50 flex items-center justify-between">
                                        <div>
                                            <div className="bg-zinc-800 w-20 h-3 rounded mb-2"></div>
                                            <div className="bg-zinc-800 w-12 h-2 rounded"></div>
                                        </div>
                                        <QrCode className="text-zinc-700 w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Section */}
            <section id="for-clubs" className="py-24 bg-black relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            {/* Dashboard UI */}
                            <div className="bg-section-dark border border-white/10 rounded-xl p-6 shadow-2xl relative z-10">
                                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                                    <div className="text-white font-black text-xl uppercase tracking-wider">Dashboard</div>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-black p-4 rounded-lg border border-white/5">
                                        <div className="text-muted-gray text-xs font-bold uppercase mb-2">Total Sales</div>
                                        <div className="text-3xl font-black text-white">$12,450</div>
                                        <div className="h-1 w-full bg-zinc-800 mt-3 rounded-full overflow-hidden">
                                            <div className="h-full bg-neon-orange w-[75%]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-black p-4 rounded-lg border border-white/5">
                                        <div className="text-muted-gray text-xs font-bold uppercase mb-2">Entries</div>
                                        <div className="text-3xl font-black text-neon-orange">842 <span className="text-zinc-600 text-sm font-normal">/ 1k</span></div>
                                        <div className="h-1 w-full bg-zinc-800 mt-3 rounded-full overflow-hidden">
                                            <div className="h-full bg-neon-orange w-[84%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Backing layer */}
                            <div className="absolute top-4 left-4 w-full h-full border-2 border-neon-orange/20 rounded-xl -z-0"></div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
                                Partner with <span className="text-neon-orange">Qrazy</span>
                            </h2>
                            <p className="text-muted-gray text-lg mb-8 font-medium">
                                Stop leakages. Boost revenue. Own your door data.
                            </p>

                            <div className="space-y-4 mb-10">
                                {["Fraud Prevention", "Live Analytics", "Direct Marketing"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-8 h-px bg-neon-orange group-hover:w-12 transition-all"></div>
                                        <span className="text-white font-bold text-lg uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-neon-orange hover:bg-[#FF6A33] text-white rounded-lg font-black uppercase transition-colors shadow-neon">
                                    Join as Partner
                                </button>
                                <button className="px-8 py-4 border border-white/20 text-white hover:bg-white/5 rounded-lg font-bold uppercase transition-colors">
                                    View Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 text-center bg-section-dark border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-orange/10 blur-[100px] rounded-full -z-0 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter transform -rotate-2">
                        READY TO <br /><span className="text-neon-orange drop-shadow-lg">TURN UP?</span>
                    </h2>
                    <button className="px-16 py-6 bg-neon-orange text-white text-2xl font-black rounded-full hover:scale-105 transition-transform shadow-neon-strong">
                        EXPLORE EVENTS
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
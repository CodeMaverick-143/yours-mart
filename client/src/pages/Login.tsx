import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <div className="min-h-screen bg-pitch-black flex items-center justify-center px-4 relative overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-md bg-section-dark border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative z-10 animate-fade-in-up">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black text-white mb-2 tracking-tight">WELCOME BACK</h1>
                    <p className="text-muted-gray">Log in to access your passes and party smarter.</p>
                </div>

                <button className="w-full bg-white text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors mb-6">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </button>

                <div className="flex items-center gap-4 mb-6">
                    <div className="h-px bg-white/10 flex-1"></div>
                    <span className="text-zinc-600 text-sm font-bold uppercase">or</span>
                    <div className="h-px bg-white/10 flex-1"></div>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-muted-gray uppercase mb-2 ml-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:border-neon-orange focus:ring-1 focus:ring-neon-orange transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2 ml-1">
                            <label className="block text-xs font-bold text-muted-gray uppercase">Password</label>
                            <a href="#" className="text-xs text-neon-orange hover:text-white transition-colors">Forgot?</a>
                        </div>
                        <input
                            type="password"
                            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-700 focus:outline-none focus:border-neon-orange focus:ring-1 focus:ring-neon-orange transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="button" className="w-full bg-neon-orange hover:bg-[#FF6A33] text-white font-black uppercase tracking-wider py-4 rounded-xl shadow-neon transition-all transform hover:scale-[1.02] mt-2">
                        Log In
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-muted-gray text-sm">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-white hover:text-neon-orange font-bold transition-colors">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

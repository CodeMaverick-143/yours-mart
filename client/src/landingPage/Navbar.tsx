import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const isAuthPage = ['/login', '/register'].includes(location.pathname);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-pitch-black/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <span className="text-3xl font-black tracking-tighter text-neon-orange drop-shadow-[0_0_10px_rgba(255,75,31,0.5)] transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">QRAZY</span>
                    </Link>

                    {/* Desktop Menu - Hide on auth pages if desired, or keep specific links */}
                    {!isAuthPage && (
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link to="/" className="text-light-gray hover:text-neon-orange transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wider">Home</Link>
                                <a href="/#events" className="text-light-gray hover:text-neon-orange transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wider">Events</a>
                                <a href="/#clubs" className="text-light-gray hover:text-neon-orange transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wider">Clubs</a>
                                <a href="/#how-it-works" className="text-light-gray hover:text-neon-orange transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wider">How It Works</a>
                                <a href="/#for-clubs" className="text-light-gray hover:text-neon-orange transition-colors px-3 py-2 text-sm font-bold uppercase tracking-wider">For Clubs</a>
                            </div>
                        </div>
                    )}

                    {/* Auth Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/login" className="text-sm font-bold text-light-gray hover:text-white uppercase tracking-wider">Login</Link>
                        <Link to="/register" className="bg-neon-orange hover:bg-[#FF6A33] text-white px-6 py-2.5 rounded-full font-black text-sm transition-all transform hover:scale-105 shadow-neon border border-neon-orange uppercase tracking-wider">
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-neon-orange focus:outline-none transition-colors"
                        >
                            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-section-dark border-b border-white/10 absolute w-full backdrop-blur-xl">
                    <div className="px-4 pt-4 pb-6 space-y-2 sm:px-3 flex flex-col items-center">
                        <Link to="/" className="block px-3 py-2 rounded-md text-xl font-black hover:text-neon-orange uppercase tracking-wider w-full text-center">Home</Link>
                        {!isAuthPage && (
                            <>
                                <a href="/#events" className="block px-3 py-2 rounded-md text-xl font-black hover:text-neon-orange uppercase tracking-wider w-full text-center">Events</a>
                                <a href="/#clubs" className="block px-3 py-2 rounded-md text-xl font-black hover:text-neon-orange uppercase tracking-wider w-full text-center">Clubs</a>
                                <a href="/#how-it-works" className="block px-3 py-2 rounded-md text-xl font-black hover:text-neon-orange uppercase tracking-wider w-full text-center">How It Works</a>
                            </>
                        )}
                        <div className="mt-6 w-full flex flex-col gap-4 px-4">
                            <Link to="/login" className="w-full py-3 text-center text-lg font-bold text-white border border-white/20 rounded-lg hover:bg-white/5 uppercase tracking-wider">Login</Link>
                            <Link to="/register" className="w-full bg-neon-orange py-3 rounded-lg text-white font-black text-lg shadow-neon text-center hover:bg-[#FF6A33] uppercase tracking-wider">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
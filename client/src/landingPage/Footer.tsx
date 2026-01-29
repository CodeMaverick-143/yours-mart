import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <span className="text-2xl font-black text-white tracking-tighter group-hover:text-neon-orange transition-colors duration-300">QRAZY</span>
                        </Link>
                        <p className="text-muted-gray text-sm font-medium leading-relaxed">
                            // The new standard for<br />nightlife entry. Secure. Fast. Lit.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            {['About', 'Careers', 'Contact'].map(l => (
                                <li key={l}><a href="#" className="text-muted-gray hover:text-neon-orange transition-colors font-medium text-sm">{l}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3">
                            {['Blog', 'Privacy', 'Terms'].map(l => (
                                <li key={l}><a href="#" className="text-muted-gray hover:text-neon-orange transition-colors font-medium text-sm">{l}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Social</h4>
                        <ul className="space-y-3">
                            {['Instagram', 'Twitter / X', 'TikTok'].map(l => (
                                <li key={l}><a href="#" className="text-muted-gray hover:text-neon-orange transition-colors font-medium text-sm">{l}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-700 text-xs font-bold uppercase tracking-widest">
                    <p>© 2026 QRAZY INC. ALL RIGHTS RESERVED.</p>
                    <p>MADE FOR THE NIGHT.</p>
                </div>
            </div>
        </footer>
    );
}
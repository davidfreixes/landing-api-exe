
const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center space-x-2">
                    <img
                        src="https://www.envioxenvio.es/img/logo.svg"
                        alt="Envio X Envio Logo"
                        className="h-6"
                    />
                    <span className="font-bold text-2xl text-black-600">ENVIO X ENVIO</span>
                </div>

                <nav className="md:flex space-x-6 text-blue-900 font-semibold">
                    <a href="https://www.envioxenvio.es/#instant-rate" className="hover:text-blue-500">Instant Rate</a>
                    <a href="https://www.envioxenvio.es/servicios" className="hover:text-blue-500">Servicios</a>
                    <a href="https://www.envioxenvio.es/quienes-somos" className="hover:text-blue-500">Quiénes Somos</a>
                    <a href="#https://www.envioxenvio.es/blog" className="hover:text-blue-500">Blog</a>
                </nav>

                <div className="hidden md:block space-x-3">
                    <a href="https://www.envioxenvio.es/contacto">
                        <button className="border border-blue-500 text-white bg-blue-900 px-4 py-2 rounded-full hover:bg-blue-500">
                            Contacto
                        </button>
                    </a>
                    <a href="https://www.envioxenvio.es/auth/login?redirect=%2Fapp">
                        <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded-full hover:bg-blue-50">
                            Área Cliente
                        </button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
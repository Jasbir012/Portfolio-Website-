function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 border-t border-gray-800">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Jasbir</span>.  
        Built using React & TailwindCSS.
      </p>
    </footer>
  );
}

export default Footer;

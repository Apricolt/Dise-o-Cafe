const Footer = () => {
    return (
      <footer className="bg-amber-950 w-full p-4 shadow-md text-center">
        <div className="container mx-auto px-10">
          <p className="text-white font-bold">
            La verdadera riqueza está en saber lo que tenemos doble: &quot;texto&quot;.
          </p>
          <p className="mt-2 text-sm text-white">
            © {new Date().getFullYear()} Café de Colombia doble: &quot;texto&quot;.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
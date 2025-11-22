const Footer = () => {
  return (
    <footer className="w-full py-6 border-t bg-card text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} BlogVerse. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

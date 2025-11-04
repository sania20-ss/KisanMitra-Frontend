import { Link } from "react-router-dom";
import { FaLeaf, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  const userLinks = [
    { name: "For Farmers", path: "/farmer" },
    { name: "For Buyers", path: "/buyer" },
    { name: "For Drivers", path: "/driver" },
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: "support@kisanmitra.in" },
    { icon: <FaPhone />, text: "+91 1800-XXX-XXXX" },
    { icon: <FaMapMarkerAlt />, text: "Agriculture Technology Hub, India" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaLeaf className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">KisanMitra</span>
                <span className="text-xs text-muted-foreground">
                  हर किसान का सच्चा दोस्त
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering farmers with technology to connect directly with buyers and streamline agricultural trade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* User Links */}
          <div>
            <h3 className="font-semibold mb-4">For Users</h3>
            <ul className="space-y-2">
              {userLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-primary">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} KisanMitra. All rights reserved. | Made with ❤️ for Indian Farmers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

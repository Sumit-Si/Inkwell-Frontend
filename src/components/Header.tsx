import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Separator } from "./ui/separator";

const Header = ({ className, ...props }: React.ComponentProps<"header">) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = null;

  return (
    <header
      className={cn(
        "w-full border-b bg-card/60 backdrop-blur supports-backdrop-filter:bg-card/30 sticky top-0 z-50 py-2",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          Ink<span className="text-primary">Well</span>
        </Link>

        <div
          className={cn(" grow md:px-4 max-md:absolute max-md:top-16 max-md:left-0 max-md:bg-background max-md:w-full max-md:border-b overflow-scroll md:flex md:justify-between md:items-center", !mobileOpen && "max-md:hidden",)}
        >
          <Navbar className="max-md:p-3 md:ms-4" />

          {/* Auth Buttons */}
          {!user && (
            <>
              <Separator className="md:hidden" />
              <div className="flex flex-col-reverse gap-y-3 gap-x-2 md:flex-row md:items-center max-md:p-3">
                <Button variant="outline" asChild>
                  <Link to="/login" viewTransition onClick={(prev) => setMobileOpen(!prev)}>
                    Login
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/register" viewTransition onClick={(prev) => setMobileOpen(!prev)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center gap-1 ms-auto">
          <ThemeToggle />
          {/* Mobile Menu Toggle */}
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

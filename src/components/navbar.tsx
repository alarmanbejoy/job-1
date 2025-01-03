import React from "react";
import { Navbar as MTNavbar, Collapse, Button, IconButton, Typography } from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link"; // Import Link from Next.js

// NavItem component to render individual navigation items
interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"} // In case of undefined href, default to "#" (fallback)
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium hover:text-orange-600 transition-all transform duration-200"
      >
        {children}
      </Typography>
    </li>
  );
}

// Navigation menu data (Updated to valid Next.js routes)
const NAV_MENU = [
  {
    name: "Home",
    href: "/", // Home route for Next.js
  },
  {
    name: "Admin Dashboard",
    href: "/admin", // Example Admin Dashboard route
  },
  {
    name: "Trainer Dashboard",
    href: "/trainer", // Example Trainer Dashboard route
  },
];

// Main Navbar component
export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  // Function to toggle mobile menu
  const handleOpen = () => setOpen((cur) => !cur);

  // Close menu on window resize
  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  // Change navbar color on scroll
  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between lg:justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/image/logo-3.png" // Path to your logo image
            alt="EnergyVault Logo"
            className="h-8 w-8 mr-2" // Adjust size and margin as needed
          />
          <Typography
            color="orange" // Set color to deep orange
            className="text-lg font-bold text-orange-800" // Apply a deeper orange color
          >
            EnergyVault
          </Typography>
        </div>

        {/* Centered Navigation Menu */}
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          } justify-center flex-grow`}
        >
          {NAV_MENU.map(({ name, href }) => (
            <NavItem key={name} href={href}>
              {name}
            </NavItem>
          ))}
        </ul>

        {/* Button Section */}
        <div className="hidden items-center gap-4 lg:flex ml-auto">
          {/* Log in Button */}
          <Link href="/login">
            <Button
              color="orange" // Set background color to orange
              variant="outlined"
              className="border-2 border-orange-800 text-orange-800 px-6 py-2 hover:bg-orange-100 transition-all"
            >
              Log in
            </Button>
          </Link>

          {/* Register Button */}
          <Link href="/register">
            <Button
              color="orange" // Set background color to orange
              variant="outlined"
              className="border-2 border-orange-800 text-orange-800 px-6 py-2 hover:bg-orange-100 transition-all"
            >
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Mobile Collapse Menu */}
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <Link href="/login">
              <Button variant="outlined">Log in</Button>
            </Link>
            <Link href="/register">
              <Button variant="outlined">Register</Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;

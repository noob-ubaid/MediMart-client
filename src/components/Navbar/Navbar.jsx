import React, { useRef, useState } from "react";
import { Link } from "react-router";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import useAuth from "../../hooks/useAuth";
import Profile from "../../shared/Profile";

export function NavbarDemo() {
  const { user, loading, profile, setProfile } = useAuth();
  const avatarRefDesktop = useRef(null);
  const avatarRefMobile = useRef(null);
  const [activeAnchorRef, setActiveAnchorRef] = useState(null);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {!user ? (
              <NavbarButton
                href={`/login`}
                className={`bg-white px-6 cursor-pointer font-primary rounded mr-2 py-2.5  text-black`}
              >
                Login
              </NavbarButton>
            ) : (
              <div className="relative">
                {/* desktop avatar */}
                <img
                  ref={avatarRefDesktop}
                  onClick={() => {
                    setActiveAnchorRef(avatarRefDesktop);
                    setProfile((p) => !p);
                  }}
                  className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover cursor-pointer"
                  src={user.photoURL}
                  alt={user.displayName || "Avatar"}
                />
              </div>
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-4">
              {!user ? (
                <NavbarButton
                  href={`/login`}
                  className={`bg-white px-5 cursor-pointer font-primary rounded  py-2  text-black`}
                >
                  Login
                </NavbarButton>
              ) : (
                <div className="relative lg:hidden">
                  {/* mobile avatar */}
                  <img
                    ref={avatarRefMobile}
                    onClick={() => {
                      setActiveAnchorRef(avatarRefMobile);
                      setProfile((p) => !p);
                    }}
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover cursor-pointer"
                    src={user.photoURL}
                    alt={user.displayName || "Avatar"}
                  />
                </div>
              )}
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                to={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative font-primary text-center hover:bg-primary/40 transition-colors duration-300 w-full py-2 rounded text-white"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {user && profile && activeAnchorRef && (
        <Profile anchorRef={activeAnchorRef} />
      )}
    </div>
  );
}

export default NavbarDemo;

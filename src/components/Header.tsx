import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Link,
} from "@heroui/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname);

  const menuItems = [
    { name: "Junk Hauling", href: "/hauling" },
    { name: "Small Demolition", href: "/demo" },
    { name: "Residential Plumbing", href: "/plumbing" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        <NavbarBrand>
          <Link href="/" color="foreground">
            <img src="./brand.svg" alt="truck" />
            <p className="font-bold text-inherit">Handy Man Hector</p>
          </Link>
        </NavbarBrand>
        {menuItems.map((item, idx) => (
          <NavbarItem key={idx} isActive={activePath === item.href}>
            <Link >{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <img src="./brand.svg" alt="truck" />
          <p className="font-bold text-inherit">Handy Man Hector</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="/" size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

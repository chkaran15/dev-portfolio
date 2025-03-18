interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export const navItems: Array<NavItem> = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
  {
    name: "GitHub",
    href: "https://github.com/",
    external: true,
  },
];

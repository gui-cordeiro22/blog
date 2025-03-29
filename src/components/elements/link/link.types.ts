export type LinkData = Partial<HTMLAnchorElement> & {
  name: string;
  href: string;
  isActive: boolean;
};

export type LinkProps = LinkData;

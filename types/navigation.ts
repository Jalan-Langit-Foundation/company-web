export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
  children?: NavLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  label?: string;
  isExternal?: boolean;
}

export interface FoundationContact {
  email: string;
  address: string;
  instagram: {
    handle: string;
    url: string;
  };
  donationUrl: string;
}

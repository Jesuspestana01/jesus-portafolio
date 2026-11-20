export const contactProfile = {
  email: 'jesuspestana77@gmail.com',
  github: 'https://github.com/Jesuspestana01',
  linkedin: 'https://www.linkedin.com/in/jpestana01',
} as const;

export const contactLinks = [
  {
    label: 'GitHub',
    href: contactProfile.github,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: contactProfile.linkedin,
    external: true,
  },
  {
    label: 'Email',
    href: `mailto:${contactProfile.email}`,
    external: false,
  },
] as const;

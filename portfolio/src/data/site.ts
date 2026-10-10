export type SocialIcon = "github" | "linkedin" | "email";
export type Social = { label: string; href: string; icon: SocialIcon };

const email = "sanny433sharma@gmail.com";

const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Sannny007", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sanny-kumar-sharma-2a8b7540a/", icon: "linkedin" }, 
  { label: "Email", href: `mailto:${email}`, icon: "email" },
];

export const site = {
  name: "Sanny Kumar Sharma",
  email,
  location: "Bhopal, India",
  timeZone: "Asia/Kolkata",
  timeZoneAbbr: "IST",
  socials,
};
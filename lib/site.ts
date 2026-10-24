const FALLBACK_URL = "https://alcor-studio.vercel.app";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (value && value.length > 0 ? value : FALLBACK_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Alcor Studio",
  domain: "alcor.studio",
  email: "hello@alcor.studio",
  url: resolveSiteUrl(),
} as const;

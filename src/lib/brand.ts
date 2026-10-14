export const BRAND_TOKENS = {
  primaryNavy: "#0A3A66",
  blue: "#2563EB",
  lightBlue: "#93C5FD",
  white: "#FFFFFF",
  slateBg: "#F8FAFC",
  slateText: "#475569",
  darkNavy: "#0B1B3A",
  gradient: "linear-gradient(135deg, #0A3A66 0%, #2563EB 100%)",
  gradientColors: {
    start: "#0A3A66",
    end: "#2563EB",
  },
} as const;

export type BrandTokens = typeof BRAND_TOKENS;

const dev = process.env.NEXT_PUBLIC_BASE_URL == "http://localhost:3000";

export const server = dev ? "http://localhost:3000" : "http://localhost:3000";

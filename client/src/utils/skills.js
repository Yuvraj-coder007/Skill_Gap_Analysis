const ALIASES = {
  mongodb: "MongoDB",
  mongo: "MongoDB",
  mongoose: "MongoDB",
  nodejs: "NodeJs",
  "node.js": "NodeJs",
  node: "NodeJs",
  apidesign: "API_Design",
  "api design": "API_Design",
  "api-design": "API_Design"
};

export const normalizeSkill = (name) => {
  if (typeof name !== "string") return name;
  return ALIASES[name.trim().toLowerCase()] || name.trim();
};
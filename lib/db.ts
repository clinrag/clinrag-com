// Database layer: PostgreSQL on Vercel, JSON files in local dev
// Automatically detects environment and uses appropriate storage.

const JSON_FALLBACK =
  typeof window === "undefined" &&
  (process.env.NODE_ENV !== "production" || !process.env.POSTGRES_URL);

async function getSql() {
  if (JSON_FALLBACK) return null;
  const { sql } = await import("@vercel/postgres");
  return sql;
}

// --- JSON helpers ---
async function getJsonFile<T>(key: string, fallback: T): Promise<T> {
  const fs = await import("fs");
  const path = await import("path");
  const DATA_DIR = path.join(process.cwd(), "data");
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const filepath = path.join(DATA_DIR, `${key}.json`);
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, JSON.stringify(fallback));
    return fallback;
  }
  return JSON.parse(fs.readFileSync(filepath, "utf-8"));
}

async function setJsonFile(key: string, data: unknown): Promise<void> {
  const fs = await import("fs");
  const path = await import("path");
  const DATA_DIR = path.join(process.cwd(), "data");
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(path.join(DATA_DIR, `${key}.json`), JSON.stringify(data, null, 2));
}

// --- Type definitions ---
export interface Tool {
  id: string;
  name: string;
  tag: string;
  description: string;
  features: string[];
  healthcare_use: string;
  getting_started: string[];
  limitations: string[];
  slug: string;
  created_at: string;
}

export interface Guide {
  id: string;
  title: string;
  desc: string;
  slug: string;
  content: string;
  icon: string;
  difficulty: string;
  readTime: string;
  created_at: string;
}

export interface Template {
  id: string;
  title: string;
  desc: string;
  slug: string;
  content: string;
  type: string;
  format: string;
  created_at: string;
}

export interface Subscriber {
  id: string;
  email: string;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  read: boolean;
}

// --- Database API ---
export const db = {
  // Tools
  getTools: async (): Promise<Tool[]> => {
    if (JSON_FALLBACK) return getJsonFile<Tool[]>("tools", []);
    const sql = await getSql();
    const { rows } = await sql!`SELECT * FROM tools ORDER BY created_at DESC`;
    return rows.map((r: Record<string, unknown>) => ({ ...r, features: (r.features as unknown) as string[], getting_started: (r.getting_started as unknown) as string[], limitations: (r.limitations as unknown) as string[], created_at: String(r.created_at || "") })) as Tool[];
  },

  addTool: async (tool: Tool) => {
    if (JSON_FALLBACK) {
      const tools = await getJsonFile<Tool[]>("tools", []);
      tools.push(tool);
      return setJsonFile("tools", tools);
    }
    const sql = await getSql();
    await sql!`INSERT INTO tools (id, name, tag, description, features, healthcare_use, getting_started, limitations, slug, created_at) VALUES (${tool.id}, ${tool.name}, ${tool.tag}, ${tool.description}, ${JSON.stringify(tool.features)}, ${tool.healthcare_use}, ${JSON.stringify(tool.getting_started)}, ${JSON.stringify(tool.limitations)}, ${tool.slug}, ${tool.created_at})`;
  },

  updateTool: async (id: string, tool: Tool) => {
    if (JSON_FALLBACK) {
      const tools = (await getJsonFile<Tool[]>("tools", [])).map((t) => (t.id === id ? tool : t));
      return setJsonFile("tools", tools);
    }
    const sql = await getSql();
    await sql!`UPDATE tools SET name = ${tool.name}, tag = ${tool.tag}, description = ${tool.description}, features = ${JSON.stringify(tool.features)}, healthcare_use = ${tool.healthcare_use}, getting_started = ${JSON.stringify(tool.getting_started)}, limitations = ${JSON.stringify(tool.limitations)}, slug = ${tool.slug}, created_at = ${tool.created_at} WHERE id = ${id}`;
  },

  deleteTool: async (id: string) => {
    if (JSON_FALLBACK) {
      const tools = (await getJsonFile<Tool[]>("tools", [])).filter((t) => t.id !== id);
      return setJsonFile("tools", tools);
    }
    const sql = await getSql();
    await sql!`DELETE FROM tools WHERE id = ${id}`;
  },

  // Guides
  getGuides: async (): Promise<Guide[]> => {
    if (JSON_FALLBACK) return getJsonFile<Guide[]>("guides", []);
    const sql = await getSql();
    const { rows } = await sql!`SELECT * FROM guides ORDER BY created_at DESC`;
    return rows.map((r: Record<string, unknown>) => ({ ...r, readTime: String(r.read_time || r.readTime || ""), created_at: String(r.created_at || "") })) as Guide[];
  },

  addGuide: async (guide: Guide) => {
    if (JSON_FALLBACK) {
      const guides = await getJsonFile<Guide[]>("guides", []);
      guides.push(guide);
      return setJsonFile("guides", guides);
    }
    const sql = await getSql();
    await sql!`INSERT INTO guides (id, title, "desc", slug, content, icon, difficulty, read_time, created_at) VALUES (${guide.id}, ${guide.title}, ${guide.desc}, ${guide.slug}, ${guide.content}, ${guide.icon}, ${guide.difficulty}, ${guide.readTime || ""}, ${guide.created_at})`;
  },

  updateGuide: async (id: string, guide: Guide) => {
    if (JSON_FALLBACK) {
      const guides = (await getJsonFile<Guide[]>("guides", [])).map((g) => (g.id === id ? guide : g));
      return setJsonFile("guides", guides);
    }
    const sql = await getSql();
    await sql!`UPDATE guides SET title = ${guide.title}, "desc" = ${guide.desc}, slug = ${guide.slug}, content = ${guide.content}, icon = ${guide.icon}, difficulty = ${guide.difficulty}, read_time = ${guide.readTime || ""}, created_at = ${guide.created_at} WHERE id = ${id}`;
  },

  deleteGuide: async (id: string) => {
    if (JSON_FALLBACK) {
      const guides = (await getJsonFile<Guide[]>("guides", [])).filter((g) => g.id !== id);
      return setJsonFile("guides", guides);
    }
    const sql = await getSql();
    await sql!`DELETE FROM guides WHERE id = ${id}`;
  },

  // Templates
  getTemplates: async (): Promise<Template[]> => {
    if (JSON_FALLBACK) return getJsonFile<Template[]>("templates", []);
    const sql = await getSql();
    const { rows } = await sql!`SELECT * FROM templates ORDER BY created_at DESC`;
    return rows.map((r: Record<string, unknown>) => ({ ...r, created_at: String(r.created_at || "") })) as Template[];
  },

  addTemplate: async (template: Template) => {
    if (JSON_FALLBACK) {
      const templates = await getJsonFile<Template[]>("templates", []);
      templates.push(template);
      return setJsonFile("templates", templates);
    }
    const sql = await getSql();
    await sql!`INSERT INTO templates (id, title, "desc", slug, content, type, format, created_at) VALUES (${template.id}, ${template.title}, ${template.desc}, ${template.slug}, ${template.content}, ${template.type}, ${template.format}, ${template.created_at})`;
  },

  updateTemplate: async (id: string, template: Template) => {
    if (JSON_FALLBACK) {
      const templates = (await getJsonFile<Template[]>("templates", [])).map((t) => (t.id === id ? template : t));
      return setJsonFile("templates", templates);
    }
    const sql = await getSql();
    await sql!`UPDATE templates SET title = ${template.title}, "desc" = ${template.desc}, slug = ${template.slug}, content = ${template.content}, type = ${template.type}, format = ${template.format}, created_at = ${template.created_at} WHERE id = ${id}`;
  },

  deleteTemplate: async (id: string) => {
    if (JSON_FALLBACK) {
      const templates = (await getJsonFile<Template[]>("templates", [])).filter((t) => t.id !== id);
      return setJsonFile("templates", templates);
    }
    const sql = await getSql();
    await sql!`DELETE FROM templates WHERE id = ${id}`;
  },

  // Subscribers
  getSubscribers: async (): Promise<Subscriber[]> => {
    if (JSON_FALLBACK) return getJsonFile<Subscriber[]>("subscribers", []);
    const sql = await getSql();
    const { rows } = await sql!`SELECT * FROM subscribers ORDER BY created_at DESC`;
    return rows.map((r: Record<string, unknown>) => ({ ...r, created_at: String(r.created_at || "") })) as Subscriber[];
  },

  addSubscriber: async (subscriber: Subscriber) => {
    if (JSON_FALLBACK) {
      const subs = await getJsonFile<Subscriber[]>("subscribers", []);
      if (!subs.find((s) => s.email === subscriber.email)) {
        subs.push(subscriber);
        return setJsonFile("subscribers", subs);
      }
      return;
    }
    const sql = await getSql();
    await sql!`INSERT INTO subscribers (id, email, created_at) VALUES (${subscriber.id}, ${subscriber.email}, ${subscriber.created_at}) ON CONFLICT (email) DO NOTHING`;
  },

  deleteSubscriber: async (id: string) => {
    if (JSON_FALLBACK) {
      const subs = (await getJsonFile<Subscriber[]>("subscribers", [])).filter((s) => s.id !== id);
      return setJsonFile("subscribers", subs);
    }
    const sql = await getSql();
    await sql!`DELETE FROM subscribers WHERE id = ${id}`;
  },

  // Contact Messages
  getMessages: async (): Promise<ContactMessage[]> => {
    if (JSON_FALLBACK) return getJsonFile<ContactMessage[]>("messages", []);
    const sql = await getSql();
    const { rows } = await sql!`SELECT * FROM messages ORDER BY created_at DESC`;
    return rows.map((r: Record<string, unknown>) => ({ ...r, read: r.read === true, created_at: String(r.created_at || "") })) as ContactMessage[];
  },

  addMessage: async (msg: ContactMessage) => {
    if (JSON_FALLBACK) {
      const msgs = await getJsonFile<ContactMessage[]>("messages", []);
      msgs.push(msg);
      return setJsonFile("messages", msgs);
    }
    const sql = await getSql();
    await sql!`INSERT INTO messages (id, name, email, message, read, created_at) VALUES (${msg.id}, ${msg.name}, ${msg.email}, ${msg.message}, ${msg.read}, ${msg.created_at})`;
  },

  markRead: async (id: string) => {
    if (JSON_FALLBACK) {
      const msgs = (await getJsonFile<ContactMessage[]>("messages", [])).map((m) => (m.id === id ? { ...m, read: true } : m));
      return setJsonFile("messages", msgs);
    }
    const sql = await getSql();
    await sql!`UPDATE messages SET read = TRUE WHERE id = ${id}`;
  },

  deleteMessage: async (id: string) => {
    if (JSON_FALLBACK) {
      const msgs = (await getJsonFile<ContactMessage[]>("messages", [])).filter((m) => m.id !== id);
      return setJsonFile("messages", msgs);
    }
    const sql = await getSql();
    await sql!`DELETE FROM messages WHERE id = ${id}`;
  },
};

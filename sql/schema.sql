-- ClinRAG Database Schema for Vercel Postgres

-- Tools
CREATE TABLE IF NOT EXISTS tools (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  tag TEXT,
  description TEXT,
  features TEXT[],
  healthcare_use TEXT,
  getting_started TEXT[],
  limitations TEXT[],
  slug TEXT UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Guides
CREATE TABLE IF NOT EXISTS guides (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  "desc" TEXT,
  slug TEXT UNIQUE,
  content TEXT,
  icon TEXT,
  difficulty TEXT,
  read_time TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Templates
CREATE TABLE IF NOT EXISTS templates (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  "desc" TEXT,
  slug TEXT UNIQUE,
  content TEXT,
  type TEXT,
  format TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Subscribers
CREATE TABLE IF NOT EXISTS subscribers (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contact Messages
CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Site Stats (simple key-value)
CREATE TABLE IF NOT EXISTS site_stats (
  key TEXT PRIMARY KEY,
  value JSONB DEFAULT '{}'
);

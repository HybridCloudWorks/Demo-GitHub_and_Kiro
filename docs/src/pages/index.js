import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const FEATURES = [
  {
    emoji: '🧠',
    title: 'Learn the concepts',
    body: 'Readable lessons that assume zero prior knowledge — every term is defined the first time it appears.',
  },
  {
    emoji: '✍️',
    title: 'Practice with graded labs',
    body: 'Hands-on exercises checked automatically by a robot (GitHub Actions), so you know when a skill has clicked.',
  },
  {
    emoji: '🛠️',
    title: 'Build a real app',
    body: 'Create a static web app and deploy it publicly — for free — to GitHub Pages, one milestone at a time.',
  },
  {
    emoji: '🤖',
    title: 'Go 200% with Kiro',
    body: 'Steering, specs, hooks, MCP servers, and custom agents — plus advanced GitHub automation.',
  },
];

const LEVELS = [
  ['L0', 'Getting Started', '/docs/level-0'],
  ['L1', 'Git & GitHub Fundamentals', '/docs/level-1'],
  ['L2', 'Kiro Fundamentals', '/docs/level-2'],
  ['L3', 'Collaboration', '/docs/level-3'],
  ['L4', 'GitHub Actions', '/docs/level-4'],
  ['L5', 'Kiro Advanced Authoring', '/docs/level-5'],
  ['L6', 'Kiro Power Tools', '/docs/level-6'],
  ['L7', 'Advanced GitHub + Capstone', '/docs/level-7'],
];

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.hero)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className="button button--secondary button--lg" to="/docs/level-0">
            Start at Level 0 →
          </Link>
          <Link className="button button--outline button--lg" to="/docs/">
            Browse the course
          </Link>
        </div>
        <p className={styles.heroNote}>
          Free · Beginner-friendly · No prior experience required
        </p>
      </div>
    </header>
  );
}

function Features() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.cardEmoji}>{f.emoji}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Levels() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <h2 className={styles.sectionTitle}>The learning path</h2>
        <div className={styles.levelGrid}>
          {LEVELS.map(([badge, name, href]) => (
            <Link key={badge} to={href} className={styles.levelCard}>
              <span className={styles.levelBadge}>{badge}</span>
              <span className={styles.levelName}>{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  // No `title` prop: Layout defaults to the site title alone, avoiding a
  // duplicated "<title> | <title>" browser tab.
  return (
    <Layout description="A complete, hands-on course for learning GitHub and Kiro together — from Level 0 to advanced.">
      <Hero />
      <main>
        <Features />
        <Levels />
      </main>
    </Layout>
  );
}

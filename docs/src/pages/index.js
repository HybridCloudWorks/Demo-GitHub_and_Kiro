import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// The eight levels, with a one-line "what you actually do" so the path reads
// like a syllabus rather than a list of nouns.
const LEVELS = [
  ['L0', 'Getting Started', 'Install Git and Kiro, make your first commit.', '/docs/level-0'],
  ['L1', 'Git & GitHub Fundamentals', 'Branch, push, pull, and ignore the right files.', '/docs/level-1'],
  ['L2', 'Kiro Fundamentals', 'Scaffold the app you keep for the rest of the course.', '/docs/level-2'],
  ['L3', 'Collaboration', 'Open an issue, raise a PR, review it, merge it.', '/docs/level-3'],
  ['L4', 'GitHub Actions', 'Write CI and ship the app to the web on merge.', '/docs/level-4'],
  ['L5', 'Kiro Advanced Authoring', 'Steer Kiro with rules, specs, and hooks.', '/docs/level-5'],
  ['L6', 'Kiro Power Tools', 'Wire up MCP servers and custom agents.', '/docs/level-6'],
  ['L7', 'Advanced GitHub + Capstone', 'Harden the repo and ship the finished project.', '/docs/level-7'],
];

function Hero() {
  const poweredByAws = useBaseUrl('/img/brand/powered-by-aws-white.png');
  return (
    <header className={clsx('hero', styles.hero)}>
      <div className="container">
        <p className={styles.kicker}>Official AWS&nbsp;+&nbsp;Kiro training</p>
        <h1 className={styles.heroTitle}>
          Learn GitHub and Kiro by building something real.
        </h1>
        <p className={styles.heroSubtitle}>
          Start at &ldquo;what is a commit?&rdquo; and finish with a deployed web
          app, a repository configured the way professionals actually run them,
          and Kiro doing the heavy lifting alongside you. Eight levels, hands-on
          the whole way.
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--secondary button--lg" to="/docs/level-0">
            Start at Level 0
          </Link>
          <Link className="button button--outline button--lg" to="/docs/">
            See the syllabus
          </Link>
        </div>
        <img
          className={styles.poweredByAws}
          src={poweredByAws}
          alt="Powered by AWS"
          width="140"
        />
      </div>
    </header>
  );
}

function Pitch() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.prose}>
          <h2>Most tutorials stop at &ldquo;hello world.&rdquo; This one keeps going.</h2>
          <p>
            You can read a hundred pages about Git and still freeze the first
            time a teammate asks you to &ldquo;open a PR against main.&rdquo; The
            gap is never the vocabulary&nbsp;— it&rsquo;s the muscle memory. So
            this course is built around a single project you carry from an empty
            folder to a live, automatically deployed site. Every concept shows up
            because the project needs it, not because a syllabus said so.
          </p>
          <p>
            Kiro rides along the entire time. You&rsquo;ll use it the way a
            working developer does: to scaffold a page, explain an unfamiliar
            file, draft a change you then review, and&nbsp;— by the later
            levels&nbsp;— to run steering rules, specs, hooks, and MCP servers
            that make it genuinely part of your workflow rather than a novelty.
          </p>
        </div>
      </div>
    </section>
  );
}

function Build() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.twoCol}>
          <div>
            <h2 className={styles.h2}>What you&rsquo;ll walk away with</h2>
            <ul className={styles.checklist}>
              <li>A static web app you designed, built, and deployed to a public URL for free.</li>
              <li>A repository with CI, branch protection, and reviewed pull requests&nbsp;— the real workflow, not a toy.</li>
              <li>Comfort using Kiro daily: chat, steering, specs, hooks, MCP, and custom agents.</li>
              <li>The judgment to set up a new repo <em>well</em> from the first commit.</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.h2}>Who it&rsquo;s for (and who it isn&rsquo;t)</h2>
            <p className={styles.plain}>
              <strong>For you if</strong> you&rsquo;ve never used Git, or you know
              a few commands but freeze when things go sideways, or you&rsquo;re
              comfortable with GitHub but new to Kiro.
            </p>
            <p className={styles.plain}>
              <strong>Probably not for you if</strong> you already run CI/CD,
              write your own GitHub Actions, and use MCP daily&nbsp;— though L5&ndash;L7
              may still surprise you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Levels() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>The path, level by level</h2>
        <p className={styles.sectionLede}>
          Roughly a weekend of focused work, or a lesson or two an evening. Do
          them in order&nbsp;— each level builds the project a little further.
        </p>
        <div className={styles.levelGrid}>
          {LEVELS.map(([badge, name, blurb, href]) => (
            <Link key={badge} to={href} className={styles.levelCard}>
              <span className={styles.levelBadge}>{badge}</span>
              <span className={styles.levelText}>
                <span className={styles.levelName}>{name}</span>
                <span className={styles.levelBlurb}>{blurb}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Link className="button button--primary button--lg" to="/docs/level-0">
            Begin with Level 0
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  // No `title` prop: Layout defaults to the site title alone, avoiding a
  // duplicated "<title> | <title>" browser tab.
  return (
    <Layout description="Official AWS + Kiro training: learn GitHub and Kiro end to end by building and deploying a real web app, from Level 0 to advanced.">
      <Hero />
      <main>
        <Pitch />
        <Build />
        <Levels />
      </main>
    </Layout>
  );
}

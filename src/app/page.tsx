import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        {/* Hero Section */}
        <section className={`${styles.hero} animate-fade-in-up`}>
          <h1 className={styles.title}>
            Discover & Share <br /> Animal Experiences
          </h1>
          <p className={styles.subtitle}>
            Join the community to rate, review, and explore feedback on various animals. From pets to wildlife, your voice matters.
          </p>
          <div className={styles.ctas}>
            <Link href="/feedback/new" className={styles.primaryButton}>
              Leave Feedback
            </Link>
            <Link href="/explore" className={styles.secondaryButton}>
              Explore Reviews
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className={`${styles.features} animate-fade-in-up delay-200`}>
          <div className={`glass ${styles.featureCard}`}>
            <div className={styles.featureIcon}>⭐</div>
            <h3 className={styles.featureTitle}>Rate Animals</h3>
            <p className={styles.featureDesc}>
              Provide detailed ratings and share your personal encounters with different species.
            </p>
          </div>
          <div className={`glass ${styles.featureCard}`}>
            <div className={styles.featureIcon}>📖</div>
            <h3 className={styles.featureTitle}>Read Reviews</h3>
            <p className={styles.featureDesc}>
              Discover what others are saying. Browse through thousands of community-submitted reviews.
            </p>
          </div>
          <div className={`glass ${styles.featureCard}`}>
            <div className={styles.featureIcon}>🌍</div>
            <h3 className={styles.featureTitle}>Community Driven</h3>
            <p className={styles.featureDesc}>
              Be part of a growing ecosystem of animal lovers, experts, and enthusiasts.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`glass ${styles.ctaSection} animate-fade-in-up delay-300`}>
          <h2 className={styles.ctaTitle}>Ready to join the pack?</h2>
          <p className={styles.subtitle} style={{ margin: '0 auto 2rem auto' }}>
            Create an account today and start contributing to the largest animal feedback platform.
          </p>
          <Link href="/signup" className={styles.primaryButton}>
            Get Started for Free
          </Link>
        </section>

      </main>
    </div>
  );
}

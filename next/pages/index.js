import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const handleNavigate = () => window.scroll({ top: 0, left: 0 });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section has-background-white">
          <div className="container">
            <h2 className="is-size-1">Codecademy Community</h2>
            <p className="descriptiontext">
              Welcome to the Codecademy Discord Community! This is website of
              the official Codecademy Discord, run by volunteer moderators and
              community members. Our goal is to create a friendly place for all
              to converse, connecting over a common interest in coding.
              <br />
              This site contains guides and pages that users of the server (and
              the Codecademy community as a whole) might find useful.
            </p>
            <div className="joincontainer">
              <a
                className="joinlink"
                href="https://discord.com/invite/codecademy"
              >
                <button>Join Us!</button>
              </a>
            </div>
          </div>
        </section>
        <section className="pagelist">
          <h2 className="is-size-2 ">Pages</h2>
          <div className="pagecontainer tiles is-ancestor">
            <div className="tile is-parent">
              <Link
                className="pagetile tile is-child has-background-white"
                href="/staff"
                onClick={handleNavigate}
              >
                <a>
                  <h3 className="pagetitle">Server Staff</h3>
                  <p className="pagedescriptor">Meet the server staff!</p>
                </a>
              </Link>
            </div>
            <div className="tile is-parent">
              <Link
                className="pagetile tile is-child has-background-white"
                href="/sharing-code"
                onClick={handleNavigate}
              >
                <a>
                  <h3 className="pagetitle">Sharing Code</h3>
                  <p className="pagedescriptor">
                    How to share code efficiently on the server.
                  </p>
                </a>
              </Link>
            </div>
            <div className="tile is-parent">
              <Link
                className="pagetile tile is-child has-background-white"
                href="/contact"
                onClick={handleNavigate}
              >
                <a>
                  <h3 className="pagetitle">Contact Us</h3>
                  <p className="pagedescriptor">
                    How to contact server staff about moderation issues.
                  </p>
                </a>
              </Link>
            </div>
            <div className="tile is-parent">
              <Link
                className="pagetile tile is-child has-background-white"
                href="/getting-help"
                onClick={handleNavigate}
              >
                <a>
                  <h3 className="pagetitle">Getting Help</h3>
                  <p className="pagedescriptor">
                    How to get coding help effectively on the server.
                  </p>
                </a>
              </Link>
            </div>
            <div className="tile is-parent">
              <Link
                className="pagetile tile is-child has-background-white"
                href="/faq"
                onClick={handleNavigate}
              >
                <a>
                  <h3 className="pagetitle">FAQs</h3>
                  <p className="pagedescriptor">
                    Some of our frequently asked questions.
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
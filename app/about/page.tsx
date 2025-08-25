import { GetPageDate } from '../lib/queries';
import styles from './page.module.scss'

const page = async () => {

  const pageDefaultHtml = `
    <article class="about-page">
      <h1>About This Project</h1>
      <p>This website is built using a <strong>headless architecture</strong>, where the frontend and backend are decoupled to provide flexibility, performance, and scalability.</p>
      <h2>Tech Stack</h2>
      <ul>
      <li><strong>Frontend</strong>: Developed in <strong>Next.js</strong>, leveraging its hybrid rendering (SSG/SSR) capabilities for optimal performance and SEO.</li>
      <li><strong>Backend</strong>: Content is managed in <strong>WordPress</strong>, but it is used only as a headless CMS instead of serving traditional themes.</li>
      <li><strong>API Layer</strong>: The integration between WordPress and Next.js is powered by <strong>WPGraphQL</strong>, exposing WordPress content and metadata through a structured GraphQL schema.</li>
      <li><strong>Local Development</strong>: The WordPress instance runs on <strong>Laragon</strong>, a portable local development stack that simplifies database and server setup.</li>
      </ul>
      <h2>Architecture Overview</h2>
      <p>WordPress handles the content creation and storage, while Next.js fetches and renders this data via GraphQL queries. The data flow is unidirectional:</p>
      <pre><code>
        WordPress (Laragon instance)
              |
              |--- WPGraphQL Endpoint
              |
          Next.js Frontend
              |
              |--- Server-Side Rendering (SSR)
              |--- Static Site Generation (SSG)
              |
          End User
        </code></pre>
      <h2>Why This Setup?</h2>
      <ul>
      <li><strong>Separation of Concerns</strong>: WordPress is dedicated to content management; Next.js is dedicated to rendering and performance.</li>
      <li><strong>Performance</strong>: Next.js optimizes for speed using static generation and server-side rendering.</li>
      <li><strong>Developer Experience</strong>: GraphQL provides strongly-typed queries, allowing fine-grained control over the data fetched.</li>
      <li><strong>Scalability</strong>: This architecture is future-proof, as the frontend can evolve independently of the CMS.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>In summary, this project is a <strong>Next.js frontend</strong> consuming data from a <strong>WordPress backend</strong> through <strong>GraphQL</strong>. This headless approach combines the strengths of both platforms: WordPress for its mature content management and Next.js for its modern web performance and flexibility.</p>
    </article>
  `

  let aboutPageWpData;
  try {
    aboutPageWpData = await GetPageDate('about');
    aboutPageWpData = aboutPageWpData?.content;
  } catch (error) {
    console.error('Error fetching latest posts: ', error);
    aboutPageWpData = [];
  }

  const pageData = aboutPageWpData ? aboutPageWpData : pageDefaultHtml;

  return (
    <div className={styles.page}>
      <div dangerouslySetInnerHTML={{ __html: pageData }} />
    </div>
  )
}

export default page
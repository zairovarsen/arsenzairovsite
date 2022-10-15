import Link from "next/link";

export default function About({}) {
  return (
    <>
      <div className="mb-8 prose dark:prose-dark leading-6">
      
        <h3>Job Title</h3>
        <p>Arsen Zairov , Software Developer at Beeline </p>
       
        <h3>Education</h3>
        <p>
          Graduated from University of South Florida with a B.S in Management Information Systems 
        </p>

        <h2>Links</h2>
        <ul>
          <li>
            Instagram: <a href="https://instagram.com/z_arsik">@z_arsik</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/zairovarsen">@zairovarsen</a>
          </li>
          <li>
            Website:{' '}
            <Link href="https://arsenzairov.com">
              <a>https://arsenzairov.com</a>
            </Link>
          </li>
          <li>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/arsenzairov/">
            https://www.linkedin.com/in/arsenzairov/
            </a>
          </li>
        </ul>

      </div>
    </>
  );
}

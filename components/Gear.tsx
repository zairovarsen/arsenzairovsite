export default function Gear() {
    return (
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what tech I'm currently using for coding.
          Most of these have been accumulated over the past few years.
        </p>

        <div className="prose dark:prose-dark w-full">
          <h3 id="computer-office">Computer / Office</h3>
          <ul>
            <li>15 Macbook Pro (2018)</li>
            <li> LG, LED, 32</li>
            <li>Apple Magic Keyboard</li>
          </ul>
          <h3 id="coding">Coding</h3>
          <ul>
            <li>
              Editor: VSCode 
            </li>
            <li>Theme: One Dark Pro</li>
            <li>Terminal: Iterm 2</li>
          </ul>
          <h3 id="other-tech">Other Tech</h3>
          <ul>
            <li>Apple Airpods Pro</li>
            <li>Apple Watch</li>
            <li>Apple iPhone</li>
            <li>Kindle</li>
          </ul>
        </div>
      </article>
    )
  }
  
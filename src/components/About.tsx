export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center animate-fade-in">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-gray-300 animate-fade-in animation-delay-300 leading-relaxed text-justify">
            As a software engineer, I see myself first and foremost as a problem
            solver. I dive deep into understanding both the business landscape
            and market dynamics of each product, while keeping the
            customer&#39;s needs at the forefront. Taking ownership comes
            naturally to me – I&#39;m constantly exploring ways to craft the
            best possible solutions. One of the most rewarding aspects of my
            work is collaborating with founders to bring their vision to life
            through multiple MVPs and gathering real customer feedback. Sure,
            sometimes we create something that wows users, and other times we
            hit roadblocks – but that&#39;s what keeps me energized and
            passionate about what I do.
          </p>
          <p className="text-lg mb-6 text-gray-300 animate-fade-in animation-delay-600 leading-relaxed text-justify">
            My journey has led me to specialize in front-end development, and
            I&#39;m currently building front-end solutions for custom streaming
            agents in the Cyber Security field. I had to study and learn a lot
            about the cybersecurity landscape and I&#39;m still working on it.
            It&#39;s incredibly exciting to work at the cutting edge of
            technology, especially in a field that&#39;s constantly evolving and
            challenging us to adapt.
          </p>
          <p className="text-lg mb-6 text-gray-300 animate-fade-in animation-delay-900 leading-relaxed text-justify">
            I&#39;ve had the opportunity to build several full-stack,
            multi-tenant applications using React with TypeScript, leveraging
            AWS Amplify for backend services. This work has expanded my
            expertise across the full development stack – from working with
            NodeJS and GraphQL to managing AWS services like AppSync, Cognito,
            CloudWatch, and Lambda. I&#39;ve also gained valuable experience
            integrating payment systems with Stripe and working with DynamoDB
            for data management.
          </p>
        </div>
      </div>
    </section>
  );
}

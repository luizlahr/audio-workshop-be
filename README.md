<h1>Audio Workshop Management App (Backend)</h1>

<p>A Node.js project built with NestJS, Prisma, GraphQL, Apollo Server, JWT, Passport, TypeScript, and Docker.</p>

<h2>Description</h2>

<p>This project serves as a template for building a Node.js application with a clear architecture, utilizing modern technologies and best practices. It leverages NestJS as the framework for creating scalable and maintainable server-side applications. Prisma is used as the ORM (Object-Relational Mapping) tool to interact with the database. GraphQL is implemented using Apollo Server for efficient data fetching and manipulation. JWT (JSON Web Tokens) and Passport are employed for authentication and authorization purposes. The entire codebase is written in TypeScript, which enhances the development process with static typing and improved maintainability. Docker is used for containerizing the application, making it easy to deploy and manage.</p>

<h2>Features</h2>

<ul>
<li><strong>NestJS</strong>: A progressive Node.js framework for building efficient and scalable server-side applications.</li>
<li><strong>Prisma</strong>: A modern database toolkit that provides an ORM and a query builder to interact with databases.</li>
<li><strong>GraphQL</strong>: A query language for APIs that enables clients to request specific data and manipulate it efficiently.</li>
<li><strong>Apollo Server</strong>: An open-source, community-driven GraphQL server that works seamlessly with any GraphQL schema.</li>
<li><strong>JWT</strong>: JSON Web Tokens are used for authentication and authorization, providing a secure and stateless authentication mechanism.</li>
<li><strong>Passport</strong>: A popular authentication middleware for Node.js that supports various authentication strategies and integrates well with Express and NestJS.</li>
<li><strong>TypeScript</strong>: A typed superset of JavaScript that enhances development with static typing and improved maintainability.</li>
<li><strong>Docker</strong>: A platform for developing, shipping, and running applications using containerization technology.</li>
</ul>

<h2>Installation</h2>

<ol>
<li>Clone the repository: <code>git clone https://github.com/luizlahr/be-bortolotti-nest.git</code></li>
<li>Navigate to the project directory: <code>cd be-bortolotti-nest</code></li>
<li>Install the dependencies: <code>npm install</code></li>
</ol>

<h2>Configuration</h2>

<ol>
<li>Rename the <code>.env.example</code> file to <code>.env</code>.</li>
<li>Open the <code>.env</code> file and update the configuration values according to your environment.</li>
</ol>

<h2>Usage</h2>

<ol>
<li>Start the development server: <code>npm run dev</code></li>
<li>The server will be running at <a href="http://localhost:3333">http://localhost:3333</a> by default.</li>
<li>Access the <a href="http://localhost:3333/graphql">GraphQL Playground</a> (http://localhost:3333/graphql) to interact with the API.</li>
</ol>

<h2>Docker</h2>

<ol>
<li>Build and run the Docker image: <code>docker-compose up --build -d</code></li>
</ol>

<h2>Folder Structure</h2>



<p>The project follows a application / domain / support folder structure, separating concerns and providing a clear architecture.</p>

<pre>
.
├── .docker
│   ├── pgdata
├── prisma
├── src
│   ├── application
│   │   ├── controllers
│   │   ├── decorators
│   │   ├── errors
│   │   ├── guards
│   │   ├── inputs
│   │   ├── models
│   │   ├── outputs
│   │   ├── providers
│   │   ├── resolvers
│   │   ├── strategies
│   │   ├── validators
│   ├── domain
│   │   ├── auth
│   │   ├── common
│   │   ├── contact
│   │   │   ├── actions
│   │   │   ├── dtos
│   │   │   ├── errors
│   │   │   ├── models
│   │   │   ├── repositories
│   │   ├── equipment
│   │   ├── order
│   │   ├── user
│   ├── support
│   │   ├── db
│   │   │   ├── models
│   │   │   ├── repositories
│   ├── services
└── ...
</pre>

<h2>License</h2>

<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

<h2>Contributing</h2>

<p>Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.</p>

<h2>Acknowledgments</h2>

<ul>
<li>NestJS: <a href="https://nestjs.com/">https://nestjs.com/</a></li>
<li>Prisma: <a href="https://www.prisma.io/">https://www.prisma.io/</a></li>
<li>GraphQL: <a href="https://graphql.org/">https://graphql.org/</a></li>
<li>Apollo Server: <a href="https://www.apollographql.com/">https://www.apollographql.com/</a></li>
<li>JWT: <a href="https://jwt.io/">https://jwt.io/</a></li>
<li>Passport: <a href="http://www.passportjs.org/">http://www.passportjs.org/</a></li>
<li>TypeScript: <a href="https://www.typescriptlang.org/">https://www.typescriptlang.org/</a></li>
<li>Docker: <a href="https://www.docker.com/">https://www.docker.com/</a></li>
</ul>
# Portfolio Project

This is a personal portfolio project built with Astro, React, and Tailwind CSS. It is designed to showcase my development and DevOps skills, including CI/CD, containerization, and code quality practices.

## 🚀 Features
- Modern responsive design using Tailwind CSS
- Custom components for blog, contact, projects, skills, and timeline
- Integrated CI/CD pipelines (Jenkins)
- Docker support for containerized deployment
- Code quality analysis with SonarQube

## 🛠️ Workflow
1. **Development**
   - Edit source files in `src/` for pages, components, and styles.
   - Use `npm run dev` to run the site locally.
2. **CI/CD**
   - Jenkins pipelines (`Jenkinsfile.dev`, `Jenkinsfile.prod`) automate build, test, and deployment.
   - SonarQube analyzes code quality and security.
3. **Containerization**
   - Dockerfile enables building and running the app in containers.
4. **Deployment**
   - Deploy to cloud or on-prem using Docker or CI/CD pipelines.

## 📦 Project Structure
- `src/` - Source code (components, pages, styles, images)
- `astro.config.mjs` - Astro site configuration
- `tailwind.config.mjs` - Tailwind CSS configuration
- `Dockerfile` - Container build instructions
- `Jenkinsfile.*` - CI/CD pipeline definitions
- `sonar-project.properties` - SonarQube configuration
- `package.json` - Project dependencies

## 💡 How to Run Locally
```shell
npm install
npm run dev
```

## 🧑‍💻 Author
This project is maintained by Harish T.

---
*This project is for demonstration purposes only and does not include a license file.*

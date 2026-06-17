# 🚀 Portfolio Platform

This is my personal portfolio project, built not just to showcase my work, but to demonstrate production-style DevOps practices including CI/CD, release workflows, and containerized deployments.

---

## 🎯 Overview

The application is built using modern frontend technologies and deployed through an automated pipeline.  
This project focuses on how software is delivered, not just how it is built.

---

## ⚙️ Key Capabilities

- Responsive frontend built with Astro, React, and Tailwind CSS  
- Containerized application using Docker for consistent deployments  
- Automated CI/CD pipelines using GitHub Actions  
- Code quality and security checks via SonarQube  
- Separate pipelines for development and production environments  

---

## 🚀 Release & Deployment Workflow

This project implements a structured release workflow instead of a basic CI/CD setup:

- Semantic Versioning using semantic-release for automated versioning and changelog generation
- Automated build and Docker image creation  
- Image tagging aligned with application versions  
- Images pushed to GitHub Container Registry (GHCR)  
- Environment-specific deployments (development and production)  
- Code quality checks enforced before deployment  

**Flow:**

Code Push → Version Bump → Build → Quality Check → Docker Image → Registry → Deploy

---

## 🛠️ Tech Stack

- **Frontend:** Astro, React, Tailwind CSS  
- **CI/CD:** GitHub Actions  
- **Containerization:** Docker  
- **Registry:** GitHub Container Registry (GHCR)  
- **Code Quality:** SonarQube  

---

## 📦 Project Structure

- `src/` – Application source code  
- `Dockerfile` – Container build instructions  
- `sonar-project.properties` – Code analysis configuration  

---

## 💡 Running Locally

npm install  
npm run dev  

---

## 🧠 Why This Project

This project acts as both my portfolio and a hands-on environment to experiment with:

- CI/CD pipeline design  
- Release workflows and semantic versioning  
- Deployment strategies  
- Code quality enforcement  

---

## 🧑‍💻 Author

Harish T

---

*This project is for demonstration purposes only and does not include a license file.*

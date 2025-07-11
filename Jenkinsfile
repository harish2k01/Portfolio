pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        IMAGE_NAME = 'harish2k01/portfolio'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def imageTag = "latest"
                    sh "docker build -t ${IMAGE_NAME}:${imageTag} ."
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh '''
                    echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    def imageTag = "latest"
                    sh "docker push ${IMAGE_NAME}:${imageTag}"
                }
            }
        }
    }
}

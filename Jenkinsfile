pipeline {
    agent any
    
    parameters {
        string(name: 'VERSION', defaultValue: 'latest', description: 'Version tag from semantic-release')
        string(name: 'GITHUB_SHA', defaultValue: '', description: 'GitHub commit SHA')
    }
    
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        IMAGE_NAME = 'harish2k01/portfolio'
        VERSION_TAG = "${params.VERSION}"
    }
    
    stages {
        stage('Validate Parameters') {
            steps {
                script {
                    echo "Building Docker image with version: ${VERSION_TAG}"
                    echo "GitHub SHA: ${params.GITHUB_SHA}"
                    
                    if (params.VERSION == '' || params.VERSION == 'latest') {
                        error('VERSION parameter is required and cannot be empty or latest')
                    }
                }
            }
        }
        
        stage('Checkout Specific Tag') {
            when {
                expression { params.VERSION != 'latest' }
            }
            steps {
                script {
                    // Checkout the specific tag
                    sh "git fetch --tags"
                    sh "git checkout v${VERSION_TAG}"
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building Docker image with tag: ${VERSION_TAG}"
                    sh "docker build -t ${IMAGE_NAME}:${VERSION_TAG} ."
                    
                    // Also tag as latest for convenience
                    sh "docker tag ${IMAGE_NAME}:${VERSION_TAG} ${IMAGE_NAME}:latest"
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
                    echo "Pushing Docker image with tag: ${VERSION_TAG}"
                    sh "docker push ${IMAGE_NAME}:${VERSION_TAG}"
                    sh "docker push ${IMAGE_NAME}:latest"
                }
            }
        }
        
        stage('Cleanup') {
            steps {
                script {
                    // Clean up local images to save space
                    sh "docker rmi ${IMAGE_NAME}:${VERSION_TAG} || true"
                    sh "docker rmi ${IMAGE_NAME}:latest || true"
                }
            }
        }
    }
    
    post {
        always {
            sh 'docker logout'
        }
        success {
            echo "Docker image ${IMAGE_NAME}:${VERSION_TAG} built and pushed successfully!"
        }
        failure {
            echo "Pipeline failed. Check the logs for details."
        }
    }
}

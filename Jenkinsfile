pipeline {
    agent any
    
    environment {
        PATH = "/Users/sofianezair/.nvm/versions/node/v16.20.2/bin:${env.PATH}"
        JWT_SECRET = credentials('jwt-secret')
        MONGO_URI = credentials('mongo-uri')
    }
    
    stages {
        stage('Hello') {
            steps {
                echo 'Starting CI Pipeline for TaskMaster Backend 🚀'
            }
        }
        
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Docker Build') {
            steps {
                sh 'docker build -t taskmaster-backend:${BUILD_NUMBER} .'
            }
        }
    }
    
    post {
        success {
            echo 'CI Passed ✅'
        }
        failure {
            echo 'CI Failed ❌'
        }
    }
}
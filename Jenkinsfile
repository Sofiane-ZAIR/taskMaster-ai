pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
        JWT_SECRET = credentials('JWT_SECRET')
        MONGO_URI = credentials('MONGO_URI')
        PATH = "${WORKSPACE}/node_modules/.bin:/opt/homebrew/bin:$PATH"
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
                sh 'node -v'
                // Installe exactement ce qui est dans package-lock.json
                sh 'npm ci'
            }
        }
        stage('Check'){
            steps{
                sh 'ls -la node_modules/.bin'
                sh 'eslint -v'
            }
        }

        stage('Lint') {
            steps {
                // Utilise npx pour s'assurer que le binaire local est utilisé
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
            echo 'CI OK ✅'
        }
        failure {
            echo 'CI Failed ❌'
        }
    }
}

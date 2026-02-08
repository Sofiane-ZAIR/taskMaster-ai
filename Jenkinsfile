pipeline {
   agent any
    environment {
        NODE_ENV = 'production'
        JWT_SECRET = credentials('JWT_SECRET')
        MONGO_URI = credentials('MONGO_URI')
        PATH = "/opt/homebrew/bin:$PATH"

    }

    stages {
        stage('Hello'){
            steps {
                echo 'Starting CI Pipeline for TaskMaster Backend 🚀'
            }
        }
        stage('Checkout'){
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                dir('backEnd') {
                    sh 'npm ci'
                    sh 'ls -la node_modules/.bin/ | grep eslint'  // Debug
                    sh 'which node'  // Debug
                    sh 'which npm'   // Debug
                }
            }
        }

        stage('Lint') {
            steps {
                dir('backEnd') {
                    sh 'npm run lint'
                }
            }
        }

        stage ('Build'){
            steps {
                sh 'npm run build'
            }
        }
        stage ('Docker Build'){
            steps {
                sh 'docker build -t taskmaster-backend .'
            }
        }
        // stage ('Docker Push'){
        //     steps {
        //         withDockerRegistry([credentialsId : 'dockerhub-cred', url :""]) {
        //             sh 'docker tag taskmaster-backend:latest '
        //         }
        //     }
        // }
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
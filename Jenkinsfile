pipeline {
   agent {
        docker { image 'node:20-alpine' }
    }
    environment {
        NODE_ENV = 'production'
        JWT_SECRET = credentials('JWT_SECRET')
        MONGO_URI = credentials('MONGO_URI')
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
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
        stage('Lint'){
            steps {
                sh 'npm run lint'
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
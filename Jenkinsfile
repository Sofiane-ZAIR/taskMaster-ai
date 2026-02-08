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
                    sh 'pwd'  // Voir où on est
                    sh 'ls -la'  // Voir ce qu'il y a
                    sh 'npm ci'
                    sh 'ls -la'  // Voir ce qui a changé après npm ci
                    sh 'ls -la node_modules/ 2>&1 || echo "node_modules n existe pas"'
                    sh 'find . -name "eslint" -type f 2>/dev/null || echo "eslint introuvable"'
                }
            }
        }

        stage('Lint') {
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
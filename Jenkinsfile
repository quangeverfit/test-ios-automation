

pipeline {
  agent {
    docker {
      image 'node:10.15.2'
    }
  }
  environment {
        // Using returnStdout
        CC = """${sh(
                returnStdout: true,
                script: 'echo "clang"'
            )}"""
    }
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Generate Token') {
      steps {
        sh 'node ./generate_token.js'
      }
    }

    stage('Print env') {
      steps {
        sh 'printenv'
      }
    }


  }
  post {
    always {
      sh 'bash ./clean.sh'
    }
  }
}

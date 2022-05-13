

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
        // Using returnStatus
        EXIT_STATUS = """${sh(
                returnStatus: true,
                script: 'exit 1'
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

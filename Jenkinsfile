pipeline {
  agent {
    docker {
      image 'node:8.11.1'
    }
  }
  stages {
    stage('Install yarn globally') {
      steps {
        sh 'npm install -g yarn'
      }
    }
    
    stage('Test and coverage') {
      steps {
        sh 'yarn install'
        sh 'yarn coverage'
      }
    }
  }
  
  post {
    always {
      archiveArtifacts artifacts: 'coverage/**/*', fingerprint: true
      publishHTML(target: [
        allowMissing: false, 
        alwaysLinkToLastBuild: false, 
        keepAll: false, 
        reportDir: 'coverage', 
        reportFiles: 'index.html', 
        reportName: 'Code coverage report', 
        reportTitles: 'Code coverage report'
      ])
    }
  }
}

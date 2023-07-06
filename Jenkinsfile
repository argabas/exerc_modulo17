pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'master', url: 'https://github.com/argabas/exerc_modulo17.git'
            }
        }

        stage('Executar testes') {
            steps {
                bat 'npm test'
            }
        }
    }
}
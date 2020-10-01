pipeline {
    agent any
    stages {
        stage('Build') {
            environment{
                SPARK_WEB_IP=credentials('SPARK_WEB_IP')
                SPARK_WEB_PATH=credentials('SPARK_WEB_PATH')
                SPARK_WEB_SSH=credentials('SPARK_WEB_SSH')
            }
            agent {
                dockerfile {
                filename 'Dockerfile'
                dir '.workflow'
                additionalBuildArgs '--build-arg version=`id -u jenkins` '
                                    }
            }
            steps {
                withCredentials(bindings: [sshUserPrivateKey(credentialsId: 'SPARK_WEB_SSH', \
                        keyFileVariable: 'SPARK_WEB_SSH_FILE', \
                        passphraseVariable: '', \
                        usernameVariable: 'SPARK_WEB_SSH_USR')]){
                sh '''#!/bin/bash
                npm install --registry https://registry.npm.taobao.org
                npm run build
                cd dist
                eval "$(ssh-agent -s)"
                ssh-add $SPARK_WEB_SSH_FILE
                #rsync -avzP -e ssh $PWD/static \
                #$SPARK_WEB_SSH_USR@$SPARK_WEB_IP:$SPARK_WEB_PATH/static
                #rsync -avzP -e ssh $PWD/index.html \
                #$SPARK_WEB_SSH_USR@$SPARK_WEB_IP:$SPARK_WEB_PATH/store/index.html
                echo "push spark-web successfully"
                '''
                }
            }
        }
      }
  }
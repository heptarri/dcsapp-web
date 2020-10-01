FROM node:14
ARG USERID
RUN groupadd jenkins && useradd -r -u $USERID -g jenkins jenkins \
USER root
RUN echo "deb http://mirrors.ustc.edu.cn/debian/ buster main contrib non-free  \n\
     deb http://mirrors.ustc.edu.cn/debian/ buster-updates main contrib non-free \n\ 
     deb http://mirrors.ustc.edu.cn/debian/ buster-backports main contrib non-free \n\
     deb http://mirrors.ustc.edu.cn/debian-security/ buster/updates main contrib non-free\n " \
     > /etc/apt/sources.list \
     && apt update && apt install rsync git -y \
     &&   echo "StrictHostKeyChecking=no" >> /etc/ssh/ssh_config 
USER jenkins


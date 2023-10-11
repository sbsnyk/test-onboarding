#!/bin/sh
export JAVA_HOME="${HOME}/Downloads/jdk1.7.0_80/"
export PATH="${JAVA_HOME}/bin:${PATH}"
export MVN_HOME="${HOME}/Downloads/apache-maven-3.3.3/"
export PATH="${MVN_HOME}/bin:${PATH}"
java -version
javac -version
mvn -version
mvn -Dhttps.protocols=TLSv1.2 -U clean package 2>&1 | tee log.log

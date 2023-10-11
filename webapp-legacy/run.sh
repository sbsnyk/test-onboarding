#!/bin/sh
sudo archlinux-java set java-11-openjdk
mvn -f pom-new.xml clean spring-boot:run 2>&1 | tee log.log

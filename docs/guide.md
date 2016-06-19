---
title: 'Document: WallRide'
author: WallRide crews
---

1 Intro
=====

1.1 What is WallRide?
---------------------
WallRide is a multilingual easy-to-customize open source CMS made by
Java, using Spring Framework, Hibernate and Thymeleaf.  
WallRide focuses on sophisticated UI, simple and clean source code and
easy deploy to AWS BeansTalk(of course other servlet containers)  
We hope this CMS is loved by many developers of principles all over the world.

2 Getting started
===============

WallRide has 2 packaging types; jar and war.

2.1 Installation requirements
---------------------
- Java8 or higher
- Database (MySQL or PostgreSQL)

2.2 Executable jar
---------------------
What you need to do:

1. Download the latest jar files from the link below. \[link\]

2. Create wallride.home

```bash
mkdir <WALLRIDE_HOME>
mkdir <WALLRIDE_HOME>/config
cp wallride-core/src/main/resources/application.properties <WALLRIDE_HOME>/config
```
  
3. Create application.properties  

   - spring.datasource.url
   - spring.datasource.username
   - spring.datasource.password
   - spring.mail.host
   - spring.mail.port
   - spring.mail.default-encoding

4. Execute command
  
```bash
cd wallride-bootstrap
mvn spring-boot:run -P jar -Drun.jvmArguments=-Dwallride.home=file:<WALLRIDE_HOME>/
```
  
5. Access URL below
  
```
http://localhost:8080/_admin/setup
```

6. See [setup](#setup)

2.3 War + Tomcat
---------------------
What you need to do:

1.Download the latest war file from the link below.  
\[link\]
  
2. Create wallride.home  

```bash
mkdir <WALLRIDE_HOME>
mkdir <WALLRIDE_HOME>/config
cp wallride-core/src/main/resources/application.properties <WALLRIDE_HOME>/config
```

3. Create application.properties  

   - spring.datasource.url
   - spring.datasource.username
   - spring.datasource.password
   - spring.mail.host
   - spring.mail.port
   - spring.mail.default-encoding

4. Configure context in Tomcat
  
5. Modify Tomcat’s server.xml to handle internationalized characters correctly

6. Fix memory and mail handling settings in Tomcat
  
7. Start Tomcat

8. See [setup](#setup)

2.4 AWS Elastic Beanstalk
---------------------
 1.Download the latest war file from the link below.  
 \[link\]  
 
 2. Create wallride.home in S3  
 
 Create S3 bucket and in that, create a directory for wallride.home.
  
```bash
mkdir <WALLRIDE_HOME>
mkdir <WALLRIDE_HOME>/config
cp wallride-core/src/main/resources/application.properties <WALLRIDE_HOME>/config
```
 
 3. Create application.properties in S3
 
 Configure items below in application.properties
  
  - spring.datasource.url
  - spring.datasource.username
  - spring.datasource.password
  - spring.mail.host
  - spring.mail.port
  - spring.mail.default-encoding
  
  And set the value of jgroups 
  - jgroups.configurationFile=jgroups-ec2.xml
  - jgroups.s3.bucket={your-s3-bucket-name}
   
 2. Setup AWS Elastic Beanstalk  
 3. Configure AWS Elastic Beanstalk  
 4. Upload war  
 5. See setup
 
3 WallRide Home Directory
=======================
 
```text
wallride_home
+-- config
|   +-- application.properties
+-- media
+-- themes
    +-- default
       +-- resources
       |   +-- images
       |   |   +-- background.jpg
       |   +-- scripts
       |   +-- styles
       +-- templates
           +-- article
           |   +-- author.html
           |   +-- category.html
           |   +-- describe.html
           |   +-- index.html
           +-- error
           +-- page
           |   +-- describe.html
           +-- tag
           |   +-- index.html
           |   +-- post.html
           +-- user
           |   +-- login.html
           |   +-- password-reset1-entry.html...
           +-- google-analytics.html
           +-- index.html
           +-- layout.html
```
 
4 User guide
===============
<a name="setup">Setup</a>
-----------
 

 
5 Designer guide
==============
 
5.1 Customize themes
----------------
 
 WallRide has original themes for the guest site in it, but you can replace them by putting
 your sources in wallride.home. 
 
 1. HTML 
 WallRide template engine is thymeleaf. If you extend it, please refer to [thymeleaf documentation]() as well.
  
 | URL                           |      outline                                           |  directory path        |
 |-------------------------------|--------------------------------------------------------|------------------------|
 | /                             | Index template                                         | /index.html            |
 | /{language}/yyyy/mm/dd/{code} | Article description template                           | /article/describe.html |
 | /category/{categoryCode}      | Article index template grouped by the category         | /article/category.html |
 | /author/{authorId}            | Article index template grouped by the author           | /article/author.html   |
 | /tag/                         | Tag index template                                     | /tag/index.html        |
 | /tag/{tagName}                | Article index template grouped by the tag              | /article/index.html    |
 | /search                       | Post search template                                   | /search.html           |
 | /{pageCode}                   | Page template(index and description template are same) | /page/describe.html    |
 
 
 WallRide customizable variables … choto matte kudasai.
 
 2. Resources
 
 ディレクトリのここにおいてね　そうすれば　htmlファイルからこういうふうに参照できるよ
 like this
 
Developer guide
===============
 
Overall architecture
--------------------
WallRide is 構成 Spring Framework&Hibernate,Thymeleaf

Customize
---------
Spring bootのスターターのtechのろじをつかっててcho easy to customize 1.
write pom.xml 2. <span class="citation">@SpringBootApplication</span>
つけたメインクラスをつくってね 3. In case of adding URL 4. Override
existing Controller 5. In case of adding Service 6. In case of adding
Entities

Entities
--------
ER図

About HA
--------
WallRide is infinispanを使ったHA構成を実現してるよ 
For more Details: chotto matte kudasai

What’s next
-----------
WallRide is still milestone but working hard for Release version!
Of course you can use WallRide milestone version, try it out and give us more feedback!

Contribute
----------
WallRide github repository is [here]()
PRがんがんおくってね
If you have any questions, create an issue on github.

  
  
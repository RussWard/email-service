# email-service

- Requirements:
  *AWS SES api key (id & secret)
  *Sparkpost api key
  *Verified AWS email
  *Verified Sparkpost domain 
    -> you will need will need access to the DNS Setup in order to complete the sending domain setup and verification for sparkpost.
    
  place these environment variables in a non .gitignored version of the "dummyDotEnv" file located in the root of the repository titled ".env"

(if you would like to check out a working version of the service without all the hastle of domain setups and such, a deployed version of the email service can be found at https://sample-email-service.herokuapp.com/ .  In order to avoid random abuse by the internet, the deployed version is password protected.  To access simply enter the name of the company that issued this coding challenge (all lowercase).  Emails sent from there will appear sent from russ@russandkaren.world.)

- To run:
  * After cloning the repo and inputing envirnment variables, in the console run the following commands:
     - npm install, 
     - npm run build, 
     - npm run start, 

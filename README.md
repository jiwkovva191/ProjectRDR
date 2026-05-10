# Database Setup
1.  Look at the .env.example file and create your own .env file with your db settings.
Note: You must have the db created in your phpMyAdmin (or other tool for db administration)

npm install - installs dependencies
npx prisma migrate dev - apply the migrations
npx prisma db seed - seed the db
(optional)npx prisma studio - open Prisma Studio, usually running on port localhost:5555


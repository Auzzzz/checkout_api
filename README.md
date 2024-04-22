# Checkout API
Checkout is designed to keep track of individual items through tracking who is signing them in and out. 

Items can be assigned to different user groups, venues & departments allowing for all items to be broken down to individual sections of a business. Checkout Web is build upon NextJS, ExpressJS & FusionAuth, Express allows for quick and rapid API development along side FusionAuth that allows checkout to implement multi-tenanted, role based authentication allowing for easy development & potential future growth

Checkout API is build using ExpressJS using Prisma for a ORM along with Typescript, deployed on a server utilizing  Docker to deploy Express, a instance of FusionAuth & PostgreSQL instance that all communicate via the docker network & is only accessible through the ExpressJS API apart for some calls made to FusionAuth (SDKs & Oauth)

## Infra
![Alt text](https://github.com/Auzzzz/expressjs-railway-api/blob/main/Checkout.png "Checkout Infra diagram")
https://excalidraw.com/#json=Pj399mekYoHgd4Hmh6hR7,aKckj4Q98XGVrtjf2tjRZg

## Other Repo's
ExpressJS API - https://github.com/Auzzzz/checkout_web




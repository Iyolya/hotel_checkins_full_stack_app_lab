https://github.com/randomlyalex-codeclan/hotel_checkins_full_stack_app_lab

MEVN Stack 

***
npm remove nodemon (if not installed dev)


# CLIENT
## Init
Check .gitignore
vue create client
add services folder in src
    touch services/service.js
remove auto-generated vue code

## Components
create components

## Services
create service with fetch
test fetch in a component or App.vue

# SERVER

## Init
touch .gitignore (copy from client)
npm init (optionally append -y)
npm install express
npm install nodemon --save -D
    Edit package.json - Add server:dev script
npm install cors
npm install mongodb
    Edit package.json - Add seeds script
npm install body-parser

mkdir db helpers
touch db/seeds.js
touch helpers/create_router.js (possibly more routers for CRUD, plus others)
touch server.js

## Database
seeds.js
npm run seeds

## Server
Imports
    - app = express()
    - app.use cors and parser
    - routers

MongoClient.connect

## Helpers
### Create Routers
Imports
createRouter function
    - Define router = express.Router()
    - Create CRUD routes, starting with get all
Exports (createRouter)


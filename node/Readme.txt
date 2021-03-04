Init project:

	$ npm init -y
	$ npm install typescript nodemon ts-node
	$ tsc --init
	$ npm install express dotenv 
	$ npm install --save-dev @types/express @types/dotenv
	$ npm install cors
	$ npm install dotenv
	$ npm install mongoose
	$ npm install mongoose@5.11.15
	$ npm install bcrypt
	$ npm install jsonwebtoken

	in package.json add
		"script": {
			"build": "rm -rf build/ && tsc"
		}
	in tsconfig.json uncommented line and add 'build'
		"outDir": "./build",   
		and change
		"target": "es5", => "target": "es6",

To run
	
	$ nodemon index.ts   or  $npx nodemon index.ts

	in the browser 
	localhost:3001

To run admin seeder type in the browser

	localhost:3001/

To build: 

	$ npm run build  --- it will create build folder
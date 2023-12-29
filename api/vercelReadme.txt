The vercel.json file configures Vercel to use the @vercel/node builder for files in the api directory (api/*.js). It also sets up two routes:
"builds": [
      { "src": "*.js", "use": "@vercel/node" }
    ]
  "src": "*.js" where to look for source file for build    
"routes": [
        {
          "src": "/(.*)", this define incoming request
          "dest": "/" , this defines direct incoming request to this
        }

example:

{
    "version": 2,
    "builds": [
        { "src": "api/*.js", "use": "@vercel/node" }
    ],
    "routes": [
        {
            "src": "/api/(.*)",
            "dest": "/api/index.js"
        },
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}
In this example:

The package.json file specifies the entry point for the application (api/index.js) and declares dependencies (Express).

The vercel.json file configures Vercel to use the @vercel/node builder for files in the api directory (api/*.js). It also sets up two routes:

Requests to /api/(.*) are directed to api/index.js.
All other requests (/(.*)) are directed to the root of the project.
The api/index.js file is a simple Express API with two routes, one for the root (/) and another for /api/other.

When you deploy this project to Vercel, the configuration ensures that requests to /api/* are routed
to your Express API in the api directory, and other requests are d
irected to the root of your application. This structure allows you to organize your API code separately
from other parts of your application.

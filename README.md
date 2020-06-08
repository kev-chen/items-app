# Items App
A full stack web app hosted in Heroku built with React 16.13.1, ASP.NET Core 3.1, PostgreSQL 12.2 in Visual Studio Code and Visual Studio for Mac

## Prerequisites
- React 16.13.1
- ASP.NET Core 3.1
- dotnet cli
- PostgreSQL 12.2


## Instructions

1. Clone locally using `git clone https://github.com/kev-chen/items-app.git`

### Server
1. Open the `ItemsService/ItemsService.sln` in Visual Studio
2. Right click the Solution >> Restore NuGet Packages
3. Run PostgreSQL on your machine and get a connection string for your database 
4. To avoid hardcoding the connection string in the project, use user-secrets to store the connection string. In the `items-app/ItemsService/ItemsService.API` directory, run 
```
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Host=localhost;Port=<port>;Username=<user>;Password=<password>;Database=<database>"
```

Note: You can also add the add the connection string to `appsettings.json` for quick running
```
"ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=<port>;Username=<user>;Password=<password>;Database=<database>"
}
```

5. To run the initial EF migration and create the Item table in your local database, from the `items-app/ItemsService` directory, run 
```bash
dotnet ef database update --startup-project ItemsService.API/ItemsService.API.csproj -p ItemsService.Data/ItemsService.Data.csproj dotnet ef database update --startup-project ItemsService.API/ItemsService.API.csproj -p ItemsService.Data/ItemsService.Data.csproj
``` 

6. Click the play button to run the service

### Client
1. `cd` into `items-app/client` directory
2. Install dependencies using `npm install`
3. Run `npm run start` to run the site on localhost
4. (Optional) Change the ItemsBaseUrl in `src/endpoints/Endpoint.js` to `https://localhost:5001/api/items` to point to the local database instance

## Discussion

### Endpoints
Hosted: https://mk-items-app.herokuapp.com/

`GET api/items/max-prices`

Gets a list of max prices of items grouped by item name

`GET api/items/max-prices/{itemName}`

Gets the max price of a specific item

`GET api/items`

Gets all items

`GET api/items/{id}`

Gets the item with {id}

`DELETE api/items/{id}`

Deletes the item with {id}

`PUT api/items/{id}`

Updates the item with {id} with fields specified in the request body as application/json

`POST api/items`

Creates the item with {id} with fields specified in the request body as application/json

<br /> 

### Client 
https://items-app-client.herokuapp.com/

This is a SPA with three routes that make requests to the endpoints above.

#### Overview 
This page displays all items in the database. From here, you can edit, delete, and add items.

#### Top Prices
This page displays a list of top prices grouped by item name.

#### Top Price Search
This page allows you to search for an item name and get the top price associated with the item.


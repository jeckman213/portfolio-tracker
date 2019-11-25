![Portfolio$ Logo](frontend/public/logos/portfolios/logo.png)
## Todos
1. Add auto-complete to stock add to portfolio
1. Add analytics to portfolio graphs
1. Add future analytics
1. Add comparision page
1. Add search for public names/portfolios
## Portfolio$ Tracking Web Application
### To Get Started Follow These Steps:
1. Clone Repo onto local machine
1. Make sure you have node and npm (node package manager) installed and both are included in PATH
1. `cd frontend` and execute `npm i` to install all of the client-side dependencies described in this package.json
1. `cd ../backend` and execute `npm i` again to install all of the server-side dependencies described in this package.json
1. Now that you're in the backend directory, execute `npm run dev` to start Express and React concurrently (this command must always be executed from inside the backend root). 
1. In a few moments, your default browser should open with localhost:3000 and you'll see a home page placeholder.

### To get started with using stocks (World Trading Data):
1. First run `npm i`, to make sure you have the stock api
1. Make calls from the react app (ex: `fetch('api/stock/search/apple')`) See below for more examples
  
 All stock data is coming from the express server(localhost:5000/) so the react server using a proxy that is the express server at that port
 
  #### Search:
  ```javascript
  const response = await fetch('api/stock/search/microsoft');
  ```
  #### Intraday:
  ```javascript
  const response = await fetch('api/stock/intraday/AAPL/60/2');
  ```
  This will give you stock information for every 60 minutes for 2 days
  
  **NOTE: If you leave the minutes and days blank it will default to 60 minutes for 1 day**
  #### Real Time:
  ```javascript
  const response = await fetch('api/stock/realtime/GE');
  ```
  #### Historical
  ```javascript
  const response = await fetch('api/stock/history/GE/2017-01-01/2018-02-01');
  ```
  This will give you limited stock information from 2017-01-01 to 2018-01-01
  
  **NOTE: If you leave the date from and to blank it will default to 2018-01-01 to 2018-12-31 (at least for now/easily changed)**

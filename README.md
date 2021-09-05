# Building Stock Web Application - Problem

With data from https://www.alphavantage.co, build a single page application which displays a
daily OHLC chart of a stock of a user’s choice.

Rules:

1. Draw the chart without using any helper library.
2. We leave the available stock options up to you.
3. User’s choice of stock shouldn’t be lost when the page is refreshed.
4. The scale of the chart should make every period visible.
5. Should not use a project boilerplate or a scaffolding tools, your tooling choice (except for the
   chart) and how you bootstrap the app is part of the scoring criteria.

## About the Application

This is a single page react application to display a list of stock options and stock data. Stock data is displayed using an daily OHCL chart. User can choose any available option and see the dynamic data fetched from https://www.alphavantage.co using axios. User’s choice of stock will not be lost when the page is refreshed.

Because of the limitation of the API, only 5 stock's data will be pulled from server in 1 minute. If data for a particular stock is fetched at least once, it is made available to the user even if the API fails. If no data was fetched and if the API fails, then user will get an error message.

Since the web page has simple structure, no external style libraries are used. The web page is responsive. Simple animation is added to the chart lines.

## How to Run

This application requires Node version **14.17.0** or later.

Run by doing:

```
npm i
npm start
```

## Test Cases

Test cases are implemented for almost all components. Test cases can be run using

```
npm test
```
## Demo

[Live Demo] (https://tech-test--m1.web.app/)

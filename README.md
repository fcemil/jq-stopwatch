# jq-stopwatch

A basic stopwatch jquery plugin implemented with the state design pattern. <br>
Live demo:  https://sudden-copy.surge.sh/

# How to use it on your project:
1) You have to include **jQuery** to your project
2) Add the lines below to your `<head>` element: <br>
    `<link rel="stylesheet" href="stopwatch.css" />` <br>
    `<script src="stopwatchStatePattern.js"></script>`
3) Create an html element with class name  stopWatchContainer <br>
    `<div class="stopWatchContainer"> </div>`
4) Call stopWatchContainer() function with the selector that you want to modify (see the example below): <br>
    `$('.stopWatchContainer').stopWatchContainer();`<br>
5) **Voilà!** All the elements with stopWatchContainer class transformed into a stopwatch .

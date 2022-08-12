# MyDrinks

MyDrinks is an android/IOS app that helps users finding cocktail recipes.

* ### Stack:
    * ReactNative.js
    * Flask
    * PostGreSql
![Group 36](https://user-images.githubusercontent.com/36013973/184355501-9ba4239d-c68f-4800-8e3e-8741dbe498a7.png)
### The Cocktail DB
In this project I used a free api called the cocktailDB

[thecoctaildb.com](https://www.thecocktaildb.com)

## BACKEND [repository](https://github.com/Happollyon/myDrinksBackEnd)

The back end for this application is being hosted on [HEROKU](https://mydrinks123.herokuapp.com). Note that the backend is being hosted in a free dyno (after 30 of inactivity is goes intO sleeping mode). Hence, if you cant reach the endpoints, give 1 min and try again. The endpoint are accessible from the browser for ther purpose of this assignment. 



### End points
* [login](https://mydrinks123.herokuapp.com/loggin/student/123)
* [is username available](https://mydrinks123.herokuapp.com/checkusername/student)
* [register new user](https://mydrinks123.herokuapp.com/register/student/123)
* [liked drink](https://mydrinks123.herokuapp.com/likedrink/44/16158)
* [already liked drink?](https://mydrinks123.herokuapp.com/liked/44/16158)
* [dislike drink](https://mydrinks123.herokuapp.com/dislike/44/16158)

### Enviroment
* npm install -g expo-cli
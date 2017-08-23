## A tennis scoreboard by React/Redux / [DEMO](http://tennis-scoreboard.surge.sh/)
In summer 2017, I went to the Rogers cup in Toronto, and I saw the scoreboard that has a very nice UI. So, I want to make a web version for the scoreboard. In this case, I use React and Redux to reach this project.

<img src="https://user-images.githubusercontent.com/1507950/29543642-877e48be-86b0-11e7-9fff-5366c80434d3.png" width="650">

<img src="https://user-images.githubusercontent.com/1507950/29543850-1aa1fdec-86b2-11e7-955d-cc10ccda4a87.png" width="650">


## Project Structure
+ Data Structure
    + Player
    ```javascript
    {
        id: 1,
        personal_info: {
            f_name: "Roger",
            l_name: "Federer",
            img_url: "../federer-montreal-2017-friday.jpg",
            national_flag: "../ch.svg",
            nation:"SUI",
            rank: 3,
            age: 36,
            weight: 85,
            height: 185,
            titles: 5,
            "W-L": "35-3",
        },
        point: 0,
        set: [],
        got_set: [],
        server: true,
    },
    ```
    + General
    ```javascript
    current_point:[0,0],
    current_game:[0,0],
    current_set: 1,
    current_server:0,
    winner: "",
    ```
+ Components
    + Players Card
    + Score Board
+ Actions
    +  init_players()
    +  give_match()
    +  give_set()
    +  give_game()
    +  give_point()
    +  reset_current_score()

## References
+ Starter - [React Slingshot](https://github.com/coryhouse/react-slingshot)
+ Media(pics, video) - [ATPworldtour.com](http://atpworldtour.com)
+ UI - [Rogers cup](rogerscup.com)
    + [Atp Finals Tennis Players by Valentino Borghesi](https://dribbble.com/shots/1796074-Atp-Finals-Tennis-Players)

## Todo
+ Add tie break feature

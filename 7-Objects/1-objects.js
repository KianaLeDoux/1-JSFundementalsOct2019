// Objects
// An object is a data type that consists of key value pairs

/* 
let name = {
     1.     2.

     key   :   value;
     3.     4.   5. 
}
1. Name of the object, how it's identified
2. All of the data for an object is conatined in curly braces
3. Key and vlaue pair- This is the name of the specific data inside the object
4. Each key value pair is seperated by a colon
5. The value of the data. Each key-value pair end with a comma.

*/


let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place", 
    seasonInfo: {
      season1: {
        numberOfEpisodes: 5,
        episodeInfo : [
          { episode: 1, episodeName: "Pilot"},
          { episode: 2, episodeName: "Flying"},
          { episode: 3, episodeName: "Tahani Al-Jamil"},
          { episode: 4, episodeName: "Jason Mendoza"},
          { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis"}
        ]
      },
      season2: {
        numberOfEpisodes: 6,
        episodeInfo : [
          { episode: 1, episodeName: "Everything is Great!"},
          { episode: 2, episodeName: "Dance Dance Resolution"},
          { episode: 3, episodeName: "Team Cockroach"},
          { episode: 4, episodeName: "Existential Crisis"},
          { episode: 5, episodeName: "The Trolley Problem"},
          { episode: 6, episodeName: "Janet and Michael"}
        ]
      },
      season3: {
        numberOfEpisodes: 5,
        episodeInfo : [
          { episode: 1, episodeName: "Everything Is Bonzer!"},
          { episode: 2, episodeName: "The Brainy Bunch"},
          { episode: 3, episodeName: "The Snowplow"},
          { episode: 4, episodeName: "Jeremy Bearimy"},
          { episode: 5, episodeName: "The Ballad of Donkey Doug"}
        ]
      }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
  };
//   console.log(netflix); // to grab one piece of data, use dot notation
//   console.log(netflix.name) // use . to grab which ever thing you wish to grab out of the line up
//  console.log(netflix.seasonInfo.season1) // just keep changing the dot notation to pick the different areas you want to grab info from
  
  
  // Challenge: Pick an episode to show then use dot notation to walk through netflix object and print off both the episode and the episode name.*/

//   console.log(netflix.seasonInfo.season2.episodeInfo[4])

// console.log(netflix.seasonInfo)
 
// let season = netflix.seasonInfo.season1.episodeInfo
// for (e of season) {
//     console.log(e)
// }

netflix.seasonInfo.totalSeasons = 3; // this is an example of how to push or place nww info or sections into an object.
console.log(netflix.seasonInfo);

let newEpisode = netflix.seasonInfo.season2.episodeInfo.push({episode: 7, episodeName: "Derek"});// example of how to add new episode and information to an object
console.log(netflix.seasonInfo.season2);
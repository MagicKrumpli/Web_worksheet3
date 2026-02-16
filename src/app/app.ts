import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { Movieservice } from './movieservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Web_Worksheet3');
  protected movieService = inject(Movieservice);
}
//   constructor() {
//     //All Movies Section
//     const allMoviesDiv = document.createElement("div");
//     allMoviesDiv.id = "all-movies";
//     allMoviesDiv.appendChild(document.createElement("h1")).textContent = "All Movies: ";
//     displayMovies();
    


//     async function displayMovies() {
//       movies.forEach(element => {
//         const displayedMovies = document.createElement("div");
//         const movie = document.createElement("p"); // Movie Title
//         movie.textContent = element;
//         const favBtn = document.createElement("button"); // Favorite Button
//         favBtn.textContent = "Add to Favorites";
//         //Add movie to div
//         displayedMovies.className = movie.textContent;
//         displayedMovies.appendChild(movie);
//         displayedMovies.appendChild(favBtn);
//         console.log(displayedMovies.textContent);

//         allMoviesDiv.appendChild(displayedMovies);
//         document.body.appendChild(allMoviesDiv);

//         // Adding to favorites list
//         favBtn.addEventListener("click", () => {
//           favMovies.push(element);
//           console.log(favMovies);
//           displayFavMovies();
//         });

//         // document.body.appendChild(displayedMovies!);
//       });
//     }

//     //Favorite Movies Section
//     const favoriteMoviesDiv = document.createElement("div");
//     favoriteMoviesDiv.id = "favorite-movies";
//     favoriteMoviesDiv.appendChild(document.createElement("h1")).textContent = "Favorite Movies: ";
//     document.body.appendChild(favoriteMoviesDiv);

//     //Display Favorite Movies
//     displayFavMovies();
//     async function displayFavMovies() {
//       favoriteMoviesDiv.innerHTML = "<h1>Favorite Movies: </h1>"; // Clear previous content
//       if (favMovies.length !== 0) {
//         favMovies.forEach(element => {
//           const displayedFavMovies = document.createElement("div");
//           const movie = document.createElement("p"); // Movie Title
//           movie.textContent = element;
//           const delBtn = document.createElement("button"); // Favorite Button
//           delBtn.textContent = "Delete from Favorites";
//           //Add movie to div
//           displayedFavMovies.className = movie.textContent;
//           displayedFavMovies.appendChild(movie);
//           displayedFavMovies.appendChild(delBtn);
//           console.log(displayedFavMovies.textContent);

//           favoriteMoviesDiv.appendChild(displayedFavMovies);
//           console.log(favoriteMoviesDiv);
//           document.body.appendChild(favoriteMoviesDiv);


//           delBtn.addEventListener("click", () => {
//             favMovies = favMovies.filter(item => item !== element);
//             console.log(favMovies);
//             displayFavMovies();
//           });

//         });
//       }      
//       else {
//         favoriteMoviesDiv.innerHTML += "<p>No favorite movies selected.</p>";
//         document.body.appendChild(favoriteMoviesDiv);
//       }


//     }
//   }


// }

// let movies: string[] = ["Telepuziki", "Fixiki", "Smeshariki", "Tehaskaya Reznya Benzopiloy", "Zelenyy Slonik"];
// let favMovies: string[] = [];
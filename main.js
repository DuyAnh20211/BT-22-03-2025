let innerHTML = "";
const linkImg = `https://image.tmdb.org/t/p/w500/`;
const token  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGY3ODEzYTQwNmI1ZjRiNDRhZWJkYzgxY2E0NWU1YiIsIm5iZiI6MTY0MDc3ODcyMC40MzM5OTk4LCJzdWIiOiI2MWNjNGJlMDQxYWFjNDAwNWY0YzUzM2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VOXZ1RSbb0-o9kFoWD7xy6NyOHzdcXa8LEdkL6v40ok';

$(function () {
    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
        dataType: "json",
        headers : {
            'Authorization': `Bearer ${token}` 
        },
        success: function (data) {
            console.log(data.results);
            const dataMovie = data.results.slice(0, 5);
            dataMovie.forEach(item => {
                innerHTML += `
                    <div class= "item-movie">
                        <img src="${linkImg + item.known_for[0].poster_path}" alt"">
                        <div class ="item-popularity">
                            <span>${Math.floor(item.popularity)}</span>
                        </div>
                        <canvas height="34" width="34"></canvas>
                        <div class = "content">
                            <h2>${item.known_for[0].title}</h2>
                            <p>${item.known_for[0].release_date}</p>
                        </div>
                    </div>
                `
            });
            $("#listMovie").html(innerHTML);
        },
        error: function (error) {
            console.log("Ko thấy dữ liệu api:", error.error);
        }
    });
})

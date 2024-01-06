// $(document).ready(function test() {
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzBmZGQxMmVlMmM3YmM1MmYxMTIzMTAyYTczOThkNyIsInN1YiI6IjY1OGZjNTc2NGY5YTk5NzQ0Nzc2ZjdmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ia72FPxxblivB86B-AQTrGQ23guwrqXGK17IBJsWIs",
  },
};
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    let results = response["results"];
    results.forEach((movie) => {
      let title = movie["title"];
      let overview = movie["overview"];
      let vote_average = movie["vote_average"];
      let imagesrc = `https://image.tmdb.org/t/p/w300/${movie["poster_path"]}`;
      let id = movie["id"];

      let cardTemp = `
                          <div class="movie-card" id="${id}">
                            <img src="${imagesrc}" alt="${title}">
                            <ul>
                              <li>제목: ${title}</li>
                              <li>내용 요약: ${overview}</li>
                              <li>평점: ${vote_average}</li>
                            </ul>
                          </div>

                        `;

      // api에 연동된 영화들 추가
      $("#movies").append(cardTemp);
      // 이미지 클릭시 아이디 나오게 하기
      $(`#${id} img`).click(function () {
        alert(`영화 ID: ${id}`);
      });
    });
  });
// });

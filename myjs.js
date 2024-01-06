// $(document).ready(function test() {
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjYzNTM0Njc4ZTI1MjNlNzIxMDNlMzYyYWQxZWViNiIsInN1YiI6IjY1OGZjNTc2NGY5YTk5NzQ0Nzc2ZjdmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F0FoX3lUzAIfTywlttR-OhjlBAMIbI71ZQxoja0E8S8",
  },
};
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?af63534678e2523e72103e362ad1eeb6?language=en-US&page=1', options",
  options
)
  .then((response) => response.json())
  .then((response) => {
    let results = response["results"];
    for (let i = 0; i < results.length; i++) {
      let movie = results[i];
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
    }
    // enter는 13번임. keyup은 눌렀다 땠을때
    $("input").keyup(function (enter) {
      if (enter.keyCode == 13) {
        $("btn").click();
      }
      // 단어검색
      // for문으로 글자 뽑고 or 써서 title 글자랑 비교하기?
    });
  });

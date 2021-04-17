function fetchGithubByValue(value) {
  fetch(`https://api.github.com/search/users?q=${value}`, {
    headers: {
      "Accept": "application/vnd.github.v3+json"
    }

  })
  .then(res => res.json())
  .then(json => console.log(json))
}
const submitBtn = document.getElementById("submit-button")
const searchBox = document.getElementById('search')
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  fetchGithubByValue(searchBox.value)
})
function fetchGitHubByValue(value) {
  fetch(`https://api.github.com/search/users?q=octocat${value}`, {
    headers: {
      "Accept": "application/vnd.github.v3+json"
    }
  })
  .then(resp => resp.json())
  .then(json => console.log(json))

}

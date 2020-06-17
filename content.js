$(function () {
    fetch('https://randomuser.me/api')
        .then(resp => resp.json())
        .then(resp => console.log(resp.results))

})
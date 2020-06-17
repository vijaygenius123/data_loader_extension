$(function () {
    fetch('https://randomuser.me/api')
        .then(resp => resp.json())
        .then(resp => {

            const person = resp.results[0]
            console.log(person)

            $('input[name="first_name"').val(person['name']['first'])
            $('input[name="last_name"').val(person['name']['last'])

        })

})


// function greetHeading(name){
//     const heading = document.querySelector('h1')
//     heading.innerHTML = 'hello' + name

// }

setTimeout(function(name){
    const heading = document.querySelector('h1')
    heading.innerHTML = 'Happy' + name
    
}, 10000, ' Independence Day' )

// heading(greetHeading)
// function greet(callback){
//     callback('ram')
// }

// greet(greetHeading)
let data =[
    {
        name: 'Fatih',
       age : '23'
    },
    {
        name: 'Ahmet',
       age : '32'
    },
    {
        name: 'Selim',
       age : '52'
    },
    {
        name: 'Kazim',
       age : '12'
    },
    {
        name: 'Gul',
       age : '34'
    },
    {
        name: 'Yesim',
       age : '16'
    },

];

const info =document.querySelector('#info')

let details =data.map(function(item){
    return '<div>' + item.name + ' ' + 'is' + item.age + 'years old' + '</div>';
});

info.innerHTML = details.join('\n')


function fetchData(input)
{
    fetch(`https://api.github.com/users/${input}`, 
    {
        method: 'GET',
        headers: 
        {
            'Accept': 'application/vnd.github.v3+json',
        },
    })
    
    .then(res=>
        {
            return res.json()
        })
    .then(data=>
        {
            const users =  document.getElementById('user-list');
            const list = document.createElement('li');
            list.innerHTML = `USERNAME: ${data.login} <br>
                              REPOSITORY: ${data.avatar_url}
                             `;
            users.appendChild(list)
            console.log(data.login)
            console.log(data)
        }).catch(err=> console.log('err'))
}

function formSubmit()
{
    const form = document.getElementById('github-form')
    form .addEventListener('submit', (e)=>
    {
        e.preventDefault();
        const input = e.target.search.value
       fetchData(input)
        
    })
}
 function renderSearch(dat)
 {
     for(let i = 0; i <= i.length; i++)
     {
         const users =  document.getElementById('user-list');
         const list = document.createElement('li');
         list.innerHTML = `${dat[i].login}`;
         users.appendChild(list);
     }   
}
document.addEventListener('DOMContentLoaded', ()=>
{
    fetchData()
    formSubmit()
   renderSearch()
})
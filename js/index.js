function appendElement(element, id = "animal-item-body") {
    const rootElement = document.getElementById(id);
    rootElement.append(element);
}

function listElements(login, id){
    const root = document.getElementById("user-list")

    let loginName = document.createElement("li")
    loginName.innerHTML = login
    loginName.style.cursor = "pointer"
    loginName.addEventListener('click',(e)=>{
        
        fetchRepo(e,id)
        let display = document.getElementById("repos-list")
        display.innerHTML = ""
    })


    root.append(loginName)

    return root;
}
function createRepos(name){
    let rootRepos = document.getElementById("repos-list");
    
    let repsName = document.createElement('li');
    repsName.innerHTML = name;

    rootRepos.append(repsName)

    return rootRepos;
}

function fetchRepo(e,id){
    let repoName = (e.target.innerHTML)
    console.log(repoName)

    fetch(`https://api.github.com/users/${repoName}/repos`)
    .then(res=> res.json())
    .then((data) => {
        console.log(data)

        for(let i=0; i<data.length; i++ ){
            let repoNames = data[i]
            const repositoryNames = createRepos(repoNames.name)
            appendElement(repositoryNames, "github-container")

        }

        })}


function handleSubmit(){
    let endpoint = document.querySelector('#search').value
    

    fetch(`https://api.github.com/search/users?q=${endpoint}`,{
        //method:'GET',
        //headers: {'Content-type': 'application/vnd.github.v3+json'}
    })
    .then(res=> res.json())
    .then((data) =>{
        console.log(data)
        let content = data.items
        for(let i=0; i<content.length; i++){
            let listNames = content[i]
            let listDb = listElements(listNames.login, listNames.id)
            appendElement(listDb, "github-container")
        }

        console.log(data)

    })

        

    console.log(`hello ${endpoint}`)
}

//function getReposNames(){

//}

document.addEventListener("DOMContentLoaded", () => {
  
    document.querySelector("form").addEventListener('submit',(e)=>{
      e.preventDefault()
      handleSubmit()
  
    })
  
  
});
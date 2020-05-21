let url = location.pathname
let filename = url.substring(url.lastIndexOf('/') + 1);


function goToOtherPage(pageName) {
    location.replace(pageName)
}

// Todo : create cek session



if (filename == 'login.html') {

    //Todo : cek login


    let adminEmail = "admin@gmail.com"
    let adminPassword = "admin"

    const body = document.querySelector('body')

    // body
    body.style.fontFamily = "Monospace"
    body.style.fontSize = '1.5em'

    console.log(location)

    let button = document.querySelector('#login')

    button.addEventListener('click', event => {
        event.preventDefault()

        let email = document.querySelector('#email') // ambil email dari user
        let pass = document.querySelector('#pass') // ambil password dari user


        if (email.value == adminEmail && pass.value == adminPassword) {
            // To Do : buat variable session baru dengan nama isLogin dan value true


            swal({
                title: "Good job!",
                text: "Login Success",
                icon: "success",
                button: false
            });
            setTimeout(() => {
                goToOtherPage('./index.html')
            }, 2000)

            

        } else {
            swal({
                title: "Oow :x",
                text: "There is something Wrong, Please try again",
                icon: "error",
                button: "Try again!",
            });
            
        }
    })
}


// untuk home.html
if (filename == 'index.html') {
    const body = document.querySelector('body')
    const h1 = document.querySelector('h1')
    const h3 = document.querySelector('h3')
    const wrapper = document.querySelector('.wrapper')
    const input = document.querySelector('#number')
    const button = document.querySelector('#button')


    //To Do : cek status login

    // body
    body.style.fontFamily = "Monospace"
    body.style.fontSize = '1.5em'
    body.style.color = '#1abc9c'
    body.style.textAlign = 'center'

    // h1
    h1.style.fontWeight = 'bolder'
    h1.style.color = '#e74c3c'

    // h3
    h3.style.fontSize = '1.5em'
    h3.style.textDecoration = 'underline'
    h3.style.color = '#34495e'
    h3.style.fontWeight = 'bold'

    // input
    input.style.border = '2px solid blue'
    input.style.minHeight = '50px'
    input.style.minWidth = '20%'
    input.style.borderRadius = '10px'
    input.style.fontSize = '2em'
    input.style.textAlign = 'center'
    input.style.padding = '0'

    // buttton 
    button.style.minHeight = '60px';
    button.style.minWidth = '5%'
    button.style.borderRadius = '10px'
    button.style.backgroundColor = '#2980b9'
    button.style.color = 'white'
    button.style.fontWeight = '100'
    button.style.border = '2px solid #2980b9'
    button.style.fontSize = '1.5em'

    // wrapper
    wrapper.style.display = 'grid'
    wrapper.style.gridTemplateColumns = 'auto auto auto auto auto'
    wrapper.style.textAlign = 'center'
    wrapper.style.justifyContent = 'center'
    wrapper.style.margin = '3%'

    button.addEventListener('click', event => {
        event.preventDefault()
        wrapper.innerHTML = '';
        let banyakAngka = input.value;

        for (let i = 1; i <= banyakAngka; i++) {
            let item = document.createElement('div')
            item.innerHTML = i;
            item.style.fontSize = '2em'
            item.style.display = 'inline'
            item.style.color = 'white'
            item.style.padding = '25px'
            item.style.margin = '5px'
            item.style.minWidth = '100px'
            item.style.fontWeight = 'bolder'
            item.style.borderRadius = '5px'

            var isPrime = true;
            let akar = Math.floor(Math.sqrt(i))
            for (let test = 2; test <= akar; test++) {
                if (i % test == 0) {
                    isPrime = false
                    break
                }
            }

            isPrime = i < 2 ? false : isPrime;

            if (isPrime) {
                item.style.background = '#e74c3c'
            } else if (i % 2 == 0) {
                item.style.background = '#f1c40f'
            } else if (i % 2 == 1) {
                item.style.background = `#2ecc71`
            }
            wrapper.appendChild(item)

        }

    })
}

// untuk file movies.html
if(filename == 'movies.html'){
    const body  = document.querySelector('body')
    const h1    = document.querySelector('h1')
    const h3    = document.querySelector('h3')
    const wrapper   = document.querySelector('.wrapper')
    const input     = document.querySelector('#title')
    const button    = document.querySelector('#button')
    let url         = 'http://www.omdbapi.com/?s='
    let title       = 'guardian'
    let apiKey      = '&apikey=893a62a'

    //To Do : cek status login

    // body
    body.style.fontFamily   = "Monospace"
    body.style.fontSize     = '1.5em'
    body.style.color        = '#1abc9c'
    body.style.textAlign    = 'center'

    // h1
    h1.style.fontWeight = 'bolder'
    h1.style.color      = '#e74c3c'

    // h3
    h3.style.fontSize       = '1.5em'
    h3.style.textDecoration = 'underline'
    h3.style.color          = '#34495e'
    h3.style.fontWeight     = 'bold'

    // input
    input.style.border      = '2px solid blue'
    input.style.minHeight   = '50px'
    input.style.minWidth    = '20%'
    input.style.borderRadius= '10px'
    input.style.fontSize    = '2em'
    input.style.textAlign   = 'center'
    input.style.padding     = '0'

    // buttton 
    button.style.minHeight      = '60px';
    button.style.minWidth       = '5%'
    button.style.borderRadius   = '10px'
    button.style.backgroundColor= '#2980b9'
    button.style.color          = 'white'
    button.style.fontWeight     = '100'
    button.style.border         = '2px solid #2980b9'
    button.style.fontSize       = '1.5em'

    // wrapper
    wrapper.style.display               = 'grid'
    wrapper.style.gridTemplateColumns   = 'auto auto auto auto auto'
    wrapper.style.textAlign             = 'center'
    wrapper.style.justifyContent        = 'center'
    wrapper.style.margin                = '3%'


    
    // variable yang menampung data dari api
    let moviesData ='';


    // ambil data dari internet
    function getData() {
        fetch(url+title+apiKey)
        .then(Response => Response.json())
        .then(data => {
            moviesData = data.Search
            console.log(moviesData);
            render(moviesData);
        })
    }

    getData()

    // buat fungsi untuk menampilkan data
    function render (moviesData) {
        // tampilkan data disini
        // kosongkan isi dari kotak wrapper
        wrapper.innerHTML = ''

        // masukkan movies data kedalam kotak wrapper, sejumlah moviesdata
        for(index=0; index<moviesData.length; index++){
            let item = `
            <div class="row row-cols-12 row-cols-lg-12">
            <div class="col mb-4">
              <div class="card">
                <img src="${moviesData[index].Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${moviesData[index].Title}</h5>
                  <p class="card-text">${moviesData[index].Type}</p>
                </div>
              </div>
             </div>
            </div>`;

            wrapper.innerHTML += item

        } 
    }


    // ketika input field mendapat nilai baru maka lakukan hal berikut
    input.addEventListener('keyup',event=>{
        title = input.value
        getData(title)
        
    })
    // akhir input event listener

    // ketika button search diklik maka update lagi datanya
    button.addEventListener('click', event => {
        // event.preventDefault()
        title = input.value
        getData(title)

    })
    // akhir button event listener
}








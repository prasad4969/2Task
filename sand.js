const API_KEY='api_key=abd7a021dc8d0b6b0e6be07a7769b41e';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL=BASE_URL +'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL ='https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;


 fetch(API_URL)
            .then((response) => response.json())
            //.then(data=>{ for(let i=0;i<20;i++){console.log(data.results[i])}});
            //.then(data=>{ for(let i=0;i<20;i++){console.log(data.results[i].original_title,data.results[i].poster_path)}});
            
            .then(data =>{ 
                   for(let i=0;i<20;i++){
                    let tabledata="";
                    tabledata +=`<div class="bg-black">
                    <div class="box-border border-black-100 h-60 w-56 border-2 rounded-md drop-shadow-2xl ">
                    <img src="${IMG_URL+data.results[i].poster_path}" class="w-56 h-60">
                    <h1 class="text-black font-bold ">${data.results[i].original_title}</h1> 
                    </div>
                    </div>`;
                    document.getElementById("pink").innerHTML+=tabledata;
                    
                    };
                    
            });

          
            
       
        
        
        


            

        
           
     






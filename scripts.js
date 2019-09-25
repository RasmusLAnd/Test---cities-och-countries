fetch("Data/land.json")
// mellem-then() skal altid skrives på denne/samme måde
.then((response)=>{
    // console.log(response);
    return response.json();
})
.then((data)=>{
    console.log(data);
    // kode her...
});

function display(x){
        let buttonElements = document.querySelectorAll(".buttonlook");
        buttonElements.forEach(element => {
            element.classList.remove("buttonlook2");
        });
        
        let target = event.target;
        console.log(target);
        target.classList.add("buttonlook2");

        getCities(x) 
        city_class.innerHTML="";
}

let city_class= document.querySelector(".first");

function getCities(x){
    fetch("Data/stad.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        
        return response.json();
    })
    .then((data)=>{
        
        // // kode her....
        let dataset=data;
       
        let result = sortByKey(dataset, "population");
        console.log(result);

        function sortByKey(dataset, population) {
            return dataset.sort(function(a, b) {
                var x = a[population]; var y = b[population];
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            });
        }
        
        for(i=0; i<dataset.length;i++){
            
            const peter = dataset[i];
            

            if(peter.countryid == (x+1)){
            //    
                let element = document.createElement("li");
                element.innerHTML = peter.stadname;
                city_class.appendChild(element);
               

            }
        }

           
    });
}
let objArr = [];

class Address {
    constructor() {
        
        this.id = "";
        this.name = "";
        this.strName="";
        this.hosNo = "";
        this.buildType = "";
        this.aprtName = "";
        this.cityName = "";
        this.state = "";
        this.pincode = ""; 
    }

    setAddressValue(id ,name, strName, hosNo, buildType, aprtName,  cityName, state, pincode) {

        this.id = id;
        this.name = name;
        this.strName=strName;
        this.hosNo = hosNo;
        this.buildType = buildType;
        this.aprtName = aprtName;
        this.cityName = cityName;
        this.state = state;
        this.pincode = pincode; 
        
    }

 displayFIlterData(objectDataArr) {

    const mySection = document.querySelector('section');

    
      mySection.innerHTML = "";

      if(objectDataArr.length === 0){
        const h2 = document.createElement('h2');
        h2.textContent = "No Data Found ,try to add something"
        mySection.appendChild(h2);
      }

      else{
        for(let i=0; i<objectDataArr.length; i++) {
            const myArticle = document.createElement('article');
    
            const id = document.createElement('p');
            const Name = document.createElement('p');
            const streetname = document.createElement('p');
            const houseno = document.createElement('p');
            const buildingtype = document.createElement('p');
            const aprtname = document.createElement('p');
            const cityname = document.createElement('p');
            const state = document.createElement('p');
            const pincode = document.createElement('p');
          
            id.textContent = 'ID: ' + objectDataArr[i].id;
            Name.textContent = 'Name: ' + objectDataArr[i].name;
            streetname.textContent = 'Street Name: ' + objectDataArr[i].strName;
            houseno.textContent = 'House Number: ' + objectDataArr[i].hosNo;
            buildingtype.textContent = 'Building Type: ' + objectDataArr[i].buildType;
            aprtname.textContent = 'Apartment Name: ' + objectDataArr[i].aprtName;
            cityname.textContent = 'City Name: ' + objectDataArr[i].cityName;
            state.textContent = 'State: ' + objectDataArr[i].state
            pincode.textContent = 'pincode: ' + objectDataArr[i].pincode;
        
            myArticle.appendChild(id);
            myArticle.appendChild(Name);
            myArticle.appendChild(streetname);
            myArticle.appendChild(houseno);
            myArticle.appendChild(buildingtype);
            myArticle.appendChild(aprtname);
            myArticle.appendChild(cityname);
            myArticle.appendChild(state);
            myArticle.appendChild(pincode);
            mySection.appendChild(myArticle);
      }


      
      }


   

}


 fetchAddById  ()  {
    var id = document.getElementById("form2");
    var objectDataArr = [];

    for(let i=0; i<objArr.length; i++) {
        
       if (objArr[i].id == id.elements["searchid"].value ) {
           objectDataArr.push(objArr[i]);
          this.displayFIlterData(objectDataArr);
       }

   }   
   this.displayFIlterData(objectDataArr);
}


 fetchAddByApp ()  {
    var id = document.getElementById("form3");
    let newArr = [];
    for(let i=0; i<objArr.length; i++) {
       if (objArr[i].aprtName === id.elements["searchapartment"].value && id.elements["searchapartment"].value !== "") {
           newArr.push(objArr[i]);
       }

   }   
   
   this.displayFIlterData(newArr);
}


 fetchAddByPin () {
    var id = document.getElementById("form4");
    let newArr = [];
    for(let i=0; i<objArr.length; i++) {
       if (objArr[i].pincode === id.elements["searchpincode"].value) {
           newArr.push(objArr[i]);
       }

   }   
   this.displayFIlterData(newArr);
}


deactivateHandler() {
 
    if (event.target.value === "standalone") {     
     document.getElementsByTagName("INPUT")[3].setAttribute("disabled", "true");
    }
 
    else {
          document.getElementsByTagName("INPUT")[3].removeAttribute("disabled");
    }
     
 }
 
 showAll() {
     this.displayFIlterData(objArr);
 }
 


 storeAddress () {

    var oform = document.getElementById("form");
  


   let i=localStorage.length/9;
   
     
                
        localStorage.setItem("ID"+i,Date.now().toString() + Math.floor((Math.random() * 100) + 1) );
        localStorage.setItem("Name"+i,oform.elements["name"].value );
        localStorage.setItem("Street Name"+i,oform.elements["streetname"].value );
        localStorage.setItem("House Number"+i,oform.elements["houseno"].value );
        localStorage.setItem("Building Type"+i,oform.elements["buildingtype"].value );
        localStorage.setItem("Apartment Name"+i,oform.elements["aprtname"].value );
        localStorage.setItem("City Name"+i,oform.elements["cityname"].value );
        localStorage.setItem("State"+i,oform.elements["state"].value );
        localStorage.setItem("pincode"+i,oform.elements["pincode"].value );
       
        console.log(localStorage);
        location.reload();

    //   let obj = new Address();
    //  obj.setAddressValue( 
    //      localStorage.getItem("ID"+i),
    //     localStorage.getItem("Name"+i),
    //  localStorage.getItem("Street Name"+i),
    //  localStorage.getItem("House Number"+i),
    //  localStorage.getItem("Building Type"+i),
    //  localStorage.getItem("Apartment Name"+i), 
    //  localStorage.getItem("City Name"+i), 
    //  localStorage.getItem("State"+i),
    //  localStorage.getItem("pincode"+i)

    //  );
      


    objArr.push(obj);

    oform.reset();


   

    obj.displayFIlterData(objArr);

}



}




let Obj = new Address();


function callIt()
{
    for(let i=0; i<localStorage.length/9; i++ ){
        
      let obj = new Address();
      obj.setAddressValue( 
      localStorage.getItem("ID"+i),
      localStorage.getItem("Name"+i),
      localStorage.getItem("Street Name"+i),
      localStorage.getItem("House Number"+i),
      localStorage.getItem("Building Type"+i),
      localStorage.getItem("Apartment Name"+i), 
      localStorage.getItem("City Name"+i), 
      localStorage.getItem("State"+i),
      localStorage.getItem("pincode"+i)
 
      );
       
 
 
     objArr.push(obj);
 
    }
    let obj2 = new Address();
    obj2.displayFIlterData(objArr);
  
}
window.onload= callIt;


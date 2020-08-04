class Address {
    constructor(name, strName, hosNo, buildType, aprtName,  cityName, state, pincode) {
        this.id = Date.now();
        this.name = name;
        this.strName=strName;
        this.hosNo = hosNo;
        this.buildType = buildType;
        this.aprtName = aprtName;
        this.cityName = cityName;
        this.state = state;
        this.pincode = pincode; 
    }

}

let objArr = [];


function displayFIlterData(objectDataArr) {

    

    const mySection = document.querySelector('section');

    
      mySection.innerHTML = "";

      if(objectDataArr.length === 0){
        mySection.innerHTML = "No Data Found";
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


function fetchAddById  ()  {
    var id = document.getElementById("form2");
    var objectDataArr = [];

    for(let i=0; i<objArr.length; i++) {
        
       if (objArr[i].id == id.elements["searchid"].value ) {
           objectDataArr.push(objArr[i]);
          displayFIlterData(objectDataArr);
       }

   }   
   displayFIlterData(objectDataArr);
}


function fetchAddByApp ()  {
    var id = document.getElementById("form3");
    let newArr = [];
    for(let i=0; i<objArr.length; i++) {
       if (objArr[i].aprtName === id.elements["searchapartment"].value && id.elements["searchapartment"].value !== "") {
           newArr.push(objArr[i]);
       }

   }   
   displayFIlterData(newArr);
}


function fetchAddByPin () {
    var id = document.getElementById("form4");
    let newArr = [];
    for(let i=0; i<objArr.length; i++) {
       if (objArr[i].pincode === id.elements["searchpincode"].value) {
           newArr.push(objArr[i]);
       }

   }   
   displayFIlterData(newArr);
}


function displayData(objectData, value) {

    

      const mySection = document.querySelector('section');

      if(objArr.length < 2) {
        mySection.innerHTML = "";
      }
      
      const myArticle = document.createElement('article');

      if(value === "")
      {
        
      const id = document.createElement('p');
      const Name = document.createElement('p');
      const streetname = document.createElement('p');
      const houseno = document.createElement('p');
      const buildingtype = document.createElement('p');
      
      const cityname = document.createElement('p');
      const state = document.createElement('p');
      const pincode = document.createElement('p');
    
      id.textContent = 'ID:' + objectData.id;
      Name.textContent = 'Name:' + objectData.name;
      streetname.textContent = 'Street Name:' + objectData.strName;
      houseno.textContent = 'House Number:' + objectData.hosNo;
      buildingtype.textContent = 'Building Type:' + objectData.buildType;
      
      cityname.textContent = 'City Name:' + objectData.cityName;
      state.textContent = 'State:' + objectData.state
      pincode.textContent = 'pincode' + objectData.pincode;

      myArticle.appendChild(id);
      myArticle.appendChild(Name);
      myArticle.appendChild(streetname);
      myArticle.appendChild(houseno);
      myArticle.appendChild(buildingtype);
    
      myArticle.appendChild(cityname);
      myArticle.appendChild(state);
      myArticle.appendChild(pincode);
      }

      else {
          
      const id = document.createElement('p');
      const Name = document.createElement('p');
      const streetname = document.createElement('p');
      const houseno = document.createElement('p');
      const buildingtype = document.createElement('p');
      const aprtname = document.createElement('p');
      const cityname = document.createElement('p');
      const state = document.createElement('p');
      const pincode = document.createElement('p');
    
      id.textContent = 'ID: ' + objectData.id;
      Name.textContent = 'Name: ' + objectData.name;
      streetname.textContent = 'Street Name: ' + objectData.strName;
      houseno.textContent = 'House Number: ' + objectData.hosNo;
      buildingtype.textContent = 'Building Type: ' + objectData.buildType;
      aprtname.textContent = 'Apartment Name: ' + objectData.aprtName;
      cityname.textContent = 'City Name: ' + objectData.cityName;
      state.textContent = 'State: ' + objectData.state
      pincode.textContent = 'pincode: ' + objectData.pincode;

      myArticle.appendChild(id);
      myArticle.appendChild(Name);
      myArticle.appendChild(streetname);
      myArticle.appendChild(houseno);
      myArticle.appendChild(buildingtype);
      myArticle.appendChild(aprtname);
      myArticle.appendChild(cityname);
      myArticle.appendChild(state);
      myArticle.appendChild(pincode);
      }

      

      mySection.appendChild(myArticle);
  
}




function storeAddress () {

    var oform = document.getElementById("form");

    

  

    let obj = new Address(oform.elements["name"].value,
     oform.elements["streetname"].value,
     oform.elements["houseno"].value,
     oform.elements["buildingtype"].value,
     oform.elements["aprtname"].value, 
     oform.elements["cityname"].value, 
     oform.elements["state"].value,
     oform.elements["pincode"].value);

    const val = oform.elements["aprtname"].value;
     
    objArr.push(obj);

    oform.reset();

    displayData(obj, val);

}

function deactivateHandler() {
 
   if (event.target.value === "standalone") {     
    document.getElementsByTagName("INPUT")[3].setAttribute("disabled", "true");
   }

   else {
         document.getElementsByTagName("INPUT")[3].removeAttribute("disabled");
   }
    
}

function showAll() {
    displayFIlterData(objArr);
}



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

    setAddressValue(name, strName, hosNo, buildType, aprtName,  cityName, state, pincode) {

        this.id = Date.now().toString() + Math.floor((Math.random() * 100) + 1);
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


 displayData(value) {

    

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
    
      id.textContent = 'ID:' + this.id;
      Name.textContent = 'Name:' + this.name;
      streetname.textContent = 'Street Name:' + this.strName;
      houseno.textContent = 'House Number:' + this.hosNo;
      buildingtype.textContent = 'Building Type:' + this.buildType;
      
      cityname.textContent = 'City Name:' + this.cityName;
      state.textContent = 'State:' + this.state
      pincode.textContent = 'pincode' + this.pincode;

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
    
      id.textContent = 'ID: ' + this.id;
      Name.textContent = 'Name: ' + this.name;
      streetname.textContent = 'Street Name: ' + this.strName;
      houseno.textContent = 'House Number: ' + this.hosNo;
      buildingtype.textContent = 'Building Type: ' + this.buildType;
      aprtname.textContent = 'Apartment Name: ' + this.aprtName;
      cityname.textContent = 'City Name: ' + this.cityName;
      state.textContent = 'State: ' + this.state
      pincode.textContent = 'pincode: ' + this.pincode;

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
    let obj = new Address();
     obj.setAddressValue(oform.elements["name"].value,

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

    obj.displayData(val);

}



}




let Obj = new Address();



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

  
}





class Directory {

    constructor() {
             this.objArr = [];
    }

    

 fetchAddById = (obj) => {
    var objectDataArr = [];

    for(let i=0; i<this.objArr.length; i++) {
        
       if (this.objArr[i].id == obj.searchidInput.value ) {
           objectDataArr.push(this.objArr[i]);
          return objectDataArr;
       }
   }   
   return objectDataArr;
}



 fetchAddByApp = (obj) => {  
    let newArr = [];

    for(let i=0; i<this.objArr.length; i++) {
       if (this.objArr[i].aprtName === obj.searchapartmentInput.value
        && obj.searchapartmentInput.value != "") {
           newArr.push(this.objArr[i]);
       }
   }     
   return newArr;
}



 fetchAddByPin = (obj) => {

    let newArr = [];
    for(let i=0; i<this.objArr.length; i++) {
       if (this.objArr[i].pincode === obj.searchpincodeInput.value) {
           newArr.push(this.objArr[i]);
       }

   }   
  return newArr;
}



deactivateHandler = (obj) => {

    if (event.target.value === "standalone") {     
     obj.deactivateInput.setAttribute("disabled", "true");
    }
    else {
          obj.deactivateInput.removeAttribute("disabled");
    }
     
 }
 


 storeAddress = (newObj, viewObj) => {

let i= Math.floor(localStorage.length ) ;

        
        newObj.setAddressValue(Date.now().toString() + Math.floor((Math.random() * 100) + 1),
                                 viewObj.nameInput.value,
                                 viewObj.streetnameInput.value,
                                 viewObj.housenoInput.value,
                                 viewObj.buildingtypeInput.value,
                                 viewObj.aprtnameInput.value,
                                 viewObj.citynameInput.value,
                                 viewObj.stateInput.value,
                                 viewObj.pincodeInput.value
                            );
        localStorage.setItem("OBJ"+i, JSON.stringify(newObj));

                }


loadAddressValue() {
   
             for(let i=0; i<localStorage.length; i++ ){
           let newObj =JSON.parse(localStorage.getItem("OBJ"+i)) ;
                    this.objArr.push(newObj);
     
        }
        
        }

}






class View {
    constructor(Dobj) {

        this.Dobj = Dobj;

        this.nameInput = document.querySelector('#name');
        this.housenoInput = document.querySelector('#houseno');
        this.streetnameInput = document.querySelector('#streetname');
        this.buildingtypeInput = document.querySelector('#buildingtype');
        this.aprtnameInput = document.querySelector('#aprtname');
        this.citynameInput = document.querySelector('#cityname');
        this.stateInput = document.querySelector('#state');
        this.pincodeInput = document.querySelector('#pincode');
        
        this.formButton = document.querySelector('#form-submit');
        
        this.searchidInput = document.querySelector('#searchid');
        this.searchidSubmit = document.querySelector('#searchid-submit');
   
        this.searchapartmentInput = document.querySelector('#searchapartment');
        this.searchapartmentSubmit = document.querySelector('#searchapartment-submit');
        
        this.searchpincodeInput = document.querySelector('#searchpincode');
        this.searchpincodeSubmit = document.querySelector('#searchpincode-submit');
        
        this.showAllSubmit = document.querySelector('#show-all');

        this.deactivateSelect = document.querySelector('#buildingtype');
        this.deactivateInput = document.getElementsByTagName("INPUT")[3];

        this.form = document.getElementById("form");
        this.form2 = document.getElementById("form2");
        this.form3 = document.getElementById("form3");
        this.form4 = document.getElementById("form4");
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
            if(objectDataArr[i].aprtName != "")
            {
                myArticle.appendChild(aprtname);
            }
            
            myArticle.appendChild(cityname);
            myArticle.appendChild(state);
            myArticle.appendChild(pincode);
            mySection.appendChild(myArticle);
      }
      }
}





validFormCheck (x) {
      if (x == "") {
        alert("All fields must be filled out");
        return false;
    }
    else 
    {
        return true;
    }
}

validateForm(form) {
    for (let j=0;j<form.elements.length-1;j++) {

          
        if(form.elements[j].disabled)
        {
            continue;
        }
                
        if(form.elements[j].required){
            if(!this.validFormCheck(form.elements[j].value)){
                return false;
            }  
        }     
    }
    return true;

}

showAll = () => {
    this.displayFIlterData(this.Dobj.objArr);
}

store = (addObj) => {
    if(this.validateForm(this.form)){
        this.Dobj.storeAddress(addObj, this);
        location.reload(); 
    }
}

searchId = () => {
    if(this.validateForm(this.form2)){
        this.displayFIlterData(this.Dobj.fetchAddById(this));
        
    }
}

searchAprt = () => {
    if(this.validateForm(this.form3)){
        this.displayFIlterData(this.Dobj.fetchAddByApp(this));
    
    }
}

searchPin = () => {
    if(this.validateForm(this.form4)){
        this.displayFIlterData( this.Dobj.fetchAddByPin(this));
       
    }
}

deactivate = () => {
    this.Dobj.deactivateHandler(this);
}

}




let Dobj = new Directory();
let viewObj = new View(Dobj);



viewObj.formButton.addEventListener('click', () => {
    let addObj = new Address();
    viewObj.store(addObj); 
});

viewObj.searchidSubmit.addEventListener('click', viewObj.searchId);

viewObj.searchapartmentSubmit.addEventListener('click', viewObj.searchAprt);

viewObj.searchpincodeSubmit.addEventListener('click', viewObj.searchPin);


viewObj.showAllSubmit.addEventListener('click', viewObj.showAll );

viewObj.deactivateSelect.addEventListener('change',viewObj.deactivate );

window.onload= () => {   
    Dobj.loadAddressValue(); 
    viewObj.displayFIlterData(Dobj.objArr);
};





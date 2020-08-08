
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

    constructor(viewObj) {
        this.viewObj=viewObj;
        this.objArr = [];
    }

    

 fetchAddById = () => {
    var objectDataArr = [];

    for(let i=0; i<this.objArr.length; i++) {
        
       if (this.objArr[i].id == this.viewObj.searchidInput.value ) {
           objectDataArr.push(this.objArr[i]);
          return objectDataArr;
       }
   }   
   return objectDataArr;
}



 fetchAddByApp = () => {  
    let newArr = [];

    for(let i=0; i<this.objArr.length; i++) {
       if (this.objArr[i].aprtName === this.viewObj.searchapartmentInput.value
        && this.viewObj.searchapartmentInput.value != "") {
           newArr.push(this.objArr[i]);
       }
   }     
   return newArr;
}



 fetchAddByPin = () => {

    let newArr = [];
    for(let i=0; i<this.objArr.length; i++) {
       if (this.objArr[i].pincode === this.viewObj.searchpincodeInput.value) {
           newArr.push(this.objArr[i]);
       }

   }   
  return newArr;
}



deactivateHandler = () => {

    if (event.target.value === "standalone") {     
     this.viewObj.deactivateInput.setAttribute("disabled", "true");
    }
    else {
          this.viewObj.deactivateInput.removeAttribute("disabled");
    }
     
 }
 


 storeAddress = () => {

let i= Math.floor(localStorage.length ) ;

        let newObj = new Address();
        newObj.setAddressValue(Date.now().toString() + Math.floor((Math.random() * 100) + 1),
                                 this.viewObj.nameInput.value,
                                 this.viewObj.streetnameInput.value,
                                 this.viewObj.housenoInput.value,
                                 this.viewObj.buildingtypeInput.value,
                                 this.viewObj.aprtnameInput.value,
                                 this.viewObj.citynameInput.value,
                                 this.viewObj.stateInput.value,
                                 this.viewObj.pincodeInput.value
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
    constructor() {
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
    this.displayFIlterData(Dobj.objArr);
}

}


let viewObj = new View()

let Dobj = new Directory(viewObj);


window.onload= () => {
    
    Dobj.loadAddressValue(); 
    viewObj.displayFIlterData(Dobj.objArr);
};



viewObj.formButton.addEventListener('click', () => {
    if(viewObj.validateForm(viewObj.form)){
        Dobj.storeAddress();
        location.reload(); 
    }
});

viewObj.searchidSubmit.addEventListener('click', () => {
    if(viewObj.validateForm(viewObj.form2)){
        viewObj.displayFIlterData(Dobj.fetchAddById());
        
    }
});

viewObj.searchapartmentSubmit.addEventListener('click', () => {
    if(viewObj.validateForm(viewObj.form3)){
        viewObj.displayFIlterData(Dobj.fetchAddByApp());
    
    }
});

viewObj.searchpincodeSubmit.addEventListener('click', () => {
    if(viewObj.validateForm(viewObj.form4)){
        viewObj.displayFIlterData( Dobj.fetchAddByPin());
       
    }
});


viewObj.showAllSubmit.addEventListener('click', viewObj.showAll);

viewObj.deactivateSelect.addEventListener('change', Dobj.deactivateHandler);






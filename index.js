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
}





class Directory {
    constructor(viewObj) {
        this.viewObj=viewObj;
    }

  

 fetchAddById = () => {

    if(!this.viewObj.validateForm(this.viewObj.form2.elements[0].value)){
        return;
    }

    var objectDataArr = [];
  

    for(let i=0; i<objArr.length; i++) {
        
       if (objArr[i].id == this.viewObj.searchidInput.value ) {
           objectDataArr.push(objArr[i]);
          this.viewObj.displayFIlterData(objectDataArr);
       }

   }   
   this.viewObj.displayFIlterData(objectDataArr);
}



 fetchAddByApp = () => {
    if(!this.viewObj.validateForm(this.viewObj.form3.elements[0].value)){
        return;
    }

    let newArr = [];


    for(let i=0; i<objArr.length; i++) {
       if (objArr[i].aprtName === this.viewObj.searchapartmentInput.value
        && this.viewObj.searchapartmentInput.value != "") {
           newArr.push(objArr[i]);
       }

   }     
   this.viewObj.displayFIlterData(newArr);
}



 fetchAddByPin = () => {

    if(!this.viewObj.validateForm(this.viewObj.form4.elements[0].value)){
        return;
    }

    let newArr = [];
    for(let i=0; i<objArr.length; i++) {
       if (objArr[i].pincode === this.viewObj.searchpincodeInput.value) {
           newArr.push(objArr[i]);
       }

   }   
   this.viewObj.displayFIlterData(newArr);
}



deactivateHandler = () => {

    if (event.target.value === "standalone") {     
     this.viewObj.deactivateInput.setAttribute("disabled", "true");
    }
    else {
          this.viewObj.deactivateInput.removeAttribute("disabled");
    }
     
 }
 

 showAll = () => {
     this.viewObj.displayFIlterData(objArr);
 }
 


 storeAddress = () => {

    
      

   let i= Math.floor(localStorage.length/9 ) ;
        localStorage.setItem("ID"+i,Date.now().toString() + Math.floor((Math.random() * 100) + 1) );
        localStorage.setItem("Name"+i, this.viewObj.nameInput.value);
        localStorage.setItem("Street Name"+i,this.viewObj.streetnameInput.value );
        localStorage.setItem("House Number"+i,this.viewObj.housenoInput.value );
        localStorage.setItem("Building Type"+i,this.viewObj.buildingtypeInput.value );
        localStorage.setItem("Apartment Name"+i,this.viewObj.aprtnameInput.value );
        localStorage.setItem("City Name"+i,this.viewObj.citynameInput.value );
        localStorage.setItem("State"+i,this.viewObj.stateInput.value );
        localStorage.setItem("pincode"+i,this.viewObj.pincodeInput.value );
      
        location.reload(); 
    

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
            myArticle.appendChild(aprtname);
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

validateForm() {
    for (let j=0;j<this.form.elements.length-1;j++) {

          
        if(this.form.elements[j].disabled)
        {
            continue;
        }
                
        if(!this.validFormCheck(this.form.elements[j].value)){
            return false;
        }       
    }
    return true;

}

}


let viewObj = new View()

let Dobj = new Directory(viewObj);


viewObj.formButton.addEventListener('click', () => {
    if(viewObj.validateForm()){
        Dobj.storeAddress()
    }
});


viewObj.searchidSubmit.addEventListener('click', Dobj.fetchAddById);
viewObj.searchapartmentSubmit.addEventListener('click', Dobj.fetchAddByApp);
viewObj.searchpincodeSubmit.addEventListener('click', Dobj.fetchAddByPin);
viewObj.showAllSubmit.addEventListener('click', Dobj.showAll);
viewObj.deactivateSelect.addEventListener('change', Dobj.deactivateHandler);





//This function exicutes whenever page refreshes.
function callIt()
{
    for(let i=0; i<localStorage.length/9; i++ ){
        
      let addObj = new Address();
      addObj.setAddressValue( 
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
       
     objArr.push(addObj);
 
    }
    
    viewObj.displayFIlterData(objArr);
  
}
window.onload= callIt;


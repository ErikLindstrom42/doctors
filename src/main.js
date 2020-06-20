//Very simple script meant to print out a predetermined doctor as practice for factory functions
    const createNewDoc = (name, speciality, address) =>{
        return {
        name: name,
        speciality:speciality,
        address:address,
       
        }
    }
    const newDoc = createNewDoc("DrCox", "hellafoxy", "Sacred Heart")
   console.log(newDoc)

   document.getElementById("doctorObject").innerHTML =
   `His name is ${newDoc.name}, his specialty is ${newDoc.speciality} and his address is ${newDoc.address}` 

   
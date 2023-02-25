import React from "react";
const ServiceForm=() =>{
    return(
        <div>
        <h2> Book a Service</h2>
         <form>
   <div class="form-row">
   <div class="form-group col-md-6">
       <label for="inputName">Your Name</label>
       <input type="text" class="form-control" id="inputName" placeholder="Name" />
     </div>
     <div class="form-group col-md-4">
       <label for="inputsex">Sex</label>
       <select id="inputsex" class="form-control">
         <option selected>Choose...</option>
         <option>Male</option>
         <option>Female</option>
         <option>Others</option>
       </select>
     </div>
     <div class="form-group col-md-6">
       <label for="inputAge">Age</label>
       <input type="text" class="form-control" id="age" placeholder="Age" />
     </div>
     <div class="form-group col-md-6">
       <label for="inputEmail4">Email</label>
       <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
     </div>
     <div class="form-group col-md-6">
       <label for="inputPhone">Phone Number</label>
       <input type="text" class="form-control" id="inputName" placeholder="Phone Number" />
     </div>
   </div>
   <div class="form-row">
     <div class="form-group col-md-6">
       <label for="inputCity">City</label>
       <input type="text" class="form-control" id="inputCity" />
     </div>
     <div class="form-group col-md-4">
       <label for="inputState">State</label>
       <select id="inputState" class="form-control">
         <option selected>Choose...</option>
         <option>...</option>
       </select>
     </div>
     <div class="form-group">
     <label for="inputRequirements">Mention your Requirements</label>
     <input type="text" class="form-control" id="inputRequirements" placeholder="" />
   </div>
   </div>
   <div class="form-group col-md-4">
       <label for="service">Service you want</label>
       <select id="service" class="form-control">
         <option selected>Choose...</option>
         <option>Nurse</option>
         <option>Physciotherapist</option>
         <option>Dressing wounds</option>
         <option>Maid</option>
         <option>Injections</option>
         
       </select>
     </div>
   <button type="submit" class="btn btn-primary" href="/findService">Find Services available near you</button>
 </form>
        </div>
    )
};
export default ServiceForm;


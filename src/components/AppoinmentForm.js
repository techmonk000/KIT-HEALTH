import React from "react";
const Appoinmentform=() =>{
    return(
       <div>
       <h2> Book an Appoinment</h2>
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
    <label for="inputSymptom">Mention your Symptoms</label>
    <input type="text" class="form-control" id="inputSymptom" placeholder="eg.Fever" />
  </div>
  </div>
  <div class="form-group col-md-4">
      <label for="inputSpecialist">Specialist you want</label>
      <select id="inputSpecialist" class="form-control">
        <option selected>Choose...</option>
        <option>Gynocologist</option>
        <option>Cardiologist</option>
        <option>Medicine</option>
        <option>Orthopedic</option>
        <option>Pediatrics</option>
        <option>Homeopathy</option>
      </select>
    </div>
  <button type="submit" class="btn btn-primary" href="/findDoc">Find Nearest Doctor</button>
</form>
       </div>
        )
};
export default Appoinmentform;

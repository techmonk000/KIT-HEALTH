import React from "react";

const Testform=() =>{
 return(
   <div>
   <h2> Book a Test </h2>
    <form>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputName"> Name of Patient </label>
      <input type="text" class="form-control" id="inputName" placeholder="Name of Patient" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4"> Email Id </label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email Id" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputAge"> Age </label>
      <input type="text" class="form-control" id="age" placeholder="Age" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputgender"> Gender </label>
      <select id="inputsgender" class="form-control">
        <option selected>Choose...</option>
        <option> Male </option>
        <option> Female </option>
        <option> Others </option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPhone"> Contact Number </label>
      <input type="text" class="form-control" id="inputName" placeholder="Contact Number" />
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress"> Address 1 </label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="form-group">
    <label for="inputAddress2"> Address 2 </label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity"> City </label>
      <input type="text" class="form-control" id="inputCity" />
    </div>
    <div class="form-group col-md-4">
      <label for="inputState"> State </label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip"> Zip </label>
      <input type="text" class="form-control" id="inputZip" />
    </div>
  </div>
  <div class="form-group col-md-4">
      <label for="inputTest">Categories of Test Available </label>
      <select id="inputTest" class="form-control">
        <option selected>Choose according to your needs ...</option>
        <option> Hemogram or Complete Blood Count </option>
        <option> Diabetes Panel </option>
        <option> Thyroid Panel </option>
        <option> Liver Panel </option>
        <option> Essential Nutrients </option>
        <option> Bone Mineral Test </option>
      </select>
    </div>
  <button type="submit" class="btn btn-primary" href="/submited">Submit</button>
</form>
</div>
 )
};
export default Testform;

<template>
<div>  
<form align="center">

    
    <h1 id="head"> REGISTRATION FORM </h1>
<div align="right">   
<label for="entity"> Choose entity:</label>
<select for="entity" id ="ent" required align="right">
<option disabled selected value  >  </option>
<option value ="averon solutions">Averon solutions</option>
<option value ="Revolt developers">Revolt Developers</option>
</select>
</div>
<br>

<table align="center">
      
<tr>
<td><label  for="emplyfname"> Employeefirst name</label></td>
<td><input type="text" required v-model="emplyfname" name="emplyfname" class="txt"></td>
<td><label for ="emplylname" >Employeelast name</label></td>
<td><input type="text" required id="emplylname" name="emplylname" class="txt"></td>
</tr>
<br/>
<tr>

<td><label for="id"> Id Number</label></td>
<td><input type="text"  required id="id" name="id" class="txt"></td>
    <td>
<label for="email">Email</label></td>
<td><input type="email" required  id="email" name="email" class="txt"></td>

</tr>
<br/>

<tr>
<td><label for="pnumber">Phone number</label></td>
<td><input type="text" required id="pnumber" name="pnumber" class="txt"></td>
 <td><label for="date of birth">Date of birth</label></td>
<td><input type="date" required id="date of birth" name="date of birth" class="txt"> </td>
</tr>
<br/>
<tr align="left"><label for="gender">Gender</label>
<td><input type="radio" required name="gender" value="male" >
<label for="male">Male</label><br/>
<input type="radio" required name="gender" value="female">
<label for="female">Female</label></td>
<td><label for="role"> Choose Role</label></td>

<td>
    <select for="role" class="rol" required align="right">
<option disabled selected value  >  </option>
<option value ="Management">Management</option>
<option value ="Department heads">Department heads</option>
<option value ="Department heads">Department heads</option>
<option value ="Accounting clerks">Accounting clerks</option>
<option value ="Resource managers">Department heads</option>
<option value ="Admin">Admin</option>
<option value ="Payroll Admin">Payroll Admin</option>
<option value ="HR Manager">HR Manager</option>
<option value ="HR Analyst">HR Analyst</option>
<option value ="Payroll Analyst">Payroll Analyst</option>
</select></td>
</tr>
<br/>
<tr>
   
<td><label for="Addressline1"> Addressline 1</label></td>
<td><input type="text" required id="addressline1" name="addressline1" class="txt"></td>
<td><label for="Addressline2"> Addressline 2</label></td>
<td><input type="text" required id="addressline2" name="addressline2" class="txt"></td>

</tr>
<br/>
<tr>

<td><label for="country">Country</label></td>
<td><input type="text" required id="country" name="country" class="txt"> </td>


<td><label for="state">State</label></td>
<td><input type="text" required id="state" name="state" class="txt">


</td></tr>
<br/>
<tr>
    <td><label for="city">City</label></td>
<td><input type="text" required id="city" name="city" class="txt"></td>
<td><label for="zcode">Zipcode</label></td>
<td><input type="text" required id="zcode" name="zcode" class="txt"></td>

</tr>
<br/>
<tr>
<td><label for="password">Password</label></td>
<td><input type="text" required id="password" name="cpassword" class="txt"></td>
<td><label for="pwd"> Confirm Password</label></td>
<td><input type="text" required id="pwd" name="pwd" class="txt"></td></tr>
</table>
<br/><br/>
<div class="btn" align="right">
<router-link to="/SecurityPage"><button>Next</button></router-link>
<router-view/>
</div>

 <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
</form>
</div>
</template>


    






<script>
export default {


name: 'registrationPage',

}



</script>

<style>
form {
display: inline-block;
max-width: 60%;
margin: 0px;
background: white;
text-align: center;
padding: 40px;
border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight:bold;

}

 .txt   {
    display: inline-table;
    padding: 5px 3px;
    width: 100%;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid #ddd;
    color: #555;
    
}
button{
    
   background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 30%;
  opacity: 0.9;
    
}
td {
    text-align: left;
    
}   

.btn{
    text-align: center;
}
#ent{

    display: inline-table;
    padding: 5px 3px;
    width: 30%;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid #ddd;
    color: #555;
    
}
#head{

  color: #04AA6D;
}
.rol{

    display: inline-table;
    padding: 5px 3px;
    width: 100%;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid #ddd;
    color: #555;

}


</style>

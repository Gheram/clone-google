function toggleVisibility(elmt)

{

   if(typeof elmt == "string")

      elmt = document.getElementById(elmt);

   if(elmt.style.visibility == "none")

      elmt.style.visibility = "block";

   else

      elmt.style.visibility = ",none";

}
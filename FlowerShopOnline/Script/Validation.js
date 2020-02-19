var resultCardNumber = false;
var resultAddress = false;
var resultCountry = false;
var resultEmail = false;
var resultMonth = false;
var resultYear = false;
var resultFax = false;
var resultName = false;
var resultPhoneNumber = false;
var resultSecurityCode = false;
var resultTown = false;
var resultZipCode = false;
function CheckCardNumber()          //Validate card number
{
    var cardNumber = document.getElementById("cnumber").value;
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (!cardNumber.match(regex)) {
        document.getElementById("validCard").style.display = "block"
    }
    else {
        document.getElementById("validCard").style.display = "none"
        resultCardNumber= true;
    }
}
function CheckSecurityCode()         //Validate security code
{
    var securityCode = document.getElementById("scode").value;
    var regex = /[0-9]{3}/;
    if (!securityCode.match(regex)) {
        document.getElementById("securecode").style.display = "block"
    }
    else {
        document.getElementById("securecode").style.display = "none"
        resultSecurityCode= true;
    }
}
function CheckExpiryMonth()         //Validate expiry month
{
    var month = document.getElementById("month").selectedIndex;

    if (month === 0) {
        document.getElementById("validdate").style.display = "block"
    }
    else {
        document.getElementById("validdate").style.display = "none"
        resultMonth= true;
    }
}
function CheckExpiryYear()          //Validate expiry year
{
    var year = document.getElementById("year").selectedIndex;
    if (year ==0) {
        document.getElementById("validdate").style.display = "block"
    }
    else {
        document.getElementById("validdate").style.display = "none"
        resultYear= true;
    }
}
function CheckName()                //Validate card holder's name
{
    var name = document.getElementById("name").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!name.match(regex)) {
        document.getElementById("holderName").style.display = "block"
    }
    else
        {
            document.getElementById("holderName").style.display = "none"
        resultName= true;
        }
        
}
function CheckTown()            //Validate Town/City field
{
    var name = document.getElementById("townName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!name.match(regex)) {
        document.getElementById("holderTown").style.display = "block"
    }
    else {
        document.getElementById("holderTown").style.display = "none"
        resultTown= true;
    }
}
function CheckAddress()       //Validate Address field
{
    var address = document.getElementById("address").value;
    var regex = /^[a-zA-Z0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!address.match(regex)) {
        document.getElementById("holderaddress").style.display = "block"
       }
    else {
        document.getElementById("holderaddress").style.display = "none"
        resultAddress= true;
    }
        
}
function CheckZipCode()      //Validate Zip code
{
    var zipcode = document.getElementById("zipcode").value;
    var regex = /^[0-9]{6}(?:-[0-9]{4})?$/;
    if (!zipcode.match(regex)) {
        document.getElementById("validzipcode").style.display = "block"
    }
    else {
        document.getElementById("validzipcode").style.display = "none"
        resultZipCode= true;
    }
}
function CheckPhoneNumber()     //Validate phone number
{
    var phone = document.getElementById("telephone").value;
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!phone.match(regex)) {
        document.getElementById("validphone").style.display = "block"
    }
    else {
        document.getElementById("validphone").style.display = "none"
        resultPhoneNumber= true;
    }
}
function CheckFax()           //Validate Fax number
{
    var fax = document.getElementById("fax").value;
    var regex = /^\+?[0-9]{6,}$/;
    if (!fax.match(regex)) {
        document.getElementById("validfax").style.display = "block"
    }
    else {
        document.getElementById("validfax").style.display = "none"
        resultFax=true;
    }
}
function CheckEmail()          //Validate Email address
{
    var email = document.getElementById("email").value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(regex)) {
        document.getElementById("validemail").style.display = "block"
    }
    else {
        document.getElementById("validemail").style.display = "none"
        resultEmail= true;
    }
        
}
function ValidateSubmit()               //Validate all fields
{
    CheckCardNumber();
    CheckAddress();
    CheckEmail();
    CheckExpiryMonth();
    CheckExpiryYear();
    CheckFax();
    CheckName();
    CheckPhoneNumber();
    CheckSecurityCode();
    CheckTown();
    CheckZipCode();
    if (resultCardNumber && resultAddress && resultEmail && resultMonth && resultYear && resultFax && resultName && resultPhoneNumber && resultSecurityCode && resultTown && resultZipCode)
    {
        alert("Payment Successful")
    }   
}

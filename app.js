function validateMenu(){
    var form = document.getElementById("menuForm")
    let menuSoup = form.querySelector(".menuSoup");
    let soupInputs = $(".menuSoup input")
    let soupIsChecked = false;
    for(let i=0; i<soupInputs.length; i++){
        if (soupInputs[i].checked){
            soupIsChecked = true;
            break;
        }
    }
    if (soupIsChecked == false){
        alert("You must choose a soup!");
        menuSoup.scrollIntoView();
        return false;
    }   
    let menuMain = form.querySelector(".menuMain");
    let mainIsChecked = false
    let mainInputs = $(".menuMain input");
    for(let i=0; i<mainInputs.length; i++){
        if (mainInputs[i].checked){
            mainIsChecked = true;
            break;
        }
    }
    if (mainIsChecked == false){
        alert("You must choose a main dish!");
        menuMain.scrollIntoView();
        return false;
    }

    let menuDesserts = form.querySelector(".menuDesserts");
    let dessertInputs = $(".menuDesserts input")
    let dessertIsChecked = false;
    for(let i=0; i<dessertInputs.length; i++){
        if (dessertInputs[i].checked){
            dessertIsChecked = true;
            break;
        }
    }
    if (dessertIsChecked == false){
        alert("You must choose a dessert!");
        menuDesserts.scrollIntoView();
        return false;
    }
}

$(document).ready(function(){
    $("#checkoutForm").validate({
        rules:{
            firstname:{
                required:true,
                minlength:3,
            },
            lastname:{
                required:true,
                minlength:4,
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8,
            },
            address:{
                required: true
            },
            city:{
                required: true
            },
            cardFirstName:{
                required:true,
                minlength:4,
            },
            cardLastName:{
                required:true,
                minlength:3,
            },
            cardNumber:{
                required:true,
                rangelength:[16,16],
            },
            expMonth:{
                required:true,
                min:1,
                max:12,
            },
            expYear:{
                required:true,
                min:2023,
                rangelength:[4,4],
            },
            cvv:{
                required:true,
                rangelength:[3,3],
            },
        },
        messages:{
            firstname:{
                required:"Please enter your first name",
                minlength:"Name must be at least 3 characters!",
            },
            lastname:{
                required:"Please enter your last name",
                minlength:"Last name too short",
            },
            email:{
                required:"Please enter your email",
                email:"Please enter valid email"
            },
            password:{
                required:"This field is requiered",
            },
            address:{
                required: "Please enter your address",
            },
            city:{
                required: "Please enter your city",
            },
            cardFirstName:{
                required:"Enter your first name",
                minlength:"too short",
            },
            cardLastName:{
                required:"Enter your last name",
                minlength:"too short",
            },
            cardNumber:{
                required:"Please enter your card number",
                rangelength:"Your card number must be 16 digits",
            },
            expMonth:{
                required:"Please enter your card's exp month",
                min:"enter valid month",
                max:"enter valid month",
            },
            expYear:{
                required:"Please enter your card's exp year",
                min:"your card is expired",
                rangelength:"please enter valid year",
            },
            cvv:{
                required:"Please enter your card's CVV",
                rangelength:"please enter valid cvv",
            }
        },
    })
    $('input[type=password]').keyup(function(){
        var pswd = $(this).val();
        //validate the length
        if ( pswd.length < 8 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }
        //validate letter
        if ( pswd.match(/[a-z]/) ) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }
        //validate capital letter
        if ( pswd.match(/[A-Z]/) ) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }
        //validate number
        if ( pswd.match(/\d/) ) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }
    }).focus(function(){
        $('#pswd_info').show();
    }).blur(function(){
        $('#pswd_info').hide();
    })
})
function validateForm(){ 
    if($("#checkoutForm").valid()){
        $("#checkoutForm").hide()
        $(".thank-you-box").show()
        setTimeout(function(){window.location.href = 'homePage.html'} , 10000);   
    }
}
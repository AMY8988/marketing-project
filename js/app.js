//loader
$(window).on("load" , function(){
    $(".loader-container").fadeOut(500 , function(){
        $(this).remove();
    })
})

$(document).ready(function () {

    //navbar scroll for home section 
    let screenHeight = $("#home").height();
    console.log(screenHeight);

    $(window).scroll(function(){
            let currentHeight = $(this).scrollTop();

            if(currentHeight >= screenHeight-300){

                $(".scroll-nav").addClass("nav-scroll");
                
            }else{
                $(".scroll-nav").removeClass("nav-scroll");
                setActive("home");
            }
            
    });  
    
    

    //text typing   
    let text = " Your Bussiness";
    let i = 0;

    function typeText(){
        if(i<text.length){
            document.getElementById("text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeText,50);
        }
    }
    setTimeout(typeText,1000);

         
    

});



//nav-bar icon toggle
$(".navbar-toggler").click(function(){

    let aa =$(".navbar-toggler").attr("aria-expanded");
    // console.log(aa);
    
    if(aa !== true){
        $(".menu-icon").toggleClass("fa-xmark");
    };
        
});


//navbar scroll active
function setActive(currentSectionId){

    $(`.nav-link`).removeClass("active");
    $(`.nav-link[href="#${currentSectionId}"]`).addClass("active");
 
};              
		

function navScroll(){
    let currentSection = $(`section[id]`);

    currentSection.waypoint(function(direction){
       if(direction === "down"){
           let currentSectionId = $(this.element).attr("id");
           console.log(currentSectionId);
           setActive(currentSectionId);
       }
        
    });

    currentSection.waypoint(function(direction){
        if(direction === "up"){
            let currentSectionId = $(this.element).attr("id");
            console.log(currentSectionId);
            setActive(currentSectionId);
        }
         
     });
};

navScroll();
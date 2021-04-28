$(document).ready(function () {

    $(function() {
        var srcText = 'Hi,\nIm Chris,\nWeb Developer';
        var i = 0;
        var result = srcText[i];
        setInterval(function() {
            if(i == srcText.length) {
                clearInterval(this);
                return
            };
            i++;
            result += srcText[i].replace("\n", "<br/>");
            $("#type-text").html(result);
        }, 150);
    });

    var colors = ['#5df0f7', '#42eff7', '#24eaf3', '#bcf6f9'];

    $(".home-container").mousemove(function (event) {
        let circle = document.createElement("div");
        circle.setAttribute("class", "circle");
        document.body.appendChild(circle);

        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        circle.style.left = (event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0)) + 'px';
        circle.style.top = (event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0)) + 'px';

        let color = colors[Math.floor(Math.random() * colors.length)];
        circle.style.borderColor = color;

        circle.style.transition = "all 0.5s linear 0s";

        circle.style.left = circle.offsetLeft - 30 + 'px';
        circle.style.top = circle.offsetTop - 30 + 'px';

        circle.style.width = "50px";
        circle.style.height = "50px";
        circle.style.borderWidth = "5px";
        circle.style.opacity = 0;

        setTimeout(function () {
            circle.remove();
        }, 500);
    });

});

function sendMail(contactForm) {
    emailjs.send("service_drsgi1h", "contact_form", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "customer_request": contactForm.customersummary.value
        })
        .then(
            function () {
                window.alert("Thank you for your enquiry."); //alerts the user once they have submitted their enquiry
                $('#contact-form')[0].reset(); //clear the contact form taken from Stack Overflow (credited in README)
            },
            function () {
                window.alert("Failed to submit enquiry.");
            });
    return false;
}


window.addEventListener("load", function () {
            this.setTimeout(function () {
                        $(".loader").addClass(" hidden");
                    }, 1000 );
    
});


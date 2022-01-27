const data = {
    "english": {
        "navHome": "Home",
        "navAbout": "About Us",
        "navServ": "Services",
        "navClients": "Clients/Industries",
        "navTest": "Testimonies",
        "navContact": "Contact",
        "home1": "We provide more than numbers. The accounting that we do is a way of making your business more intelligent, efficient and reliable. Our big array of services allow us to offer a solution package that goes way beyond bookkeeping. We are experts in Total Quality Management and it is our habit to simplify processes and provide valuable information for the growth of your business.",
        "home2": "We want to be your ally and confident. Because we know that if our clients succeed, we succeed too.",
        "home3": "We only have one agenda: YOURS.",
        "about2": "We are a team of Accountants and Business Administrators with more than 10 years of experience assisting Businesses in different industries. Since 2013 we have provided more organization, profitability and peace of mind to the teams that choose us.",
        "client1": "Architecture",
        "client2": "Care Giving",
        "client3": "Diamond Wholeselers",
        "client4": "Professional Services",
        "client5": "Liquor Wholesalers",
        "client6": "Tax Consulting",
        "client7": "Logistic & Distribution",
        "client8": "Digital Marketing",
        "client9": "Retailers",
        "client10": "Non Profits",
        "test1": "I have worked with Romina for the last year, and it has been a blessing. I have always struggled with my books, now I just email her what I want and need and she gets everything back super fast and clear. I just wish I had met her sooner so I had more time to grow my business.",
        "test2": "It's hard to imagine my company without Soluciones Contables -- they've become that essential. Romina and her team are so responsive, it's like they're right there in the office, working at my side. As a small business owner, I have to trust my bookkeeper for almost everything. Whenever I need help, I know I can always turn to Soluciones Contables. They are a natural extension of my operation.",
        "contact1": "Address",        
        "contact2": "Phone",
        "contact3": "How can we help you?",        
        "contact4": "Full Name",
        "contact5": "Type your message...",
        "contact6": "Send",
        "error1": "Invalid email address",
        "sepAbout": "/Contenido/Separators/SeparadorAboutUs.png",
        "sepServices": "/Contenido/Separators/SeparadorServices.png",
        "sepClients": "/Contenido/Separators/SeparadorClientes.png",
        "sepTestimonies": "/Contenido/Separators/SeparadorTestimonies.png",
        "sepContact": "/Contenido/Separators/SeparadorContact.png",

    },
    "spanish": {
        "navHome": "Home",
        "navAbout": "Sobre Nosotros",
        "navServ": "Servicios",
        "navClients": "Clientes/Industrias",
        "navTest": "Testimonios",
        "navContact": "Contacto",
        "home1": "La contabilidad que ofrecemos es más que números, es una forma de hacer que tu negocio sea más inteligente, eficiente y confiable. Nuestro gran rango de servicios nos permite ofrecer un paquete de solución integral mucho más  completo que un tenedor de libros. Somos expertos en Calidad Total. Es nuestra forma simplificar procesos y proveer información valiosa para el crecimiento de tu negocio. ",
        "home2": "Queremos ser tus aliados y confidentes. Porque sabemos que si a nuestros clientes les va bien, a nosotros nos va bien.",
        "home3": "We only have one agenda: YOURS.",
        "about2": "SCSD es un equipo de Contadores públicos y Licenciados en Administración con más de 10 años de experiencia apoyando a pequeñas y medianas empresas de diversos rubros. Desde 2013 estamos aportando mayor organización, rentabilidad y tranquilidad a los equipos que nos eligen.",
        "client1": "Arquitectura",
        "client2": "Cuidados",
        "client3": "Mayorista Diamantes",
        "client4": "Servicios Profesionales",
        "client5": "Mayorista Licores",
        "client6": "Consultoría fiscal",
        "client7": "Logística y Distribución",
        "client8": "Marketing Digital",
        "client9": "Minoristas",
        "client10": "Sin fines de lucro",
        "test1": "I have worked with Romina for the last year, and it has been a blessing. I have always struggled with my books, now I just email her what I want and need and she gets everything back super fast and clear. I just wish I had met her sooner so I had more time to grow my business.",
        "test2": "It's hard to imagine my company without Soluciones Contables -- they've become that essential. Romina and her team are so responsive, it's like they're right there in the office, working at my side. As a small business owner, I have to trust my bookkeeper for almost everything. Whenever I need help, I know I can always turn to Soluciones Contables. They are a natural extension of my operation.",
        "contact1": "Dirección",        
        "contact2": "Telefono",
        "contact3": "¿Cómo podemos ayudarte?",        
        "contact4": "Nombre Completo",
        "contact5": "Escribe tu mensaje...",
        "contact6": "Enviar",
        "error1": "Dirección de email inválida",
        "sepAbout": "/Contenido/Separators/SeparadorAboutUsES.png",
        "sepServices": "/Contenido/Separators/SeparadorServiciosEs.png",
        "sepClients": "/Contenido/Separators/SeparadorClientesEs.png",
        "sepTestimonies": "/Contenido/Separators/SeparadorTestimoniosEs.png",
        "sepContact": "/Contenido/Separators/SeparadorContactEs.png",

    },
}

const navHome = document.getElementById("navHome");
const navAbout = document.getElementById("navAbout");
const navServ = document.getElementById("navServ");
const navClients = document.getElementById("navClients");
const navTest = document.getElementById("navTest");
const navContact = document.getElementById("navContact");
const home1 = document.getElementById("home1");
const home2 = document.getElementById("home2");
const home3 = document.getElementById("home3");
const about2 = document.getElementById("welcome2");
const client1 = document.getElementById("client1");
const client2 = document.getElementById("client2");
const client3 = document.getElementById("client3");
const client4 = document.getElementById("client4");
const client5 = document.getElementById("client5");
const client6 = document.getElementById("client6");
const client7 = document.getElementById("client7");
const client8 = document.getElementById("client8");
const client9 = document.getElementById("client9");
const client10 = document.getElementById("client10");
const test1 = document.getElementById("test1");
const test2 = document.getElementById("test2");
const toggle = document.getElementById("language-toggle");
const contact1 = document.getElementById("contact1");
const contact2 = document.getElementById("contact2");
const contact3 = document.getElementById("contact3");
const contact4 = document.getElementById("contact4");
const contact5 = document.getElementById("contact5");
const contact6 = document.getElementById("contact6");
const sepAbout = document.getElementById("about");
const sepServices = document.getElementById("services");
const sepClients = document.getElementById("clients");
const sepTestimonies = document.getElementById("testimonies");
const sepContact = document.getElementById("contact");
var currentLanguage = "english"


//translate("english");

toggle.addEventListener("click", () => {
    
    if (toggle.checked == true) {
        currentLanguage = "english";
    }
    else {
        currentLanguage = "spanish";
    }

    translate(currentLanguage);
})


function translate(language) {
    navHome.textContent = data[language].navHome;
    navAbout.textContent = data[language].navAbout;
    navServ.textContent = data[language].navServ;
    navClients.textContent = data[language].navClients;
    navTest.textContent = data[language].navTest;
    navContact.textContent = data[language].navContact;
    home1.textContent = data[language].home1;
    home2.textContent = data[language].home2;
    home3.textContent = data[language].home3;
    about2.textContent = data[language].about2;
    client1.textContent = data[language].client1;
    client2.textContent = data[language].client2;
    client3.textContent = data[language].client3;
    client4.textContent = data[language].client4;
    client5.textContent = data[language].client5;
    client6.textContent = data[language].client6;
    client7.textContent = data[language].client7;
    client8.textContent = data[language].client8;
    client9.textContent = data[language].client9;
    client10.textContent = data[language].client10;
    test1.textContent = data[language].test1;
    test2.textContent = data[language].test2;
    contact1.textContent = data[language].contact1;
    contact2.textContent = data[language].contact2;
    contact3.textContent = data[language].contact3;
    contact4.textContent = data[language].contact4;
    contact5.textContent = data[language].contact5;
    contact6.setAttribute("value", data[language].contact6);
    sepAbout.setAttribute("src", data[language].sepAbout);
    sepServices.setAttribute("src", data[language].sepServices);
    sepClients.setAttribute("src", data[language].sepClients);
    sepTestimonies.setAttribute("src", data[language].sepTestimonies);
    sepContact.setAttribute("src", data[language].sepContact);
}


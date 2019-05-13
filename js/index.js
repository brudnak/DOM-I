const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const anchor = document.querySelectorAll("header nav a");
anchor.forEach((e, p) => {
  e.textContent = siteContent.nav[`nav-item-${p + 1}`];
})

buildCallToAction()
buildMainContent()


function buildCallToAction() {
  const { cta: { h1, button }, cta } = siteContent;
  document.querySelector(".cta h1").textContent = h1;
  document.querySelector(".cta button ").textContent = button;
  document.querySelector(".cta img").src = cta["img-src"];
}

function buildMainContent() {
  h4Main()
  paraMain()
  mainImg()

}

function h4Main() {
  h4Main = document.querySelectorAll(".main-content h4")
  const { "main-content": { 
    "features-h4": h4Features, 
    "about-h4": h4About,
    "services-h4": h4Services,
    "product-h4": h4Product,
    "vision-h4": h4Vision
  } } = siteContent;
  h4Main[0].textContent = h4Features;
  h4Main[1].textContent = h4About;
  h4Main[2].textContent = h4Services;
  h4Main[3].textContent = h4Product;
  h4Main[4].textContent = h4Vision;
}

function paraMain() {
  pMain = document.querySelectorAll(".main-content p")
  const { "main-content": { 
    "features-content": paraFeatures,
    "about-content": paraAbout,
    "services-content": paraServices,
    "product-content": paraProduct,
    "vision-content": paraVision
   } } = siteContent;
   pMain[0].textContent = paraFeatures;
   pMain[1].textContent = paraAbout;
   pMain[2].textContent = paraServices;
   pMain[3].textContent = paraProduct;
   pMain[4].textContent = paraVision;
}

function mainImg() {
  const { "main-content": { "middle-img-src": img } } = siteContent
  const middleImage = document.querySelector("#middle-img");
  middleImage.src = img
}
/* -------------------- Global -------------------- */
html, body {
    height: 100%;
    margin: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: sans-serif;
    background-color: white;
    background-size: 40px 40px;
    color: #519ADE;
    padding-top: 80px; /* navbar height */
}


.home {
    scroll-snap-type: y mandatory;
}

/* -------------------- Page System -------------------- */
.page {
    height: calc(100vh - 80px);
    width: 100%;
    scroll-snap-align: start;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0;
    padding: 20px;
}



/* -------------------- Header Page -------------------- */
.header {
    background-color: #519ADE;
    color: white;
    text-align: center;
}

#bigHeader {
    font-size: 100px;
    margin: 0;
    opacity: 0;
    animation: headerAnimation 2s ease-in-out forwards;
}

.insideP {
    font-size: 16px;
    max-width: 700px;
    color: white;
    opacity: 0;
    animation: headerAnimation 2s ease-in-out forwards;
}

.header hr {
    width: 60%;
    height: 2px;
    background-color: white;
    border: none;
    margin: 20px 0;
    animation: headerAnimation 2s ease-in-out forwards;
}

.resource-header {
    background: linear-gradient(180deg, #519ade 0%, #245bbf 99%);
    color: white;
    text-align: center;
    padding: 80px 20px 60px;
}

.resource-header h1 {
    font-size: 42px;
    margin: 0;
    animation: headerAnimation 2s ease-in-out forwards;
}

.resource-header p {
    max-width: 700px;
    margin: 15px auto 0;
    font-size: 16px;
    line-height: 1.5;
    padding-top: 80px;
    margin-top: 0;
    overflow: hidden;
    animation: headerAnimation 2s ease-in-out forwards;
}

.resource-header hr {
    border: none;
    height: 2px;
    background-color: white;
    opacity: 1;
    animation: headerAnimation 2s ease-in-out forwards;
}

.homeImg{
    border: 2px solid white;
    animation: headerAnimation 2s ease-in-out forwards;
}

@keyframes headerAnimation {
    from { opacity: 0; }
    to { opacity: 1; }
}


/* -------------------- Navigation Bar -------------------- */
.dropdownDiv {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #519ADE;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    gap: 10px;
    box-shadow: 0 10px 25px rgba(10, 37, 64, 0.25);
}

.dropdown {
    position: relative;
    margin-left: 20px;
}

.dropbtn {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    background-color: #519ADE;
    color: white;
    padding: 16px 20px;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;

    transition:
        background-color 0.15s ease,
        transform 0.2s ease;
}

.Borderdropbtn{
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    background-color: #519ADE;
    color: white;
    padding: 16px 20px;
    font-size: 16px;
    border-radius: 15px;
    cursor: pointer;
    border: 2px solid white;
    transition:
        background-color 0.15s ease,
        transform 0.2s ease;
}

.dropbtn:hover,
.dropdown:hover .dropbtn {
    background-color: #245BBF;
    transform: translateY(-3px);
}

.dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f9f9f9;
    min-width: 220px;
    border-radius: 14px;
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    transition: 0.25s ease;
}

.dropdown:hover .dropdown-content {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.dropdown-content a {
    display: block;
    padding: 12px 16px;
    color: black;
    text-decoration: none;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.nav-link,
.nav-page {
    position: relative;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    color: white;
    text-decoration: none;
    padding: 16px 20px;
    border-radius: 15px;
    transition: transform 0.2s ease;
}

.nav-link:hover,
.nav-page:hover {
    transform: translateY(-2px);
}

/* Underline animation */
.nav-link::after,
.nav-page::after {
    content: "";
    position: absolute;
    left: 20%;
    bottom: 20px;
    width: 60%;
    height: 3px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.25s ease;
}

.nav-link.active::after,
.nav-page.active::after,
.nav-link:hover::after,
.nav-page:hover::after {
    transform: scaleX(1);
}


@keyframes navFloatIn {
    from {
        opacity: 0;
        transform: scale(1.05);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}


/* -------------------- Animated Page -------------------- */

.carouselPage{
    background-color: #0A2540;
    color:white;
}

.featureDivs {
    display: flex;
    width: max-content;
    animation: scrollCarousel 15s linear infinite;
}

.feature {
    margin-right: 30px;
}
.feature:hover{
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.featureDivs:hover {
    animation-play-state: paused;
}


.feature {
    min-width: 250px; 
    max-width: 270px;
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    flex-shrink: 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: transform 0.3s ease; 
}

.feature h4 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #0A2540;
}

.feature p {
    font-size: 14px;
    line-height: 1.5;
    color: #333;
}

.carouselTrack {
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
}


#spotlightHeader{
    text-decoration:underline;
}



@keyframes scrollCarousel {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}


/* -------------------- Resource Directory Page --------------- */
.resourcePage {
    background-color: #E6EEF6;
    padding: 40px 20px;
}

.resourceDiv {
    max-width: 1100px;
    margin: 0 auto;
}

.resourceDiv h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #0A2540;
}

.resourceDiv p {
    font-size: 1rem;
    color: #333;
    margin-bottom: 20px;
}

hr.black {
    border: 0;
    border-top: 2px solid #0A2540;
    margin-bottom: 30px;
}


.searchContainer {
    text-align: center;
    margin-bottom: 20px;
}

.search-input {
    width: 100%;
    max-width: 450px;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    outline: none;
    transition: all 1s ease;
}

.search-input:focus {
    border-color: #0A2540;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.resourceDirectoryDiv {
    max-height: 350px;
    overflow-y: auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    display: grid;
    gap: 10px;
}

.resourceDirectoryDiv .list-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
    border-radius: 6px;
    background-color: #fff;
    transition: transform 0.2s, box-shadow 0.2s;
}

.resourceDirectoryDiv .list-item:last-child {
    border-bottom: none;
}

.resourceDirectoryDiv .list-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.resourceDirectoryDiv .list-item a {
    font-size: 1.05rem;
    font-weight: 600;
    color: #0A2540;
    text-decoration: none;
}

.resourceDirectoryDiv .list-item p {
    margin-top: 6px;
    font-size: 0.95rem;
    color: #555;
}

/*------------------- Scrollbar styling for better appearance-------------- */
.resourceDirectoryDiv::-webkit-scrollbar {
    width: 8px;
}

.resourceDirectoryDiv::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 6px;
}

.resourceDirectoryDiv::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 6px;
}

.resourceDirectoryDiv::-webkit-scrollbar-thumb:hover {
    background: #999;
}

/* -------------------- Form Page -------------------- */
.formPage {
    background-color: #F8FAFC;
    color: black;
}

.formPage form {
    max-width: 600px;
    width: 90%;
    background-color: white;
    color: black;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

label {
    display: block;
    margin-top: 15px;
    font-weight: bold;
}

input, textarea, select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 6px;
    border: 1px solid #ccc;
}

button {
    margin-top: 20px;
    width: 100%;
    padding: 12px;
    background-color: #2c6bed;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background-color: #1f55c9;
}

/* ----------------- Resource Div(Universal Throughout) ---------------- */
.resourceDiv {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
    padding: 10px 20px;
    border-radius: 12px 0 0 12px;
}

.resourceDiv h2 {
    font-size: 28px;
    color: #0A2540;
    margin-bottom: 10px;
    padding-left: 5px;
}

.resourceDiv hr.black {
    border: none;
    height: 2px;
    background-color: #0A2540;
    margin-bottom: 20px;
}

.resourceDiv .list-item {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    text-align: left;
}

.resourceDiv a {
    color: #2c6bed;
    text-decoration: none;
    font-weight: 500;
}

.resourceDiv a:hover {
    text-decoration: underline;
}

/* -------------------- Links -------------------- */
a {
    color: white;
    text-decoration: none;
}

.resourceLinkColor{
    color: #0A2540;
    
}
.resourceLinkColor:hover{
    color:#519ADE;
    text-decoration: underline;
 
}

/*--------------------- About Us ----------------*/
.container {
  display: flex;
  min-height: 22.5vh;
  height: auto;
}

.leftPanel {
  width: 50%;
  background: #f0f0f0;
  border: 1px solid black;
  align-items: center;
  text-align: center; 
  background-color: #0A2540;
  color: white;
  border-radius: 25px;
  margin: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.rightPanel {
  width: 50%;
  background: #ffffff;
  border: 1px solid black;
  align-items: center;
  text-align: center;
  background-color: #0A2540;
  color: white;
  border-radius: 25px;
  margin: 25px;
}
.rightText{
    margin: 30px;
}

.leftText{
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

/*--------------------- Random Elements ----------------*/
button {
    background-color: #519ADE;
}

button:hover {
    background-color: #245BBF;
}


.logo {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    width: 250px;
    height: auto;
    opacity: 0.7;
}

.navBarLogo{
    width: 75px;
    height: auto;
    z-index:999;
    
}

.profileImg{
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid black;
    display: block;
    margin: 0 auto 8px;
}

<link rel="icon" href="/favicon.ico" type="image/x-icon">



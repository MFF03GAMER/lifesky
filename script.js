/* Reset some default styles */
body, h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: aqua; /* Aqua background */
    color: #000; /* Black text */
}

header {
    background-color: #000; /* Black header */
    color: #fff; /* White text */
    padding: 10px 0;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

header .logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

header .logo img {
    height: 50px;
    margin-right: 10px;
}

header h1 {
    font-size: 24px;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff; /* White text for links */
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    text-decoration: underline;
}

main {
    padding: 20px;
    background-color: #fff; /* White background for content */
    border-radius: 8px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.page {
    display: none; /* Hide all pages by default */
}

.page.active {
    display: block; /* Show active page */
}

footer {
    background-color: #000; /* Black footer */
    color: #fff; /* White text */
    text-align: center;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}
footer .social-media {
    margin-bottom: 10px;
}

footer .social-media a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    font-weight: bold;
}

footer .social-media a:hover {
    text-decoration: underline;
}
.search-bar {
    display: flex;
    align-items: center;
    float: right;
}

.search-bar input {
    padding: 5px;
    border: none;
    border-radius: 40px;
    margin-right: 5px;
}

.search-bar button {
    padding: 5px 5px;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 40px;
    cursor: pointer;
}

.search-bar button:hover {
    background-color: #ddd;
}

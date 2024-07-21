* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Raleway', sans-serif;
  background-color: #000000;
  color: #fff;
}

p {
  max-width: 600px;
  line-height: 160%;
}

.code-block {
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #ffffff;
  max-width: 600px;
}

.code-block .keyword {
  color: #bababa;
}

.code-block .string {
  color: #FFC799;
}

.code-block .comment {
  color: #6ee7b7;
}

.wrapper {
  display: flex;
}

.sidebar {
  background-color: #000000;
  padding: 70px;
  width: 400px;
}

.sidebar button {
  display: block;
  width: 100%;
  padding: 14px;
  font-size: 16px;
  margin-bottom: 1px;
  background-color: #000000;
  color: #fff;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-top: 1px solid #333;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.sidebar button.active {
  background-color: #fff;
  color: #111;
  border-radius: 5px;
  font-weight: bold;
}

.content {
  flex: 1;
  padding: 20px;
  padding-top: 70px;
}

.tabcontent {
  display: none;
}

.tabcontent.active {
  display: block;
}

.container {
  position: relative;
  max-width: 800px;
  align-items: left;
  justify-content: left;
}

h1 {
  text-align: left;
  font-weight: 600;
  margin-bottom: 30px;
  color: rgb(255, 255, 255);
}

h2 {
  text-align: left;
  font-weight: 600;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
}

h3 {
  font-size: xx-large;
  text-align: left;
  font-weight: 700;
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
}

form {
  display: flex;
  flex-direction: column;
}

.input-field:not(:last-child) {
  margin-bottom: 25px;
}

.input-field {
  position: relative;
  margin-bottom: 40px;
  display: flex;
  justify-content: left;
}

.input-field::after {
  content: attr(data-unit);
  position: left;
  right: 10;
  margin-top: 1.75%;
  margin-left: 2%;
}

.input-field input {
  width: 25%;
  border: 0;
  border-bottom: 1px solid #333;
  outline: 0;
  font-size: 1rem;
  padding: 10px;
  background: transparent;
  text-align: center;
  color: white;
}

.input-field select {
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  color: rgb(0, 0, 0);
  padding: 10px;
  outline: none;
  background-color: transparent;
}

#age {
  width: 11.5%;
}

#height {
  width: 9%;
}

#weight {
  width: 8.75%;
}

#result {
  position: absolute;
  width: 50%;
  height: 100px;
  padding-top: 20px;
  border-top: 1px solid #333;
  line-height: 1.6;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#result p1 {
  margin-right: 35px;
}

#result p2 {
  margin-left: 35px;
}

.button-group {
  display: flex;
  flex-direction: row;
  margin-bottom: -10px;
}

label {
  align-content: center;
  margin-right: 15px;
}

.button-group button {
  margin: 15px;
  padding: 14px;
  font-size: 16px;
  cursor: pointer;
  background-color: #000;
  color: #ffffff;
  border-radius: 5px;
  border: 1px solid #ddd;
  transition: background-color 0.3s ease;
  text-align: center;
}

.button-group button.active {
  background-color: #fff !important;
  color: #111;
  border-radius: 5px;
  font-weight: bold;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

a {
  color: #6ee7b7;;
}

.largebr {
  margin-bottom: 5%;
}

img {
  border: 2px solid white; /* Adjust the thickness as needed */
  display: block;
}

import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = (props) => (
  <div>
    <Header />
    {props.children}

    <style jsx global>{`
.App {
	text-align: center;
}
.center {
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
}
.App-logo {
	height: 80px;
}

input {
	border: 1px solid #1e8678;
}
.show-body {
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
}

.App-header {
	background-color: #1799fb;
	height: 200px;
	padding: 20px;
	color: #222;
}

.App-title {
	font-size: 1.5em;
	font-weight: bold;
	color: white;
}

cite {
	font-weight: bold;
}
table {
	align-content: center;
	margin: auto;
}
td {
	padding: 10px;
}

.App-intro {
	font-size: large;
}
.cap-first-letter:first-letter {
	text-transform: capitalize;
}
.col-sm-6,
col-md-4 {
	border: 1px;
}

.hometext {
	max-width: 60%;
}
.showlink {
	padding: 0.4rem 0.8rem;
	background-color: white;
	border-radius: 3px;
	color: #007acb;
	text-decoration: none !important;
	margin: 5px;
}

.showlink:hover {
	background-color: transparent;
	color: white;
	border: 2px solid white;
}

li {
	padding: 20px;
}

p {
	margin-left: auto;
	margin-right: auto;
	text-align: center;
}

div {
	text-align: center;
}

a {
	color: #1799fb;
	text-decoration: none !important;
}

ul a:hover {
	background-color: transparent;
	color: blue;
}

ul {
	list-style: none;
}

.title {
	font-weight: bold;
	color: #007acb;
}
.preSaleName{
	font-size: 15px;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
	input {
		font-size: 16px;
	}
}

dt,
dl {
	padding: 0px;
	margin-top: 0px;
	margin-bottom: 0px;
}

dt {
	display: inline-block;
}

dd {
	display: inline;
	margin-left: 5px;
}

.parent {
	text-align: center;
}
.child {
	display: inline-block;
	margin-left: 10px;
	width: 10%;
	vertical-align: middle;
}

.card {
	max-width :750px;
	height : auto;
	margin-left : auto;
	margin-right: auto;
	border-radius: 20;
	box-shadow: 0 19px 38px rgba(0, 209, 250, 0.3), 0 15px 12px rgba(255, 0, 0, 0.22);
};

.titleHead {
	border-bottom: 1px solid #1799fb;
	font-weight: bold;
	font-size: 50px;
	color: #1799fb
};

.grid {
	flex-grow: 1;
	flex-direction: row;
};
.media {
	height: 100%;
	width: 100%
};
.venueMedia{
	height:640px;
	width:360px;
}
.venueImage{
	height: 300px;
	width: 300px;
}
.venueTitle{
	color: #1799fb;
	font-size: 50px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	font-weight:500;
}
.icon{
	height:100%;
	width:100%;
};
.button {
	color: #1e8678;
	font-weight: bold;
	font-size: 12;
}

.heading{
	font-weight: bold;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	font-size: xx-large;
	color: #1799fb;
}

.tickets {
	padding: 0.4rem 1rem;
	background-color: #007acb;
	border-radius: 3px;
	color: white;
	text-decoration: none !important;
	margin: 5px;
}

.tickets:hover {
	background-color: transparent;
	color: #1799fb;
	border: 2px solid #1799fb;	
}

.leftAlign{
	text-align: left;
}


.container {
	display: grid; 
	grid-template-columns: 1.1fr 0.6fr 0.9fr; 
	grid-template-rows: auto auto 0 [div4] 1fr; 
	gap: 0px 0px; 
	grid-template-areas: 
		"div1 div1 div2"
		"div3 div4 div4"
		". div4 div4"
		". div4 div4"
		"div5 div5 div5"; 
}

.div1 { 
	grid-area: div1;
	text-align: left;
	margin-left: 80px;
	align-self: start; /* Align to the top of the grid cell */
}

.div2 { 
	grid-area: div2;
	text-align: right;
	margin-right: 80px;
	align-self: start; /* Align to the top of the grid cell */
}

.div3 { 
	grid-area: div3;
	text-align: left;
	margin-left: 80px;
	margin-right: 50px;
	align-self: end; /* Align to the bottom of the grid cell */
}

.div4 { 
	grid-area: div4;
	vertical-align: text-top;
	text-align: left;
	margin-left: 10px;
	margin-right: 150px;
	align-self: end; /* Align to the bottom of the grid cell */
}

.div5 {
	grid-area: div5;
	text-align: center;
}
.caption{
	color: #007acb;
	font-size: 20px;
	font-weight: bold;
}
.link{
	color: #007acb;
}
		`}</style>
  </div>
);

export default Layout;

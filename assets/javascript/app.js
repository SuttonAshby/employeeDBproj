
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAc_VxsFuLfoo7-iUrzyxBtElVFGjLgb1I",
    authDomain: "employeedbproj.firebaseapp.com",
    databaseURL: "https://employeedbproj.firebaseio.com",
    projectId: "employeedbproj",
    storageBucket: "",
    messagingSenderId: "573587009241"
  };
  firebase.initializeApp(config);

var database = firebase.database;


$("#submit").on("click", function{
	var name = $("#name").val().trim()
	var role = $("#role").val().trim()
	var startDate = $("#startDate").val().trim()
	var monthRate = $("#monthRate").val().trim()

	database.ref().push({
		name: name,
		role: role,
		startDate: startDate,
		monthRate: monthRate
		})

})
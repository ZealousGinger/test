
    function calculateCircumference() {
        var radius = document.getElementById('radius1').value;
        var circumference = Math.PI * 2 * radius;
        console.log("The circumference is " + circumference);
        document.getElementById('outputCircumference').innerHTML = "The circumference is " + circumference;
    }
    function calculateArea() {
        var radius = document.getElementById('radius1').value;
        var area = Math.PI * radius * radius;
        console.log("The area is " + area);
        document.getElementById('outputArea').innerHTML = "The area is " + area;
    }



        var borderRadius = ["0", "50"];
        var fastestTime = null;
        
        setTimeout(makeAppear, 4000);
        var start = new Date().getTime();


        function makeAppear() {
            
            // color
            var colors = ["red", "blue", "yellow", "green", "orange", "pink", "purple"];
            var randomColorIndex = randNum(colors.length)
            var randomColor = colors[randomColorIndex];
            document.getElementById("shape").style.backgroundColor = randomColor;

            // left
            var randomLeft = randNum(300);
            document.getElementById("shape").style.left = randomLeft + "px";

            // top
            var randomTop = randNum(250);
            document.getElementById("shape").style.top = randomTop + "px";
            
            // size
            var randomHeight = randNum(300);
            randomHeight = (randomHeight < 10) ? 10 : randomHeight;
            document.getElementById("shape").style.height = randomHeight + "px";
            document.getElementById("shape").style.width = randomHeight + "px";
            
            // border radius
            var randomBorderRadiusX = randNum(borderRadius.length);
            var randomBorderRadius = borderRadius[randomBorderRadiusX];
            document.getElementById("shape").style.borderRadius = randomBorderRadius + "%";

            document.getElementById("shape").style.display = "block";
            
            start = new Date().getTime();

        }

        function storeIfFastest(time) {
            if (time < fastestTime || fastestTime == null) {
                fastestTime = time;
                document.getElementById("fastestTime").innerHTML = fastestTime;
            }
            return fastestTime;

        }

        
        document.getElementById("shape").onclick = function() {
            //time
            var end = new Date().getTime();
            var time = (end - start) / 1000;
            document.getElementById("timer").innerHTML = "Time: " + time + "s";
            storeIfFastest(time);

            console.log("clicked")

            document.getElementById("shape").style.display = "none";

            setTimeout(makeAppear, Math.random() * 2000);

        } 
        
        function randNum(max) {
             var ranNum = Math.random() * max;
             ranNum = Math.floor(ranNum);
             return ranNum;
        }
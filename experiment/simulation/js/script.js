
var connections = [];



 var jsPlumbInstance = null;
 
function BoardController() {
   
    var endPoints = [];

    this.setJsPlumbInstance = function (instance) {
        jsPlumbInstance = instance;
    };

    this.setCircuitContainer = function (drawingContainer) {
        jsPlumbInstance.Defaults.Container = drawingContainer;
    };

    this.initDefault = function () {

        jsPlumbInstance.importDefaults({
            Connector: ["Bezier", { curviness: 20 }],
            PaintStyle: { strokeStyle: 'blue', lineWidth: 3 },
            EndpointStyle: { radius: 4, fillStyle: 'blue' },

            HoverPaintStyle: { strokeStyle: "#728C00" }
        });

        jsPlumbInstance.bind("beforeDrop", function (params) {
            var sourceEndPoint = params.connection.endpoints[0];
            var targetEndPoint = params.dropEndpoint;
            if (!targetEndPoint || !sourceEndPoint) {
                return false;
            }
            var sourceEndPointgroup = sourceEndPoint.getParameter('groupName');
            var targetEndPointgroup = targetEndPoint.getParameter('groupName');

            if (sourceEndPointgroup == targetEndPointgroup) {
                alert("Already connected internally");
                return false;
            } else {
                return true;
            }
        });

        jsPlumbInstance.bind("dblclick", function (conn) {
            jsPlumb.detach(conn);
            return false;
        });
     

        jsPlumbInstance.bind("jsPlumbConnection", function (conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName')
            connections[source] = conn.connection;

        });
    };

    this.addEndPoint = function (stroke,radius,maxConnection, divID, groupName, endPointName, anchorArray,color) {
        var endpointOptions = {
            isSource: true,
            isTarget: true,
            anchor: anchorArray,
            maxConnections: maxConnection,
            parameters: {
                "divID": divID,
                "endPointName": endPointName,
                "groupName": groupName,
                "type": 'output',
                "acceptType": 'input'
            },
            
            paintStyle: { radius: radius, fillStyle: color },
            connectorStyle:{ strokeStyle:stroke , lineWidth:3}
        };

        jsPlumbInstance.addEndpoint(divID, endpointOptions);

        setEndpoint(endPointName, endpointOptions);
    };

    var setEndpoint = function (endPointName, endpointOptions) {
        endPoints[endPointName] = {
            "endPointName": endpointOptions.parameters.endPointName,
            "groupName": endpointOptions.parameters.groupName,
            "divID": endpointOptions.parameters.divID
        };

    };

    this.makeDraggable = function (selector) {
        jsPlumbInstance.draggable(selector, {
            stop: function () {
                var x = $(selector).position().left;
                jsPlumbInstance.repaint(selector);
            }
        });
    };


}


function draggable(item, container) {
    var dragItem = document.querySelector("#" + item);
    var container = document.querySelector("#" + container);

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === dragItem) {
            active = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;

        active = false;
    }

    function drag(e) {
        if (active) {

            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
} 




  
  
    
    var theorem1;
var theorem1b;
var theorem1c;
var theorem1d;
function checkCircuit() {
   
    var g = new Graph(29);
    theorem1=false;
    theorem1b=false;
  theorem1c=false;
    theorem1d=false;
  
    var groups = ['row2','row3','row4','row6','row7','row8','input11','input12','ledoff_A1', 'ledoff_C1', 'VCC', 'GND',  'ic7408_VCC', 'ic7408_4A', 'ic7408_4B', 'ic7408_4Y', 'ic7408_3A', 'ic7408_3B', 'ic7408_3Y', 'ic7408_1A', 'ic7408_1B', 'ic7408_1Y', 'ic7408_2A', 'ic7408_2B', 'ic7408_2Y', 'ic7408_GND', 'row1', 'row5', ]
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   


    var radio = document.getElementsByName('option1'); 
    var run  ;       
    for(i = 0; i < radio.length; i++) { 
                if(radio[i].checked)             
                       run = radio[i].value; 
    } 

    if(run == 'seven')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_1Y","ledoff_A1") && g.isConnected("ic7408_1A","input11")&&g.isConnected("ic7408_1B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_1Y","ledoff_A1") && g.isConnected("ic7408_1B","input11")&&g.isConnected("ic7408_1A","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute; top :423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            } 

                  else if(theorem1c != true){
                alert("Wrong Connections");
                  document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }                                                                                                                                                                                                               
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic


if(run =="eight"){

        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                 
                  if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2A","input11")&&g.isConnected("ic7408_2B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute; top :423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2B","input11")&&g.isConnected("ic7408_2A","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute; top :423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }  
            

                else if(theorem1c != true){
              alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
           }

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
    
}

    if(run == 'nine')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_3Y","ledoff_A1") && g.isConnected("ic7408_3A","input11")&&g.isConnected("ic7408_3B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute; top :423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_3Y","ledoff_A1") && g.isConnected("ic7408_3B","input11")&&g.isConnected("ic7408_3A","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute; top :423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            } 

                  else if(theorem1c != true){
                alert("Wrong Connections");
                  document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic


if(run =="ten"){

        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                 
                  if(g.isConnected("ic7408_4Y","ledoff_A1") && g.isConnected("ic7408_4A","input11")&&g.isConnected("ic7408_4B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute; top :423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_4Y","ledoff_A1") && g.isConnected("ic7408_4B","input11")&&g.isConnected("ic7408_4A","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute; top :423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }  
            

                else if(theorem1c != true){
              alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
           }

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
    
}
     
console.log("executed")
}






var theorem1e;
var theorem1f;
var theorem1g;
var theorem1h;
var theorem1i;
var theorem1j;
function checkCircuit1() {
   
    var g = new Graph(29);
    theorem1e=false;
    theorem1f=false;
  theorem1g=false;
    theorem1h=false;
    theorem1i=false;
      theorem1j=false;
    var groups = ['row2','row3','row4','row6','row7','row8','input11','input12','ledoff_A1', 'ledoff_C1', 'VCC', 'GND',  'ic7408_VCC', 'ic7408_4A', 'ic7408_4B', 'ic7408_4Y', 'ic7408_3A', 'ic7408_3B', 'ic7408_3Y', 'ic7408_1A', 'ic7408_1B', 'ic7408_1Y', 'ic7408_2A', 'ic7408_2B', 'ic7408_2Y', 'ic7408_GND', 'row1', 'row5', ]
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   


    var radio = document.getElementsByName('option'); 
    var run  ;       
    for(i = 0; i < radio.length; i++) { 
                if(radio[i].checked)             
                       run = radio[i].value; 
    } 

    if(run == 'one')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_1B","ledoff_A1") && g.isConnected("ic7408_1A","input11")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1e=true;document.getElementById("led1").src="images/bulbon.png";
                  document.getElementById("dot").style=" position:absolute;top :485px; left: 1220px;visibility:visible;z-index:1";
             isstartedsimulation=true;    
         }


           
              
                  else if(theorem1e != true){
                alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";

            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic

 if(run == 'two')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_2A","ledoff_A1") && g.isConnected("ic7408_1Y","input11")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1f=true;document.getElementById("led1").src="images/bulbon.png";
        document.getElementById("dot").style="position:absolute;top :485px; left: 1220px;visibility:visible;z-index:1";
             isstartedsimulation=true;
            }
              
                  else if(theorem1f != true){
                alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";

            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}

     if(run == 'three')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2B","input11")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1g=true;document.getElementById("led1").src="images/bulbon.png";
        document.getElementById("dot").style="position:absolute;top :485px; left: 1220px;visibility:visible;z-index:1";
             isstartedsimulation=true;
            
            }
              
                  else if(theorem1g != true){
                alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";

            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}

    // A'B' logic

 if(run == 'four')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_3Y","ledoff_A1") && g.isConnected("ic7408_3B","input11")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1h=true;document.getElementById("led1").src="images/bulbon.png";
        document.getElementById("dot").style="position:absolute;top :485px; left: 1220px;visibility:visible;z-index:1";
             isstartedsimulation=true;
            
            }
              
                  else if(theorem1h != true){
                alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";

            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}
 if(run == 'five')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_4Y","input11")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1i=true;document.getElementById("led1").src="images/bulbon.png";
        document.getElementById("dot").style="position:absolute;top :485px; left: 1220px;visibility:visible;z-index:1";
             isstartedsimulation=true;
            
            }
              
                  else if(theorem1i != true){
                alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                 document.getElementById("img1").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}
 if(run == 'six')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_4B","ledoff_A1") && g.isConnected("ic7408_4A","input11")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1j=true;document.getElementById("led1").src="images/bulbon.png";
        document.getElementById("dot").style="position:absolute;top :485px; left: 1220px;visibility:visible;z-index:1";
             isstartedsimulation=true;
            
            }
              
                  else if(theorem1j != true){
                alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";

            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}
     
console.log("executed")
}


function checkCircuit2() {
   
    var g = new Graph(29);
    theorem1=false;
    theorem1b=false;
  theorem1c=false;
    theorem1d=false;
  
    var groups = ['row2','row3','row4','row6','row7','row8','input11','input12','ledoff_A1', 'ledoff_C1', 'VCC', 'GND',  'ic7408_VCC', 'ic7408_4A', 'ic7408_4B', 'ic7408_4Y', 'ic7408_3A', 'ic7408_3B', 'ic7408_3Y', 'ic7408_1A', 'ic7408_1B', 'ic7408_1Y', 'ic7408_2A', 'ic7408_2B', 'ic7408_2Y', 'ic7408_GND', 'row1', 'row5', ]
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   


    var radio = document.getElementsByName('option1'); 
    var run  ;       
    for(i = 0; i < radio.length; i++) { 
                if(radio[i].checked)             
                       run = radio[i].value; 
    } 

    if(run == 'seven')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_1A","ledoff_A1") && g.isConnected("ic7408_1B","input11")&&g.isConnected("ic7408_1Y","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_1A","ledoff_A1") && g.isConnected("ic7408_1Y","input11")&&g.isConnected("ic7408_1B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            } 

                  else if(theorem1c != true){
                alert("Wrong Connections");
                  document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic


if(run =="eight"){

        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                 
                  if(g.isConnected("ic7408_2A","ledoff_A1") && g.isConnected("ic7408_2Y","input11")&&g.isConnected("ic7408_2B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_2A","ledoff_A1") && g.isConnected("ic7408_2B","input11")&&g.isConnected("ic7408_2Y","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }  
            

                else if(theorem1c != true){
              alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
           }

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
    
}

    if(run == 'nine')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_3Y","input11")&&g.isConnected("ic7408_3B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_3B","input11")&&g.isConnected("ic7408_3Y","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute; top :423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            } 

                  else if(theorem1c != true){
                alert("Wrong Connections");
                  document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic


if(run =="ten"){

        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                 
                  if(g.isConnected("ic7408_4A","ledoff_A1") && g.isConnected("ic7408_4Y","input11")&&g.isConnected("ic7408_4B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_4A","ledoff_A1") && g.isConnected("ic7408_4B","input11")&&g.isConnected("ic7408_4Y","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }  
            

                else if(theorem1c != true){
              alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
           }

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
    
}
     
console.log("executed")
}





function checkCircuit3() {
   
    var g = new Graph(29);
    theorem1=false;
    theorem1b=false;
  theorem1c=false;
    theorem1d=false;
  
    var groups = ['row2','row3','row4','row6','row7','row8','input11','input12','ledoff_A1', 'ledoff_C1', 'VCC', 'GND',  'ic7408_VCC', 'ic7408_4A', 'ic7408_4B', 'ic7408_4Y', 'ic7408_3A', 'ic7408_3B', 'ic7408_3Y', 'ic7408_1A', 'ic7408_1B', 'ic7408_1Y', 'ic7408_2A', 'ic7408_2B', 'ic7408_2Y', 'ic7408_GND', 'row1', 'row5', ]
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   


    var radio = document.getElementsByName('option1'); 
    var run  ;       
    for(i = 0; i < radio.length; i++) { 
                if(radio[i].checked)             
                       run = radio[i].value; 
    } 

    if(run == 'seven')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_1Y","ledoff_A1") && g.isConnected("ic7408_1B","input11")&&g.isConnected("ic7408_1A","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_1Y","ledoff_A1") && g.isConnected("ic7408_1A","input11")&&g.isConnected("ic7408_1B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            } 

                  else if(theorem1c != true){
                alert("Wrong Connections");
                  document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic


if(run =="eight"){

        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                 
                  if(g.isConnected("ic7408_2A","ledoff_A1") && g.isConnected("ic7408_2Y","input11")&&g.isConnected("ic7408_2B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_2A","ledoff_A1") && g.isConnected("ic7408_2B","input11")&&g.isConnected("ic7408_2Y","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }  
            

                else if(theorem1c != true){
              alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
           }

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
    
}

    if(run == 'nine')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                  if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_3Y","input11")&&g.isConnected("ic7408_3B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_3B","input11")&&g.isConnected("ic7408_3Y","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            } 

                  else if(theorem1c != true){
                alert("Wrong Connections");
                  document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic


if(run =="ten"){

        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

                 
                  if(g.isConnected("ic7408_4Y","ledoff_A1") && g.isConnected("ic7408_4A","input11")&&g.isConnected("ic7408_4B","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }
              else  if(g.isConnected("ic7408_4Y","ledoff_A1") && g.isConnected("ic7408_4B","input11")&&g.isConnected("ic7408_4A","input12")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot1").style="position:absolute;top : 423px; left: 1245px;visibility:visible;z-index:1"; isstartedsimulation=true; 
            }  
            

                else if(theorem1c != true){
              alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
           }

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
    
}
     
console.log("executed")
}






function checkCircuit4() {
   
    var g = new Graph(30);
   
  theorem1c=false;
   
  
    var groups = ['row2','row3','row4','row6','row7','row8','input11','input12','input13','ledoff_A1', 'ledoff_C1', 'VCC', 'GND',  'ic7408_VCC', 'ic7408_4A', 'ic7408_4B', 'ic7408_4Y', 'ic7408_3A', 'ic7408_3B', 'ic7408_3Y', 'ic7408_1A', 'ic7408_1B', 'ic7408_1Y', 'ic7408_2A', 'ic7408_2B', 'ic7408_2Y', 'ic7408_GND', 'row1', 'row5', ]
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   


    var radio = document.getElementsByName('option2'); 
    var run  ;       
    for(i = 0; i < radio.length; i++) { 
                if(radio[i].checked)             
                       run = radio[i].value; 
    } 

    if(run == 'eleven')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply");
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

    if(g.isConnected("ic7408_4B","ledoff_A1") && g.isConnected("ic7408_1A","input11")&&g.isConnected("ic7408_1B","input12")&&g.isConnected("ic7408_4A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_4B","ledoff_A1") && g.isConnected("ic7408_1A","input11")&&g.isConnected("ic7408_4A","input12")&&g.isConnected("ic7408_1B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_4B","ledoff_A1") && g.isConnected("ic7408_1B","input11")&&g.isConnected("ic7408_4A","input12")&&g.isConnected("ic7408_1A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_4B","ledoff_A1") && g.isConnected("ic7408_1B","input11")&&g.isConnected("ic7408_1A","input12")&&g.isConnected("ic7408_4A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_4B","ledoff_A1") && g.isConnected("ic7408_4A","input11")&&g.isConnected("ic7408_1A","input12")&&g.isConnected("ic7408_1B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_4B","ledoff_A1") && g.isConnected("ic7408_4A","input11")&&g.isConnected("ic7408_1B","input12")&&g.isConnected("ic7408_1A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    
         }     

                else if(theorem1c != true){
                alert("Wrong Connections");
                document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                document.getElementById("img2").src="images/toggleoff1.png";
                document.getElementById("img3").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic


if(run =="twelve"){

        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")
if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_1Y","input11")&&g.isConnected("ic7408_2A","input12")&&g.isConnected("ic7408_2B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_1Y","input11")&&g.isConnected("ic7408_2B","input12")&&g.isConnected("ic7408_2A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2B","input11")&&g.isConnected("ic7408_2A","input12")&&g.isConnected("ic7408_1Y","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2B","input11")&&g.isConnected("ic7408_1Y","input12")&&g.isConnected("ic7408_2A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2A","input11")&&g.isConnected("ic7408_1Y","input12")&&g.isConnected("ic7408_2B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2A","input11")&&g.isConnected("ic7408_2B","input12")&&g.isConnected("ic7408_1Y","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    
         } 
                 

                else if(theorem1c != true){
              alert("Wrong Connections");
                  document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
                 document.getElementById("img3").src="images/toggleoff1.png";
           }

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
    
}

    if(run == 'thirteen')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

              if(g.isConnected("ic7408_3Y","ledoff_A1") && g.isConnected("ic7408_4Y","input11")&&g.isConnected("ic7408_3B","input12")&&g.isConnected("ic7408_3A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_3Y","ledoff_A1") && g.isConnected("ic7408_4Y","input11")&&g.isConnected("ic7408_3A","input12")&&g.isConnected("ic7408_3B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_3Y","ledoff_A1") && g.isConnected("ic7408_3B","input11")&&g.isConnected("ic7408_4Y","input12")&&g.isConnected("ic7408_3A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_3Y","ledoff_A1") && g.isConnected("ic7408_3B","input11")&&g.isConnected("ic7408_3A","input12")&&g.isConnected("ic7408_4Y","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_3Y","ledoff_A1") && g.isConnected("ic7408_3A","input11")&&g.isConnected("ic7408_4Y","input12")&&g.isConnected("ic7408_3B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    } else if(g.isConnected("ic7408_3Y","ledoff_A1") && g.isConnected("ic7408_3A","input11")&&g.isConnected("ic7408_3B","input12")&&g.isConnected("ic7408_4Y","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; isstartedsimulation=true; 
    
         } 
                  else if(theorem1c != true){
                alert("Wrong Connections");
                    document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
                 document.getElementById("img3").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic
    
console.log("executed")
}








function checkCircuit5() {
   
    var g = new Graph(30);
    theorem1=false;
    theorem1b=false;
  theorem1c=false;
   
  
    var groups = ['row2','row3','row4','row6','row7','row8','input11','input12','input13','ledoff_A1', 'ledoff_C1', 'VCC', 'GND',  'ic7408_VCC', 'ic7408_4A', 'ic7408_4B', 'ic7408_4Y', 'ic7408_3A', 'ic7408_3B', 'ic7408_3Y', 'ic7408_1A', 'ic7408_1B', 'ic7408_1Y', 'ic7408_2A', 'ic7408_2B', 'ic7408_2Y', 'ic7408_GND', 'row1', 'row5', ]
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   


    var radio = document.getElementsByName('option3'); 
    var run  ;       
    for(i = 0; i < radio.length; i++) { 
                if(radio[i].checked)             
                       run = radio[i].value; 
    } 

    if(run == 'fourteen')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

    if(g.isConnected("ic7408_3B","ledoff_A1") && g.isConnected("ic7408_1A","input11")&&g.isConnected("ic7408_1B","input12")&&g.isConnected("ic7408_3Y","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";   

    } else if(g.isConnected("ic7408_3B","ledoff_A1") && g.isConnected("ic7408_1A","input11")&&g.isConnected("ic7408_3Y","input12")&&g.isConnected("ic7408_1B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";   
   
 
    } else if(g.isConnected("ic7408_3B","ledoff_A1") && g.isConnected("ic7408_1B","input11")&&g.isConnected("ic7408_3Y","input12")&&g.isConnected("ic7408_1A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true; document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";  
 
 
    } else if(g.isConnected("ic7408_3B","ledoff_A1") && g.isConnected("ic7408_1B","input11")&&g.isConnected("ic7408_1A","input12")&&g.isConnected("ic7408_3Y","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true; document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";   


    } else if(g.isConnected("ic7408_3B","ledoff_A1") && g.isConnected("ic7408_3Y","input11")&&g.isConnected("ic7408_1A","input12")&&g.isConnected("ic7408_1B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true; document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";


    } else if(g.isConnected("ic7408_3B","ledoff_A1") && g.isConnected("ic7408_3Y","input11")&&g.isConnected("ic7408_1B","input12")&&g.isConnected("ic7408_1A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";

 
    
         }     

                  else if(theorem1c != true){
                alert("Wrong Connections");
                 document.getElementById("led1").src="images/ledoff.png";
                 document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
                 document.getElementById("img3").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic


if(run =="fifteen"){

        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")
if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_1Y","input11")&&g.isConnected("ic7408_2A","input12")&&g.isConnected("ic7408_2B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1b=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; /* document.getElementById("img1").addEventListener("click", function(){change17();image3();});document.getElementById("img2").addEventListener("click", function(){change18();image3();});document.getElementById("img3").addEventListener("click", function(){change19();image3();});*/
    } else if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_1Y","input11")&&g.isConnected("ic7408_2B","input12")&&g.isConnected("ic7408_2A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1b=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; 
    } else if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2B","input11")&&g.isConnected("ic7408_2A","input12")&&g.isConnected("ic7408_1Y","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1b=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1"; 
    } else if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2B","input11")&&g.isConnected("ic7408_1Y","input12")&&g.isConnected("ic7408_2A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1b=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";  
    } else if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2A","input11")&&g.isConnected("ic7408_1Y","input12")&&g.isConnected("ic7408_2B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1b=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";  
    } else if(g.isConnected("ic7408_2Y","ledoff_A1") && g.isConnected("ic7408_2A","input11")&&g.isConnected("ic7408_2B","input12")&&g.isConnected("ic7408_1Y","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1b=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";  
    
         } 
                 

                else if(theorem1b != true){
              alert("Wrong Connections");
                  document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
                 document.getElementById("img3").src="images/toggleoff1.png";
           }

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
    
}

    if(run == 'sixteen')
    {   

    // (A+B)' logic
    
        if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
            console.log("IC connected to supply")
            if(g.isConnected("ledoff_C1","GND")){
                console.log("LED connected to ground")

              if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_4Y","input11")&&g.isConnected("ic7408_4B","input12")&&g.isConnected("ic7408_4A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";  
    } else if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_4Y","input11")&&g.isConnected("ic7408_4A","input12")&&g.isConnected("ic7408_4B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";   
    } else if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_4B","input11")&&g.isConnected("ic7408_4Y","input12")&&g.isConnected("ic7408_4A","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";  
    } else if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_4B","input11")&&g.isConnected("ic7408_4A","input12")&&g.isConnected("ic7408_4Y","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";  
    } else if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_4A","input11")&&g.isConnected("ic7408_4Y","input12")&&g.isConnected("ic7408_4B","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";  
    } else if(g.isConnected("ic7408_3A","ledoff_A1") && g.isConnected("ic7408_4A","input11")&&g.isConnected("ic7408_4B","input12")&&g.isConnected("ic7408_4Y","input13")){alert("Connection successful");document.getElementById("checkbutton").disabled=true;theorem1c=true;document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";  
    
         } 
                  else if(theorem1c != true){
                alert("Wrong Connections");
                    document.getElementById("led1").src="images/ledoff.png";
                document.getElementById("img1").src="images/toggleoff1.png";
                 document.getElementById("img2").src="images/toggleoff1.png";
                 document.getElementById("img3").src="images/toggleoff1.png";
            }  

            }else{
                alert("LED not connected to ground")
            }
        }else{
            alert("IC not connected to supply")
        }
    
}


    // A'B' logic
    
console.log("executed")
}



var toggle1On;
var toggle1Off;
function change1(){
	var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1)
            {
        document.getElementById('img1').src="images/toggleon.png";
        toggle1On=true;
        toggle1Off=false;
    }
    else {
        document.getElementById('img1').src= 'images/toggleoff1.png';
        toggle1On=false;
        toggle1Off=true;
    }

    if((theorem1e==true||theorem1f==true||theorem1g==true||theorem1h==true ||theorem1i==true ||theorem1j==true) && toggle1Off==true && toggle1On==false && isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
        
    }
    else if((theorem1e==true||theorem1f==true||theorem1g==true||theorem1h==true ||theorem1i==true ||theorem1j==true) && toggle1Off==false && toggle1On==true && isstartedsimulation==true){
        document.getElementById('led1').src="images/ledoff.png";
        

    }
}



var toggle2On,toggle3Off;
var toggle2Off,toggle3On;


function change2(){
    var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1){
        document.getElementById('img1').src="images/toggleon.png";
        toggle2On=true;
        toggle2Off=false;
    }
    else {
        document.getElementById('img1').src="images/toggleoff1.png";
        toggle2On=false;
        toggle2Off=true;
        toggle3Off==true;
    }
    
  /*  if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && (toggle3Off==true||toggle3Off==false) && toggle2Off==false){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && toggle3Off && toggle2Off==false){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && toggle3Off && toggle2Off==false){
        document.getElementById('led1').src="images/bulbon.png";
    }*/
    if(theorem1c==true  && (toggle3Off==false || toggle2Off==false)&& isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";

    }
    else if(theorem1c!=true  ){
        document.getElementById('led1').src="images/ledoff.png";
    }
    else{
        document.getElementById('led1').src="images/ledoff.png";
    }

}



function change3(){
    var img2=document.getElementById("img2").src;
    if(img2.indexOf('toggleoff1')!= -1){
        document.getElementById('img2').src="images/toggleon.png";
        toggle3On=true;
        toggle3Off=false;
    }
    else{
        document.getElementById('img2').src="images/toggleoff1.png";
        toggle3On=false;
        toggle3Off=true;
        
    }
    
   /* if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true)  && toggle3Off==false){
        document.getElementById('led1').src="images/bulbon.png";
    }
     else if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && toggle3Off==false && toggle2Off==false){
        document.getElementById('led1').src="images/bulbon.png";
    }
     else if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && toggle2Off==true && toggle3Off==false){
        document.getElementById('led1').src="images/bulbon.png";
    }*/
    if(theorem1c==true  && (toggle3Off==false || toggle2Off==false)&& isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if(theorem1c!=true ){
        document.getElementById('led1').src="images/ledoff.png";
    }
    else{
        document.getElementById('led1').src="images/ledoff.png";
    }

}




function change4(){
    var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1){
        document.getElementById('img1').src="images/toggleon.png";
        toggle2On=true;
        toggle2Off=false;
    }
    else {
        document.getElementById('img1').src="images/toggleoff1.png";
        toggle2On=false;
        toggle2Off=true;
    }
    
    if(theorem1c==true  && toggle3On==true && toggle2On==true && isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
  else  if(theorem1c!=true ){
        document.getElementById('led1').src="images/ledoff.png";
    }
    else{
        document.getElementById('led1').src="images/ledoff.png";
    }

}



function change5(){
    var img2=document.getElementById("img2").src;
    if(img2.indexOf('toggleoff1')!= -1){
        document.getElementById('img2').src="images/toggleon.png";
        toggle3On=true;
        toggle3Off=false;
    }
    else{
        document.getElementById('img2').src="images/toggleoff1.png";
        toggle3On=false;
        toggle3Off=true;
    }
    
    if(theorem1c==true && toggle2On==true && toggle3On==true && isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if(theorem1c!=true ){
        document.getElementById('led1').src="images/ledoff.png";
    }
    else{
        document.getElementById('led1').src="images/ledoff.png";
    }

}




function change6(){
    var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1){
        document.getElementById('img1').src="images/toggleon.png";
        toggle2On=true;
        toggle2Off=false;
    }
    else {
        document.getElementById('img1').src="images/toggleoff1.png";
        toggle2On=false;
        toggle2Off=true;
    }
    
    if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && toggle2On==true && toggle3On==true && isstartedsimulation==true){
        document.getElementById('led1').src="images/ledoff.png";
    }
  /* else if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) &&((toggle2On==false && toggle3On==false)||(toggle2On==false&&toggle3On==true)||(toggle2On==true&&toggle3On==false))) {
        document.getElementById('led1').src="images/bulbon.png";
    }*/
     else if(isstartedsimulation==false)
    {    document.getElementById('led1').src="images/ledoff.png";}



    else
    {    document.getElementById('led1').src="images/bulbon.png";}


}



function change7(){
    var img2=document.getElementById("img2").src;
    if(img2.indexOf('toggleoff1')!= -1){
        document.getElementById('img2').src="images/toggleon.png";
        toggle3On=true;
        toggle3Off=false;
    }
    else{
        document.getElementById('img2').src="images/toggleoff1.png";
        toggle3On=false;
        toggle3Off=true;
    }
    
    if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && toggle2On==true && toggle3On==true && isstartedsimulation==true){
        document.getElementById('led1').src="images/ledoff.png";
    }
   /* else if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) &&((toggle2On==false && toggle3On==false)||(toggle2On==false&&toggle3On==true)||(toggle2On==true&&toggle3On==false))) {
        document.getElementById('led1').src="images/bulbon.png";*/
         else if(isstartedsimulation==false)
    {    document.getElementById('led1').src="images/ledoff.png";}



        else
    {    document.getElementById('led1').src="images/bulbon.png";

    }

}





////NOR GATE
function change8(){
    var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1){
        document.getElementById('img1').src="images/toggleon.png";
        toggle2On=true;
        toggle2Off=false;
    }
    else {
        document.getElementById('img1').src="images/toggleoff1.png";
        toggle2On=false;
        toggle2Off=true;
    }
    
  /*  if(theorem1c==true  && toggle2On==false && toggle3On==false){
        document.getElementById('led1').src="images/bulbon.png";
    }
   else {
        document.getElementById('led1').src="images/ledoff.png";
   }*/
   if(theorem1c==true  && (toggle2On==true || toggle3On==true)  &&isstartedsimulation==true){
        document.getElementById('led1').src="images/ledoff.png";
    }
     else if(isstartedsimulation==false)
    {    document.getElementById('led1').src="images/ledoff.png";}

   else {
        document.getElementById('led1').src="images/bulbon.png";
   }

    }




     
function change9(){
    var img2=document.getElementById("img2").src;
    if(img2.indexOf('toggleoff1')!= -1){
        document.getElementById('img2').src="images/toggleon.png";
        toggle3On=true;
        toggle3Off=false;
    }
    else{
        document.getElementById('img2').src="images/toggleoff1.png";
        toggle3On=false;
        toggle3Off=true;
    }
    
 /*   if(theorem1c==true  && toggle2On==false && toggle3On==false){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else  {
        document.getElementById('led1').src="images/ledoff.png";
    }*/
    if(theorem1c==true  && (toggle2On==true || toggle3On==true)&& isstartedsimulation==true){
        document.getElementById('led1').src="images/ledoff.png";
    }
     else if(isstartedsimulation==false)
    {    document.getElementById('led1').src="images/ledoff.png";}

   else {
        document.getElementById('led1').src="images/bulbon.png";
   }

}




function change10(){
    var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1){
        document.getElementById('img1').src="images/toggleon.png";
        toggle2On=true;
        toggle2Off=false;
       
    }
    else {
        document.getElementById('img1').src="images/toggleoff1.png";
        toggle2On=false;
        toggle2Off=true;
           }
    
   /* if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && ((toggle2On==false && toggle3On==true)||(toggle2On==true && toggle3On==false))){
        document.getElementById('led1').src="images/bulbon.png";
    }*/
    if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true)  &&toggle2On==true && toggle3On !==true && isstartedsimulation==true ){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) &&  toggle3On==true &&toggle2On !==true && isstartedsimulation==true ){
        document.getElementById('led1').src="images/bulbon.png";
    }
     else if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) &&  toggle3On==true && toggle2On==true && isstartedsimulation==true ){
        document.getElementById('led1').src="images/ledoff.png";
    }
   else {
        document.getElementById('led1').src="images/ledoff.png";
   }
    }




     
function change11(){
    var img2=document.getElementById("img2").src;
    if(img2.indexOf('toggleoff1')!= -1){
        document.getElementById('img2').src="images/toggleon.png";
        toggle3On=true;
        toggle3Off=false;
       
    }
    else{
        document.getElementById('img2').src="images/toggleoff1.png";
        toggle3On=false;
        toggle3Off=true;
       
    }
    
   /* if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && ((toggle2On==false && toggle3On==true)||(toggle2On==true && toggle3On==false))){
        document.getElementById('led1').src="images/bulbon.png";
    }*/
    if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && toggle3On==true && toggle2On!==true && isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && toggle2On==true && toggle3On!==true && isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if((theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true) && toggle2On==true &&toggle3On==true && isstartedsimulation==true){
        document.getElementById('led1').src="images/ledoff.png";
    }
    else  {
        document.getElementById('led1').src="images/ledoff.png";
    }

}





function change12(){
    var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1){
        document.getElementById('img1').src="images/toggleon.png";
        toggle2On=true;
        toggle2Off=false;
    }
    else {
        document.getElementById('img1').src="images/toggleoff1.png";
        toggle2On=false;
        toggle2Off=true;
    }
    
    if(theorem1c==true  && ((toggle2On==true && toggle3On==true)||(toggle2On==false && toggle3On==false)) && isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
   else {
        document.getElementById('led1').src="images/ledoff.png";
   }
    }




     
function change13(){
    var img2=document.getElementById("img2").src;
    if(img2.indexOf('toggleoff1')!= -1){
        document.getElementById('img2').src="images/toggleon.png";
        toggle3On=true;
        toggle3Off=false;
    }
    else{
        document.getElementById('img2').src="images/toggleoff1.png";
        toggle3On=false;
        toggle3Off=true;
    }
    
    if(theorem1c==true  && ((toggle2On==true && toggle3On==true)||(toggle2On==false && toggle3On==false))&& isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else  {
        document.getElementById('led1').src="images/ledoff.png";
    }

}



function change14(){
	var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1 )
            {
        document.getElementById('img1').src="images/toggleon.png";
        toggle1On=true;
        toggle1Off=false;
    }
    else {
        document.getElementById('img1').src= 'images/toggleoff1.png';
        toggle1On=false;
        toggle1Off=true;
    }

    if(theorem1c==true && toggle1Off==false && toggle2Off==false && toggle3Off==false && isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else {
        document.getElementById('led1').src="images/ledoff.png";
    }
}



function change15(){
    var img1=document.getElementById("img2").src;
    if(img1.indexOf('toggleoff1')!= -1){
        document.getElementById('img2').src="images/toggleon.png";
        toggle2On=true;
        toggle2Off=false;
    }
    else {
        document.getElementById('img2').src="images/toggleoff1.png";
        toggle2On=false;
        toggle2Off=true;
    }
    
    if(theorem1c==true  && toggle3Off==false && toggle2Off==false&& toggle1Off==false && isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else{
        document.getElementById('led1').src="images/ledoff.png";
    }

}



function change16(){
    var img2=document.getElementById("img3").src;
    if(img2.indexOf('toggleoff1')!= -1){
        document.getElementById('img3').src="images/toggleon.png";
        toggle3On=true;
        toggle3Off=false;
    }
    else{
        document.getElementById('img3').src="images/toggleoff1.png";
        toggle3On=false;
        toggle3Off=true;
    }
    
    if(theorem1c==true  && toggle2Off==false && toggle3Off==false && toggle1Off==false && isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else{
        document.getElementById('led1').src="images/ledoff.png";
    }

}





function change17(){
	var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1 )
            {
        document.getElementById('img1').src="images/toggleon.png";
        toggle1On=true;
        toggle1Off=false;
    }
    else {
        document.getElementById('img1').src= 'images/toggleoff1.png';
        toggle1On=false;
        toggle1Off=true;
    }

    if(theorem1c==true  && (toggle1Off==false || toggle2Off==false || toggle3Off==false) ){
        document.getElementById('led1').src="images/bulbon.png";
    }
   else if(theorem1b==true && (toggle1Off==false || toggle2Off==false || toggle3Off==false) ){
        document.getElementById('led1').src="images/bulbon.png";
    }
     else if(isstartedsimulation==false ){
        document.getElementById('led1').src="images/ledoff.png";
    }
   
    else {
        document.getElementById('led1').src="images/ledoff.png";
    }
   
}



function change18(){
    var img1=document.getElementById("img2").src;
    if(img1.indexOf('toggleoff1')!= -1){
        document.getElementById('img2').src="images/toggleon.png";
        toggle2On=true;
        toggle2Off=false;
    }
    else {
        document.getElementById('img2').src="images/toggleoff1.png";
        toggle2On=false;
        toggle2Off=true;
    }
    
    if(theorem1c==true && (toggle3Off==false || toggle2Off==false|| toggle1Off==false) ){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if(theorem1b==true && (toggle3Off==false || toggle2Off==false|| toggle1Off==false) ){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if(isstartedsimulation==false ){
        document.getElementById('led1').src="images/ledoff.png";
    }

    else {
        document.getElementById('led1').src="images/ledoff.png";
    }
     

}



function change19(){
    var img2=document.getElementById("img3").src;
    if(img2.indexOf('toggleoff1')!= -1){
        document.getElementById('img3').src="images/toggleon.png";
        toggle3On=true;
        toggle3Off=false;
    }
    else{
        document.getElementById('img3').src="images/toggleoff1.png";
        toggle3On=false;
        toggle3Off=true;
    }
    
    if(theorem1b==true && (toggle2Off==false || toggle3Off==false || toggle1Off==false) ){
        document.getElementById('led1').src="images/bulbon.png";
    }
     else if(theorem1c==true  && (toggle2Off==false || toggle3Off==false || toggle1Off==false)){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if(isstartedsimulation==false  ){
        document.getElementById('led1').src="images/ledoff.png";
    }

    else  {
        document.getElementById('led1').src="images/ledoff.png";
    }
    

}










function change20(){
	var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1 )
            {
        document.getElementById('img1').src="images/toggleon.png";
        toggle1On=true;
        toggle1Off=false;
    }
    else {
        document.getElementById('img1').src= 'images/toggleoff1.png';
        toggle1On=false;
        toggle1Off=true;
    }

    if(theorem1c==true  && toggle1Off==false && toggle2Off==false && toggle3Off==false && isstartedsimulation==true ){
        document.getElementById('led1').src="images/ledoff.png";
    }
    else if(theorem1c==true && isstartedsimulation==true) {
        document.getElementById('led1').src="images/bulbon.png";
    }
    else if(isstartedsimulation==false ) {
        document.getElementById('led1').src="images/ledoff.png";
    }
}



function change21(){
    var img1=document.getElementById("img2").src;
    if(img1.indexOf('toggleoff1')!= -1){
        document.getElementById('img2').src="images/toggleon.png";
        toggle2On=true;
        toggle2Off=false;
    }
    else {
        document.getElementById('img2').src="images/toggleoff1.png";
        toggle2On=false;
        toggle2Off=true;
    }
    
    if(theorem1c==true  && toggle3Off==false && toggle2Off==false&& toggle1Off==false&& isstartedsimulation==true ){
        document.getElementById('led1').src="images/ledoff.png";
    }
    else if (theorem1c==true && isstartedsimulation==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
     else if(isstartedsimulation==false ) {
        document.getElementById('led1').src="images/ledoff.png";
    }

}



function change22(){
    var img2=document.getElementById("img3").src;
    if(img2.indexOf('toggleoff1')!= -1){
        document.getElementById('img3').src="images/toggleon.png";
        toggle3On=true;
        toggle3Off=false;
    }
    else{
        document.getElementById('img3').src="images/toggleoff1.png";
        toggle3On=false;
        toggle3Off=true;
    }
    
    if(theorem1c==true  && toggle2Off==false && toggle3Off==false && toggle1Off==false && isstartedsimulation==true){
        document.getElementById('led1').src="images/ledoff.png";
    }
    else if(theorem1c==true && isstartedsimulation==true ) {
        document.getElementById('led1').src="images/bulbon.png";
    }
     else if(isstartedsimulation==false ) {
        document.getElementById('led1').src="images/ledoff.png";
    }

}





function change23(){
	var img1=document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1 )
            {
        document.getElementById('img1').src="images/toggleon.png";
        toggle1On=true;
        toggle1Off=false;
    }
    else {
        document.getElementById('img1').src= 'images/toggleoff1.png';
        toggle1On=false;
        toggle1Off=true;
    }

 /*   if(theorem1c==true  && toggle1Off==true && toggle2Off==true && toggle3Off==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else  {
        document.getElementById('led1').src="images/ledoff.png";
    }*/
    if(theorem1c==true  && (toggle2Off==false || toggle3Off==false || toggle1Off==false) && isstartedsimulation==true){
        document.getElementById('led1').src="images/ledoff.png";
    }
     else if(isstartedsimulation==false ) {
        document.getElementById('led1').src="images/ledoff.png";
    }
    else  {
        document.getElementById('led1').src="images/bulbon.png";
    }
}



function change24(){
    var img1=document.getElementById("img2").src;
    if(img1.indexOf('toggleoff1')!= -1){
        document.getElementById('img2').src="images/toggleon.png";
        toggle2On=true;
        toggle2Off=false;
    }
    else {
        document.getElementById('img2').src="images/toggleoff1.png";
        toggle2On=false;
        toggle2Off=true;
    }
    
   /* if(theorem1c==true  && toggle3Off==true && toggle2Off==true&& toggle1Off==true ){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else {
        document.getElementById('led1').src="images/ledoff.png";
    }*/
    if(theorem1c==true  && (toggle2Off==false || toggle3Off==false || toggle1Off==false) && isstartedsimulation==true){
        document.getElementById('led1').src="images/ledoff.png";
    }
     else if(isstartedsimulation==false ) {
        document.getElementById('led1').src="images/ledoff.png";
    }
    else  {
        document.getElementById('led1').src="images/bulbon.png";
    }

}



function change25(){
    var img2=document.getElementById("img3").src;
    if(img2.indexOf('toggleoff1')!= -1){
        document.getElementById('img3').src="images/toggleon.png";
        toggle3On=true;
        toggle3Off=false;
    }
    else{
        document.getElementById('img3').src="images/toggleoff1.png";
        toggle3On=false;
        toggle3Off=true;
    }
    
   /* if(theorem1c==true  && toggle2Off==true && toggle3Off==true && toggle1Off==true){
        document.getElementById('led1').src="images/bulbon.png";
    }
    else  {
        document.getElementById('led1').src="images/ledoff.png";
    }*/
    if(theorem1c==true  && (toggle2Off==false || toggle3Off==false || toggle1Off==false)&& isstartedsimulation==true){
        document.getElementById('led1').src="images/ledoff.png";
    }
     else if(isstartedsimulation==false ) {
        document.getElementById('led1').src="images/ledoff.png";
    }
    else  {
        document.getElementById('led1').src="images/bulbon.png";
    }

}
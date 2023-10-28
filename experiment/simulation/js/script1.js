
var connections = [];

var deletecon=0;
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
            HoverPaintStyle: { strokeStyle: "orange" },

          ConnectionsDetachable   : true

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
            deletecon++;
            return false;
        });

        jsPlumbInstance.bind("jsPlumbConnection", function (conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName');
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
            connectorStyle:{strokeStyle:stroke, lineWidth:3}
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




  

function checkCircuit() {


        
        var g = new Graph(47);


  
        var groups = ['row2','row3','row4','row6','row7','row8','input_A', 'input_B','led_A','led_A1','led_C1', 'led_C', 'VCC', 'GND', 'ic7432_VCC', 'ic7432_4A', 'ic7432_4B', 'ic7432_4Y', 'ic7432_3A', 'ic7432_3B', 'ic7432_3Y', 'ic7432_1A', 'ic7432_1B', 'ic7432_1Y', 'ic7432_2A', 'ic7432_2B', 'ic7432_2Y', 'ic7432_GND',   'ic7408_VCC', 'ic7408_4A', 'ic7408_4B', 'ic7408_4Y', 'ic7408_3A', 'ic7408_3B', 'ic7408_3Y', 'ic7408_1A', 'ic7408_1B', 'ic7408_1Y', 'ic7408_2A', 'ic7408_2B', 'ic7408_2Y', 'ic7408_GND', 'row1',   'row5']
        
        console.log(groups.length)
        for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
            g.addVertex(groups[i]);
        }
    
        for (key in connections) {  // adding edges
            g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
        }
       console.log("###noofedges->"+(g.numberofedges-deletecon));
       
       var edges= (g.numberofedges);
       console.log('edges:'+edges)
       if(edges == 0)
       {
           alert("No connections present.");   
           return;
       }
    
        if(g.isConnected("ic7432_VCC","VCC")&& g.isConnected("ic7432_GND",'GND')){
       
            console.log("IC7432 connected to supply");
            if(g.isConnected("ic7408_VCC","VCC")&& g.isConnected("ic7408_GND","GND")){
              
                console.log("IC7408 connected to supply")
                if(g.isConnected("led_C","GND")){
                    
                    console.log("LED connected to ground")
                    if(g.isConnected("led_C1","GND")){
                        
                    console.log("LED connected to ground")
    
                    if(g.isConnected("input_A","ic7432_4A")&&g.isConnected("input_B","ic7432_4B")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_4A")&&g.isConnected("input_B","ic7408_4B")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4A")&&g.isConnected("input_B","ic7432_4B")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_4B")&&g.isConnected("input_B","ic7408_4A")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4A")&&g.isConnected("input_B","ic7432_4B")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_3A")&&g.isConnected("input_B","ic7408_3B")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4A")&&g.isConnected("input_B","ic7432_4B")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_3B")&&g.isConnected("input_B","ic7408_3A")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4A")&&g.isConnected("input_B","ic7432_4B")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_2A")&&g.isConnected("input_B","ic7408_2B")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4A")&&g.isConnected("input_B","ic7432_4B")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_2B")&&g.isConnected("input_B","ic7408_2A")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4A")&&g.isConnected("input_B","ic7432_4B")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_1A")&&g.isConnected("input_B","ic7408_1B")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4A")&&g.isConnected("input_B","ic7432_4B")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_1B")&&g.isConnected("input_B","ic7408_1A")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
    
                }
    
                 else   if(g.isConnected("input_A","ic7432_4B")&&g.isConnected("input_B","ic7432_4A")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_4A")&&g.isConnected("input_B","ic7408_4B")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4B")&&g.isConnected("input_B","ic7432_4A")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_4B")&&g.isConnected("input_B","ic7408_4A")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4B")&&g.isConnected("input_B","ic7432_4A")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_3A")&&g.isConnected("input_B","ic7408_3B")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4B")&&g.isConnected("input_B","ic7432_4A")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_3A")&&g.isConnected("input_B","ic7408_3B")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4B")&&g.isConnected("input_B","ic7432_4A")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_3B")&&g.isConnected("input_B","ic7408_3A")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4B")&&g.isConnected("input_B","ic7432_4A")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_2A")&&g.isConnected("input_B","ic7408_2B")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4B")&&g.isConnected("input_B","ic7432_4A")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_2B")&&g.isConnected("input_B","ic7408_2A")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4B")&&g.isConnected("input_B","ic7432_4A")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_1A")&&g.isConnected("input_B","ic7408_1B")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_4B")&&g.isConnected("input_B","ic7432_4A")&&g.isConnected("ic7432_4Y","led_A")&&g.isConnected("input_A","ic7408_1B")&&g.isConnected("input_B","ic7408_1A")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
    
                } 
    
                 else if(g.isConnected("input_A","ic7432_3A")&&g.isConnected("input_B","ic7432_3B")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_4A")&&g.isConnected("input_B","ic7408_4B")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3A")&&g.isConnected("input_B","ic7432_3B")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_4B")&&g.isConnected("input_B","ic7408_4A")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3A")&&g.isConnected("input_B","ic7432_3B")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_3A")&&g.isConnected("input_B","ic7408_3B")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3A")&&g.isConnected("input_B","ic7432_3B")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_3B")&&g.isConnected("input_B","ic7408_3A")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3A")&&g.isConnected("input_B","ic7432_3B")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_2A")&&g.isConnected("input_B","ic7408_2B")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3A")&&g.isConnected("input_B","ic7432_3B")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_2B")&&g.isConnected("input_B","ic7408_2A")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3A")&&g.isConnected("input_B","ic7432_3B")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_1A")&&g.isConnected("input_B","ic7408_1B")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3A")&&g.isConnected("input_B","ic7432_3B")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_1B")&&g.isConnected("input_B","ic7408_1A")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections. Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
    
                }
                  
    
                 else if(g.isConnected("input_A","ic7432_3B")&&g.isConnected("input_B","ic7432_3A")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_4A")&&g.isConnected("input_B","ic7408_4B")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3B")&&g.isConnected("input_B","ic7432_3A")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_4B")&&g.isConnected("input_B","ic7408_4A")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3B")&&g.isConnected("input_B","ic7432_3A")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_3A")&&g.isConnected("input_B","ic7408_3B")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3B")&&g.isConnected("input_B","ic7432_3A")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_3B")&&g.isConnected("input_B","ic7408_3A")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3B")&&g.isConnected("input_B","ic7432_3A")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_2A")&&g.isConnected("input_B","ic7408_2B")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3B")&&g.isConnected("input_B","ic7432_3A")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_2B")&&g.isConnected("input_B","ic7408_2A")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3B")&&g.isConnected("input_B","ic7432_3A")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_1A")&&g.isConnected("input_B","ic7408_1B")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_3B")&&g.isConnected("input_B","ic7432_3A")&&g.isConnected("ic7432_3Y","led_A")&&g.isConnected("input_A","ic7408_1B")&&g.isConnected("input_B","ic7408_1A")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
    
                }
                    
    
                 else if(g.isConnected("input_A","ic7432_2A")&&g.isConnected("input_B","ic7432_2B")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_4A")&&g.isConnected("input_B","ic7408_4B")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2A")&&g.isConnected("input_B","ic7432_2B")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_4B")&&g.isConnected("input_B","ic7408_4A")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2A")&&g.isConnected("input_B","ic7432_2B")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_3A")&&g.isConnected("input_B","ic7408_3B")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2A")&&g.isConnected("input_B","ic7432_2B")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_3B")&&g.isConnected("input_B","ic7408_3A")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2A")&&g.isConnected("input_B","ic7432_2B")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_2A")&&g.isConnected("input_B","ic7408_2B")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2A")&&g.isConnected("input_B","ic7432_2B")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_2B")&&g.isConnected("input_B","ic7408_2A")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2A")&&g.isConnected("input_B","ic7432_2B")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_1A")&&g.isConnected("input_B","ic7408_1B")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2A")&&g.isConnected("input_B","ic7432_2B")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_1B")&&g.isConnected("input_B","ic7408_1A")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
    
                }
                   
    
                else  if(g.isConnected("input_A","ic7432_2B")&&g.isConnected("input_B","ic7432_2A")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_4A")&&g.isConnected("input_B","ic7408_4B")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2B")&&g.isConnected("input_B","ic7432_2A")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_4B")&&g.isConnected("input_B","ic7408_4A")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2B")&&g.isConnected("input_B","ic7432_2A")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_3A")&&g.isConnected("input_B","ic7408_3B")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2B")&&g.isConnected("input_B","ic7432_2A")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_3B")&&g.isConnected("input_B","ic7408_3A")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2B")&&g.isConnected("input_B","ic7432_2A")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_2A")&&g.isConnected("input_B","ic7408_2B")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2B")&&g.isConnected("input_B","ic7432_2A")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_2B")&&g.isConnected("input_B","ic7408_2A")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2B")&&g.isConnected("input_B","ic7432_2A")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_1A")&&g.isConnected("input_B","ic7408_1B")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_2B")&&g.isConnected("input_B","ic7432_2A")&&g.isConnected("ic7432_2Y","led_A")&&g.isConnected("input_A","ic7408_1B")&&g.isConnected("input_B","ic7408_1A")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
    
                }
                     
    
                 else if(g.isConnected("input_A","ic7432_1A")&&g.isConnected("input_B","ic7432_1B")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_4A")&&g.isConnected("input_B","ic7408_4B")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1A")&&g.isConnected("input_B","ic7432_1B")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_4B")&&g.isConnected("input_B","ic7408_4A")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1A")&&g.isConnected("input_B","ic7432_1B")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_3A")&&g.isConnected("input_B","ic7408_3B")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1A")&&g.isConnected("input_B","ic7432_1B")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_3B")&&g.isConnected("input_B","ic7408_3A")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1A")&&g.isConnected("input_B","ic7432_1B")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_2A")&&g.isConnected("input_B","ic7408_2B")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1A")&&g.isConnected("input_B","ic7432_1B")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_2B")&&g.isConnected("input_B","ic7408_2A")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1A")&&g.isConnected("input_B","ic7432_1B")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_1A")&&g.isConnected("input_B","ic7408_1B")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1A")&&g.isConnected("input_B","ic7432_1B")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_1B")&&g.isConnected("input_B","ic7408_1A")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
    
                }
                    
    
                 else if(g.isConnected("input_A","ic7432_1B")&&g.isConnected("input_B","ic7432_1A")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_4A")&&g.isConnected("input_B","ic7408_4B")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1B")&&g.isConnected("input_B","ic7432_1A")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_4B")&&g.isConnected("input_B","ic7408_4A")&&g.isConnected("led_A1","ic7408_4Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1B")&&g.isConnected("input_B","ic7432_1A")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_3A")&&g.isConnected("input_B","ic7408_3B")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1B")&&g.isConnected("input_B","ic7432_1A")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_3B")&&g.isConnected("input_B","ic7408_3A")&&g.isConnected("led_A1","ic7408_3Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1B")&&g.isConnected("input_B","ic7432_1A")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_2A")&&g.isConnected("input_B","ic7408_2B")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1B")&&g.isConnected("input_B","ic7432_1A")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_2B")&&g.isConnected("input_B","ic7408_2A")&&g.isConnected("led_A1","ic7408_2Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1B")&&g.isConnected("input_B","ic7432_1A")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_1A")&&g.isConnected("input_B","ic7408_1B")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
                }else if(g.isConnected("input_A","ic7432_1B")&&g.isConnected("input_B","ic7432_1A")&&g.isConnected("ic7432_1Y","led_A")&&g.isConnected("input_A","ic7408_1B")&&g.isConnected("input_B","ic7408_1A")&&g.isConnected("led_A1","ic7408_1Y")){alert("Right connections.Now click on Start Simulation Button.");document.getElementById("startbutton").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
    
                }else 
                {
                    alert("Wrong Connections.");
                    document.getElementById("startbutton").disabled=true;
                    document.getElementById("resetbutton").disabled=false;
                }  
                }else{
                    document.getElementById("resetbutton").disabled=false;
                    alert("LED not connected to ground.")
                }
    
                }else{
                    document.getElementById("resetbutton").disabled=false;
                    alert("LED not connected to ground.")
                }
            }else{
                document.getElementById("resetbutton").disabled=false;
                alert("IC-7408 not connected to supply.")
          }
        }else{
            document.getElementById("resetbutton").disabled=false;
            alert("IC-7432 not connected to supply.");
        }
    
    
    console.log("executed")
    
    
}































### Introduction
<div style="text-align:justify">

### **Alarm system**

Alarm System is designed to alert us to an emergency through visual and audio appliances so that we can take action to protect ourselves.

### **A. Fire alarm system**

Fire Alarm system detects the fire in ambiance at very early stage by sensing smoke or/and heat and raises an alarm which warns people about the fire and furnishes sufficient time to take preventive measures. It is composed of alarm initiating devices (smoke detectors and heat sensors), alarm notification appliances (sirens or devices that produce loud noises), fire control units (sprinkler systems or fire extinguisher systems), power supplies and wirings. Alarm may be activated by smoke detectors, and/or heat detectors. These sensors are set to detect certain levels of heat or smoke that could be an indication of fire.

There are many expensive and sophisticated Fire Alarm Circuit in the form of stand-alone devices, but they can be designed using common components like Thermistor, LM358, Germanium Diode, LM341 and NE555.A fire alarm system can also be implemented using basic logic gates. The circuit diagram of fire alarm system using basic logic gates is shown in fig. 1

<div style="text-align:center">

![](images/image1(2).png)

**Fig.1-Circuit diagram of fire alarm system using basic logic gates**

**Table 1: Truth table of fire alarm system**

<center> 
<table style="text-align:center;color:black;"> 
        <tr style="border:1px solid black;font-size:110%;border-collapse:collapse;">
        <th colspan="2"; style="border:1px solid black;border-collapse:collapse;text-align:center;">INPUT</th>
        <th colspan="2"; style="border:1px solid black;border-collapse:collapse;text-align:center;" >OUTPUT</th>
        </tr> 
        <tr>
        <th style="border:1px solid black;font-size:110%;border-collapse:collapse;text-align:center;">Smoke sensor<br> A</th>
        <th style="border:1px solid black;font-size:110%;border-collapse:collapse;text-align:center;">Heat sensor<br>B</th>
        <th style="border:1px solid black;font-size:110%;border-collapse:collapse;text-align:center;">Extinguisher<br> P</th>
        <th style="border:1px solid black;font-size:110%;border-collapse:collapse;text-align:center;">Alarm<br> Q</th>
        </tr>        
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        </tr>      
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        </tr>      
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        </tr>       
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        </tr>       
    </table></center><br>
</div>
If the smoke detector senses smoke or/and the heat detector senses the temperature of the environment to be increasing above a given threshold, the output signals from either or both of these detectors will be high.This in turn will lead to the high output from the OR gate resulting in activation of the alarm.
  
  <br>
  
#### **Applications of fire alarm system:**

* Fire alarms are prime necessities in modern buildings and architectures, especially in banks, data centres and gas stations to detect fire at right time and prevent any damage to people or property.  
* Fire Alarm Systems can work as a stand – alone devices or be a part of a complex home security system with other security features like smoke detection, intruder alert, motion detection, etc.
  

### **B. Burglar alarm system**

Burglar alarm is an electronic device that emits a loud noise, where the unauthorized entry happens in the building or apartments. It is used to prevent theft/robbery and protect one's premises. Burglar alarm can be designed in different ways: from very simple sound alarm system to the advanced and feature rich system which will send SMS alerts, activate sound alarm, turn ON lights, turn ON CCTV cameras, close the main gate etc. The cost of building burglar alarm will go up with more features and new technologies incorporated into the system.

The basic burglar alarm systems monitor the perimeter of a home or building for breaches, such as opening a door or breaking a window with sensors that communicate with a control panel and transmit alarm signal.Itis based on the combinational logic circuit shown in fig. 2. It includes:
<div style="text-align:center">

![](images/image2(2).png)

**Fig.2-Circuit diagram of burglar alarm system using basic logic gates**

**Table 2: Truth table of burglar alarm system**

<center> 
      <table style="text-align:center;color:black;">   
        <tr style="border:1px solid black;font-size:110%;border-collapse:collapse;">
        <th colspan="3"; style="border:1px solid black;border-collapse:collapse;text-align:center;">INPUT</th>
        <th style="border:1px solid black;border-collapse:collapse;text-align:center;" >OUTPUT</th>
        </tr> 
        <tr>
        <th style="border:1px solid black;font-size:110%;border-collapse:collapse;">Arm key A</th>
        <th style="border:1px solid black;font-size:110%;border-collapse:collapse;">Reed switch B</th>
        <th style="border:1px solid black;font-size:110%;border-collapse:collapse;">Pressure mat C</th>
        <th style="border:1px solid black;font-size:110%;border-collapse:collapse;t">Buzzer</th>
        </tr>  
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        </tr>   
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        </tr>  
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        </tr>   
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        </tr>   
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        </tr>   
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        </tr>  
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">0</td>
        </tr> 
        <tr>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        <td style="border:1px solid black;font-size:120%;border-collapse:collapse;">1</td>
        </tr>   
        </table></center><br>
</div> 


* An arm switch for detection when the door is closed, ‘arming’ the alarm. It is incorporated into the front door key lock. Locking the door will set the alarm giving signal high (1).

* A Reed switch mounted on the door and frame for detection when the door is open. The sensor consists of two parts; magnetic strip and transmitter. Two parts are installed adjacent to each other. One part is installed on door/window frame, and the other installed on door/window. Once one of them is apart from each other, the sensor will be triggered. It gives a low (0) signal when the door is opened.

* A pressure switch for detecting pressure under mat when the burglar comes through window. It gives a high (1) output when stood on.

* A high decibel siren which is an important component for burglar alarm. First, the siren can alert the people inside the house with security breaches, and also the loud noise can act as deterrent for the burglar and may lead to burglar running away from house.

  

When the burglar alarm is activated (armed), and the door is opened changing the state of logic input, the alarm will be triggered with high decibel alarm sound. Alternatively, if the pressure pad is activated changing the state of the logic input, the alarm will be triggered.

#### **Applications of burglar alarm system:**

* Burglar alarm systems are increasingly being used in private homes, offices, stores and other businesses. They have become standard equipments especially in stores, warehouses etc.  
* The system is also suitable for use in jewelry stores, artifacts in museums and for safe guarding drawings, paintings and sculpture in art galleries and also to detect unauthorized access.

</div>
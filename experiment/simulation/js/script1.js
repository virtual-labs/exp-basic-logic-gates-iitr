
var isstartedsimulation=false;


// Components hide show code here
function breadboard() {
    var x = document.getElementById("board");
    x.style.visibility = "visible";

    var instance = new BoardController();

    instance.setJsPlumbInstance(jsPlumb);
    instance.initDefault();
    instance.setCircuitContainer('mid');

    //breadboard definition 
    {
        
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r1',  [0, 0, 0, -1, 59,   24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r2',  [0, 0, 0, -1, 72.5, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r4',  [0, 0, 0, -1, 99.5, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r5',  [0, 0, 0, -1, 113,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r3',  [0, 0, 0, -1, 86,   24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r9',  [0, 0, 0, -1, 180.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r11', [0, 0, 0, -1, 221,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r8',  [0, 0, 0, -1, 167,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r6',  [0, 0, 0, -1, 140,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r10', [0, 0, 0, -1, 194,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r14', [0, 0, 0, -1, 261.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r15', [0, 0, 0, -1, 275,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r7',  [0, 0, 0, -1, 153.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r16', [0, 0, 0, -1, 302,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r12', [0, 0, 0, -1, 234.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r19', [0, 0, 0, -1, 342.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r20', [0, 0, 0, -1, 356,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r18', [0, 0, 0, -1, 329,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r21', [0, 0, 0, -1, 383,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r17', [0, 0, 0, -1, 315.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r13', [0, 0, 0, -1, 248,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r22', [0, 0, 0, -1, 398,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r23', [0, 0, 0, -1, 410,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r24', [0, 0, 0, -1, 423.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r25', [0, 0, 0, -1, 437, 24], 'blue');

        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r27', [0, 0, 0, 1, 72.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r26', [0, 0, 0, 1, 59, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r30', [0, 0, 0, 1, 113, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r28', [0, 0, 0, 1, 86, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r32', [0, 0, 0, 1, 153.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r31', [0, 0, 0, 1, 140, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r29', [0, 0, 0, 1, 99.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r35', [0, 0, 0, 1, 194, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r34', [0, 0, 0, 1, 180.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r36', [0, 0, 0, 1, 221, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r33', [0, 0, 0, 1, 167.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r37', [0, 0, 0, 1, 234.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r38', [0, 0, 0, 1, 248, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r39', [0, 0, 0, 1, 261.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r41', [0, 0, 0, 1, 302, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r40', [0, 0, 0, 1, 275, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r42', [0, 0, 0, 1, 315.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r43', [0, 0, 0, 1, 329, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r45', [0, 0, 0, 1, 356, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r44', [0, 0, 0, 1, 342.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r46', [0, 0, 0, 1, 383, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r47', [0, 0, 0, 1, 396.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r49', [0, 0, 0, 1, 423.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r50', [0, 0, 0, 1, 437, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r48', [0, 0, 0, 1, 410, 38], 'blue');



        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r51', [0, 0, 0, -1, 478, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r52', [0, 0, 0, -1, 491.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r55', [0, 0, 0, -1, 532, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r54', [0, 0, 0, -1, 518.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r53', [0, 0, 0, -1, 505, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r56', [0, 0, 0, -1, 559, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r57', [0, 0, 0, -1, 572.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r58', [0, 0, 0, -1, 586, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r59', [0, 0, 0, -1, 599.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r61', [0, 0, 0, -1, 640, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r62', [0, 0, 0, -1, 653.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r60', [0, 0, 0, -1, 613, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r63', [0, 0, 0, -1, 667, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r64', [0, 0, 0, -1, 680.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r66', [0, 0, 0, -1, 721, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r67', [0, 0, 0, -1, 734.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r65', [0, 0, 0, -1, 694, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r68', [0, 0, 0, -1, 748, 24], 'blue');
        instance.addEndPoint('brown',4, 1,'board', 'row3', 'r69', [0, 0, 0, -1, 761.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r72', [0, 0, 0, -1, 815.5, 24],'blue');
        instance.addEndPoint('brown',4, 1,'board', 'row3', 'r71', [0, 0, 0, -1, 802, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r70', [0, 0, 0, -1, 775, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r73', [0, 0, 0, -1, 829, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r75', [0, 0, 0, -1, 856, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r74', [0, 0, 0, -1, 842.5, 24],'blue');

          instance.addEndPoint('brown',4,1, 'board', 'row4', 'r77', [0, 0, 0, 1, 491.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r78', [0, 0, 0, 1, 505, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r81', [0, 0, 0, 1, 559, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r76', [0, 0, 0, 0, 478, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r82', [0, 0, 0, 1, 572.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r79', [0, 0, 0, 1, 518.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r80', [0, 0, 0, 1, 532, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r84', [0, 0, 0, 1, 599.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r86', [0, 0, 0, 1, 640, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r85', [0, 0, 0, 1, 613, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r87', [0, 0, 0, 1, 653.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r89', [0, 0, 0, 1, 680.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r88', [0, 0, 0, 1, 667, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r91', [0, 0, 0, 1, 721, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r83', [0, 0, 0, 1, 586, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r90', [0, 0, 0, 1, 694, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r92', [0, 0, 0, 1, 734.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r96', [0, 0, 0, 1, 802, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r95', [0, 0, 0, 1, 775, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r94', [0, 0, 0, 1, 761.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r93', [0, 0, 0, 1, 748, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r97', [0, 0, 0, 1, 815.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r99', [0, 0, 0, 1, 842.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r98', [0, 0, 0, 1, 829, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r100', [0, 0, 0, 1, 856, 38], 'blue');


        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r101', [0, 0, 0, -1, 59.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r102', [0, 0, 0, -1, 73, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r103', [0, 0, 0, -1, 86.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r104', [0, 0, 0, -1, 100, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r105', [0, 0, 0, -1, 113.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r106', [0, 0, 0, -1, 140.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r108', [0, 0, 0, -1, 167.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r110', [0, 0, 0, -1, 194.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r107', [0, 0, 0, -1, 154, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r109', [0, 0, 0, -1, 181, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r111', [0, 0, 0, -1, 221.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r112', [0, 0, 0, -1, 235, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r113', [0, 0, 0, -1, 248.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r115', [0, 0, 0, -1, 275.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r114', [0, 0, 0, -1, 262, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r117', [0, 0, 0, -1, 316, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r118', [0, 0, 0, -1, 329.5, 267],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r116', [0, 0, 0, -1, 302.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r119', [0, 0, 0, -1, 343, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r120', [0, 0, 0, -1, 356.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r121', [0, 0, 0, -1, 383.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r122', [0, 0, 0, -1, 397, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r124', [0, 0, 0, -1, 424, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r123', [0, 0, 0, -1, 410.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r125', [0, 0, 0, -1, 437.5, 267], 'blue');


        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r127', [0, 0, 0, 1, 73, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r126', [0, 0, 0, 1, 59.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r129', [0, 0, 0, 1, 100, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r128', [0, 0, 0, 1, 86.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r130', [0, 0, 0, 1, 113.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r131', [0, 0, 0, 1, 140.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r132', [0, 0, 0, 1, 154, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r133', [0, 0, 0, 1, 167.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r134', [0, 0, 0, 1, 181, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r136', [0, 0, 0, 1, 221.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r135', [0, 0, 0, 1, 194.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r137', [0, 0, 0, 1, 235, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r138', [0, 0, 0, 1, 248.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r140', [0, 0, 0, 1, 275.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r142', [0, 0, 0, 1, 316, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r139', [0, 0, 0, 1, 262, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r141', [0, 0, 0, 1, 302.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r143', [0, 0, 0, 1, 329.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r145', [0, 0, 0, 1, 356.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r144', [0, 0, 0, 1, 343, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r147', [0, 0, 0, 1, 397, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r146', [0, 0, 0, 1, 383.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r148', [0, 0, 0, 1, 410.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r149', [0, 0, 0, 1, 424, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r150', [0, 0, 0, 1, 437.5, 281], 'blue');
 


        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r151', [0, 0, 0, -1, 478, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r152', [0, 0, 0, -1, 491.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r155', [0, 0, 0, -1, 532, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r153', [0, 0, 0, -1, 505, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r157', [0, 0, 0, -1, 572.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r156', [0, 0, 0, -1, 559, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r154', [0, 0, 0, -1, 518.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r160', [0, 0, 0, -1, 613, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r162', [0, 0, 0, -1, 653.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r161', [0, 0, 0, -1, 640, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r159', [0, 0, 0, -1, 599.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r158', [0, 0, 0, -1, 586, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r163', [0, 0, 0, -1, 667, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r164', [0, 0, 0, -1, 680.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r165', [0, 0, 0, -1, 694, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r166', [0, 0, 0, -1, 721, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r168', [0, 0, 0, -1, 748, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r167', [0, 0, 0, -1, 734.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r169', [0, 0, 0, -1, 761.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r170', [0, 0, 0, -1, 775, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r171', [0, 0, 0, -1, 802, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r172', [0, 0, 0, -1, 815.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r174', [0, 0, 0, -1, 842.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r173', [0, 0, 0, -1, 829, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r175', [0, 0, 0, -1, 856, 267], 'blue');

        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r176', [0, 0, 0, 0, 478, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r177', [0, 0, 0, -1, 491.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r180', [0, 0, 0, -1, 532, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r178', [0, 0, 0, -1, 505, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r182', [0, 0, 0, -1, 572.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r181', [0, 0, 0, -1, 559, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r179', [0, 0, 0, -1, 518.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r187', [0, 0, 0, -1, 653.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r183', [0, 0, 0, -1, 586, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r186', [0, 0, 0, -1, 640, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r185', [0, 0, 0, -1, 613, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r184', [0, 0, 0, -1, 599.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r188', [0, 0, 0, -1, 667, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r189', [0, 0, 0, -1, 680.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r191', [0, 0, 0, -1, 721, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r190', [0, 0, 0, -1, 694, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r192', [0, 0, 0, -1, 734.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r193', [0, 0, 0, -1, 748, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r194', [0, 0, 0, -1, 761.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r196', [0, 0, 0, -1, 802, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r195', [0, 0, 0, -1, 775, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r197', [0, 0, 0, -1, 815.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r198', [0, 0, 0, -1, 829, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r199', [0, 0, 0, -1, 842.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r200', [0, 0, 0, -1, 856, 281], 'blue');

 
    }
}

function ic7408() {
    var x = document.getElementById("ic7408");
    x.style.visibility = "visible";

    var ic7408 = new BoardController();
    ic7408.setJsPlumbInstance(jsPlumb);
    ic7408.setCircuitContainer('mid');

    {
        ic7408.addEndPoint('red',4.2,1, 'ic7408', 'ic7408_VCC', 'ic7408_VCC1', [0, 0, 1, -1, 11, 5], 'red');
        ic7408.addEndPoint('red',4.2,1, 'ic7408', 'ic7408_VCC', 'ic7408_VCC2', [0, 0, 1, -1, 11, 18], 'red');
        ic7408.addEndPoint('red',4.2,1, 'ic7408', 'ic7408_VCC', 'ic7408_VCC3', [0, 0, 1, -1, 11, 32], 'red');
        ic7408.addEndPoint('red',4.2,1, 'ic7408', 'ic7408_VCC', 'ic7408_VCC4', [0, 0, 1, -1, 11, 45], 'red');

        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4A', 'ic7408_4A01', [0, 0, 1, -1, 25, 5.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4A', 'ic7408_4A02', [0, 0, 1, -1, 25, 17.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4A', 'ic7408_4A03', [0, 0, 1, -1, 25, 31.5], 'red');
        ic7408.addEndPoint('blue',4.2, 1,'ic7408', 'ic7408_4A', 'ic7408_4A04', [0, 0, 1, -1, 25, 44.5], 'red');

        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4B', 'ic7408_4B01', [0, 0, 1, -1, 38.5, 5.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4B', 'ic7408_4B02', [0, 0, 1, -1, 38.5, 17.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4B', 'ic7408_4B03', [0, 0, 1, -1, 38.5, 31.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4B', 'ic7408_4B04', [0, 0, 1, -1, 38.5, 44.5], 'red');

        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4Y', 'ic7408_4Y01', [0, 0, 1, -1, 50.5, 5.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4Y', 'ic7408_4Y02', [0, 0, 1, -1, 50.5, 17.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4Y', 'ic7408_4Y03', [0, 0, 1, -1, 50.5, 31.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_4Y', 'ic7408_4Y04', [0, 0, 1, -1, 50.5, 44.5], 'red');
     //   ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_5A', 'ic7404_5A05', [0, 0, 1, -1, 45.5, 54], 'red');

        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3A', 'ic7408_3A01', [0, 0, 1, -1, 64, 5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3A', 'ic7408_3A02', [0, 0, 1, -1, 64, 18], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3A', 'ic7408_3A03', [0, 0, 1, -1, 64, 32], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3A', 'ic7408_3A04', [0, 0, 1, -1, 64, 45], 'red');
   //   ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_5Y', 'ic7404_5Y05', [0, 0, 1, -1, 59, 54], 'red');

        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3B', 'ic7408_3B01', [0, 0, 1, -1, 77.5, 5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3B', 'ic7408_3B02', [0, 0, 1, -1, 77.5, 18.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3B', 'ic7408_3B03', [0, 0, 1, -1, 77.5, 32], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3B', 'ic7408_3B04', [0, 0, 1, -1, 77.5, 45.5], 'red');
     ///  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_4A', 'ic7404_4A05', [0, 0, 1, -1, 72.5, 54], 'red')
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3Y', 'ic7408_3Y01', [0, 0, 1, -1, 91, 5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3Y', 'ic7408_3Y02', [0, 0, 1, -1, 91, 18.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3Y', 'ic7408_3Y03', [0, 0, 1, -1, 91, 32], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_3Y', 'ic7408_3Y04', [0, 0, 1, -1, 91, 45.5], 'red');
       // ic7404.addEndPoint(4.2, 1,'ic7404', 'ic7404_4Y', 'ic7404_4Y05', [0, 0, 1, -1, 86, 54], 'red');

    //    ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_1A', 'ic7404_1A01', [0, 0, 1, -1, 5, 94], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1A', 'ic7408_1A02', [0, 0, 1, -1, 10, 112.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1A', 'ic7408_1A03', [0, 0, 1, -1, 10, 126], 'red');
        ic7408.addEndPoint('blue',4.2, 1,'ic7408', 'ic7408_1A', 'ic7408_1A04', [0, 0, 1, -1, 10, 139.5], 'red');
       ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1A', 'ic7408_1A05', [0, 0, 1, -1, 10, 153], 'red');

        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1B', 'ic7408_1B02', [0, 0, 1, -1, 23.5, 112.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1B', 'ic7408_1B03', [0, 0, 1, -1, 23.5, 126], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1B', 'ic7408_1B04', [0, 0, 1, -1, 23.5, 139.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1B', 'ic7408_1B05', [0, 0, 1, -1, 23.5, 153], 'red');

        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1Y', 'ic7408_1Y02', [0, 0, 1, -1, 37, 112.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1Y', 'ic7408_1Y03', [0, 0, 1, -1, 37, 126], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1Y', 'ic7408_1Y04', [0, 0, 1, -1, 37, 139.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_1Y', 'ic7408_1Y05', [0, 0, 1, -1, 37, 153], 'red');

        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2A', 'ic7408_2A02', [0, 0, 1, -1, 50.5, 112.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2A', 'ic7408_2A03', [0, 0, 1, -1, 50.5, 126], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2A', 'ic7408_2A04', [0, 0, 1, -1, 50.5, 139.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2A', 'ic7408_2A05', [0, 0, 1, -1, 50.5, 153], 'red');

        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2B', 'ic7408_2B02', [0, 0, 1, -1, 64, 112.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2B', 'ic7408_2B03', [0, 0, 1, -1, 64, 126], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2B', 'ic7408_2B04', [0, 0, 1, -1, 64, 139.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2B', 'ic7408_2B05', [0, 0, 1, -1, 64, 153], 'red');

        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2Y', 'ic7408_2Y02', [0, 0, 1, -1, 77.5, 112.5], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2Y', 'ic7408_2Y03', [0, 0, 1, -1, 77.5, 126], 'red');
        ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2Y', 'ic7408_2Y04', [0, 0, 1, -1, 77.5, 139.5], 'red');
       ic7408.addEndPoint('blue',4.2,1, 'ic7408', 'ic7408_2Y', 'ic7408_2Y05', [0, 0, 1, -1, 77.5, 153], 'red');

        ic7408.addEndPoint('black',4.2,1, 'ic7408', 'ic7408_GND', 'ic7408_GND02', [0, 0, 1, -1, 91, 112.5], 'red');
        ic7408.addEndPoint('black',4.2,1, 'ic7408', 'ic7408_GND', 'ic7408_GND03', [0, 0, 1, -1, 91, 126], 'red');
        ic7408.addEndPoint('black',4.2,1, 'ic7408', 'ic7408_GND', 'ic7408_GND04', [0, 0, 1, -1, 91, 139.5], 'red');
        ic7408.addEndPoint('black',4.2,1, 'ic7408', 'ic7408_GND', 'ic7408_GND05', [0, 0, 1, -1, 91, 153], 'red');
    }
}






function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";
    
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
   
{
    supply.addEndPoint('red',9,1, 'supply', 'VCC', 'VCC', [0, 0, 0,0, 58,  59], 'blue');
    supply.addEndPoint('black',9,2, 'supply', 'GND', 'GND', [0, 0, 0, 0,114, 59], 'red');
  
}
}
function Input1() {
    var x = document.getElementById("input1");
    x.style.visibility = "visible";
  
    var y = document.getElementById("img1");
    y.style.visibility = "visible";

    var z = document.getElementById("i1");
    z.style.visibility = "visible";

 
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
   
{
    supply.addEndPoint('blue',7,1, 'input1', 'input11', 'input111', [0, 0, 0,0, -40, -50], 'blue');
  
  
}
}
function Input2() {
   
        var x = document.getElementById("input2");
        x.style.visibility = "visible";
        var y = document.getElementById("img2");
        y.style.visibility = "visible";
        var z = document.getElementById("i2");
        z.style.visibility = "visible";
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');

{
    
    supply.addEndPoint('blue',7,1, 'input2', 'input12', 'input112', [0, 0, 0, 0, -40, -50], 'blue');
  
}
}
function Input3() {
   
        var x = document.getElementById("input3");
        x.style.visibility = "visible";
        var y = document.getElementById("img3");
        y.style.visibility = "visible";
        var z = document.getElementById("i3");
        z.style.visibility = "visible";
    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
  
{
    
    supply.addEndPoint('blue',7,1, 'input3', 'input13', 'input113', [0, 0, 0, 0, -40, -50], 'blue');
  
}
}
function led() {
     var x = document.getElementById("ledoff");
     x.style.visibility = "visible";
     var x1 = document.getElementById("led1");
     x1.style.visibility = "visible";
     
     var x2 = document.getElementById("l1");
     x2.style.visibility = "visible";

     var x3 = document.getElementById("l2");
     x3.style.visibility = "visible";
    
     var ledoff = new BoardController();
    ledoff.setJsPlumbInstance(jsPlumb);
    ledoff.setCircuitContainer('mid');
    //ledoff.makeDraggable('ledoff');
    //draggable('ledoff', 'mid');

{
  //  led.addEndPoint(4.2,1, 'led1', 'led_C1', 'led_C101', [0, 0, 0, 1, 3, 62], 'red');

    ledoff.addEndPoint('black',4.2,1, 'ledoff', 'ledoff_C1', 'cap_C211', [0, 0, 1, -1, 16, 127], 'red');
    ledoff.addEndPoint('black',4.2,1, 'ledoff', 'ledoff_C1', 'cap_C212', [0, 0, 1, -1, 16, 141], 'red');
    ledoff.addEndPoint('black',4.2,1, 'ledoff', 'ledoff_C1', 'cap_C213', [0, 0, 1, -1, 16, 155], 'red');
    ledoff.addEndPoint('black',4.2,1, 'ledoff', 'ledoff_C1', 'cap_C214', [0, 0, 1, -1, 16, 169], 'red');


    ledoff.addEndPoint('green',4.2,1, 'ledoff', 'ledoff_A1', 'cap_A211', [0, 0, 1, -1, 2.5, 127], 'red');
    ledoff.addEndPoint('green',4.2,1, 'ledoff', 'ledoff_A1', 'cap_A212', [0, 0, 1, -1, 2.5, 141], 'red');
    ledoff.addEndPoint('green',4.2,1, 'ledoff', 'ledoff_A1', 'cap_A213', [0, 0, 1, -1, 2.5, 155], 'red');
    ledoff.addEndPoint('green',4.2,1, 'ledoff', 'ledoff_A1', 'cap_A214', [0, 0, 1, -1, 2.5, 169], 'red');

}
}


function myFunction() {
  document.getElementById("first_insrt").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function resetCircuit()
         {   

       if(confirm("Do you want to reset?")){
           window.location.reload();
        }

         }   
         
         
function radiobutton1()

{    
	 
   document.getElementById('head1').innerHTML = " - Gate 1";  
         
     document.getElementById("checkbutton").disabled=false;
     document.getElementById("resetbutton").disabled=false;
     document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("dot").style="visibility:hidden";
     document.getElementById('led1').src="images/ledoff.png";
     isstartedsimulation=false;


     
}
           
function radiobutton2()
{  
	
    document.getElementById('head1').innerHTML = " - Gate 2";

    document.getElementById("resetbutton").disabled=false;
    document.getElementById("checkbutton").disabled=false;
     document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("dot").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
             isstartedsimulation=false;


}
function radiobutton3()
{ 
   
    document.getElementById('head1').innerHTML = " - Gate 3";

    
    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
     document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("dot").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
             isstartedsimulation=false;


 }
 function radiobutton4()
{ 
	

    document.getElementById('head1').innerHTML = " - Gate 4";

   
    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
     document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("dot").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";

             isstartedsimulation=false;
  

         
}
function radiobutton5()
{  
	
    document.getElementById('head1').innerHTML = " - Gate 5";


   
    document.getElementById("resetbutton").disabled=false;
    document.getElementById("checkbutton").disabled=false;
     document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("dot").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
             isstartedsimulation=false;


      
}
function radiobutton6()
{  
	
    document.getElementById('head1').innerHTML = " - Gate 6";

    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
     document.getElementById("img1").src="images/toggleoff1.png";
    
     document.getElementById("dot").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
             isstartedsimulation=false;


 

    
}function radiobutton7()
{  
	
	
    document.getElementById('head1').innerHTML = " - Gate 1";

    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
     document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("img2").src="images/toggleoff1.png";
     document.getElementById("dot1").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
             isstartedsimulation=false;

    
}

function radiobutton8()
{ 
	
    document.getElementById('head1').innerHTML = " - Gate 2";


    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
      document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("img2").src="images/toggleoff1.png";
     document.getElementById("dot1").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
             isstartedsimulation=false;



}
function radiobutton9()
{ 
    document.getElementById('head1').innerHTML = " - Gate 3";

   
    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
    document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("img2").src="images/toggleoff1.png"; 
     document.getElementById("dot1").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
             isstartedsimulation=false;


}

function radiobutton10()
{ 
	
    document.getElementById('head1').innerHTML = " - Gate 4";

    
    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
      document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("img2").src="images/toggleoff1.png";
     document.getElementById("dot1").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
             isstartedsimulation=false;


 }
 function radiobutton11()
{ 
	
    document.getElementById('head1').innerHTML = " - Gate 1";

    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
      document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("img2").src="images/toggleoff1.png";
     document.getElementById("img3").src="images/toggleoff1.png";
     document.getElementById("dot3").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";

             isstartedsimulation=false;


 } 
 function radiobutton12()
{ 
	
    document.getElementById('head1').innerHTML = " - Gate 2";

    
    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
    document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("img2").src="images/toggleoff1.png";
     document.getElementById("img3").src="images/toggleoff1.png";
     document.getElementById("dot3").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
             isstartedsimulation=false;


 }
 function radiobutton13()
{ 
	
    document.getElementById('head1').innerHTML = " - Gate 3";

    
    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
    document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("img2").src="images/toggleoff1.png";
     document.getElementById("img3").src="images/toggleoff1.png";
     document.getElementById("dot3").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";

             isstartedsimulation=false;


 }
       
 function radiobutton14()
{ 
	

    document.getElementById('head1').innerHTML = " - Gate 1";

    document.getElementById("checkbutton").disabled=false;
    document.getElementById("resetbutton").disabled=false;
    document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("img2").src="images/toggleoff1.png";
     document.getElementById("img3").src="images/toggleoff1.png";
     document.getElementById("dot3").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
    isstartedsimulation=false;theorem1c=false;theorem1b=false;


 }
  function radiobutton15()
{ 
	
 
   document.getElementById('head1').innerHTML = "- Gate 2";


   document.getElementById("checkbutton").disabled=false;
   document.getElementById("resetbutton").disabled=false;
   document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("img2").src="images/toggleoff1.png";
     document.getElementById("img3").src="images/toggleoff1.png";
     document.getElementById("dot3").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
       isstartedsimulation=false;theorem1c=false;theorem1b=false;

        

 }
  function radiobutton16()
{ 
	
   document.getElementById('head1').innerHTML = " - Gate 3";
   
   document.getElementById("checkbutton").disabled=false;
   document.getElementById("resetbutton").disabled=false;
   document.getElementById("img1").src="images/toggleoff1.png";
     document.getElementById("img2").src="images/toggleoff1.png";
     document.getElementById("img3").src="images/toggleoff1.png";
     document.getElementById("dot3").style="visibility:hidden";
        document.getElementById('led1').src="images/ledoff.png";
      isstartedsimulation=false;theorem1c=false;theorem1b=false;
          

 }


function parameter()
{ var z=document.getElementById("sel2").value;

    if(z=="first")
    {
   var po=document.getElementById("chooseone"); //
   po.style.visibility="hidden";
   
   var a= document.getElementById("First");
   a.style.display="block";

     const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";



   var p=document.getElementById("check"); //for selecting gate
   p.style.visibility="visible";
   var r=document.getElementById("box1"); //truth table
   r.style.visibility="visible";
   var q=document.getElementById("reset");  //reset button
   q.style.visibility="visible";
    document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the Truth Table for the IC and click on check button.<br><b>2.</b> Select any one of the gates of the IC.<br> <b>3.</b> Click on the components button to place the component on the table.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
    var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image 3.png";
     img.style="width: 340px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 
   document.getElementById('head').innerHTML = "Familiarisation of ICs : IC-7404(1-INPUT NOT GATE IC)";   
   document.getElementById("check").addEventListener("click", function(){
   correct1(); //for checking truth table

});


    document.getElementById("checkbutton").addEventListener("click", function(){
    checkCircuit1();   //for checkng connection
});
   document.getElementById("one").addEventListener("click", function(){
    var i=document.getElementById("truthtable");
    i.style.visibility="visible";
    document.getElementById("truthtable").src="images/NotGate1.png";
    components1();
}); 
    document.getElementById("two").addEventListener("click", function(){
    var i=document.getElementById("truthtable");
    i.style.visibility="visible";
    document.getElementById("truthtable").src="images/NotGate2.png";
    components1();
});
    document.getElementById("three").addEventListener("click", function(){
    var i=document.getElementById("truthtable");
    i.style.visibility="visible";
    document.getElementById("truthtable").src="images/NotGate3.png";
    components1();
});
    document.getElementById("four").addEventListener("click", function(){
    var i=document.getElementById("truthtable");
    i.style.visibility="visible";
    document.getElementById("truthtable").src="images/NotGate4.png";
    components1();
});
    document.getElementById("five").addEventListener("click", function(){
    var i=document.getElementById("truthtable");
    i.style.visibility="visible";
    document.getElementById("truthtable").src="images/NotGate5.png";
    components1();
});
    document.getElementById("six").addEventListener("click", function(){
    var i=document.getElementById("truthtable");
    i.style.visibility="visible";
    document.getElementById("truthtable").src="images/NotGate6.png";
    components1();
});
    document.getElementById("img1").addEventListener("click", function(){
    change1();
    image1();
    
});
    }
   else if(z=="second")
{  var po=document.getElementById("chooseone");
   po.style.visibility="hidden";

   var a= document.getElementById("First");
   a.style.display="block";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

   var p=document.getElementById("check");
   p.style.visibility="visible";
   var r=document.getElementById("box2");
   r.style.visibility="visible";
   var q=document.getElementById("reset");
   q.style.visibility="visible";
   document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the truth table and click on check button.<br> <b>2.</b> Select any one of the gate.<br><b>3.</b> Place the components.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
    var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image 10.png";
     img.style="width: 320px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 
   document.getElementById('head').innerHTML += " : IC-7432(2-INPUT OR GATE IC)";   

   document.getElementById("check").addEventListener("click", function(){
   correct2();

});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit();
});
    document.getElementById("seven").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2OrGate1.png";
    components2();
});
    document.getElementById("eight").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2OrGate2.png";
    components2();
});
    document.getElementById("nine").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2OrGate3.png";
    components2();
});
    document.getElementById("ten").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2OrGate4.png";
    components2();
});
    document.getElementById("img1").addEventListener("click", function(){
    change2();
    image2();

});
    document.getElementById("img2").addEventListener("click", function(){
    change3();
    image2();
  
});
}
else if(z=="third")
{  var po=document.getElementById("chooseone");
   po.style.visibility="hidden";

   var a= document.getElementById("First");
   a.style.display="block";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";


   var p=document.getElementById("check");
   p.style.visibility="visible";
   var r=document.getElementById("box2");
   r.style.visibility="visible";
   var q=document.getElementById("reset");
   q.style.visibility="visible";
   document.getElementById('head').innerHTML += " : IC-7408(2-INPUT AND GATE IC)"; 
   document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the truth table and click on check button.<br> <b>2.</b> Select any one of the gate.<br><b>3.</b> Place the components.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
    var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image 6.png";
     img.style="width: 320px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
       
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 
   document.getElementById("check").addEventListener("click", function(){
   correct3();

});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit();
});
       document.getElementById("seven").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2AndGate1.png";
    components3();
});
    document.getElementById("eight").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2AndGate2.png";
    components3();
});
    document.getElementById("nine").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2AndGate3.png";
    components3();
});
    document.getElementById("ten").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2AndGate4.png";
    components3();
});
      document.getElementById("img1").addEventListener("click", function(){
      change4();
      image2();

});
    document.getElementById("img2").addEventListener("click", function(){
    change5();
      image2();
  
});
}
else if(z=="fourth")
{  var po=document.getElementById("chooseone");
   po.style.visibility="hidden";

   var a= document.getElementById("First");
   a.style.display="block";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

   var p=document.getElementById("check");
   p.style.visibility="visible";
   var r=document.getElementById("box2");
   r.style.visibility="visible";
   var q=document.getElementById("reset");
   q.style.visibility="visible";
   document.getElementById('head').innerHTML += " : IC-7400(2-INPUT NAND GATE IC)"; 
   document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the truth table and click on check button.<br> <b>2.</b> Select any one of the gate.<br><b>3.</b> Place the components.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
    var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image 14.png";
     img.style="width: 320px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 
  

   document.getElementById("check").addEventListener("click", function(){
   correct4();

});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit();
    if(theorem1==true||theorem1b==true||theorem1c==true ||theorem1d==true)
    {
    	document.getElementById("led1").src="images/bulbon.png";
    }
});
    document.getElementById("seven").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2NandGate1.png";
    components4();
});
    document.getElementById("eight").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2NandGate2.png";
    components4();
});
    document.getElementById("nine").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2NandGate3.png";
    components4();
});
    document.getElementById("ten").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2NandGate4.png";
    components4();
});
    document.getElementById("img1").addEventListener("click", function(){
    change6();
      image2();


});
   document.getElementById("img2").addEventListener("click", function(){
   change7();
      image2();

  
});
}

else if(z=="fifth")
{  var po=document.getElementById("chooseone");
   po.style.visibility="hidden";

   var a= document.getElementById("First");
   a.style.display="block";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

   var p=document.getElementById("check");
   p.style.visibility="visible";
   var r=document.getElementById("box2");
   r.style.visibility="visible";
   var q=document.getElementById("reset");
   q.style.visibility="visible";
   document.getElementById('head').innerHTML += " : IC-7402(2-INPUT NOR GATE IC)";  
   document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the truth table and click on check button.<br> <b>2.</b> Select any one of the gate.<br><b>3.</b> Place the components.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
    var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image 19.png";
     img.style="width: 320px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
       
 
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 
   document.getElementById("check").addEventListener("click", function(){
   correct5();

});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit2();
     if(theorem1c==true)
    {
    	document.getElementById("led1").src="images/bulbon.png";
    	document.getElementById("img1").addEventListener("click", function(){
    change8();
    image2();

});
    document.getElementById("img2").addEventListener("click", function(){
    change9();
    image2();
  
});
    }
});
  document.getElementById("seven").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2NorGate1.png";
    components5();
});
    document.getElementById("eight").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2NorGate2.png";
    components5();
});
    document.getElementById("nine").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2NorGate3.png";
    components5();
});
    document.getElementById("ten").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2NorGate4.png";
    components5();
});
    
}

else if(z=="sixth")
{  var po=document.getElementById("chooseone");
   po.style.visibility="hidden";

   var a= document.getElementById("First");
   a.style.display="block";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

   var p=document.getElementById("check");
   p.style.visibility="visible";
   var r=document.getElementById("box2");
   r.style.visibility="visible";
   var q=document.getElementById("reset");
   q.style.visibility="visible";
   document.getElementById('head').innerHTML += " : IC-7486(2-INPUT EX-0R GATE IC)"; 
   document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the truth table and click on check button.<br> <b>2.</b> Select any one of the gate.<br><b>3.</b> Place the components.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
    var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image 24.png";
     img.style="width: 320px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
       
  
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 
   document.getElementById("check").addEventListener("click", function(){
   correct6();

});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit();
});
   document.getElementById("seven").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2XorGate1.png";
    components6();
});
    document.getElementById("eight").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2XorGate2.png";
    components6();
});
    document.getElementById("nine").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2XorGate3.png";
    components6();
});
    document.getElementById("ten").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2XorGate4.png";
    components6();
});

    document.getElementById("img1").addEventListener("click", function(){
    change10();
      image2();


});
   document.getElementById("img2").addEventListener("click", function(){
   change11();
      image2();

  
});
}
else if(z=="seventh")
{  var po=document.getElementById("chooseone");
   po.style.visibility="hidden";
   var a= document.getElementById("First");
   a.style.display="block";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

   var p=document.getElementById("check");
   p.style.visibility="visible";
   var r=document.getElementById("box2");
   r.style.visibility="visible";
   var q=document.getElementById("reset");
   q.style.visibility="visible";
   document.getElementById('head').innerHTML += " : IC-74266(2-INPUT EX-NOR GATE IC)";  
   document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the truth table and click on check button.<br> <b>2.</b> Select any one of the gate.<br><b>3.</b> Place the components.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
    var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image 26.png";
     img.style="width: 320px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
       
 
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 
   document.getElementById("check").addEventListener("click", function(){
   correct7();

});

   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit3();
    if(theorem1c==true )
    {
        document.getElementById("led1").src="images/bulbon.png";
    }
});
      document.getElementById("seven").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2XnorGate1.png";
    components7();
});
    document.getElementById("eight").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2XnorGate2.png";
    components7();
});
    document.getElementById("nine").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2XnorGate3.png";
    components7();
});
    document.getElementById("ten").addEventListener("click", function(){
    var i=document.getElementById("truthtable1");
    i.style.visibility="visible";
    document.getElementById("truthtable1").src="images/in2XnorGate4.png";
    components7();
});
    document.getElementById("img2").addEventListener("click", function(){
    change13();
    image2();
  
});

    document.getElementById("img1").addEventListener("click", function(){
    change12();
    image2();

});
}


else if(z=="eighth")  //// fo 3 ninput gates
{  var po=document.getElementById("chooseone");
   po.style.visibility="hidden";
   var a= document.getElementById("First");
   a.style.display="block";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

   var p=document.getElementById("check");
   p.style.visibility="visible";
   var r=document.getElementById("box3");
   r.style.visibility="visible";
   var q=document.getElementById("reset");
   q.style.visibility="visible";
   document.getElementById('head').innerHTML += " : IC-7411(3-INPUT AND GATE IC)";   
   document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the truth table and click on check button.<br> <b>2.</b> Select any one of the gate.<br><b>3.</b> Place the components.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
   var img = document.createElement("img");
   img.id = "figure1";
     img.src = "images/image 7.png";
     img.style="width: 320px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
       
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 
   document.getElementById("check").addEventListener("click", function(){
   correct8();

});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit4();
});
     document.getElementById("eleven").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3AndGate1.png";
    components8();
});
    document.getElementById("twelve").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3AndGate2.png";
    components8();
});
    document.getElementById("thirteen").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3AndGate3.png";
    components8();
});
  document.getElementById("img1").addEventListener("click", function(){
  change14();
  image3();

});
  document.getElementById("img2").addEventListener("click", function(){
  change15();
  image3();

  
});
  document.getElementById("img3").addEventListener("click", function(){
  change16();
  image3();
  
});
}
else if(z=="ninth")  //// fo 3 ninput gates
{  var po=document.getElementById("chooseone");
   po.style.visibility="hidden";
   var a= document.getElementById("First");
   a.style.display="block";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

   var p=document.getElementById("check");
   p.style.visibility="visible";
   var r=document.getElementById("box3");
   r.style.visibility="visible";
   var q=document.getElementById("reset");
   q.style.visibility="visible";
   document.getElementById('head').innerHTML += " : IC-74HC4075(3-INPUT OR GATE IC)";   
   document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the truth table and click on check button.<br> <b>2.</b> Select any one of the gate.<br><b>3.</b> Place the components.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
    var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image 11.png";
     img.style="width: 320px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
       
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 
   document.getElementById("check").addEventListener("click", function(){
   correct9();

});
     document.getElementById("fourteen").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3OrGate1.png";
    components9();
});
    document.getElementById("fifteen").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3OrGate2.png";
    components9();
});
    document.getElementById("sixteen").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3OrGate3.png";
    components9();
});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit5();
});
   document.getElementById("img1").addEventListener("click", function(){
  change17();
  image3();

});
 document.getElementById("img2").addEventListener("click", function(){
  change18();
  image3();
  
});
  document.getElementById("img3").addEventListener("click", function(){
  change19();
  image3();

});
     
}
else if(z=="tenth")  //// fo 3 ninput gates
{ var po=document.getElementById("chooseone");
   po.style.visibility="hidden";
   var a= document.getElementById("First");
   a.style.display="block";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

   var p=document.getElementById("check");
   p.style.visibility="visible";
   var r=document.getElementById("box3");
   r.style.visibility="visible";
   var q=document.getElementById("reset");
   q.style.visibility="visible";
   document.getElementById('head').innerHTML += " : IC-7410(3-INPUT NAND GATE IC)";  
   document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the truth table and click on check button.<br> <b>2.</b> Select any one of the gate.<br><b>3.</b> Place the components.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
    var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image 15.png";
     img.style="width: 320px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
       
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 

   document.getElementById("check").addEventListener("click", function(){
   correct10();

});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit4();
    if(theorem1c==true )
    {
        document.getElementById("led1").src="images/bulbon.png";
    }
});
  document.getElementById("img1").addEventListener("click", function(){
  change20();
  image3();

});
  document.getElementById("img2").addEventListener("click", function(){
  change21();
  image3();

  
});
  document.getElementById("eleven").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3NandGate1.png";
    components10();
});
    document.getElementById("twelve").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3NandGate2.png";
    components10();
});
    document.getElementById("thirteen").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3NandGate3.png";
    components10();
});
  document.getElementById("img3").addEventListener("click", function(){
  change22();
  image3();

  
});
}
else if(z=="eleventh")  //// fo 3 ninput gates
{  var po=document.getElementById("chooseone");
   po.style.visibility="hidden";
   var a= document.getElementById("First");
   a.style.display="block";

   const First = document.getElementById('First');
const close_btn = document.getElementById('close-btn');
const First_data = document.getElementById('First_Data');

First.addEventListener('click', () => {
    First_data.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    First_data.classList.remove('visible')
});

  
    var left = document.getElementById("First_Data"); 
     left.style.display ="block";

   var p=document.getElementById("check");
   p.style.visibility="visible";
   var r=document.getElementById("box3");
   r.style.visibility="visible";
   var q=document.getElementById("reset");
   q.style.visibility="visible";
   document.getElementById('head').innerHTML += " : IC-7427(3-INPUT NOR GATE IC)"; 
   document.getElementById("first_insrt").innerHTML = "<b>1.</b> Fill the truth table and click on check button.<br> <b>2.</b> Select any one of the gate.<br><b>3.</b> Place the components.<br><b>4.</b> Make connections to the gate which is to be verified as shown in pin diagram of the IC.<br>";
    var img = document.createElement("img");
     img.id = "figure1";
     img.src = "images/image 20.png";
     img.style="width: 320px; height: 230px; align:center;"
     var src = document.getElementById("first_insrt");
     src.appendChild(img);
       
  
     document.getElementById("first_insrt").innerHTML += "<br><b>5.</b> Click on check connection button. If connections are right, verify the truth table."; 
   document.getElementById("check").addEventListener("click", function(){
   correct11();

});
   document.getElementById("checkbutton").addEventListener("click", function(){
   checkCircuit4();
    if(theorem1c==true )
    {
        document.getElementById("led1").src="images/bulbon.png";
    }
});
  document.getElementById("img1").addEventListener("click", function(){
  change23();
  image3();


});
  document.getElementById("img2").addEventListener("click", function(){
  change24();
  image3();
  
  
});
  document.getElementById("img3").addEventListener("click", function(){
  change25();
  image3();
  
});
  document.getElementById("eleven").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3NorGate1.png";
    components11();
});
    document.getElementById("twelve").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3NorGate2.png";
    components11();
});
    document.getElementById("thirteen").addEventListener("click", function(){
    var i=document.getElementById("truthtable2");
    i.style.visibility="visible";
    document.getElementById("truthtable2").src="images/in3NorGate3.png";
    components11();
});
}
}


function correct1()
{
	var a=document.getElementById("cell1");
	var b=document.getElementById("cell2");

	if(a.value=="1" && b.value=="0")
	{
		alert("Right data.Now proceed to simulation.");

        var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
        var pop=document.getElementById("showanother");
        pop.style.visibility="visible";  
           
        var pop=document.getElementById("box1");
        pop.style.visibility="hidden";

        var q=document.getElementById("reset");
        q.style.visibility="hidden";
 
    var p=document.getElementById("check");
    p.style.visibility="hidden";
  
	}
    else if(a.value=="" || b.value=="")
        { alert("Please fill the table properly.");}
    else{alert("Wrong data.Please fill it again.");}
}

function components1()
           {
            document.getElementById("breadboard").addEventListener("click", function(){
                breadboard();
             });
                      document.getElementById("ic").addEventListener("click", function(){
                ic7408();
             });
                              document.getElementById("led").addEventListener("click", function(){
                led();
             });
                
                         document.getElementById("powersupply").addEventListener("click", function(){
                supply();
             });
                     document.getElementById("digital").addEventListener("click", function(){
                Input1();
                 
             });
           }



function correct2()
{
	var a=document.getElementById("cell3");
	var b=document.getElementById("cell4");
	var c=document.getElementById("cell5");
	var d=document.getElementById("cell6");

	if(a.value=="0" && b.value=="1" &&c.value=="1"&& d.value=="1")
	{
		alert("Right data.Now proceed to simulation.");
     
        var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
        

  document.getElementById("ic1").src="images/IC7432.png" 
  var pop=document.getElementById("showanother1");
  pop.style.visibility="visible";
  var pop=document.getElementById("box2");
  pop.style.visibility="hidden";
  var q=document.getElementById("reset");
  q.style.visibility="hidden";
 
  var p=document.getElementById("check");
  p.style.visibility="hidden";
  
	}
        else if(a.value=="" || b.value=="" ||c.value=="" || d.value=="")
        { alert("Please fill the table properly.");}
    else{alert("Wrong data.Please fill it again.");}
}

function components2()
{
    document.getElementById("breadboard").addEventListener("click", function(){
        breadboard();
     });
              document.getElementById("ic").addEventListener("click", function(){
        ic7408();
     });
                      document.getElementById("led").addEventListener("click", function(){
        led();
     });
        
                 document.getElementById("powersupply").addEventListener("click", function(){
        supply();
     });
             document.getElementById("digital").addEventListener("click", function(){
        Input1();
            Input2();
     });
}

function correct3()
{
	var a=document.getElementById("cell3");
	var b=document.getElementById("cell4");
	var c=document.getElementById("cell5");
	var d=document.getElementById("cell6");

	if(a.value=="0" && b.value=="0" &&c.value=="0"&& d.value=="1")
	{
		alert("Right data.Now proceed to simulation.");

            document.getElementById("ic1").src="images/IC7408.png" 
            var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
	var pop=document.getElementById("showanother1");
    pop.style.visibility="visible";
    var pop=document.getElementById("box2");
    pop.style.visibility="hidden";
    var q=document.getElementById("reset");
    q.style.visibility="hidden";
 
    var p=document.getElementById("check");
    p.style.visibility="hidden";
  
	}
     else if(a.value=="" || b.value=="" ||c.value=="" || d.value=="")
        { alert("Please fill the table properly.");}
    else{alert("Wrong data.Please fill it again.");}
}
function components3()
{
    document.getElementById("breadboard").addEventListener("click", function(){
        breadboard();
     });
              document.getElementById("ic").addEventListener("click", function(){
        ic7408();
     });
                      document.getElementById("led").addEventListener("click", function(){
        led();
     });
        
                 document.getElementById("powersupply").addEventListener("click", function(){
        supply();
     });
             document.getElementById("digital").addEventListener("click", function(){
        Input1();
            Input2();
     });
}

 function correct4()
{
	var a=document.getElementById("cell3");
	var b=document.getElementById("cell4");
	var c=document.getElementById("cell5");
	var d=document.getElementById("cell6");

	if(a.value=="1" && b.value=="1" &&c.value=="1"&& d.value=="0")
	{
		alert("Right data.Now proceed to simulation.");

         
    document.getElementById("ic1").src="images/IC7400.png" 
    var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
	var pop=document.getElementById("showanother1");
    pop.style.visibility="visible";
    var pop=document.getElementById("box2");
    pop.style.visibility="hidden";
    var q=document.getElementById("reset");
    q.style.visibility="hidden";
 
    var p=document.getElementById("check");
    p.style.visibility="hidden";
  
	}
     else if(a.value=="" || b.value=="" ||c.value=="" || d.value=="")
        { alert("Please fill the table properly.");}
    else{alert("Wrong data.Please fill it again.");}
} 

function components4()
{
    document.getElementById("breadboard").addEventListener("click", function(){
        breadboard();
     });
              document.getElementById("ic").addEventListener("click", function(){
        ic7408();
     });
                      document.getElementById("led").addEventListener("click", function(){
        led();
     });
        
                 document.getElementById("powersupply").addEventListener("click", function(){
        supply();
     });
             document.getElementById("digital").addEventListener("click", function(){
        Input1();
            Input2();
     });
}

 function correct5()
{
	var a=document.getElementById("cell3");
	var b=document.getElementById("cell4");
	var c=document.getElementById("cell5");
	var d=document.getElementById("cell6");

	if(a.value=="1" && b.value=="0" &&c.value=="0"&& d.value=="0")
	{
		alert("Right data.Now proceed to simulation.");

        
   document.getElementById("ic1").src="images/IC7402.png" 
   var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
   var pop=document.getElementById("showanother1");
   pop.style.visibility="visible";
   var pop=document.getElementById("box2");
   pop.style.visibility="hidden";
    var q=document.getElementById("reset");
   q.style.visibility="hidden";
 
    var p=document.getElementById("check");
    p.style.visibility="hidden";
  
	}
     else if(a.value=="" || b.value=="" ||c.value=="" || d.value=="")
        { alert("Please fill the table properly.");}
    else{alert("Wrong data.Please fill it again.");}
} 

function components5()
{
    document.getElementById("breadboard").addEventListener("click", function(){
        breadboard();
     });
              document.getElementById("ic").addEventListener("click", function(){
        ic7408();
     });
                      document.getElementById("led").addEventListener("click", function(){
        led();
     });
        
                 document.getElementById("powersupply").addEventListener("click", function(){
        supply();
     });
             document.getElementById("digital").addEventListener("click", function(){
        Input1();
            Input2();
     });
}

 function correct6()
{
	var a=document.getElementById("cell3");
	var b=document.getElementById("cell4");
	var c=document.getElementById("cell5");
	var d=document.getElementById("cell6");

	if(a.value=="0" && b.value=="1" &&c.value=="1"&& d.value=="0")
	{
		alert("Right data.Now proceed to simulation.");
 
     
        document.getElementById("ic1").src="images/IC7486.png" 
        var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
	var pop=document.getElementById("showanother1");
    pop.style.visibility="visible";
    var pop=document.getElementById("box2");
    pop.style.visibility="hidden";
    var q=document.getElementById("reset");
    q.style.visibility="hidden";
 
    var p=document.getElementById("check");
    p.style.visibility="hidden";
  
	}
     else if(a.value=="" || b.value=="" ||c.value=="" || d.value=="")
        { alert("Please fill the table properly.");}
    else{alert("Wrong data.Please fill it again.");}
}   

function components6()
{
    document.getElementById("breadboard").addEventListener("click", function(){
        breadboard();
     });
              document.getElementById("ic").addEventListener("click", function(){
        ic7408();
     });
                      document.getElementById("led").addEventListener("click", function(){
        led();
     });
        
                 document.getElementById("powersupply").addEventListener("click", function(){
        supply();
     });
             document.getElementById("digital").addEventListener("click", function(){
        Input1();
            Input2();
     });
}

 function correct7()
{
	var a=document.getElementById("cell3");
	var b=document.getElementById("cell4");
	var c=document.getElementById("cell5");
	var d=document.getElementById("cell6");

	if(a.value=="1" && b.value=="0" &&c.value=="0"&& d.value=="1")
	{
		alert("Right data.Now proceed to simulation.");

        
    document.getElementById("ic1").src="images/IC74266.png" 
    var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
	var pop=document.getElementById("showanother1");
    pop.style.visibility="visible";
    var pop=document.getElementById("box2");
     pop.style.visibility="hidden";
     var q=document.getElementById("reset");
    q.style.visibility="hidden";
 
    var p=document.getElementById("check");
    p.style.visibility="hidden";
  
	}
     else if(a.value=="" || b.value=="" ||c.value=="" || d.value=="")
        { alert("Please fill the table properly.");}
    else{alert("Wrong data.Please fill it again.");}
}

function components7()
{
    document.getElementById("breadboard").addEventListener("click", function(){
        breadboard();
     });
              document.getElementById("ic").addEventListener("click", function(){
        ic7408();
     });
                      document.getElementById("led").addEventListener("click", function(){
        led();
     });
        
                 document.getElementById("powersupply").addEventListener("click", function(){
        supply();
     });
             document.getElementById("digital").addEventListener("click", function(){
        Input1();
            Input2();
     });
}

 function correct8()
{
	var a=document.getElementById("cell7");
	var b=document.getElementById("cell8");
	var c=document.getElementById("cell9");
	var d=document.getElementById("cell10");
	var e=document.getElementById("cell11");
	var f=document.getElementById("cell12");
	var g=document.getElementById("cell13");
	var h=document.getElementById("cell14");

	if(a.value=="0" && b.value=="0" && c.value=="0"&& d.value=="0" && e.value=="0" 
		&& f.value=="0" && g.value=="0" && h.value=="1")
	{
		alert("Right data.Now proceed to simulation.");

         
    document.getElementById("ic1").src="images/IC7411.png" 
    var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
	var pop=document.getElementById("showanother2");
    pop.style.visibility="visible";
    var pop=document.getElementById("box3");
    pop.style.visibility="hidden";
     var q=document.getElementById("reset");
    q.style.visibility="hidden";
 
    var p=document.getElementById("check");
    p.style.visibility="hidden";
  
	}
     else if(a.value=="" || b.value=="" ||c.value=="" || d.value=="" ||e.value=="" || f.value=="" ||g.value=="" || h.value=="" )
        { alert("Please fill the table properly.");}
    else{alert("Wrong data.Please fill it again.");}
}

function components8()
{
    document.getElementById("breadboard").addEventListener("click", function(){
        breadboard();
     });
              document.getElementById("ic").addEventListener("click", function(){
        ic7408();
     });
                      document.getElementById("led").addEventListener("click", function(){
        led();
     });
        
                 document.getElementById("powersupply").addEventListener("click", function(){
        supply();
     });
             document.getElementById("digital").addEventListener("click", function(){
        Input1();
            Input2();
            Input3();
     });
}

function correct9()
{
	var a=document.getElementById("cell7");
	var b=document.getElementById("cell8");
	var c=document.getElementById("cell9");
	var d=document.getElementById("cell10");
	var e=document.getElementById("cell11");
	var f=document.getElementById("cell12");
	var g=document.getElementById("cell13");
	var h=document.getElementById("cell14");

	if(a.value=="0" && b.value=="1" && c.value=="1"&& d.value=="1" && e.value=="1" 
		&& f.value=="1" && g.value=="1" && h.value=="1")
	{
		alert("Right data.Now proceed to simulation.");

         
    document.getElementById("ic1").src="images/IC4075.png" 
    var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
    var pop=document.getElementById("showanother3");
    pop.style.visibility="visible";
    var pop=document.getElementById("box3");
    pop.style.visibility="hidden";
    var q=document.getElementById("reset");
    q.style.visibility="hidden";
 
    var p=document.getElementById("check");
    p.style.visibility="hidden";
  
	}
         else if(a.value=="" || b.value=="" ||c.value=="" || d.value=="" ||e.value=="" || f.value=="" ||g.value=="" || h.value=="" )
        { alert("Please fill the table properly.");}
      else{alert("Wrong data.Please fill it again.");}
}

function components9()
{
    document.getElementById("breadboard").addEventListener("click", function(){
        breadboard();
     });
              document.getElementById("ic").addEventListener("click", function(){
        ic7408();
     });
                      document.getElementById("led").addEventListener("click", function(){
        led();
     });
        
                 document.getElementById("powersupply").addEventListener("click", function(){
        supply();
     });
             document.getElementById("digital").addEventListener("click", function(){
        Input1();
            Input2();
            Input3();
     });
}

 function correct10()
{
	var a=document.getElementById("cell7");
	var b=document.getElementById("cell8");
	var c=document.getElementById("cell9");
	var d=document.getElementById("cell10");
	var e=document.getElementById("cell11");
	var f=document.getElementById("cell12");
	var g=document.getElementById("cell13");
	var h=document.getElementById("cell14");

	if(a.value=="1" && b.value=="1" && c.value=="1"&& d.value=="1" && e.value=="1" 
		&& f.value=="1" && g.value=="1" && h.value=="0")
	{
		alert("Right data.Now proceed to simulation.");

         
    document.getElementById("ic1").src="images/IC7410.png" 

    var pop=document.getElementById("showanother2");
    var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
    pop.style.visibility="visible";
    var pop=document.getElementById("box3");
    pop.style.visibility="hidden";
     var q=document.getElementById("reset");
    q.style.visibility="hidden";
 
    var p=document.getElementById("check");
    p.style.visibility="hidden";
  
	}
         else if(a.value=="" || b.value=="" ||c.value=="" || d.value=="" ||e.value=="" || f.value=="" ||g.value=="" || h.value=="" )
        { alert("Please fill the table properly.");}
      else{alert("Wrong data.Please fill it again.");}
}

function components10()
{
    document.getElementById("breadboard").addEventListener("click", function(){
        breadboard();
     });
              document.getElementById("ic").addEventListener("click", function(){
        ic7408();
     });
                      document.getElementById("led").addEventListener("click", function(){
        led();
     });
        
                 document.getElementById("powersupply").addEventListener("click", function(){
        supply();
     });
             document.getElementById("digital").addEventListener("click", function(){
        Input1();
            Input2();
            Input3();
     });
}

 function correct11()
{
	var a=document.getElementById("cell7");
	var b=document.getElementById("cell8");
	var c=document.getElementById("cell9");
	var d=document.getElementById("cell10");
	var e=document.getElementById("cell11");
	var f=document.getElementById("cell12");
	var g=document.getElementById("cell13");
	var h=document.getElementById("cell14");

	if(a.value=="1" && b.value=="0" && c.value=="0"&& d.value=="0" && e.value=="0" 
		&& f.value=="0" && g.value=="0" && h.value=="0")
	{
		alert("Right data.Now proceed to simulation.");
 
         
    document.getElementById("ic1").src="images/IC7427.png" 
    var x= document.getElementById("second");
        x.style.display="block";
        
         const Second = document.getElementById('second');
        const Second_Data = document.getElementById('Second_Data')
        const btn_close = document.getElementById('btn_close');;

Second.addEventListener('click', () => {
    Second_Data.classList.toggle('visible')
});  

btn_close.addEventListener('click', () => {
    Second_Data.classList.remove('visible')
}); 
var left = document.getElementById("Second_Data"); 
left.style.display ="block";
    var pop=document.getElementById("showanother2");
    pop.style.visibility="visible";
    var pop=document.getElementById("box3");
    pop.style.visibility="hidden";
     var q=document.getElementById("reset");
     q.style.visibility="hidden";
 
    var p=document.getElementById("check");
    p.style.visibility="hidden";
  
	}
         else if(a.value=="" || b.value=="" ||c.value=="" || d.value=="" ||e.value=="" || f.value=="" ||g.value=="" || h.value=="" )
        { alert("Please fill the table properly.");}
    else{alert("Wrong data.Please fill it again.");}
}

function components11()
{
    document.getElementById("breadboard").addEventListener("click", function(){
        breadboard();
     });
              document.getElementById("ic").addEventListener("click", function(){
        ic7408();
     });
                      document.getElementById("led").addEventListener("click", function(){
        led();
     });
        
                 document.getElementById("powersupply").addEventListener("click", function(){
        supply();
     });
             document.getElementById("digital").addEventListener("click", function(){
        Input1();
            Input2();
            Input3();
     });
}

function reset()
{   if(confirm("Do you want to reset?")){
          
        
    document.getElementById("cell1").value="";
    document.getElementById("cell2").value="";
    document.getElementById("cell3").value="";
    document.getElementById("cell4").value="";
    document.getElementById("cell5").value="";
    document.getElementById("cell6").value="";
    document.getElementById("cell7").value="";
    document.getElementById("cell8").value="";
    document.getElementById("cell9").value="";
    document.getElementById("cell10").value="";
    document.getElementById("cell11").value="";
    document.getElementById("cell12").value="";
    document.getElementById("cell13").value="";
    document.getElementById("cell14").value="";
}
}
function image1()
{
    var img1= document.getElementById("img1").src;
    if(img1.indexOf('toggleoff1')!= -1)
    {
        document.getElementById("dot").style="position:absolute; top :485px; left: 1220px;visibility:visible;z-index:1;";
    }
    else 
         {
        document.getElementById("dot").style="position:absolute; top :525px; left: 1220px;visibility:visible;z-index:1";
    }
                        
}
function image2()
{
    var img1= document.getElementById("img1").src;
    var img2= document.getElementById("img2").src;

    if(img1.indexOf('toggleon')!= -1&& img2.indexOf('toggleoff1')!= -1 )
    {
        document.getElementById("dot1").style="position:absolute;top :500px; left: 1245px;visibility:visible;z-index:1";
    }
    else if(img1.indexOf('toggleoff1')!= -1&& img2.indexOf('toggleon')!= -1 )
    {
        document.getElementById("dot1").style=" position:absolute;top :465px; left: 1245px;visibility:visible;z-index:1";
    }
    else if(img1.indexOf('toggleon')!= -1&& img2.indexOf('toggleon')!= -1 )
    {
        document.getElementById("dot1").style="position:absolute;top :545px; left: 1245px;visibility:visible;z-index:1";
    }
    else 
         {
        document.getElementById("dot1").style="position:absolute;top :423px; left: 1245px;visibility:visible;z-index:1";
    }
                        
}
function image3()
{
    var img1= document.getElementById("img1").src;
    var img2= document.getElementById("img2").src;
    var img3= document.getElementById("img3").src;

 if(img1.indexOf('toggleoff1')!= -1&& img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleon')!= -1)
    {
        document.getElementById("dot3").style="position:absolute; top :420px; left: 1270px;visibility:visible;z-index:1";
    }
    else if(img1.indexOf('toggleoff1')!= -1&& img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleoff1')!= -1)
    {
        document.getElementById("dot3").style="position:absolute; top :455px; left: 1270px;visibility:visible;z-index:1";
    }
    else if(img1.indexOf('toggleoff1')!= -1&& img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleon')!= -1)
    {
        document.getElementById("dot3").style="position:absolute; top :490px; left: 1270px;visibility:visible;z-index:1";
    }
    else if(img1.indexOf('toggleon')!= -1&& img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleoff1')!= -1)
    {
        document.getElementById("dot3").style="position:absolute; top :520px; left: 1270px;visibility:visible;z-index:1";
    }
    else if(img1.indexOf('toggleon')!= -1&& img2.indexOf('toggleoff1')!= -1 && img3.indexOf('toggleon')!= -1)
    {
        document.getElementById("dot3").style="position:absolute; top :550px; left: 1270px;visibility:visible;z-index:1";
    }
    else if(img1.indexOf('toggleon')!= -1&& img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleoff1')!= -1)
    {
        document.getElementById("dot3").style="position:absolute; top :580px; left: 1270px;visibility:visible;z-index:1";
    }
    else if(img1.indexOf('toggleon')!= -1&& img2.indexOf('toggleon')!= -1 && img3.indexOf('toggleon')!= -1)
    {
        document.getElementById("dot3").style="position:absolute; top :620px; left: 1270px;visibility:visible;z-index:1";
    }
    else 
         {
        document.getElementById("dot3").style="position:absolute; top :390px; left: 1270px;visibility:visible;z-index:1";
    }
                        
}
var array_bloques = [];

var array_codigo = ["void girar(String lado, int grados) {\nif(lado==\"derecha\"){\n servoD.write(0);\n servoI.write(0);\n delay(7.86*grados);\n} else{\nservoD.write(180);\nservoI.write(180);\ndelay(5.56*grados);\n}\nservoD.write(90);\nservoI.write(90);\n}\n",
    "void mover_hacia(String direccion) {\nif(direccion==\"delante\"){\n servoD.write(110);\n servoI.write(70);\n} else{\nservoD.write(0);\nservoI.write(180);\n}\nservoD.write(90);\nservoI.write(90);\n}\n",
    "void parar_todo() {\n  servoD.write(90);\n  servoI.write(90);\n}\n",
    "void actualizarTodosLosSensores() {\n  for(int i=0; i < 3; i++){\n   sensor[i] =  digitalRead(pinesSensores[i]);\n  }\n  for(int i=0; i < 4; i++){\n   delay(15);\n   for(int i=0; i < 3; i++){\n    if (digitalRead(pinesSensores[i]) == LINEA )\n      sensor[i] = LINEA;\n    }\n  }\n}\n",
    "bool hay_linea(int id_sensor) {\n  actualizarTodosLosSensores();\n  return sensor[id_sensor-1] == LINEA;\n}\n",
    "void cerrar_pinza() {\n  while ( gradosPinza < GMAX) {\n    gradosPinza = gradosPinza+1;\n    servoP.write(gradosPinza);\n  }\n}\n",
    "void abrir_pinza() {\n  while ( gradosPinza > GMIN) {\n    gradosPinza = gradosPinza-1;\n    servoP.write(gradosPinza);\n  }\n}\n",
    "void mover_pinza(int coordenada) {\n\tif ( coordenada < 0 || coordenada > 5 )\n\t\treturn;\n\t int movimiento = coordenada - posicionY;\n\tint tiempoY = tiempoPaso  * coordenada;\n\tif(coordenada==0) {\n\t\twhile(analogRead(A0)){\n\t\t\tservoPMove.write(0);\n\t\t}\n\t} else {\n\t\tif (movimiento < 0) {\n\t\t\tservoPMove.write(0);\n\t\tdelay(-tiempoY);\n\t\t} else {\n\t\t\tservoPMove.write(180);\n\t\t\tdelay(tiempoY);\n\t\t}\n\t}\n\tservoPMove.write(90);\n\tposicionY = coordenada;\n}\n",
    "bool hay_obstaculo(int distancia_param, int id_sensor) {\n}\n"

];

Blockly.JavaScript['bloque_principal'] = function (block) {
    var statements_variables = Blockly.JavaScript.statementToCode(block, 'variables');
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');

    var code = statements_variables + '\nvoid loop() {\n' + statements_cuerpo + '}\n\n';

    //Va hasta 9 porque de momento no hay mas metodos 
    for (i = 1; i < 10; i++) {
        if (array_bloques.indexOf(i) != -1) {
            code += array_codigo[i - 1];
        }
    }
    return code;
};

Blockly.JavaScript['parar'] = function (block) {
    var code = 'parar_todo();\n';
    array_bloques.push(3);
    return code;
};

Blockly.JavaScript['ir_a'] = function (block) {
    var text_coordenadax = block.getFieldValue('X');
    var text_coordenaday = block.getFieldValue('Y');
    var code = 'ir_a(' + text_coordenadax + ',' + text_coordenaday + ');\n';
    return code;
};

Blockly.JavaScript['girar_hacia'] = function (block) {
    var dropdown_direccion = block.getFieldValue('direccion');
    var angle_grados = block.getFieldValue('grados');
    var code = 'girar("' + dropdown_direccion + '",' + angle_grados + ');\n';
    array_bloques.push(1);
    return code;
};

Blockly.JavaScript['mover_hacia'] = function (block) {
    var dropdown_direccion = block.getFieldValue('direccion');
    var code = 'mover_hacia("' + dropdown_direccion + '");\n';
    array_bloques.push(2);
    return code;
};

Blockly.JavaScript['parar_tiempo'] = function (block) {
    var text_segundos = block.getFieldValue('SEG');
    var code = 'parar_ruedas(' + text_segundos + ');\n';
    return code;
};

Blockly.JavaScript['mover_pinza'] = function (block) {
    var distancia = block.getFieldValue('DIST');
    var code = 'mover_pinza(' + distancia + ');\n';
    array_bloques.push(8);
    return code;
};

Blockly.JavaScript['abrir_pinza'] = function (block) {
    var code = 'abrir_pinza();\n';
    array_bloques.push(7);
    return code;
};

Blockly.JavaScript['cerrar_pinza'] = function (block) {
    var code = 'cerrar_pinza();\n';
    array_bloques.push(6);
    return code;
};

Blockly.JavaScript['math_number'] = function (block) {
    var code = block.getFieldValue('NUM');
    return code;
};

Blockly.JavaScript['controls_if'] = function (block) {
    var code_if = Blockly.JavaScript.statementToCode(block, 'IF0');
    var code_do = Blockly.JavaScript.statementToCode(block, 'DO0');
    var elseIfCoun = block.elseifCount_;
    var code = "";

    if (block.elseifCount_ == 0) {
        code = 'if(' + code_if + ') {\n' + code_do + '}\n';
    }
    if (block.elseifCount_ > 0) {
        code = 'if(' + code_if + ') {\n' + code_do + '}\n'
        var contador = 1;
        while (contador < block.elseifCount_ + 1) {
            code_if = Blockly.JavaScript.statementToCode(block, 'IF' + contador);
            code_do = Blockly.JavaScript.statementToCode(block, 'DO' + contador);
            code += ' else if(' + code_if + ') {\n' + code_do + '}\n';
            contador++;
        }
    }
    if (block.elseCount_ == 1) {
        var code_else = Blockly.JavaScript.statementToCode(block, 'ELSE');
        code += 'else {' + code_else + '}\n';
    }
    return code;
};

Blockly.JavaScript['controls_whileUntil'] = function (block) {
    var code_if = Blockly.JavaScript.statementToCode(block, 'BOOL');
    var mode = block.getFieldValue('MODE');
    var code_do = Blockly.JavaScript.statementToCode(block, 'DO');
    if (mode == 'WHILE')
        return 'while(' + code_if + ') {\n' + code_do + '}\n';
    else
        return 'do {\n' + code_do + '} while(' + code_if + ')\n';

};

Blockly.JavaScript['logic_compare'] = function (block) {
    var code1 = Blockly.JavaScript.statementToCode(block, 'A');
    var operador = block.getFieldValue('OP');
    var code2 = Blockly.JavaScript.statementToCode(block, 'B');

    if (code1 == '') {
        code1 = block.getInputTargetBlock('A');
    }
    if (code2 == '') {
        code2 = block.getInputTargetBlock('B');
    }

    if (operador == 'EQ') {
        operador = '==';
    } else if (operador == 'NEQ') {
        operador = '!='
    } else if (operador == 'LT') {
        operador = '<';
    } else if (operador == 'LTE') {
        operador = '<=';
    } else if (operador == 'GT') {
        operador = '>';
    } else if (operador == 'GTE') {
        operador = '>=';
    }
    var code = code1 + ' ' + operador + ' ' + code2;
    return code;
};

Blockly.JavaScript['controls_repeat'] = function (block) {
    var code_for = block.getFieldValue('TIMES');
    var code_do = Blockly.JavaScript.statementToCode(block, 'DO');
    return 'for(int i=0; i<' + code_for + ';i++) {\n' + code_do + '}\n';
};

Blockly.JavaScript['variables_set'] = function (block) {
    var nombre = block.getFieldValue('VAR');
    var value = Blockly.JavaScript.statementToCode(block, 'VALUE');
    return nombre + '=' + value + ';\n';
};

Blockly.JavaScript['variables_get'] = function (block) {
    var nombre = block.getFieldValue('VAR');
    return nombre;
};

Blockly.JavaScript['detectar_linea'] = function (block) {
    var dropdown_id_sensor = block.getFieldValue('id_sensor');
    var code = 'hay_linea(' + dropdown_id_sensor + ')';
    array_bloques.push(4);
    array_bloques.push(5);
    return code;
};

Blockly.JavaScript['distancia_obstaculo'] = function (block) {
    var text_centimetros = block.getFieldValue('centimetros');
    var dropdown_id_sensor = block.getFieldValue('id_sensor');
    // TODO: Assemble JavaScript into code variable.
    var code = 'hay_obstaculo(' + text_centimetros + ',' + dropdown_id_sensor + ')';
    array_bloques.push(9);
    return code;
};

Blockly.JavaScript['establecer_posicion_inicial'] = function (block) {
    var text_coordenadax = block.getFieldValue('coordenadaX');
    var text_coordenaday = block.getFieldValue('coordenadaY');
    // TODO: Assemble JavaScript into code variable.
    var code = 'int posX =' + text_coordenadax + ';\nint posY= ' + text_coordenaday + ';\n';
    return code;
};

Blockly.JavaScript['establecer_tamanio_tablero'] = function (block) {
    var text_tamx = block.getFieldValue('tamX');
    var text_tamy = block.getFieldValue('tamY');
    // TODO: Assemble JavaScript into code variable.
    var code = 'int tablero[' + text_tamx + '][' + text_tamy + '];\n';
    return code;
};

Blockly.JavaScript['mover_casilla'] = function (block) {
    var dropdown_direccion = block.getFieldValue('direccion');
    var text_casillas = block.getFieldValue('casillas');
    var code = 'mover_casilla(' + dropdown_direccion + ',' + text_casillas + ');\n';
    return code;
};


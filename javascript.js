Blockly.JavaScript['bloque_principal'] = function (block) {
    var statements_variables = Blockly.JavaScript.statementToCode(block, 'variables');
    var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');

    var code = statements_variables + '\nvoid loop() {\n' + statements_cuerpo + '}\n\n';


    return code;
};

Blockly.JavaScript['parar'] = function (block) {
    var code = 'parar_todo();\n';
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
    return code;
};

Blockly.JavaScript['mover_hacia'] = function (block) {
    var dropdown_direccion = block.getFieldValue('direccion');
    var text_metros = block.getFieldValue('metros');
    var code = 'mover_hacia("' + dropdown_direccion + '",' + text_metros + ');\n';
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
    return code;
};

Blockly.JavaScript['abrir_pinza'] = function (block) {
    var code = 'abrir_pinza();\n';
    return code;
};

Blockly.JavaScript['cerrar_pinza'] = function (block) {
    var code = 'cerrar_pinza();\n';
    return code;
};

Blockly.JavaScript['math_number'] = function (block) {
    var code = Blockly.JavaScript.statementToCode(block, 'NUM');
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
        operador = '>';
    } else if (operador = 'LTE') {
        operador = '>=';
    } else if (operador == 'GT') {
        operador = '<';
    } else if (operador == 'GTE') {
        operador = '=<';
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
    return nombre + '=' + value + ';';
};

Blockly.JavaScript['variables_get'] = function (block) {
    var nombre = block.getFieldValue('VAR');
    return nombre;
};

Blockly.JavaScript['detectar_linea'] = function (block) {
    var dropdown_id_sensor = block.getFieldValue('id_sensor');
    var code = 'hay_linea(' + dropdown_id_sensor + ')';
    return code;
};

Blockly.JavaScript['distancia_obstaculo'] = function (block) {
    var text_centimetros = block.getFieldValue('centimetros');
    var dropdown_id_sensor = block.getFieldValue('id_sensor');
    // TODO: Assemble JavaScript into code variable.
    var code = 'hay_obstaculo(' + text_centimetros + ',' + dropdown_id_sensor + ')';
    // TODO: Change ORDER_NONE to the correct strength.
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


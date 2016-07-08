var servos_variables = "";
var metodos_auxiliares = '';

Blockly.JavaScript['bloque_principal_placa'] = function (block) {
  servos_variables = "";
  metodos_auxiliares = '';

  var statements_variables = Blockly.JavaScript.statementToCode(block, 'variables');
  var statements_pines = Blockly.JavaScript.statementToCode(block, 'pines');
  var statements_codigo = Blockly.JavaScript.statementToCode(block, 'código');

  var code = servos_variables + 'void setup() {\n Serial.begin(9600);\n' + statements_variables +
    statements_pines + '}\nvoid loop() {\n' + statements_codigo + '}\n' + metodos_auxiliares;
  return code;
};

Blockly.JavaScript['definir_pin_digital'] = function (block) {
  var dropdown_tipo = block.getFieldValue('TIpo');
  var text_n_pin = block.getFieldValue('n_pin');
  var code = 'pinMode(' + text_n_pin + ',' + dropdown_tipo + ');\n';
  return code;
};

Blockly.JavaScript['leer_pin_digital'] = function (block) {
  var text_n_pin = block.getFieldValue('n_pin');
  var code = 'digitalRead(' + text_n_pin + ')';
  return code;
};

Blockly.JavaScript['escribir_pin_digital'] = function (block) {
  var text_n_pin = block.getFieldValue('n_pin');
  var text_valor = Blockly.JavaScript.statementToCode(block, 'valor');
  var code = 'digitalWrite(' + text_n_pin + ',' + text_valor + ');\n';
  return code;
};

Blockly.JavaScript['leer_pin_analogico'] = function (block) {
  var text_n_pin = block.getFieldValue('n_pin');
  var code = 'analogRead(A' + text_n_pin + ')';
  return code;
};

Blockly.JavaScript['escribir_pin_analogico'] = function (block) {
  var text_n_pin = block.getFieldValue('n_pin');
  var text_valor = block.getFieldValue('valor');
  var code = 'analogWrite(' + text_n_pin + ',' + text_valor + ');\n';
  return code;
};

Blockly.JavaScript['esperar'] = function (block) {
  var text_tiempo = block.getFieldValue('tiempo');
  var code = 'delay(' + text_tiempo + ');\n';
  return code;
};

Blockly.JavaScript['leer_ultrasonidos'] = function (block) {
  var text_p_echo = block.getFieldValue('p_echo');
  var text_p_trig = block.getFieldValue('P_trig');
  var code = 'leerUltrasonidos(' + text_p_trig + ',' + text_p_echo + ')';
  metodos_auxiliares += 'int leerUltrasonidos(int trig, int echo) {\n\tdigitalWrite(trig, LOW);\n\tdelayMicroseconds(5);\n'
    + '\tdigitalWrite(trig, HIGH);\n\tdelayMicroseconds(10);\n'
    + '\tint tiempoRespuesta = pulseIn(echo, HIGH);\n\treturn int(0.017 * tiempoRespuesta);\n}';
  return code;
};

Blockly.JavaScript['map'] = function (block) {
  var text_valor_rec = block.getFieldValue('valor_rec');
  var text_d_min = block.getFieldValue('d_min');
  var text_d_max = block.getFieldValue('d_max');
  var text_a_min = block.getFieldValue('a_min');
  var text_a_max = block.getFieldValue('a_max');
  var code = 'map(' + text_valor_rec + ',' + text_d_min + ',' + text_d_max + ',' + text_a_min + ',' + text_a_max + ');\n';
  return code;
};

Blockly.JavaScript['zumbador'] = function (block) {
  var text_pin = block.getFieldValue('pin');
  var text_frecuencia = block.getFieldValue('frecuencia');
  var text_timpo = block.getFieldValue('timpo');
  var code = 'tone(' + text_pin + ',' + frecuencia + ');\ndelay(' + text_timpo + ')\nnoTone(' + text_pin + ');\n';
  return code;
};

Blockly.JavaScript['definir_servo'] = function (block) {
  var text_nombre = block.getFieldValue('NOMBRE');
  var text_n_pin = block.getFieldValue('PIN');
  servos_variables += 'Servo ' + text_nombre + ';\n';
  return text_nombre + '.attach(' + text_n_pin + ');\n';
};

Blockly.JavaScript['girar_servo'] = function (block) {
  var text_nombre = block.getFieldValue('NOMBRE');
  var text_grados = Blockly.JavaScript.statementToCode(block, 'GRADOS');
  var code = text_nombre + '.write(' + text_grados + ');\n';
  return code;
};

Blockly.JavaScript['aleatorio'] = function (block) {
  var text_minimo = block.getFieldValue('MIN');
  var text_maximo = block.getFieldValue('MAX');
  var code = 'random(' + text_minimo + ',' + text_maximo + ');\n';
  return code;
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
        code += 'else {\n' + code_else + '}\n';
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




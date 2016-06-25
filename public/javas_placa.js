var servos_variables = "";
var metodos_auxiliares = '';

Blockly.JavaScript['bloque_principal_placa'] = function (block) {
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
  var code = 'leerUltrasonidos(' + text_p_echo + ',' + text_p_trig + ')';
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




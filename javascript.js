Blockly.JavaScript['bloque_principal'] = function(block) {
  var statements_variables = Blockly.JavaScript.statementToCode(block, 'variables');
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
  var code = statements_variables +'\n loop(){'+ statements_cuerpo+'}';
  return code;
};

Blockly.JavaScript['parar'] = function(block) {
  var code = 'parar_todo();\n';
  return code;
};

Blockly.JavaScript['ir_a'] = function(block) {
  var text_coordenadax = block.getFieldValue('coordenadaX');
  var text_coordenaday = block.getFieldValue('coordenadaY');
  var code = 'ir_a('+text_coordenadax+','+text_coordenaday+');\n';
  return code;
};

Blockly.JavaScript['girar_hacia'] = function(block) {
  var dropdown_direccion = block.getFieldValue('direccion');
  var angle_grados = block.getFieldValue('grados');
  var code = 'girar('+dropdown_direccion+','+angle_grados+');\n';
  return code;
};

Blockly.JavaScript['mover_hacia'] = function(block) {
  var dropdown_direccion = block.getFieldValue('direccion');
  var text_metros = block.getFieldValue('metros');
  var code = 'mover_hacia('+dropdown_direccion+','+text_metros+');\n';
  return code;
};

Blockly.JavaScript['parar_tiempo'] = function(block) {
  var text_segundos = block.getFieldValue('segundos');
  var code = 'parar_ruedas('+text_segundos+');\n';
  return code;
};

Blockly.JavaScript['subir_pinza'] = function(block) {
 var distancia =  block.getFieldValue('DIST');
  var code = 'subir_pinza('+distancia+');\n';
  return code;
};

Blockly.JavaScript['bajar_pinza'] = function(block) {
  var distancia =  block.getFieldValue('DIST');
  var code = 'bajar_pinza('+distancia+');\n';
  return code;
};

Blockly.JavaScript['abrir_pinza'] = function(block) {
  var code = 'abrir_pinza();\n';
  return code;
};

Blockly.JavaScript['cerrar_pinza'] = function(block) {
  var code = 'cerar_pinza();\n';
  return code;
};

Blockly.JavaScript['math_number'] = function(block) {
  var code = Blockly.JavaScript.statementToCode(block, 'NUM');
  return code;
};

Blockly.JavaScript['controls_if'] = function(block) {
  var code_if = Blockly.JavaScript.statementToCode(block, 'IF0');
  var code_do = Blockly.JavaScript.statementToCode(block, 'DO0');
  return 'if('+code_if +') {' +code_do+'}';
};

Blockly.JavaScript['logic_compare'] = function(block) {
  var code1 =Blockly.JavaScript.statementToCode(block, 'A');
  var operador = block.getFieldValue('OP');
  var code2 = block.getFieldValue('B');

  // TODO: Assemble JavaScript into code variable.
  var code = code1+''+operador+''+code2;
  return code;
};

Blockly.JavaScript['bloque_principal'] = function(block) {
  var statements_variables = Blockly.JavaScript.statementToCode(block, 'variables');
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['parar'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return null;
};

Blockly.JavaScript['ir_a'] = function(block) {
  var text_coordenadax = block.getFieldValue('coordenadaX');
  var text_coordenaday = block.getFieldValue('coordenadaY');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['girar_hacia'] = function(block) {
  var dropdown_direccion = block.getFieldValue('direccion');
  var angle_grados = block.getFieldValue('grados');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['mover_hacia'] = function(block) {
  var dropdown_direccion = block.getFieldValue('direccion');
  var text_metros = block.getFieldValue('metros');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['parar_tiempo'] = function(block) {
  var text_segundos = block.getFieldValue('segundos');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['subir_pinza'] = function(block) {
  var text_coordenadax = block.getFieldValue('coordenadaX');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bajar_pinza'] = function(block) {
  var text_distancia = block.getFieldValue('distancia');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['abrir_pinza'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['cerrar_pinza'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bucle_if'] = function(block) {
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_argumentos = Blockly.JavaScript.statementToCode(block, 'argumentos');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bucle_for'] = function(block) {
  var statements_argumentos = Blockly.JavaScript.statementToCode(block, 'argumentos');
  var text_numeroveces = block.getFieldValue('numeroVeces');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['bucle_while'] = function(block) {
  var value_condicion = Blockly.JavaScript.valueToCode(block, 'condicion', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_argumentos = Blockly.JavaScript.statementToCode(block, 'argumentos');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
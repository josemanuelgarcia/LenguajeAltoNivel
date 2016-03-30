Blockly.JavaScript['bloque_principal'] = function(block) {
  var statements_variables = Blockly.JavaScript.statementToCode(block, 'variables');
  var statements_cuerpo = Blockly.JavaScript.statementToCode(block, 'cuerpo');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_variables +'<br/>'+ statements_cuerpo;
  return code;
};

Blockly.JavaScript['parar'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'parar_todo();<br/>';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['ir_a'] = function(block) {
  var text_coordenadax = block.getFieldValue('coordenadaX');
  var text_coordenaday = block.getFieldValue('coordenadaY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'ir_a('+text_coordenadax+','+text_coordenaday+');<br/>';
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

Blockly.JavaScript['math_number'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = Blockly.JavaScript.statementToCode(block, 'NUM');
  return code;
};

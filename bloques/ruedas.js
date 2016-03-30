
Blockly.Blocks['parar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Parar");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ir_a'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ir a coordenada X:")
        .appendField(new Blockly.FieldTextInput("0"), "coordenadaX")
        .appendField(" Y:")
        .appendField(new Blockly.FieldTextInput("0"), "coordenadaY");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['girar_hacia'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Girar hacia")
        .appendField(new Blockly.FieldDropdown([["derecha", "DERECHA"], ["izquierda", "IZQUIERDA"]]), "direccion")
        .appendField(",")
        .appendField(new Blockly.FieldAngle(90), "grados")
        .appendField("grados");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mover_hacia'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover hacia")
        .appendField(new Blockly.FieldDropdown([["delante", "delante"], ["atras", "atras"]]), "direccion")
        .appendField(",")
        .appendField(new Blockly.FieldTextInput("0"), "metros")
        .appendField("metros");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['parar_tiempo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Parar")
        .appendField(new Blockly.FieldTextInput("0"), "segundos")
        .appendField("segundos");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
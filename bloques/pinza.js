
Blockly.Blocks['subir_pinza'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Subir pinza")
        .appendField(new Blockly.FieldTextInput("0"), "coordenadaX")
        .appendField("centimetros");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['bajar_pinza'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bajar pinza")
        .appendField(new Blockly.FieldTextInput("0"), "distancia")
        .appendField("centimetros");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['abrir_pinza'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Abrir pinza");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cerrar_pinza'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cerrar pinza");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
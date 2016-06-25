

Blockly.Blocks['bucle_for'] = {
  init: function() {
    this.appendStatementInput("argumentos")
        .appendField("Hacer");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "numeroVeces")
        .appendField("veces");
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['bucle_while'] = {
  init: function() {
    this.appendValueInput("condicion")
        .appendField("Mientras");
    this.appendStatementInput("argumentos")
        .appendField("Hacer");
    this.setPreviousStatement(true, "Boolean");
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};




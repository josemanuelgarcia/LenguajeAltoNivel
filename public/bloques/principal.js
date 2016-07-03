
Blockly.Blocks['bloque_principal'] = {
  init: function() {
    this.appendStatementInput("variables")
        .appendField("Variables");
    this.appendStatementInput("cuerpo")
        .appendField("Codigo");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['bloque_principal_placa'] = {
  init: function() {
    this.appendStatementInput("variables")
        .appendField("Variables");
    this.appendStatementInput("pines")
        .appendField("Definir pines y servomotores");
    this.appendStatementInput("código")
        .appendField("Codigo");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
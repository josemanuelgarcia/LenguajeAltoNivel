
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
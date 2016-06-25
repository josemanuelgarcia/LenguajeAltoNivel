
Blockly.Blocks['parar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Parar");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['girar_hacia'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Girar en sentido")
        .appendField(new Blockly.FieldDropdown([["horario", "horario"], ["antihorario", "antihorario"]]), "direccion")
        .appendField(",")
        .appendField(new Blockly.FieldAngle(90), "grados")
        .appendField("grados");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mover_hacia'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover hacia")
        .appendField(new Blockly.FieldDropdown([["adelante", "delante"], ["atras", "atras"]]), "direccion");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mover_casilla'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Avanzar hacia ")
        .appendField(new Blockly.FieldDropdown([["ADELANTE", "ADELANTE"], ["DERECHA", "DERECHA"], ["IZQUIERDA", "IZQUIERDA"], ["ATRAS", "ATRAS"]]), "direccion")
        .appendField(new Blockly.FieldTextInput("0"), "casillas")
        .appendField("casillas");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['definir_pin_digital'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Definir pin digital")
      .appendField(new Blockly.FieldDropdown([["INPUT", "INPUT"], ["OUTPUT", "OUTPUT"]]), "TIpo")
      .appendField("número")
      .appendField(new Blockly.FieldTextInput("0"), "n_pin");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['leer_pin_digital'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Leer pin digital")
      .appendField(new Blockly.FieldTextInput("0"), "n_pin");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['escribir_pin_digital'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Escribir en  pin digital")
      .appendField(new Blockly.FieldTextInput("0"), "n_pin")
      .appendField("el valor")
      .appendField(new Blockly.FieldTextInput("0"), "valor");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['leer_pin_analogico'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Leer pin analogico")
      .appendField(new Blockly.FieldTextInput("0"), "n_pin");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['escribir_pin_analogico'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Escribir en  pin analogico")
      .appendField(new Blockly.FieldTextInput("0"), "n_pin")
      .appendField("el valor")
      .appendField(new Blockly.FieldTextInput("0"), "valor");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};




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
    this.jsonInit({
      "message0": Blockly.Msg.ESCRIBIR_PIN_DIGITAL,
      "args0": [
        {
          "type": "field_input",
          "name": "n_pin",
          "text": "2"
        },
        {
          "type": "input_value",
          "name": "valor",
          "text": "1"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });

    this.getField('n_pin').setValidator(
      Blockly.FieldTextInput.nonnegativeIntegerValidator);
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
    this.jsonInit({
      "message0": Blockly.Msg.ESCRIBIR_PIN_ANALOGICO,
      "args0": [
        {
          "type": "field_input",
          "name": "n_pin",
          "text": "2"
        },
        {
          "type": "input_value",
          "name": "valor",
          "text": "1"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });

    this.getField('n_pin').setValidator(
      Blockly.FieldTextInput.nonnegativeIntegerValidator);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};




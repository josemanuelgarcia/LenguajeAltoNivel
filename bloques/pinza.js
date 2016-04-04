
Blockly.Blocks['subir_pinza'] = {
  init: function() {
       this.jsonInit({
      "message0": Blockly.Msg.SUBIR_PINZA_DIST,
      "args0": [
        {
          "type": "field_input",
          "name": "DIST",
          "text": "10"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    

    this.getField('DIST').setValidator(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['bajar_pinza'] = {
  init: function() {
       this.jsonInit({
      "message0": Blockly.Msg.BAJAR_PINZA_DIST,
      "args0": [
        {
          "type": "field_input",
          "name": "DIST",
          "text": "10"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    

    this.getField('DIST').setValidator(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);
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
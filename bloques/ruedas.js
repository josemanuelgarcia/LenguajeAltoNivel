
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
    this.jsonInit({
      "message0": Blockly.Msg.IR_A_RUEDAS,
      "args0": [
        {
          "type": "field_input",
          "name": "X",
          "text": "10"
        },
        {
          "type": "field_input",
          "name": "Y",
          "text": "10"
        }
      ]
    });    

    this.getField('X').setValidator(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);
    this.getField('Y').setValidator(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);

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
        .appendField(new Blockly.FieldDropdown([["derecha", "derecha"], ["izquierda", "izquierda"]]), "direccion")
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
        .appendField(new Blockly.FieldDropdown([["delante", "delante"], ["atras", "atras"]]), "direccion");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['parar_tiempo'] = {
 init: function() {
       this.jsonInit({
      "message0": Blockly.Msg.PARAR_TIEMPO,
      "args0": [
        {
          "type": "field_input",
          "name": "SEG",
          "text": "10"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    
    this.getField('SEG').setValidator(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
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
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
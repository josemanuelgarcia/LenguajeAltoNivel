Blockly.Blocks['establecer_posicion_inicial'] = {
  init: function() {
      this.jsonInit({
      "message0": Blockly.Msg.POS_INICIAL,
      "args0": [
        {
          "type": "field_input",
          "name": "coordenadaX",
          "text": "0"
        },
        {
          "type": "field_input",
          "name": "coordenadaY",
          "text": "0"
        }
      ]
    });    

    this.getField('coordenadaX').setValidator(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);
    this.getField('coordenadaY').setValidator(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);  
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['establecer_tamanio_tablero'] = {
  init: function() {
      this.jsonInit({
      "message0": Blockly.Msg.TAM_TABLERO,
      "args0": [
        {
          "type": "field_input",
          "name": "tamX",
          "text": "3"
        },
        {
          "type": "field_input",
          "name": "tamY",
          "text": "3"
        }
      ]
    });    

    this.getField('tamX').setValidator(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);
    this.getField('tamY').setValidator(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);   
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(280);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


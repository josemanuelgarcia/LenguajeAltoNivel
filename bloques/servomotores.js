Blockly.Blocks['definir_servo'] = {
     init: function() {
       this.jsonInit({
      "message0": Blockly.Msg.DEFINIR_SERVO,
      "args0": [
        {
          "type": "field_input",
          "name": "NOMBRE",
          "text": "nombre"
        },
        {
          "type": "field_input",
          "name": "PIN",
          "text": "2"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
    });
    
    this.getField('PIN').setValidator(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['girar_servo'] = {
    init: function () {

        this.jsonInit({
            "message0": Blockly.Msg.GIRAR_SERVO,
            "args0": [
                {
                    "type": "field_input",
                    "name": "NOMBRE",
                    "text": "nombre"
                },
                {
                    "type": "input_value",
                    "name": "GRADOS"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 0,
            "tooltip": Blockly.Msg.GIRAR_SERVO,
            "helpUrl": Blockly.Msg.GIRAR_SERVO
        });
    }

};
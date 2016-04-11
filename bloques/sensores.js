
Blockly.Blocks['detectar_linea'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hay línea en sensor ")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"]]), "id_sensor");
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['distancia_obstaculo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hay obstáculo en distancia ")
        .appendField(new Blockly.FieldTextInput("10"), "centimetros")
        .appendField("y sensor")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"]]), "id_sensor");
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
 

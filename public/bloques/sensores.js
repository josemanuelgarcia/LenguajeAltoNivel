
Blockly.Blocks['detectar_linea'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hay línea en sensor ")
        .appendField(new Blockly.FieldDropdown([["Delante Izquierda", "1"], ["Delante derecha", "2"], ["Atras izquierda", "3"], ["Atras derecha", "4"]]), "id_sensor");
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
        .appendField(new Blockly.FieldDropdown([["izquierda", "1"], ["centro", "2"], ["derecha", "3"]]), "id_sensor");
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
 
Blockly.Blocks['esperar'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Esperar")
            .appendField(new Blockly.FieldTextInput("0"), "tiempo")
            .appendField("milisegundos");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['leer_ultrasonidos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Leer sensor ultrasonidos, Pin Echo")
            .appendField(new Blockly.FieldTextInput("0"), "p_echo")
            .appendField("Pin Tig")
            .appendField(new Blockly.FieldTextInput("0"), "P_trig");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['map'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(" Map, valor recibido:")
            .appendField(new Blockly.FieldTextInput("0"), "valor_rec")
            .appendField("De minimo:")
            .appendField(new Blockly.FieldTextInput("0"), "d_min")
            .appendField("De máximo:")
            .appendField(new Blockly.FieldTextInput("0"), "d_max")
            .appendField("A mínimo")
            .appendField(new Blockly.FieldTextInput("0"), "a_min")
            .appendField("A máximo")
            .appendField(new Blockly.FieldTextInput("0"), "a_max");
        this.setOutput(true);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['zumbador'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Zumbador, Pin:")
            .appendField(new Blockly.FieldTextInput("0"), "pin")
            .appendField("Frecuencia:")
            .appendField(new Blockly.FieldTextInput("100"), "frecuencia")
            .appendField("Tiempo:")
            .appendField(new Blockly.FieldTextInput("100"), "timpo");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(65);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};




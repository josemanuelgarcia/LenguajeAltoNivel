Blockly.Blocks['esperar'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Esperar")
            .appendField(new Blockly.FieldTextInput("0"), "tiempo")
            .appendField("milisegundos");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(290);
    }
};

Blockly.Blocks['leer_ultrasonidos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Leer sensor ultrasonidos, Pin Trig")
            .appendField(new Blockly.FieldTextInput("0"), "p_trig")
            .appendField("Pin Echo")
            .appendField(new Blockly.FieldTextInput("0"), "p_echo");
        this.setOutput(true);
        this.setColour(290);
    }
};

Blockly.Blocks['map'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(" Mapear valor")
            .appendField(new Blockly.FieldTextInput("0"), "valor_rec")
            .appendField("De (")
            .appendField(new Blockly.FieldTextInput("0"), "d_min")
            .appendField(",")
            .appendField(new Blockly.FieldTextInput("0"), "d_max")
            .appendField(") a (")
            .appendField(new Blockly.FieldTextInput("0"), "a_min")
            .appendField(",")
            .appendField(new Blockly.FieldTextInput("0"), "a_max")
            .appendField(")");
        this.setOutput(true);
        this.setColour(290);
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
        this.setColour(290);
    }
};

Blockly.Blocks['aleatorio'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Generar aleatorio entre")
            .appendField(new Blockly.FieldTextInput("0"), "MIN")
            .appendField(" y ")
            .appendField(new Blockly.FieldTextInput("10"), "MAX");
        this.setOutput(true, "Number");
        this.setColour(230);
    }
};




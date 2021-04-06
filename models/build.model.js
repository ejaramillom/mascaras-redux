const mongoose = require("mongoose")
const BottleSchema = require("./bottle.model").BottleSchema;
const BrushSchema = require("./brush.model").BrushSchema;
const RodSchema = require("./rod.model").RodSchema;
const WiperSchema = require("./wiper.model").WiperSchema;

const BuildSchema = mongoose.Schema({
	name: {type: String, required: true},
	bottle: BottleSchema,
	brush: BrushSchema,
	rod: RodSchema,
	wiper: WiperSchema,
})

const Build = mongoose.model("Build", BuildSchema);

module.exports = Build;

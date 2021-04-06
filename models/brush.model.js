const mongoose = require("mongoose")

const BrushSchema = mongoose.Schema({
	brush: {type: String, required: true},
	original: {type: String},
  shaftDiameter: {type: Number},
  shaftLength: {type: Number},
  brushDiameter: {type: Number},
  brushLength: {type: Number},
  supplier: {type: String},
  type: {type: String},
	claim: {
		definition: {type: Boolean},
		volumizing: {type: Boolean},
		lengthening: {type: Boolean},
		curling: {type: Boolean},
		plumping: {type: Boolean},
	}
})

const Brush = mongoose.model("Brush", BrushSchema);

module.exports = { Brush, BrushSchema };

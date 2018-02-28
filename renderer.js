// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const SignaturePad = require('signature_pad');

var canvas_firm = document.querySelector("canvas");

// https://github.com/szimek/signature_pad
var signaturePad = new SignaturePad(canvas_firm, {
    minWidth: 1,
    maxWidth: 3,
    penColor: "rgb(66, 133, 244)"
});
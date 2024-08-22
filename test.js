const namumark = require("./namumark");

console.log(namumark.render("{{{+2 tsdjlksfd}}} {{{#html! <script>alert('hi');</script>}}} {{{ test }}}"));
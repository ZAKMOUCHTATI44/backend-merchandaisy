/*=========================================================================================
	File Name: form-quill-editor.js
	Description: Quill is a modern rich text editor built for compatibility and extensibility.
	----------------------------------------------------------------------------------------
	Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: PIXINVENT
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function (window, document, $) {
  'use strict';

  var Font = Quill.import('formats/font');
  Font.whitelist = ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu'];
  Quill.register(Font, true);

  var snowEditor = new Quill('#snow-container .editor', {
    bounds: '#snow-container .editor',
    modules: {
      formula: true,
      syntax: true,
      toolbar: '#snow-container .quill-toolbar'
    },
    theme: 'snow'
  });

snowEditor.on('text-change', function(delta, oldDelta, source) {
    var justHtml = snowEditor.root.innerHTML;
   document.getElementById('output-html').value = justHtml;
});


  var editors = [snowEditor];
})(window, document, jQuery);

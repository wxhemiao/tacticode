(function(){var e,t;window.keystack=new Set,window.register="",window.globalMap={IMP:"import"},window.stateMachine={isRecording:!1,isDeleting:!1},window.statusColor="white",window.status="",e=function(){var e;return e="",keystack.forEach(function(t){return e+=t}),$("span.keymap").text(e),$("span.keystr").text(register),$("span.status").text(window.status),console.log(window.statusColor),$("span.status").css("background-color",window.statusColor)},t=function(t){var o,i,n,r,s,a,w,d;return a=new Set(t.toUpperCase().split("").sort()),s="",a.forEach(function(e){return s+=e}),window.stateMachine.isRecording||window.stateMachine.isDeleting?window.stateMachine.isRecording?"CER"===s?(stateMachine.isRecording=!1,window.status="",window.statusColor="white"):"DEL"===s?(stateMachine.isRecording=!1,stateMachine.isDeleting=!0,window.status="DELETING CHORD",window.statusColor="lime"):(w=codeMirror.getSelection(),w?d=w:(o=codeMirror.getCursor().line,i=codeMirror.getCursor().ch,n=codeMirror.findWordAt({line:o,ch:i}).anchor.ch,r=codeMirror.findWordAt({line:o,ch:i}).head.ch,d=codeMirror.getRange({line:o,ch:n},{line:o,ch:r})),globalMap[s]=d,window.status="SET "+s+" = "+d,stateMachine.isRecording=!1,window.statusColor="lime"):window.stateMachine.isDeleting&&("CER"===s?(stateMachine.isRecording=!0,stateMachine.isDeleting=!1,window.status="RECORDING CHORD",window.statusColor="yellow"):"DEL"===s?(stateMachine.isDeleting=!1,window.status="",window.statusColor="white"):(globalMap[s]=void 0,stateMachine.isDeleting=!1,window.status="Deleted Map for "+s,window.statusColor="lime")):"CER"===s?(stateMachine.isRecording=!0,window.status="RECORDING CHORD",window.statusColor="yellow"):"DEL"===s?(stateMachine.isDeleting=!0,window.status="DELETING CHORD",window.statusColor="sky"):globalMap[s]?(window.status=s+" = "+globalMap[s],window.statusColor="lime",codeMirror.replaceSelection(globalMap[s])):(window.status="No such chord: "+s,window.statusColor="orange"),e()},$(document).ready(function(){return window.codeMirror=CodeMirror.fromTextArea(document.getElementById("main-editor")),codeMirror.on("keydown",function(t,o){var i;return i=o.keyCode||o.which,32===i||90>=i&&i>=65&&!o.ctrlKey&&!o.metaKey?(o.preventDefault(),window.keystack.add(o.key),window.register+=o.key,e()):void 0}),codeMirror.on("keyup",function(o,i){var n;return n=i.keyCode||i.which,32===n||90>=n&&n>=65&&!i.ctrlKey&&!i.metaKey?(i.preventDefault(),window.keystack["delete"](i.key.toLowerCase()),window.keystack["delete"](i.key.toUpperCase()),0===window.keystack.size&&(window.register.length<=2?(codeMirror.replaceSelection(window.register),window.register=""):(t(register),console.log(register),window.register="")),e()):void 0})})}).call(this);
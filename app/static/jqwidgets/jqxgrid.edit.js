/*
jQWidgets v2.6.1 (2013-Jan-18)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.extend(a.jqx._jqxGrid.prototype,{_handledblclick:function(s,m){if(s.target==null){return}if(m.disabled){return}if(a(s.target).ischildof(this.columnsheader)){return}var v;if(s.which){v=(s.which==3)}else{if(s.button){v=(s.button==2)}}if(v){return}var z;if(s.which){z=(s.which==2)}else{if(s.button){z=(s.button==1)}}if(z){return}var u=this.showheader?this.columnsheader.height()+2:0;var n=this._groupsheader()?this.groupsheader.height():0;var e=this.host.offset();var l=s.pageX-e.left;var k=s.pageY-u-e.top-n;var b=this._hittestrow(l,k);var g=b.row;var h=b.index;var p=s.target.className;var o=this.table[0].rows[h];if(o==null){return}m.mousecaptured=true;m.mousecaptureposition={left:s.pageX,top:s.pageY-n};var q=this.hScrollInstance;var r=q.value;var d=0;var j=this.groupable?this.groups.length:0;for(var t=0;t<o.cells.length;t++){var f=parseInt(a(this.columnsrow[0].cells[t]).css("left"))-r;var w=f+a(this.columnsrow[0].cells[t]).width();if(w>=l&&l>=f){d=t;break}}if(g!=null){var c=this._getcolumnat(d);if(!(p.indexOf("jqx-grid-group-expand")!=-1||p.indexOf("jqx-grid-group-collapse")!=-1)){if(g.boundindex!=-1){m.begincelledit(g.boundindex,c.datafield,c.defaulteditorvalue)}}}},_handleeditkeydown:function(r,l){var t=r.charCode?r.charCode:r.keyCode?r.keyCode:0;if(l.showfilterrow&&l.filterable){if(this.filterrow){if(a(r.target).ischildof(this.filterrow)){return true}}}if(l.pageable){if(a(r.target).ischildof(this.pager)){return true}}if(this.showtoolbar){if(a(r.target).ischildof(this.toolbar)){return true}}if(this.showstatusbar){if(a(r.target).ischildof(this.statusbar)){return true}}if(this.editcell){if(this.editcell.columntype==null||this.editcell.columntype=="textbox"){if(t>=33&&t<=40&&l.selectionmode=="multiplecellsadvanced"){var u=l._selection(this.editcell.editor);var n=this.editcell.editor.val().length;if(u.length>0){l._cancelkeydown=true}if(u.start>0&&t==37){l._cancelkeydown=true}if(u.start<n&&t==39){l._cancelkeydown=true}}}else{if(this.selectionmode=="multiplecellsadvanced"&&this.editcell.columntype!="textbox"){l._cancelkeydown=true}}if(t==32){if(l.editcell.columntype=="checkbox"){var h=!l.getcellvalue(l.editcell.row,l.editcell.column);l.setcellvalue(l.editcell.row,l.editcell.column,h,true);l._raiseEvent(18,{rowindex:l.editcell.row,datafield:l.editcell.column,oldvalue:!h,value:h,columntype:"checkbox"});return false}}if(t==9){var e=this.editcell.row;var k=this.editcell.column;var g=k;var o=l._getcolumnindex(k);var j=false;var c=l.getrowvisibleindex(e);if(this.editcell.validated!=false){if(r.shiftKey){var d=l._getprevvisiblecolumn(o);if(d){k=d.datafield;j=true;if(l.selectionmode.indexOf("cell")!=-1){l.selectprevcell(e,g);setTimeout(function(){l.ensurecellvisible(c,k)},10)}}}else{var d=l._getnextvisiblecolumn(o);if(d){k=d.datafield;j=true;if(l.selectionmode.indexOf("cell")!=-1){l.selectnextcell(e,g);setTimeout(function(){l.ensurecellvisible(c,k)},10)}}}if(j){l.begincelledit(e,k);if(this.editcell!=null&&this.editcell.columntype=="checkbox"){this._renderrows(this.virtualsizeinfo)}}}return false}else{if(t==13){this.endcelledit(this.editcell.row,this.editcell.column,false,true);if(l.selectionmode=="multiplecellsadvanced"){var b=l.getselectedcell();if(b!=null){if(l.selectcell){if(b.rowindex+1<l.dataview.totalrecords){l.clearselection(false);l.selectcell(b.rowindex+1,b.datafield);l.ensurecellvisible(b.rowindex+1,b.datafield)}}}}return false}else{if(t==27){this.endcelledit(this.editcell.row,this.editcell.column,true,true);return false}}}}else{var p=false;if(t==113){p=true}if(!r.ctrlKey&&!r.altKey){if(t>=48&&t<=57){this.editchar=String.fromCharCode(t);p=true}if(t>=65&&t<=90){this.editchar=String.fromCharCode(t);if(!r.shiftKey){this.editchar=this.editchar.toLowerCase()}p=true}else{if(t>=96&&t<=105){this.editchar=t-96;this.editchar=this.editchar.toString();p=true}}}if(t==13||p){if(l.getselectedrowindex){var e=l.getselectedrowindex();switch(l.selectionmode){case"singlerow":case"multiplerows":case"multiplerowsextended":if(e>=0){var k="";for(var q=0;q<l.columns.records.length;q++){var d=l.getcolumnat(q);if(d.editable){k=d.datafield;break}}l.begincelledit(e,k)}break;case"singlecell":case"multiplecells":case"multiplecellsextended":var b=l.getselectedcell();if(b!=null){var d=l._getcolumnbydatafield(b.datafield);if(d.columntype!="checkbox"){l.begincelledit(b.rowindex,b.datafield)}}break;case"multiplecellsadvanced":var b=l.getselectedcell();if(b!=null){if(t==13){if(l.selectcell){if(b.rowindex+1<l.dataview.totalrecords){l.clearselection(false);l.selectcell(b.rowindex+1,b.datafield);l.ensurecellvisible(b.rowindex+1,b.datafield)}}}else{l.begincelledit(b.rowindex,b.datafield)}}break}return false}}if(t==46){var f=l.getselectedcells();if(l.selectionmode.indexOf("cell")==-1){if(l._getcellsforcopypaste){f=l._getcellsforcopypaste()}}if(f!=null&&f.length>0){for(var i=0;i<f.length;i++){var b=f[i];var d=l.getcolumn(b.datafield);var s=l.getcellvalue(b.rowindex,b.datafield);if(s!=""){l._raiseEvent(17,{rowindex:b.rowindex,datafield:b.datafield,value:s});if(i==f.length-1){l.setcellvalue(b.rowindex,b.datafield,"",true);if(d.displayfield!=d.datafield){l.setcellvalue(b.rowindex,d.displayfield,"",true)}}else{l.setcellvalue(b.rowindex,b.datafield,"",false);if(d.displayfield!=d.datafield){l.setcellvalue(b.rowindex,d.displayfield,"",true)}}l._raiseEvent(18,{rowindex:b.rowindex,datafield:b.datafield,oldvalue:s,value:""})}}this.dataview.updateview();this._renderrows(this.virtualsizeinfo);return false}}if(t==32){var b=l.getselectedcell();if(b!=null){var d=l.getcolumn(b.datafield);if(d.columntype=="checkbox"){var h=!l.getcellvalue(b.rowindex,b.datafield);l._raiseEvent(17,{rowindex:b.rowindex,datafield:b.datafield,value:!h,columntype:"checkbox"});l.setcellvalue(b.rowindex,b.datafield,h,true);l._raiseEvent(18,{rowindex:b.rowindex,datafield:b.datafield,oldvalue:!h,value:h,columntype:"checkbox"});return false}}}}return true},begincelledit:function(j,c,h){var d=this.getcolumn(c);if(c==null){return}if(d.columntype=="number"||d.columntype=="button"){return}if(this.editrow!=undefined){return}if(this.editcell){if(this.editcell.row==j&&this.editcell.column==c){return true}var b=this.endcelledit(this.editcell.row,this.editcell.column,false,true);if(false==b){return}}var e=d.columntype=="checkbox"||d.columntype=="button";this.host.removeClass("jqx-disableselect");this.content.removeClass("jqx-disableselect");if(d.editable){if(d.cellbeginedit){var g=this.getcell(j,c);var i=d.cellbeginedit(j,c,d.columntype,g!=null?g.value:null);if(i==false){return}}var f=this.getrowvisibleindex(j);this.editcell=this.getcell(j,c);this.editcell.visiblerowindex=f;if(!this.editcell.editing){if(!e){this.editcell.editing=true}this.editcell.columntype=d.columntype;this.editcell.defaultvalue=h;if(d.defaultvalue!=undefined){this.editcell.defaultvalue=d.defaultvalue}this.editcell.init=true;if(d.columntype!="checkbox"){this._raiseEvent(17,{rowindex:j,datafield:d.datafield,value:this.editcell.value,columntype:d.columntype})}if(!e){this._renderrows(this.virtualsizeinfo)}if(this.editcell){this.editcell.init=false}}}else{if(!this.editcell){return}this.editcell.editor=null;this.editcell.editing=false;this._renderrows(this.virtualsizeinfo);this.editcell=null}},endcelledit:function(g,m,i,e){var d=this.getcolumn(m);var s=this;if(s.editrow!=undefined){return}var r=function(){if(!s.isNestedGrid){s.element.focus();s.content.focus();setTimeout(function(){s.element.focus();s.content.focus()},10)}};if(d.columntype=="checkbox"||d.columntype=="button"){this.editcell.editor=null;this.editcell.editing=false;this.editcell=null;return true}var h=this._geteditorvalue(d);var f=function(t){t._hidecelleditor();t.editcell.editor=null;t.editcell.editing=false;t.editcell=null;if(e||e==undefined){t._renderrows(t.virtualsizeinfo)}r();if(!t.enablebrowserselection){t.host.addClass("jqx-disableselect");t.content.addClass("jqx-disableselect")}};if(i){f(this);return false}if(this.validationpopup){this.validationpopup.hide();this.validationpopuparrow.hide()}if(d.cellvaluechanging){var b=d.cellvaluechanging(g,m,d.columntype,this.editcell.value,h);if(b!=undefined){h=b}}if(d.validation){var c=this.getcell(g,m);try{var n=d.validation(c,h);var k=this.gridlocalization.validationstring;if(n.message!=undefined){k=n.message}var l=typeof n=="boolean"?n:n.result;if(!l){if(n.showmessage==undefined||n.showmessage==true){this._showvalidationpopup(g,m,k)}this.editcell.validated=false;return false}}catch(p){this._showvalidationpopup(g,m,this.gridlocalization.validationstring);this.editcell.validated=false;return false}}if(d.displayfield!=d.datafield){var j=this.getcellvalue(this.editcell.row,d.displayfield);var o=this.editcell.value;oldvalue={value:o,label:j}}else{oldvalue=this.editcell.value}if(d.cellendedit){var q=d.cellendedit(g,m,d.columntype,this.editcell.value,h);if(q==false){this._raiseEvent(18,{rowindex:g,datafield:m,displayfield:d.displayfield,oldvalue:oldvalue,value:oldvalue,columntype:d.columntype});f(this);return false}}this._raiseEvent(18,{rowindex:g,datafield:m,displayfield:d.displayfield,oldvalue:oldvalue,value:h,columntype:d.columntype});this._hidecelleditor();if(this.editcell!=undefined){this.editcell.editor=null;this.editcell.editing=false}this.editcell=null;this.setcellvalue(g,m,h,e);if(!this.enablebrowserselection){this.host.addClass("jqx-disableselect");this.content.addClass("jqx-disableselect")}r();return true},beginrowedit:function(d){if(!this.editcells){this.editcells=new Array()}if(this.editcells.length>0){if(this.editcells[0].row==d){return}var c=this.endrowedit(this.editcells[0].row,false,true);if(false==c){return}}this.host.removeClass("jqx-disableselect");this.content.removeClass("jqx-disableselect");var b=this;this.editcells=new Array();a.each(this.columns.records,function(){if(b.editable){var e=b.getcell(d,this.datafield);e.editing=true;if(this.defaultvalue!=undefined){e.defaultvalue=column.defaultvalue}e.init=true;b.editcells[this.datafield]=e}});b.editrow=d;b._renderrows(this.virtualsizeinfo);a.each(this.columns.records,function(){b.editcells[this.datafield].init=false})},endrowedit:function(b){if(this.editcell.editor==undefined){return false}return true},_selection:function(b){if("selectionStart" in b[0]){var g=b[0];var h=g.selectionEnd-g.selectionStart;return{start:g.selectionStart,end:g.selectionEnd,length:h,text:g.value}}else{var d=document.selection.createRange();if(d==null){return{start:0,end:g.value.length,length:0}}var c=b[0].createTextRange();var f=c.duplicate();c.moveToBookmark(d.getBookmark());f.setEndPoint("EndToStart",c);var h=d.text.length;return{start:f.text.length,end:f.text.length+d.text.length,length:h,text:d.text}}},_setSelection:function(e,b,d){if("selectionStart" in d[0]){d[0].focus();d[0].setSelectionRange(e,b)}else{var c=d[0].createTextRange();c.collapse(true);c.moveEnd("character",b);c.moveStart("character",e);c.select()}},findRecordIndex:function(g,c,b){var b=b;if(g&&c){var e=b.length;for(var h=0;h<e;h++){var f=b[h];var d=f.label;if(g==d){return h}}}return -1},_destroyeditors:function(){var b=this;a.each(this.columns.records,function(f,g){switch(this.columntype){case"dropdownlist":var d=b.editors["dropdownlist_"+this.datafield];if(d){d.jqxDropDownList("destroy");b.editors["dropdownlist_"+this.datafield]=null}break;case"combobox":var c=b.editors["combobox_"+this.datafield];if(c){c.jqxComboBox("destroy");b.editors["combobox_"+this.datafield]=null}break;case"datetimeinput":var e=b.editors["datetimeinput_"+this.datafield];if(e){e.jqxDateTimeInput("destroy");b.editors["datetimeinput_"+this.datafield]=null}break;case"numberinput":var h=b.editors["numberinput_"+this.datafield];if(h){h.jqxNumberInput("destroy");b.editors["numberinput_"+this.datafield]=null}break}})},_showcelleditor:function(k,d,b,y){if(this.editrow!=undefined){this.editcell=this.editcells[d.datafield]}if(b==undefined){return}if(this.editcell==null){return}if(d.columntype=="checkbox"&&d.editable){return}var p=d.datafield;var s=a(b);var E=this;var g=this.editcell.editor;var q=this.getcellvalue(k,p);var v=this.hScrollInstance;var x=v.value;var h=parseInt(x);this.editcell.element=b;if(this.editcell.validated==false){this._showvalidationpopup()}var B=function(F){if(E.hScrollInstance.isScrolling()||E.vScrollInstance.isScrolling()){return}if(!E.isNestedGrid){F.focus()}if(E.gridcontent[0].scrollTop!=0){E.scrolltop(Math.abs(E.gridcontent[0].scrollTop));E.gridcontent[0].scrollTop=0}if(E.gridcontent[0].scrollLeft!=0){E.scrollleft(Math.abs(E.gridcontent[0].scrollLeft));E.gridcontent[0].scrollLeft=0}};switch(d.columntype){case"dropdownlist":if(this.host.jqxDropDownList){b.innerHTML="";var n=this.editors["dropdownlist_"+d.datafield];g=n==undefined?a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;' id='dropdownlisteditor'></div>"):n;g.css("top",a(b).parent().position().top);if(this.oldhscroll){g.css("left",-h+parseInt(a(b).position().left))}else{g.css("left",parseInt(a(b).position().left))}var z=a.trim(d.datafield).split(" ").join("");var o=a.trim(d.displayfield).split(" ").join("");if(n==undefined){g.prependTo(this.table);g[0].id="dropdownlisteditor"+this.element.id+z;var u=this.source._source?true:false;var m=null;if(!u){m=new a.jqx.dataAdapter(this.source,{autoBind:false,uniqueDataFields:[o],async:false})}else{var A={localdata:this.source.records,datatype:this.source.datatype,async:false};m=new a.jqx.dataAdapter(A,{autoBind:false,async:false,uniqueDataFields:[o]})}var j=true;g.jqxDropDownList({keyboardSelection:false,source:m,autoDropDownHeight:j,theme:this.theme,width:s.width()-2,height:s.height()-2,displayMember:o,valueMember:p});this.editors["dropdownlist_"+z]=g;if(d.createeditor){d.createeditor(k,q,g)}}if(d._requirewidthupdate){g.jqxDropDownList({width:s.width()-2})}var l=g.jqxDropDownList("listBox").visibleItems;if(l.length<8){g.jqxDropDownList("autoDropDownHeight",true)}else{g.jqxDropDownList("autoDropDownHeight",false)}var q=this.getcellvalue(k,o);var e=this.findRecordIndex(q,o,l);if(y){if(q!=""){g.jqxDropDownList("selectIndex",e,true)}else{g.jqxDropDownList("selectIndex",-1)}}if(this.editcell.defaultvalue!=undefined){g.jqxDropDownList("selectIndex",this.editcell.defaultvalue,true)}setTimeout(function(){B(g.jqxDropDownList("comboStructure"))},10)}break;case"combobox":if(this.host.jqxComboBox){b.innerHTML="";var D=this.editors["combobox_"+d.datafield];g=D==undefined?a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;' id='comboboxeditor'></div>"):D;g.css("top",a(b).parent().position().top);if(this.oldhscroll){g.css("left",-h+parseInt(a(b).position().left))}else{g.css("left",parseInt(a(b).position().left))}var z=a.trim(d.datafield).split(" ").join("");var o=a.trim(d.displayfield).split(" ").join("");if(D==undefined){g.prependTo(this.table);g[0].id="comboboxeditor"+this.element.id+z;var u=this.source._source?true:false;var m=null;if(!u){m=new a.jqx.dataAdapter(this.source,{autoBind:false,uniqueDataFields:[o],async:false})}else{var A={localdata:this.source.records,datatype:this.source.datatype,async:false};m=new a.jqx.dataAdapter(A,{autoBind:false,async:false,uniqueDataFields:[o]})}var j=true;g.jqxComboBox({keyboardSelection:false,source:m,autoDropDownHeight:j,theme:this.theme,width:s.width()-2,height:s.height()-2,displayMember:o,valueMember:p});this.editors["combobox_"+z]=g;if(d.createeditor){d.createeditor(k,q,g)}}if(d._requirewidthupdate){g.jqxComboBox({width:s.width()-2})}var l=g.jqxComboBox("listBox").visibleItems;if(l.length<8){g.jqxComboBox("autoDropDownHeight",true)}else{g.jqxComboBox("autoDropDownHeight",false)}var q=this.getcellvalue(k,o);var e=this.findRecordIndex(q,o,l);if(y){if(q!=""){g.jqxComboBox("selectIndex",e,true);g.jqxComboBox("val",q)}else{g.jqxComboBox("selectIndex",-1);g.jqxComboBox("val",q)}}if(this.editcell.defaultvalue!=undefined){g.jqxComboBox("selectIndex",this.editcell.defaultvalue,true)}if(this.editchar&&this.editchar.length>0){g.jqxComboBox("input").val(this.editchar)}setTimeout(function(){B(g.jqxComboBox("input"));g.jqxComboBox("_setSelection",0,0);if(E.editchar){g.jqxComboBox("_setSelection",1,1);E.editchar=null}else{var F=g.jqxComboBox("input").val();g.jqxComboBox("_setSelection",0,F.length)}},10)}break;case"datetimeinput":if(this.host.jqxDateTimeInput){b.innerHTML="";var f=this.editors["datetimeinput_"+d.datafield];g=f==undefined?a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;' id='datetimeeditor'></div>"):f;g.show();g.css("top",a(b).parent().position().top);if(this.oldhscroll){g.css("left",-h+parseInt(a(b).position().left))}else{g.css("left",parseInt(a(b).position().left))}var z=a.trim(d.datafield).split(" ").join("");if(f==undefined){g.prependTo(this.table);g[0].id="datetimeeditor"+this.element.id+z;g.jqxDateTimeInput({theme:this.theme,width:s.width(),height:s.height(),formatString:d.cellsformat});this.editors["datetimeinput_"+z]=g;if(d.createeditor){d.createeditor(k,q,g)}}if(d._requirewidthupdate){g.jqxDateTimeInput({width:s.width()-2})}if(y){if(q!=""&&q!=null){var C=new Date(q);if(C=="Invalid Date"){if(this.source.getvaluebytype){C=this.source.getvaluebytype(q,{name:d.datafield,type:"date"})}}g.jqxDateTimeInput("setDate",C)}else{g.jqxDateTimeInput("setDate",null)}if(this.editcell.defaultvalue!=undefined){g.jqxDateTimeInput("setDate",this.editcell.defaultvalue)}}setTimeout(function(){B(g.jqxDateTimeInput("dateTimeInput"))},10)}break;case"numberinput":if(this.host.jqxNumberInput){b.innerHTML="";var i=this.editors["numberinput_"+d.datafield];g=i==undefined?a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;' id='numbereditor'></div>"):i;g.show();g.css("top",a(b).parent().position().top);if(this.oldhscroll){g.css("left",-h+parseInt(a(b).position().left))}else{g.css("left",parseInt(a(b).position().left))}var z=a.trim(d.datafield).split(" ").join("");if(i==undefined){g.prependTo(this.table);g[0].id="numbereditor"+this.element.id+z;var w="";var t="left";if(d.cellsformat){if(d.cellsformat.indexOf("c")!=-1){w=this.gridlocalization.currencysymbol}else{if(d.cellsformat.indexOf("p")!=-1){w=this.gridlocalization.percentsymbol;t="right"}}}g.jqxNumberInput({inputMode:"simple",theme:this.theme,width:s.width()-1,height:s.height()-1,spinButtons:true,symbol:w,symbolPosition:t});this.editors["numberinput_"+z]=g;if(d.createeditor){d.createeditor(k,q,g)}}if(d._requirewidthupdate){g.jqxNumberInput({width:s.width()-2})}if(y){if(q!=""&&q!=null){var c=q;g.jqxNumberInput("setDecimal",c)}else{g.jqxNumberInput("setDecimal",0)}if(this.editcell.defaultvalue!=undefined){g.jqxNumberInput("setDecimal",this.editcell.defaultvalue)}if(this.editchar&&this.editchar.length>0){var r=parseInt(this.editchar);if(!isNaN(r)){g.jqxNumberInput("setDecimal",r)}}setTimeout(function(){B(g.jqxNumberInput("numberInput"));g.jqxNumberInput("_setSelectionStart",0);if(E.editchar){if(d.cellsformat.length>0){g.jqxNumberInput("_setSelectionStart",2)}else{g.jqxNumberInput("_setSelectionStart",1)}E.editchar=null}else{var F=g.jqxNumberInput("spinButtons");if(F){var G=g.jqxNumberInput("numberInput").val();E._setSelection(g.jqxNumberInput("numberInput")[0],G.length,G.length)}else{var G=g.jqxNumberInput("numberInput").val();E._setSelection(g.jqxNumberInput("numberInput")[0],0,G.length)}}},10)}}break;case"textbox":default:b.innerHTML="";g=this.editors["textboxeditor_"+d.datafield]||a("<input 'type='textbox' id='textboxeditor'/>");g[0].id="textboxeditor"+this.element.id+d.datafield;g.appendTo(s);if(y){g.addClass(this.toThemeProperty("jqx-input"));g.addClass(this.toThemeProperty("jqx-widget-content"));if(this.editchar&&this.editchar.length>0){g.val(this.editchar)}else{g.val(q)}if(this.editcell.defaultvalue!=undefined){g.val(this.editcell.defaultvalue)}g.width(s.width());g.height(s.height());if(d.createeditor){d.createeditor(k,q,g)}}this.editors["textboxeditor_"+d.datafield]=g;if(y){setTimeout(function(){B(g);if(E.editchar){E._setSelection(g[0],1,1);E.editchar=null}else{E._setSelection(g[0],0,g.val().length)}},10)}break}if(y){if(d.initeditor){d.initeditor(k,q,g)}}if(g){g.css("display","block");this.editcell.editor=g}},_setSelection:function(d,g,b){try{if("selectionStart" in d){d.setSelectionRange(g,b)}else{var c=d.createTextRange();c.collapse(true);c.moveEnd("character",b);c.moveStart("character",g);c.select()}}catch(e){var f=e}},_hideeditors:function(){if(this.editcells!=null){var b=this;for(var c in this.editcells){b.editcell=b.editcells[c];b._hidecelleditor()}}},_hidecelleditor:function(){if(!this.editcell){return}if(this.editcell.columntype=="checkbox"){return}if(this.editcell.editor){this.editcell.editor.hide();switch(this.editcell.columntype){case"dropdownlist":this.editcell.editor.jqxDropDownList({closeDelay:0});this.editcell.editor.jqxDropDownList("hideListBox");this.editcell.editor.jqxDropDownList({closeDelay:400});break;case"combobox":this.editcell.editor.jqxComboBox({closeDelay:0});this.editcell.editor.jqxComboBox("hideListBox");this.editcell.editor.jqxComboBox({closeDelay:400});break;case"datetimeinput":var b=this.editcell.editor;if(b.jqxDateTimeInput("isOpened")){b.jqxDateTimeInput({closeDelay:0});b.jqxDateTimeInput("hideCalendar");b.jqxDateTimeInput({closeDelay:400})}break}}if(this.validationpopup){this.validationpopup.hide();this.validationpopuparrow.hide()}if(!this.isNestedGrid){this.element.focus()}},_geteditorvalue:function(d){var f=new String();if(this.editcell.editor){switch(d.columntype){case"textbox":default:f=this.editcell.editor.val();if(d.cellsformat!=""){if(d.cellsformat.indexOf("p")!=-1||d.cellsformat.indexOf("c")!=-1||d.cellsformat.indexOf("n")!=-1||d.cellsformat.indexOf("f")!=-1){f=parseFloat(f)}}if(d.displayfield!=d.datafield){f={label:f,value:f}}break;case"datetimeinput":if(this.editcell.editor.jqxDateTimeInput){this.editcell.editor.jqxDateTimeInput({isEditing:false});f=this.editcell.editor.jqxDateTimeInput("getDate");if(f==null){return""}f=new Date(f.toString());if(f==null){f==""}if(d.displayfield!=d.datafield){f={label:f,value:f}}}break;case"dropdownlist":if(this.editcell.editor.jqxDropDownList){var b=this.editcell.editor.jqxDropDownList("selectedIndex");var e=this.editcell.editor.jqxDropDownList("listBox").getVisibleItem(b);if(d.displayfield!=d.datafield){if(e){f={label:e.label,value:e.value}}else{f=""}}else{if(e){f=e.label}else{f=""}}if(f==null){f=""}}break;case"combobox":if(this.editcell.editor.jqxComboBox){f=this.editcell.editor.jqxComboBox("val");if(d.displayfield!=d.datafield){var e=this.editcell.editor.jqxComboBox("getSelectedItem");if(e!=null){f={label:f,value:e.value}}}if(f==null){f=""}}break;case"numberinput":if(this.editcell.editor.jqxNumberInput){var c=this.editcell.editor.jqxNumberInput("getDecimal");f=new Number(c);f=parseFloat(f);if(isNaN(f)){f=0}if(d.displayfield!=d.datafield){f={label:f,value:f}}}break}}return f},hidevalidationpopups:function(){if(this.popups){a.each(this.popups,function(){this.validation.remove();this.validationrow.remove()});this.popups=new Array()}if(this.validationpopup){this.validationpopuparrow.hide();this.validationpopup.hide()}},showvalidationpopup:function(n,d,o){if(o==undefined){var o=this.gridlocalization.validationstring}var m=a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;'></div>");var l=a("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");m.html(o);l.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));m.addClass(this.toThemeProperty("jqx-grid-validation"));m.addClass(this.toThemeProperty("jqx-rc-all"));m.prependTo(this.table);l.prependTo(this.table);var f=this.hScrollInstance;var h=f.value;var e=parseInt(h);var j=this.getcolumn(d).uielement;var i=a(this.hittestinfo[n].visualrow);m.css("top",parseInt(i.position().top)+30+"px");var b=parseInt(m.css("top"));l.css("top",b-12);l.removeClass();l.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));if(b>this._gettableheight()){l.removeClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));l.addClass(this.toThemeProperty("jqx-grid-validation-arrow-down"));b=parseInt(a(j).parent().position().top)-30;m.css("top",b+"px");l.css("top",b+m.outerHeight()-9)}var k=-e+parseInt(a(j).position().left);l.css("left",k+30);var c=m.width();if(c+k>this.host.width()-20){var g=c+k-this.host.width()+40;k-=g}m.css("left",k);m.show();l.show();if(!this.popups){this.popups=new Array()}this.popups[this.popups.length]={validation:m,validationrow:l}},_showvalidationpopup:function(m,d,n){var i=this.editcell.editor;if(!i){return}if(!this.validationpopup){var l=a("<div style='z-index: 99999; top: 0px; left: 0px; position: absolute;'></div>");var k=a("<div style='width: 20px; height: 20px; z-index: 999999; top: 0px; left: 0px; position: absolute;'></div>");l.html(n);k.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));l.addClass(this.toThemeProperty("jqx-grid-validation"));l.addClass(this.toThemeProperty("jqx-rc-all"));l.prependTo(this.table);k.prependTo(this.table);this.validationpopup=l;this.validationpopuparrow=k}else{this.validationpopup.html(n)}var f=this.hScrollInstance;var h=f.value;var e=parseInt(h);this.validationpopup.css("top",parseInt(a(this.editcell.element).parent().position().top)+(this.rowsheight+5)+"px");var b=parseInt(this.validationpopup.css("top"));this.validationpopuparrow.css("top",b-12);this.validationpopuparrow.removeClass();this.validationpopuparrow.addClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));if(b>this._gettableheight()){this.validationpopuparrow.removeClass(this.toThemeProperty("jqx-grid-validation-arrow-up"));this.validationpopuparrow.addClass(this.toThemeProperty("jqx-grid-validation-arrow-down"));b=parseInt(a(this.editcell.element).parent().position().top)-this.rowsheight-5;this.validationpopup.css("top",b+"px");this.validationpopuparrow.css("top",b+this.validationpopup.outerHeight()-9)}var j=-e+parseInt(a(this.editcell.element).position().left);this.validationpopuparrow.css("left",j+30);var c=this.validationpopup.width();if(c+j>this.host.width()-20){var g=c+j-this.host.width()+40;j-=g}this.validationpopup.css("left",j);this.validationpopup.show();this.validationpopuparrow.show()}})})(jQuery);
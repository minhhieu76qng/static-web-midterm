CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'align', 'list', 'indent', 'blocks', 'bidi', 'paragraph' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Save,NewPage,Print,Cut,Copy,SelectAll,Scayt,CopyFormatting,RemoveFormat,About,Source,Templates,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Flash,Table,HorizontalRule,PageBreak,Paste,PasteText,PasteFromWord,Preview,Replace,Find,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,NumberedList,BulletedList,Outdent,Indent,CreateDiv,BidiLtr,BidiRtl,Language,Format,Font,FontSize,BGColor,TextColor,Anchor,Image,Iframe';
};
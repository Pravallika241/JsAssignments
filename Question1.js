function ChangetoUpperCase(word) {
	console.log(word.toUpperCase());
}

function DemoFunctionAsParameter(ChangetoUpperCase, name) {
	ChangetoUpperCase(name);
}


DemoFunctionAsParameter(ChangetoUpperCase,"Pravallika");

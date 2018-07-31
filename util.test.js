const ut=require('./util.js');
it('it should add two number',()=>{
	var result=ut.add(33,11);
	if(result!==44){
		throw new Error(`Expect 44,but got ${result}.`);
	}
});
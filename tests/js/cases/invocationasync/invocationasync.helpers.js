cases.invocationasync = {};

cases.invocationasync.InvocationCommandList =
{
	 TEST: "cases.invocationasync.test"
	,TEST_ASYNC_COMPLETE: "cases.invocationasync.testAsyncComplete"
	,TEST_SEQUENCE_COMPLETE: "cases.invocationasync.testSequenceComplete"
};

cases.invocationasync.TestEvent = new Class
({
	Extends: soma.Event,

	initialize: function( type, data, bubbles, cancelable )
	{
		return this.parent( type, bubbles, cancelable, data );
	}
});

cases.invocationasync.TestAsyncCommand = new Class
({
	Extends: soma.core.controller.Command

	,sequencer:null
	,timer:null

	,execute: function( event )
	{
		this.timer = setTimeout( this.result.bind(this), 300, {} );
	}
	,result: function(data)
	{
		this.dispatchEvent(new cases.invocationasync.TestEvent( cases.invocationasync.InvocationCommandList.TEST_ASYNC_COMPLETE, this.event ) );
	}
	,dispose: function()
	{
		clearTimeout( this.timer );
	}

 });
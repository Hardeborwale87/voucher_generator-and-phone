  		var vhc = [];
		var airtime;
		var l;
		var cards;
		let st;
		let rate;

		window.addEventListener("load", createLocal);
		class serviceProvider {
			constructor(type) {
				(this.type = type), (this.balance = 0);
				this.cards = {"N100": [], "N200": [], "N500": [], "N1000": [], used: []};
				// this.charge = [charge];
				
			}
		}

		var yellow = new serviceProvider("Mtn", "Zone");
		var green = new serviceProvider("Glo", "Yakata");
		var red = new serviceProvider("Airtel", "Flex");
			function createLocal () {
				if (!localStorage.mtn || !localStorage.glo || !localStorage.airtel) {
					localStorage.setItem("mtn", JSON.stringify(yellow));
					localStorage.setItem("glo", JSON.stringify(green));
					localStorage.setItem("airtel", JSON.stringify(red));
				}
			}
		function generator()
		{
			var v = [];

			if (vouch.value == "") 
			{
				alert("Enter the number voucher to be generated")
			}

			else if (vouch.value >= 20) 
			{
				alert("Maximum number of that can be generated has been reached")
				vouch.value = "";
			}

			else if (vouch.value !== "") 
			{
				review.innerHTML = "You have generated " + vouch.value + " " + netWork.value + " vouchers of value " +amount.value + "<br>";
			}


			for (var i = 0; i < vouch.value; i++) 
			{
				// var f = new RandExp(/[0-9]{17}$/).gen();
			for (var h = 1; h < 15; h++){
				v = Math.floor(Math.random() * 90000000000000000);
			}

			v = v.toString();
			var airtime = v.substr(0,4) + '-' + v.substr(4,4) + '-' + v.substr(8,4) + '-' + v.substr(12,5);
			review.innerHTML += airtime + "<br>";



				let j = v;
					// .match(/\d{4}-\d{4}-\d{4}-\d{4}/g)
		   //          .toString()
		   //          .replace(/-/g, "")
		   //          .split(",");
				let bringLoc;

				if (netWork.value == "Mtn") {
					bringLoc = JSON.parse(localStorage.getItem("mtn"));

					if (amount.value == "N100") {
						bringLoc.cards["N100"].push(j);
					} else if (amount.value == "N200") {
						bringLoc.cards["N200"].push(j);
					} else if (amount.value == "N500") {
						bringLoc.cards["N500"].push(j);
					} else if (amount.value == "N1000") {
						bringLoc.cards["N1000"].push(j);
					} 

					localStorage.mtn = JSON.stringify(bringLoc);
					console.log(localStorage.mtn);

				} else if (netWork.value == "Glo") {
					bringLoc = JSON.parse(localStorage.getItem("glo"));

					if (amount.value == "N100") {
						bringLoc.cards["N100"].push(j);
					} else if (amount.value == "N200") {
						bringLoc.cards["N200"].push(j);
					} else if (amount.value == "N500") {
						bringLoc.cards["N500"].push(j);
					} else if (amount.value == "N1000") {
						bringLoc.cards["N1000"].push(j);
					} 

					localStorage.glo = JSON.stringify(bringLoc);
					console.log(localStorage.glo);

				} else if (netWork.value == "Airtel") {
					bringLoc = JSON.parse(localStorage.getItem("airtel"));

					if (amount.value == "N100") {
						bringLoc.cards["N100"].push(j);
					} else if (amount.value == "N200") {
						bringLoc.cards["N200"].push(j);
					} else if (amount.value == "N500") {
						bringLoc.cards["N500"].push(j);
					} else if (amount.value == "N1000") {
						bringLoc.cards["N1000"].push(j);
					} 

					localStorage.airtel = JSON.stringify(bringLoc);
					console.log(localStorage.airtel);
				} else {
					alert("storage error");
				}
				
			}
	

		};


	function dismiss() {
		 textArea.style.display = "block";
		 bcksp.style.display = "block";
		 buton.style.display = "block";
		 showMsg.style.display = "none";
		ntSelector.style.display = "none";
		textArea.value  = "";
		calls.style.backgroundColor = "#ffffff"
		clrInt();
	}

	function dialBtn() {
		buton.style.display = "none";
		ntSelector.style.display = "block";
		dismissBtn.style.display = "none";
		
	}

	function mtnbal () {
		bringLoc = JSON.parse(localStorage.getItem("mtn"));
		msgPrompt.innerHTML = `Your main bal. is N${bringLoc.balance} ... Get 100mb data & 12mins to call all networks. Dial *555*7#`;
	}
	function successMtn () {
		bringLoc = JSON.parse(localStorage.getItem("mtn"));
		msgPrompt.innerHTML = `Recharge successful! Available balance is N${bringLoc.balance}...`
	}

	function global () {
		bringLoc = JSON.parse(localStorage.getItem("glo"));
		msgPrompt.innerHTML = `Main Bal: N${bringLoc.balance} ... Gift High Speed Data to another Glo line. Dial *777# & select Gift Data`;
	}
	function successGlo () {
		bringLoc = JSON.parse(localStorage.getItem("glo"));
		msgPrompt.innerHTML = `Topup successful! Main balance is N${bringLoc.balance}...`
	}

	function ntYellow() {
		buton.style.display = "none";
		 bcksp.style.display = "none";
		 textArea.style.display = "none";
		ntSelector.style.display = "none"
		showMsg.style.display = "block";
		showMsg.style.backgroundColor = "#F4F4F6";
		dismissBtn.style.display = "block";
		calls.style.backgroundColor = "transparent";
		let bringLoc;
			if (textArea.value == "") {
				msgPrompt.style.textAlign = "center"
				msgPrompt.innerHTML = `No commands enter!`

			} else if (textArea.value == "*556#") {
					mtnbal();

			} else if (textArea.value.match(/\*\d{3}\#/)) {
					msgPrompt.innerHTML = `Invalid MMI code`;
					msgPrompt.style.textAlign = "center";

			} else if (textArea.value == "#124#") {
				msgPrompt.innerHTML = `Connection problem or Invalid MMI code`;
				msgPrompt.style.textAlign = "center";

			} else if (textArea.value.match(/\*\d{3}\*\d{17}\#/)) {
				msgPrompt.innerHTML = `Connection problem or Invalid command`;
				msgPrompt.style.textAlign = "center";

			} else if (textArea.value.match(/\*555\*\d{17}\#/)) {
				let y;
				let e;
				let l;
				let bal;
				let w = textArea.value.match(/\d{17}/)[0];
				bringLoc = JSON.parse(localStorage.getItem("mtn"));

				for (e in bringLoc.cards) {
					for (y = 0; y < bringLoc.cards[e].length; y++) {
						if (bringLoc.cards["used"][y] !== w && bringLoc.cards[e][y] == w) {
							bal = e.match(/\d+/)[0];
							bringLoc.balance = (Number(bringLoc.balance) + Number(bal)).toFixed(2);
							l = bringLoc.cards[e].splice(y, 1).toString();
							bringLoc.cards["used"].push(l);
							localStorage.mtn = JSON.stringify(bringLoc);
							return successMtn();
						} else if (bringLoc.cards["used"][y] == w) {
							msgPrompt.innerHTML = `This card has already used by you!`;
						} else {
							msgPrompt.innerHTML = `This card does not exist!`;
						}
					}
				}
			} 
			
			else if (textArea.value.match(/(070|080|081|090|\+234)\d{8}/)) {

				let count = 0;
				let diff;
				let t;
				bringLoc = JSON.parse(localStorage.getItem("mtn"));
				// rate = 150;

				// let CallRate = (bringLoc.balance * 100) / rate;
				let CallRate = 0.2;
				let reading = new Date();
				if (Number(bringLoc.balance > 0)) {
					st = setInterval(setTimer, 1000);
					function setTimer () {
						count++;
						reading.setHours(0);
						reading.setMinutes(0);
						reading.setSeconds(count);
						t = reading.toLocaleTimeString('it-IT');
						msgPrompt.innerHTML = `Calling...<br>${textArea.value}<br> ${t}`;
						msgPrompt.style.textAlign = "center";
						diff = CallRate * count;
						bringLoc.balance = (Math.floor(bringLoc.balance - diff));
						localStorage.mtn = JSON.stringify(bringLoc);
						console.log(bringLoc.balance);

						if (Number(bringLoc.balance) == 0) {
							clrInt();
							localStorage.mtn = JSON.stringify(bringLoc);
							msgPrompt.innerHTML = `You are out airtime and your call has been disconnected. Please recharge soon`;

						}
					} 
				} 
				
				else if (bringLoc.balance == 0) {
					msgPrompt.innerHTML = `Please recharge or switch to the second sim`;
				}

			}	else if (textArea.value.match(/\d+/)) {
				msgPrompt.innerHTML = `Calling...<br>${textArea.value}<br>`;
				msgPrompt.style.textAlign = "center";	
				setTimeout(dismiss, 3000);

			}

		}

		function ntGreen () {
			buton.style.display = "none";
		 bcksp.style.display = "none";
		 textArea.style.display = "none";
		ntSelector.style.display = "none"
		showMsg.style.display = "block";
		showMsg.style.backgroundColor = "#F4F4F6";
		dismissBtn.style.display = "block";
		calls.style.backgroundColor = "transparent";
		let bringLoc;
			if (textArea.value == "") {
				msgPrompt.style.textAlign = "center"
				msgPrompt.innerHTML = `No commands enter!`
			} else if (textArea.value == "#124#") {
					global();

			} else if (textArea.value.match(/\*\d{3}\#/)) {
					msgPrompt.innerHTML = `Invalid MMI code`;
					msgPrompt.style.textAlign = "center";

			} else if (textArea.value == "*556#") {
				msgPrompt.innerHTML = `Connection problem or Invalid MMI code`;
				msgPrompt.style.textAlign = "center";

			} else if (textArea.value.match(/\*\d{3}\*\d{17}\#/)) {
				msgPrompt.innerHTML = `Connection problem or Invalid command`;
				msgPrompt.style.textAlign = "center";

			} else if (textArea.value.match(/\*123\*\d{17}\#/)) {
				let y;
				let e;
				let l;
				let bal;
				let w = textArea.value.match(/\d{17}/)[0];
				bringLoc = JSON.parse(localStorage.getItem("glo"));

				for (e in bringLoc.cards) {
					for (y = 0; y < bringLoc.cards[e].length; y++) {
						if (bringLoc.cards["used"][y] !== w && bringLoc.cards[e][y] == w) {
							bal = e.match(/\d+/)[0];
							bringLoc.balance = (Number(bringLoc.balance) + Number(bal)).toFixed(2);
							l = bringLoc.cards[e].splice(y, 1).toString();
							bringLoc.cards["used"].push(l);
							localStorage.glo = JSON.stringify(bringLoc);
							return successGlo();
						} else if (bringLoc.cards["used"][y] == w) {
							msgPrompt.innerHTML = `This card has already used by you!`;
						} else {
							msgPrompt.innerHTML = `This card does not exist!`;
						}
					}
				}
			}  else if (textArea.value.match(/(070|080|081|090|\+234)\d{8}/)) {

				let count = 0;
				let diff;
				let t;
				bringLoc = JSON.parse(localStorage.getItem("glo"));
				// rate = 150;

				// let CallRate = (bringLoc.balance * 100) / rate;
				let CallRate = 0.15;
				let reading = new Date();
				if (Number(bringLoc.balance > 0)) {
					st = setInterval(setTimer, 1000);
					function setTimer () {
						count++;
						reading.setHours(0);
						reading.setMinutes(0);
						reading.setSeconds(count);
						t = reading.toLocaleTimeString('it-IT');
						msgPrompt.innerHTML = `Calling...<br>${textArea.value}<br> ${t}`;
						msgPrompt.style.textAlign = "center";
						diff = CallRate * count;
						bringLoc.balance = (Math.floor(bringLoc.balance - diff));
						localStorage.glo = JSON.stringify(bringLoc);
						console.log(bringLoc.balance);

						if (Number(bringLoc.balance) == 0) {
							clrInt();
							localStorage.glo = JSON.stringify(bringLoc);
							msgPrompt.innerHTML = `You are out airtime and your call has been disconnected. Please recharge soon`;

						}
					} 
				} 

				else if (bringLoc.balance == 0) {
					msgPrompt.innerHTML = `Please recharge or switch to the second sim`;
				}
			}		

			else if (textArea.value.match(/\d+/)) {
				msgPrompt.innerHTML = `Calling...<br>${textArea.value}<br>`;
				msgPrompt.style.textAlign = "center";	
				setTimeout(dismiss, 3000);

			}

		}

		function clrInt() {
			clearInterval(st)
		}
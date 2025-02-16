/*
     ©CopyRight 2013-2022 by OpenSpeedTest.COM. All Rights Reserved. 
     Official Website : https://OpenSpeedTest.COM | Email: support@openspeedtest.com
     Developed by : Vishnu | https://Vishnu.Pro | Email : me@vishnu.pro 
            
     HTML5 Network Performance Estimation Tool -> [JS,XHR,SVG,HTML,CSS]
     Started in 2011 and Moved to OpenSpeedTest.COM Dedicated Project/Domain Name in 2013.
     SpeedTest Script -> 2013 -> Beta | 2015 -> V1 | 2019 ->V2 | 2020 V2.1 | 2021 V2.12.

     Self-Hosted OpenSpeedTest-Server (iFrame/Nginx) -> 2014.
     OpenSpeedTest-Server (On-premises)
     [Docker] -> V1 2019 | V2 2020 | V2.1 2021
     [Node.js/Electron JS] -> 2020 V1 | 2021 V2 & V2.1
     Download -> https://go.openspeedtest.com/Server

     Like this Project? Please Donate NOW & Keep us Alive -> https://go.openspeedtest.com/Donate

     Share — copy and redistribute the material in any medium or format for any purpose, even commercially.
     Read full license terms @ http://go.openspeedtest.com/License
     If you have any Questions, ideas or Comments Please Send it via -> https://go.openspeedtest.com/SendMessage

*/

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
var statBuffer = ""

window.onload = function() {


	OpenSpeedTest.Start();
	ostOnload()

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const pDlduration = urlParams.get('dlduration')
console.log(pDlduration );
dlDuration = pDlduration;
const pUlduration = urlParams.get('ulduration')
console.log(pUlduration );
ulDuration = pUlduration;

const pMode = urlParams.get('mode')
console.log(pMode );


if (pMode === "auto"){
console.log("automatic start is active")
const event = new Event('click');
}else{
console.log(pMode );
}


};



(function(oa) {
	function e(b) {
		if (!(this instanceof e)) return new e(b);
		this.el = document.getElementById(b)
	}
	var l;
	e.prototype.fade = function(b, d, g) {
		var f = "in" === b,
			q = f ? 0 : 1,
			w = 14 / d,
			k = this;
		f && (k.el.style.display = "block", k.el.style.opacity = q);
		var r = window.setInterval(function() {
			q = f ? q + w : q - w;
			k.el.style.opacity = q;
			0 >= q && (k.el.style.display = "none");
			if (0 >= q || 1 <= q) {
				var A = window,
					x = A.clearInterval,
					y = r;
				g && "function" === typeof g && g();
				x.call(A, y, void 0)
			}
		}, 14)
	};
	var Y = function(b, d, g, f) {
			b /= f;
			b--;
			return g * (b * b * b + 1) + d
		},
		n = function() {
			this.YourIP = e("YourIP");
			this.ipDesk = e("ipDesk");
			this.ipMob = e("ipMob");
			this.downSymbolDesk = e("downSymbolDesk");
			this.upSymbolDesk = e("upSymbolDesk");
			this.upSymbolMob = e("upSymbolMob");
			this.downSymbolMob = e("downSymbolMob");
			this.settingsMob = e("settingsMob");
			this.settingsDesk = e("settingsDesk");
			this.oDoLiveStatus = e("oDoLiveStatus");
			this.ConnectErrorMob = e("ConnectErrorMob");
			this.ConnectErrorDesk = e("ConnectErrorDesk");
			this.downResult = e("downResult");
			this.upRestxt = e("upRestxt");
			this.pingResult = e("pingResult");
			this.jitterDesk = e("jitterDesk");
			this.pingMobres = e("pingMobres");
			this.JitterResultMon = e("JitterResultMon");
			this.JitterResultms = e("JitterResultms");
			this.UI_Desk = e("UI-Desk");
			this.UI_Mob = e("UI-Mob");
			this.oDoTopSpeed = e("oDoTopSpeed");
			this.startButtonMob = e("startButtonMob");
			this.startButtonDesk = e("startButtonDesk");
			this.intro_Desk = e("intro-Desk");
			this.intro_Mob = e("intro-Mob");
			this.loader = e("loading_app");
			this.OpenSpeedtest = e("OpenSpeedtest");
			this.mainGuagebg_Desk = e("mainGuagebg-Desk");
			this.mainGuageBlue_Desk = e("mainGuageBlue-Desk");
			this.mainGuageWhite_Desk = e("mainGuageWhite-Desk");
			this.mainGuagebg_Mob = e("mainGuagebg-Mob");
			this.mainGuageBlue_Mob = e("mainGuageBlue-Mob");
			this.mainGuageWhite_Mob = e("mainGuageWhite-Mob");
			this.oDoLiveSpeed = e("oDoLiveSpeed");
			this.progressStatus_Mob = e("progressStatus-Mob");
			this.progressStatus_Desk = e("progressStatus-Desk");
			this.graphc1 = e("graphc1");
			this.graphc2 = e("graphc2");
			this.graphMob2 = e("graphMob2");
			this.graphMob1 = e("graphMob1");
			this.text = e("text");
			this.scale = [{
					degree: 680,
					value: 0
				}, {
					degree: 570,
					value: .5
				},
				{
					degree: 460,
					value: 1
				}, {
					degree: 337,
					value: 10
				}, {
					degree: 220,
					value: 100
				}, {
					degree: 115,
					value: 500
				}, {
					degree: 0,
					value: 1E3
				}
			];
			this.polygon = this.chart = this.element = "";
			this.width = 200;
			this.height = 50;
			this.maxValue = 0;
			this.values = [];
			this.vSteps = 5;
			this.measurements = [];
			this.points = []
		};
	n.prototype.reset = function() {
		this.polygon = this.chart = this.element = "";
		this.width = 200;
		this.height = 50;
		this.maxValue = 0;
		this.values = [];
		this.vSteps = 5;
		this.measurements = [];
		this.points = []
	};
	n.prototype.ip = function() {
		"block" === this.ipDesk.el.style.display ?
			(this.ipDesk.el.style.display = "none", this.ipMob.el.style.display = "none") : (this.ipDesk.el.style.display = "block", this.ipMob.el.style.display = "block")
	};
	n.prototype.prePing = function() {
		this.loader.fade("out", 500);
		this.OpenSpeedtest.fade("in", 1E3)
	};
	n.prototype.app = function() {
		this.loader.fade("out", 500, this.ShowAppIntro())
	};
	n.prototype.ShowAppIntro = function() {
		this.OpenSpeedtest.fade("in", 1E3)
	};
	n.prototype.userInterface = function() {
		this.intro_Desk.fade("out", 1E3);
		this.intro_Mob.fade("out", 1E3, this.ShowUI())
	};
	n.prototype.ShowUI = function() {
		this.UI_Desk.fade("in", 1E3);
		this.UI_Mob.fade("in", 1E3, function(b) {
			l = "Loaded";
			console.log("Developed by Vishnu. Email --\x3e me@vishnu.pro")

		})
	};
	n.prototype.Symbol = function(b) {
		0 == b && (this.downSymbolMob.el.style.display = "block", this.downSymbolDesk.el.style.display = "block", this.upSymbolMob.el.style.display = "none", this.upSymbolDesk.el.style.display = "none");
		1 == b && (this.downSymbolMob.el.style.display = "none", this.downSymbolDesk.el.style.display = "none", this.upSymbolMob.el.style.display =
			"block", this.upSymbolDesk.el.style.display = "block");
		2 == b && (this.downSymbolMob.el.style.display = "none", this.downSymbolDesk.el.style.display = "none", this.upSymbolMob.el.style.display = "none", this.upSymbolDesk.el.style.display = "none")
	};
	n.prototype.Graph = function(b, d) {
		function g(r, A) {
			for (k = f.maxValue = 0; k < f.values.length; k++) f.values[k] > f.maxValue && (f.maxValue = f.values[k]);
			f.maxValue = Math.ceil(f.maxValue);
			if (1 < f.values.length) {
				var x = "0," + f.height + " ";
				for (k = 0; k < f.values.length; k++) {
					var y = f.values[k] / f.maxValue;
					y = (130 / (f.values.length - 1) * k).toFixed(2) + "," + (f.height - f.height * y).toFixed(2) + " ";
					x += y
				}
				x += "130," + f.height;
				f.points = x
			}
			for (k = 0; k < f.vSteps; k++) f.measurements.push(Math.ceil(f.maxValue / f.vSteps * (k + 1)));
			f.measurements.reverse();
			for (x = document.getElementsByClassName(w); 0 < x.length;) x[0].remove();
			f.polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
			f.polygon.setAttribute("points", f.points);
			f.polygon.setAttribute("class", w);
			1 < f.values.length && q.appendChild(f.polygon)
		}
		"remove" in Element.prototype ||
			(Element.prototype.remove = function() {
				this.parentNode && this.parentNode.removeChild(this)
			});
		var f = this;
		if (0 === d) {
			var q = this.graphc1.el;
			var w = "line";
			this.graphMob2.el.style.display = "none";
			this.graphMob1.el.style.display = "block"
		} else q = this.graphc2.el, w = "line2", this.graphMob1.el.style.display = "none", this.graphMob2.el.style.display = "block";
		isNaN(b) ? this.values.push("") : this.values.push(b);
		var k;
		0 < b && g(q, b)
	};
	n.prototype.progress = function(b, d) {
		var g = this,
			f = Date.now(),
			q = setInterval(function() {
				var w = (Date.now() -
						f) / 1E3,
					k = Y(w, 400, 400, d),
					r = Y(w, 400, -400, d);
				b ? (g.progressStatus_Desk.el.style.strokeDashoffset = k, g.progressStatus_Mob.el.style.strokeDashoffset = k) : (g.progressStatus_Desk.el.style.strokeDashoffset = r, g.progressStatus_Mob.el.style.strokeDashoffset = r);
				w >= d && (clearInterval(q), g.progressStatus_Desk.el.style.strokeDashoffset = 800, g.progressStatus_Mob.el.style.strokeDashoffset = 800)
			}, 14)
	};
	n.prototype.mainGuageProgress = function(b) {
		var d = b;
		0 > d && (d = 0);
		var g = this.getNonlinearDegree(d);
		0 < b && (this.mainGuageBlue_Desk.el.style.strokeOpacity =
			1, this.mainGuageWhite_Desk.el.style.strokeOpacity = 1, this.mainGuageBlue_Mob.el.style.strokeOpacity = 1, this.mainGuageWhite_Mob.el.style.strokeOpacity = 1, this.mainGuageBlue_Desk.el.style.strokeDashoffset = g, this.mainGuageWhite_Desk.el.style.strokeDashoffset = 0 == g ? 1 : g + 1, this.mainGuageBlue_Mob.el.style.strokeDashoffset = g, this.mainGuageWhite_Mob.el.style.strokeDashoffset = 0 == g ? 1 : g + 1);
		0 == g && 1E3 < d ? (this.mainGuageBlue_Mob.el.style.strokeDashoffset = 681 <= g ? 681 : g, this.mainGuageWhite_Mob.el.style.strokeDashoffset =
			0 == g ? 1 : g + 1, this.mainGuageWhite_Desk.el.style.strokeDashoffset = 0 == g ? 1 : g + 1, this.mainGuageBlue_Desk.el.style.strokeDashoffset = 681 <= g ? 681 : g) : 0 == g && 0 >= d && (this.mainGuageBlue_Mob.el.style.strokeDashoffset = 681.1, this.mainGuageWhite_Mob.el.style.strokeDashoffset = .1, this.mainGuageWhite_Desk.el.style.strokeDashoffset = .1, this.mainGuageBlue_Desk.el.style.strokeDashoffset = 681.1)
	};
	n.prototype.showStatus = function(b) {
		this.oDoLiveStatus.el.textContent = b
	};
	n.prototype.ConnectionError = function() {
		this.ConnectErrorMob.el.style.display =
			"block";
		this.ConnectErrorDesk.el.style.display = "block"
	};
	n.prototype.uploadResult = function(b) {
		1 > b && (this.upRestxt.el.textContent = b.toFixed(2));
		1 < b && (this.upRestxt.el.textContent = b.toFixed(1))
	};
	n.prototype.pingResults = function(b) {
		"string" == typeof b ? this.oDoLiveSpeed.el.textContent = b : 1E3 > b ? (this.pingResult.el.textContent = Math.abs(b).toFixed(0), this.pingMobres.el.textContent = Math.abs(b).toFixed(0), this.oDoLiveSpeed.el.textContent = Math.abs(b).toFixed(0)) : (this.pingResult.el.textContent = Math.abs(b).toFixed(0),
			this.pingMobres.el.textContent = Math.abs(b).toFixed(0))
	};
	n.prototype.downloadResult = function(b) {
		1 > b && (this.downResult.el.textContent = b.toFixed(2));
		1 < b && (this.downResult.el.textContent = b.toFixed(1))
	};
	n.prototype.jitterResult = function(b) {
		this.jitterDesk.el.textContent = Math.abs(b).toFixed(0);
		this.JitterResultMon.el.textContent = Math.abs(b).toFixed(0)
	};
	n.prototype.LiveSpeed = function(b) {
		var d = b;
		0 == d && (d = b.toFixed(1), this.oDoLiveSpeed.el.textContent = d);
		1 >= d && 0 < d && (d = b.toFixed(2), this.oDoLiveSpeed.el.textContent =
			d);
		1 < d && (d = b.toFixed(1), this.oDoLiveSpeed.el.textContent = d);
		1E3 >= d && (this.oDoTopSpeed.el.textContent = "1000+", this.oDoTopSpeed.el.style.fontSize = 16.9, this.oDoTopSpeed.el.style.fill = "gray");
		1001 <= d && (this.oDoTopSpeed.el.textContent = d + "+", this.oDoTopSpeed.el.style.fill = "#434040", this.oDoTopSpeed.el.style.fontSize = 18)
	};
	n.prototype.GuageProgresstoZero = function(b, d) {
		var g = this;
		if (0 <= b) var f = Date.now(),
			q = 0 - b,
			w = setInterval(function() {
				var k = (Date.now() - f) / 1E3;
				var r = k / 3;
				r--;
				r = q * (r * r * r * r * r + 1) + b;
				g.LiveSpeed(r);
				g.mainGuageProgress(r);
				if (3 <= k || 0 >= r) clearInterval(w), g.LiveSpeed(0), g.mainGuageProgress(0), l = d
			}, 16)
	};
	n.prototype.getNonlinearDegree = function(b) {
		var d = 0;
		if (0 == b || 0 >= b || isNaN(b)) return 0;
		for (; d < this.scale.length;)
			if (b > this.scale[d].value) d++;
			else return this.scale[d - 1].degree + (b - this.scale[d - 1].value) * (this.scale[d].degree - this.scale[d - 1].degree) / (this.scale[d].value - this.scale[d - 1].value);
		return this.scale[this.scale.length - 1].degree
	};
	var H = function() {
		this.OverAllTimeAvg = window.performance.now();
		this.SpeedSamples = [];
		this.FinalSpeed
	};
	H.prototype.reset = function() {
		this.OverAllTimeAvg = window.performance.now();
		this.SpeedSamples = [];
		this.FinalSpeed = 0
	};
	H.prototype.ArraySum = function(b) {
		return b ? b.reduce(function(d, g) {
			if ("number" === typeof d && "number" === typeof g) return d + g
		}, 0) : 0
	};
	H.prototype.AvgSpeed = function(b, d, g) {
		this.timeNow = (window.performance.now() - this.OverAllTimeAvg) / 1E3;
		this.FinalSpeed;
		this.timeNow >= d && (0 < b && this.SpeedSamples.push(b), this.FinalSpeed = this.ArraySum(this.SpeedSamples) / this.SpeedSamples.length);
		return this.FinalSpeed
	};
	var va = function() {
		function b() {
			--I;
			c.LiveSpeed(I)
		}

		function d() {
			c.LiveSpeed(0);
			clearInterval(pa);
			17 == location.hostname.length && q()
		}

		function g() {
			c.ip()
		}

		function f() {
			55 == qa && (q(), c.userInterface());

		}

		function q() {
			c.startButtonDesk.el.removeEventListener("click", f);
			c.startButtonMob.el.removeEventListener("click", f);
			var a = setInterval(function() {
				"Loaded" === l && (l = "busy", y(0));
				"Ping" === l && (l = "busy", c.showStatus("Microseconds"));
				"Download" === l && (c.showStatus("Initializing.."), B.reset(),
					t = J = K = L = 0, c.reset(), P = window.performance.now(), w(), l = "initDown");
				if ("Downloading" === l) {
					c.Symbol(0);
					if (0 == M) {
						M = 1;
						c.showStatus("Testing download speed..");
						var h = (window.performance.now() - P) / 1E3;
						Z = h;
						c.progress(1, dlDuration + 2.5);
						dlDuration += h
					}
					Q = (window.performance.now() - P) / 1E3;
					r("dl");
					c.showStatus("Mbps download");
					c.mainGuageProgress(t);
					c.LiveSpeed(t);
console.log("DL",Date.now(),t,dlDuration);
statBuffer += "DL;"+Date.now()+";"+t+"\n"
					c.Graph(t, 0);
					B.AvgSpeed(t, dlFinal, dlDuration);
					Q >= dlDuration && (c.GuageProgresstoZero(t, "Upload"), c.downloadResult(B.AvgSpeed(t, dlFinal, dlDuration)), C = 1,
						l = "busy", t = J = K = L = 0, B.reset())
				}
				"Upload" == l && 1 === C && (c.Symbol(1), l = "initup", R = window.performance.now(), c.showStatus("Initializing.."), k());
				"Uploading" === l && (1 == M && (M = 2, c.showStatus("Testing upload speed.."), t = 0, B.reset(), c.reset(), aa = h = (window.performance.now() - R) / 1E3, c.progress(!1, ulDuration + 2.5), ulDuration += h), c.showStatus("Mbps upload"), D = (window.performance.now() - R) / 1E3, r("up"), c.mainGuageProgress(t), c.LiveSpeed(t), c.Graph(t, 1),console.log("UL",Date.now(),t), statBuffer += "UL;"+Date.now()+";"+t+"\n" , B.AvgSpeed(t, ulFinal, ulDuration), D >= ulDuration && 1 == C && (c.uploadResult(B.AvgSpeed(t,
					ulFinal, ulDuration)), c.GuageProgresstoZero(t, "SendR"), c.showStatus("All done"), c.Symbol(2), l = "busy", C = 0));
				
				if ("SendR" === l) {
download("stat.txt",statBuffer)
					h = document.createElement("div");
					h.innerHTML = '<a xlink:href="https://openspeedtest.com?ref=Offline-Outro&Auto=5" style="cursor: pointer" target="_blank"></a>';
					var v = h.querySelector("a");
					c.oDoLiveSpeed.el.textContent = ba;
					var u = document.getElementById("oDoLiveSpeed");
					v.innerHTML = u.innerHTML;
					u.innerHTML = h.innerHTML;
					l = "busy";
					clearInterval(a)
				}

			}, 100)

		}

		function w() {
			for (var a = 0; a < dlThreads; a++) setTimeout(function(h) {
					A(h)
				},
				dlDelay * a, a)
		}

		function k() {
			for (var a = 0; a < ulThreads; a++) setTimeout(function(h) {
				x(h)
			}, ulDelay * a, a)
		}

		function r(a) {
			if ("dl" === a) {
				var h = 1E3 * Q;
				ca = 0 >= E ? 0 : E - da;
				da = E;
				N += ca;
				ea = S = h - S;
				S = h;
				T += ea;
				h > 1E3 * Z + 4E3 && 0 === fa && (fa = 1, N = T = 0);
				0 < N && (t = J = N / T / 125 * upAdjust)
			}
			"up" === a && (a = 1E3 * D, ha = 0 >= F ? 0 : F - ia, ia = F, O += ha, ja = U = a - U, U = a, V += ja, a > 1E3 * aa + 4E3 && 0 === ka && (ka = 1, O = V = 0), 0 < O && (t = J = O / V / 125 * upAdjust))
		}

		function A(a) {
			var h = 0;
			m[a] = new XMLHttpRequest;
			m[a].open("GET", comopenspeedtestcdn + "/downloading?n=" + Math.random(), !0);
			m[a].onprogress =
				function(v) {
					if (1 === C) return m[a].abort(), m[a] = null, m[a] = void 0, delete m[a], !1;
					"initDown" == l && (l = "Downloading");
					var u = 0 >= v.loaded ? 0 : v.loaded - h;
					if (isNaN(u) || !isFinite(u) || 0 > u) return !1;
					E += u;
					h = v.loaded
				};
			m[a].onload = function(v) {
				0 === h && (E += v.total);
				"initDown" == l && (l = "Downloading");
				m[a] && (m[a].abort(), m[a] = null, m[a] = void 0, delete m[a]);
				A(a)
			};
			m[a].onerror = function(v) {
				A(a)
			};
			m[a].setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0, no-transform");
			m[a].responseType = "arraybuffer";
			m[a].send()
		}

		function x(a) {
			var h =
				0,
				v = comopenspeedtestuurl.serverList[Math.floor(Math.random() * comopenspeedtestuurl.serverList.length)];
			p[a] = new XMLHttpRequest;
			p[a].open("POST", v.hostName + "?n=" + Math.random(), !0);
			p[a].upload.onprogress = function(u) {
				"initup" == l && void 0 === G && (l = "Uploading");
				if (D >= ulDuration) return p[a].abort(), p[a] = null, p[a] = void 0, delete p[a], !1;
				var G = 0 >= u.loaded ? 0 : u.loaded - h;
				if (isNaN(G) || !isFinite(G) || 0 > G) return !1;
				F += G;
				h = u.loaded
			};
			p[a].onload = function() {
				if (0 === h && (F += 1048576 * ulDataSize, D >= ulDuration)) return p[a].abort(),
					p[a] = null, p[a] = void 0, delete p[a], !1;
				if ("initup" == l && void 0 === u) {
					var u;
					l = "Uploading"
				}
				p[a] && (p[a].abort(), p[a] = null, p[a] = void 0, delete p[a]);
				x(a)
			};
			p[a].onerror = function(u) {
				x(a)
			};
			p[a].setRequestHeader("Content-Type", "application/octet-stream");
			p[a].send(ra)
		}

		function y(a) {
			if (a < comopenspeedtesturl.serverList.length) W = 0, la(a, comopenspeedtesturl.serverList[a].hostName);
			else {
				a = Math.min.apply(Math, z);
				z.indexOf(a);
				var h = Math.min.apply(Math, ma);
				Infinity == a ? (c.ConnectionError(), c.pingResults("Network Error")) :
					(l = "Download", c.LiveSpeed(a), c.pingResults(a), c.jitterResult(h))
			}
		}

		function la(a, h) {
			m[a] = new XMLHttpRequest;
			L[a] = window.performance.now();
			m[a].open("HEAD", h + "?n=" + Math.random(), !0);
			m[a].timeout = 5E3;
			m[a].send();
			m[a].onload = function() {
				if (200 === this.status) {
					K[a] = window.performance.now() - L[a];
					var v = parseInt(K[a].toFixed(1));
					if (W <= sa) {
						l = "Ping";
						z.push(v);
						ta.push(h);
						if (1 < z.length) {
							var u = Math.abs(z[z.length - 1] - z[z.length - 2]);
							c.LiveSpeed(v);
							c.pingResults(v);
							c.jitterResult(u);
statBuffer += "PI;"+Date.now()+";"+v+"\n"
statBuffer += "JI;"+Date.now()+";"+u+"\n"
							ma.push(u)
						}
						W++;
						la(a, h)
					} else y(a +
						1)
				} else y(a + 1)
			};
			m[a].onerror = function(v) {
				y(a + 1)
			};
			m[a].ontimeout = function(v) {
				y(a + 1)
			}
		}
		var B = new H,
			c = new n;
		c.app();
		for (var ua = new ArrayBuffer(1048576), X = [], na = 0; na < ulDataSize; na++) X.push(ua);
		var ra = X = new Blob(X, {
				type: "application/octet-stream"
			}),
			m = [],
			L = [],
			K = [],
			J, E = 0,
			F = 0,
			t = 0,
			D, Q, P, R, C = 0,
			M = 0;
		if ("undefined" !== typeof comopenspeedtestAuto) {
			c.userInterface();
			var I = Math.ceil(Math.abs(comopenspeedtestAuto));
			c.showStatus("Automatic test starts in...");
			c.LiveSpeed(I);
			var pa = setInterval(b, 1E3);
			setTimeout(d, 1E3 *
				I)
		}
		c.settingsMob.el.addEventListener("click", g);
		c.settingsDesk.el.addEventListener("click", g);
		var ba = "OpenSpeedTest\u2122",
			qa = c.text.el.href.length + ba.length;
		c.startButtonDesk.el.addEventListener("click", f);
		c.startButtonMob.el.addEventListener("click", f);
		var ca = 0,
			da = 0,
			N = 0,
			ea = 0,
			S = 0,
			T = 0,
			fa = 0,
			Z, aa, ha = 0,
			ia = 0,
			O = 0,
			ja = 0,
			U = 0,
			V = 0,
			ka = 0,
			p = [],
			W = 0,
			z = [],
			ta = [],
			ma = [],
			sa = 2
	};
	oa.Start = function() {
		new va
	}
})(window.OpenSpeedTest = window.OpenSpeedTest || {});
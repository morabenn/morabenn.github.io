(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.plane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALYkVIANgCIgRgBIgDAAIALgCAK7kSIgBAAAKzkRIAHAAQguALg9AMICagbIwPIwIg1hWALYkVIgZACIgMACIgIAAIAIAAIAHgBQAAABAAAAIABgBgAKrkRIhRAKIldAnIhdALIlYAmIomA+AhniBQgeAHgdAGAhniBIi5AgQgqAHgqAHQgCAAgBABIgJACQgCAAgBAAIgNACQgDAAgCABQgPACgOADIhBAKIACAEIj3g2Anpg5IgIgBAlpDIIAOgDIgUggIANAXAm4DQIBQgNAnFATIBWCSAm4DPIgEABIg3kEIAuBHIgshNAm8DVIAFgBAhniBQHDhMDzgt");
	this.shape.setTransform(74.5,28.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlbDEIgUgfIANAWIgGACIAAAGIhQAMIAAgBIgEABIg3kCIAvBFIgthMIAIABIgIgBIgCgEIBBgKIAdgFIAFgBIANgCIADgBIAJgBIADgBIBUgOIC5ggIi5AgQAdgJARgCIALgCIgFAAIgOABIgWAGIgVAEIgXADIhEAPIgDABIgNACIgFABIgdAFIhBAKIACAEIj3g1IAKgBIIng+IAHgBQgEgEAFACID6geIAKAAIBLgGIBfgIIgCgDIFcgnIBSgJIAIAAIAHgBIgHABIAHgBIAAAAQgvALg8ANICagbIwPIvgAlvClIhViTgAiih0QAegGAdgHQgdAHgeAGgAhniBQHEhMDygsQjyAsnEBMgAi3iuIFXgngAGaj2IAQAAICvgRIlcAngAKrkQIAIgBIAMgBIgMABIAdgHIAMgCIgHACIgFAAIAFAAIgWAGIAZgDIgdAEIAAAAIgBAAIgHABgALVkYg");
	this.shape_1.setTransform(74.5,28.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plane, new cjs.Rectangle(-1,-1,151,58.5), null);


(lib.L3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFdEqQqPBchghIQh0hWBBr2IAxAIQDIAZhWDsQhWDqBoDsQE+AREkgvQAsgGA0AWQAaAKARAYIg5EiIhqAEgAAkE3QhIAGChgIQgXgBgUgDIgJgBQgRAEgUADgAFHEcQgbAFg+AKIguAFICegJIACgPIgZAEg");
	this.shape.setTransform(47.7181,52.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L3, new cjs.Rectangle(0,0,95.5,105.3), null);


(lib.L2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlAKmQiMhAA5hfQAMgVAUARQBVBHBtALIBBAEQBriRAni3QAciFAyh9QB4kwA8lDQAgirBYB7QAMARgFAaQhDFfh/FNQhtEdhxEaQgeBOheABg");
	this.shape.setTransform(-401.7261,123.2392);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L2, new cjs.Rectangle(-443.8,52,84.19999999999999,142.5), null);


(lib.L1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrKUIDViCIgUgQQgVgRgvgqQgmgigSgSQgcgggUgfIgFgIQgPgKgOgOQhUhThKhlIg5ADQgqhnA/hjQAegvAXg5QBtkEBFkgQABgGAEgEQA7gFgMBYQgLBUgUBQQhEEMhyDnQDAD/DfDCQAhAdARA2QAIAbgHAcIkDCPg");
	this.shape.setTransform(28.8853,73.8866);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L1, new cjs.Rectangle(0,0,57.8,147.8), null);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pupils
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmvA+QgZgZAAgjQAAgiAZgZQAYgZAjAAQAkAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgkAAQgjAAgYgZgAE4A6QgZgZABgiQgBgjAZgZQAZgZAkAAQAjAAAZAZQAZAZgBAjQABAigZAZQgZAZgjAAQgkAAgZgZg");
	this.shape.setTransform(66.25,68.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ACdgzIAmAsQCZBLCMgnQB0gxgdgRApEgsIAoAuQCZBMCMgnQB0gxgdgR");
	this.shape_1.setTransform(66.765,72.1731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape}]},2).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:true},1).wait(2).to({_off:false},0).wait(13));

	// eyes
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoECSQg6g6AAhTQAAhSA6g7QA7g6BTAAQBTAAA7A6QA6A7AABSQAABTg6A6Qg7A7hTAAQhTAAg7g7gADpCJQg6g7AAhSQAAhTA6g6QA7g7BTAAQBTAAA7A7QA6A6AABTQAABSg6A7Qg7A6hTAAQhTAAg7g6g");
	this.shape_2.setTransform(67.5,68.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AoEBSQg6ghAAguQAAguA6ghQA7ggBTAAQBTAAA7AgQA6AhAAAuQAAAug6AhQg7AhhTAAQhTAAg7ghgADpBMQg6ggAAguQAAguA6ghQA7ghBTAAQBTAAA7AhQA6AhAAAuQAAAug6AgQg7AhhTAAQhTAAg7ghg");
	this.shape_3.setTransform(67.5,68.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AoEA2Qg6gVAAgcQAAgcA6gVQA7gVBTABQBTgBA7AVQA6AVAAAcQAAAcg6AVQg7AUhTAAQhTAAg7gUgADpAuQg6gVAAgbQAAgeA6gVQA7gVBTABQBTgBA7AVQA6AVAAAeQAAAbg6AVQg7AUhTABQhTgBg7gUg");
	this.shape_4.setTransform(67.5,68.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ACdgzIAmAsQCZBLCMgnQB0gxgdgRApEgsIAoAuQCZBMCMgnQB0gxgdgR");
	this.shape_5.setTransform(66.765,72.1731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},6).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_2}]},2).wait(9));

	// head
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("APjAAQAAGckjEkQkkEjmcAAQmbAAkkkjQkjkkAAmcQAAmbEjkkQEkkjGbAAQGcAAEkEjQEjEkAAGbg");
	this.shape_6.setTransform(99.5,99.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AEmCAIgUAAIgdAAIgdAAIgOAAIgJAAIgJAAIgJAAIgKgBIgKgBIgIgBIgIgBIgOgEIgHgCIiSAAIiLAAIiAAAIiIAAIiAAAIgHgBIgHgBIgGgCIgGgCIgGgEIgGgEIgFgEIgEgFIgEgFIgDgGIgDgGIgCgHIgBgGIAAgHIAAgHIABgHIACgGIADgGIADgGIAEgGIAEgFIAFgEIAGgEIAGgDIAGgDIAGgBIAHgBQBTgBBTABICLAAICLAAQBKAABKgCQBDgDBCALIAHACIATABIATAAIATAAIAbAAIAZAAIARAAIAIgEIAJgDIAEgBIAJAAIAGgDIAHgDIAGgEIAHgEIAEgDIAEgCIAHgDIAHgDIAIgDIAGgEIAGgEIAGgEIAGgDIAHgEIAIgEIAHgDIAIgDIAHgCIAHgEIAHgEIAHgFIAGgEIAHgEIAHgEIAHgFIAOgHIAHgEIAGgFIAEgFIAFgEIAGgEIAFgDIAGgCIAHgCIAGgBIAHgBIAGAAIAHABIAGACIAGACIAGADIAGAEIAFAEIAFAFIAEAGIADAFIADAHIACAGIABAGIAAAHIAAAGIAAAHIgCAHIgCAGIgDAGIgFAHIgEAGIgFAGIgEAEIgFAEIgGAFIgOAHIgOAHIgOAIIgWAOQgKAHgKAGQgMAGgMAEIgHACIgIAFIgHAEIgHAFIgIAEIgIAEIgIAEIgJADIgFADIgFADIgFAEIgFAEIgHADIgHADIgEADIgHADIgGADIgIACIgHABIgEADIgHADIgIADIgHABIgPABIgNAAg");
	this.shape_7.setTransform(64.025,110.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#440F4B").s().p("Aq+K/QkkkjAAmcQAAmbEkkjQEjkkGbAAQGcAAEjEkQEkEjAAGbQAAGckkEjQkjEkmcAAQmbAAkjkkgAuZBqIgGABIgHABIgGADIgGAEIgGADIgEAFIgFAEIgDAGIgEAGIgDAGIgBAHIgBAGIgBAHIABAHIABAHIABAGIADAGIAEAGIADAGIAFAEIAEAFIAGAEIAGADIAGADIAHACIAGABIAHAAICAAAICJAAIB/AAICLAAICUAAIAGACIAOAEIAIACIAJABIAKAAIAJABIAJAAIAJAAIAJAAIAPAAIAcAAIAdAAIAUAAIANAAIAPgBIAHgBIAIgCIAHgEIAEgCIAGgCIAIgCIAHgDIAGgDIAFgDIAHgDIAGgDIAFgEIAFgEIAFgCIAFgEIAJgDIAIgDIAIgFIAIgEIAHgFIAIgEIAHgFIAIgCQALgEAMgGQAKgFAKgIIAXgNIANgIIAOgIIAOgIIAGgFIAFgEIAEgEIAFgGIAEgGIAFgGIADgHIACgGIACgGIABgHIAAgHIgBgHIgBgGIgCgGIgDgHIgDgFIgEgGIgEgDIgGgFIgGgDIgFgEIgHgCIgGgBIgGgBIgHAAIgHAAIgGACIgGABIgGACIgGAEIgFADIgGAFIgDADIgHAGIgHADIgOAIIgHAEIgHAEIgHAEIgGAFIgGAEIgIAEIgHAEIgHADIgHADIgIACIgIAEIgHAEIgFADIgGAFIgHADIgGAEIgHADIgHADIgIADIgDADIgEACIgGAFIgHADIgHADIgGADIgJACIgEAAIgIADIgJAEIgRAAIgZAAIgbAAIgTAAIgTAAIgTAAIgHgCQhBgMhEACQhLAChKAAIiLAAIiLAAIg3AAIhvABg");
	this.shape_8.setTransform(99.5,99.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,201,201);


(lib.circle_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#780000").s().p("AuTOUQl8l8AAoYQAAoXF8l8QF8l8IXAAQIYAAF8F8QF8F8AAIXQAAIYl8F8Ql8F8oYAAQoXAAl8l8g");
	this.shape.setTransform(33.6,33.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circle_button, new cjs.Rectangle(-96,-96,259.2,259.2), null);


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:12};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_11 = function() {
		// this.stop();
		
		this.gotoAndPlay("walking")
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(2).call(this.frame_13).wait(1));

	// head
	this.instance = new lib.head();
	this.instance.setTransform(68.5,266.45,1,1,0,0,0,99.5,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:272.45},0).wait(6).to({y:266.45},0).wait(5));

	// legs_
	this.instance_1 = new lib.L2();
	this.instance_1.setTransform(455.05,377.7,1,1,0,0,0,42.1,71.2);

	this.instance_2 = new lib.L1();
	this.instance_2.setTransform(92.75,428.15,1,1,0,0,0,28.9,73.9);

	this.instance_3 = new lib.L3();
	this.instance_3.setTransform(121,411.25,1,1,0,0,0,47.7,52.6);

	this.instance_4 = new lib.L2();
	this.instance_4.setTransform(60.1,370.05,1,1,-17.1407,0,0,-375.8,67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{rotation:0,x:92.75,y:428.15}},{t:this.instance_1,p:{regX:42.1,x:455.05,y:377.7,regY:71.2,rotation:0}}]}).to({state:[{t:this.instance_3,p:{regX:47.7,rotation:0,x:121,y:411.25}},{t:this.instance_2,p:{rotation:30.2448,x:12,y:429.85}}]},3).to({state:[{t:this.instance_3,p:{regX:47.8,rotation:30.7002,x:87.05,y:421.35}},{t:this.instance_1,p:{regX:32.1,x:451.95,y:375.85,regY:71.2,rotation:0}}]},3).to({state:[{t:this.instance_3,p:{regX:47.8,rotation:72.3821,x:36.95,y:413.4}},{t:this.instance_1,p:{regX:-375.8,x:60.1,y:370.05,regY:67.6,rotation:-17.1407}}]},3).to({state:[{t:this.instance_4},{t:this.instance_1,p:{regX:-375.8,x:41.35,y:370.05,regY:67.6,rotation:-17.1407}}]},3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,166.5,218.9,344.9);


(lib.planetween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// plane
	this.plane_mc = new lib.plane();
	this.plane_mc.name = "plane_mc";
	this.plane_mc.setTransform(74.5,28.5,1,1,0,0,0,74.5,28.2);

	this.timeline.addTween(cjs.Tween.get(this.plane_mc).wait(1).to({rotation:2.5713,x:132.05,y:-7.35},0).wait(1).to({rotation:5.3269,x:188.85,y:-39.05},0).wait(1).to({rotation:8.2038,x:244.65,y:-66.75},0).wait(1).to({rotation:11.1938,x:299.65,y:-90.65},0).wait(1).to({rotation:14.2801,x:353.8,y:-110.75},0).wait(1).to({rotation:17.4409,x:407.1,y:-127.4},0).wait(1).to({rotation:20.6588,x:459.75,y:-140.6},0).wait(1).to({rotation:23.9083,x:511.55,y:-150.55},0).wait(1).to({rotation:27.1625,x:562.75,y:-157.4},0).wait(1).to({rotation:30.396,x:613.05,y:-161.25},0).wait(1).to({rotation:33.5872,x:662.7,y:-162.25},0).wait(1).to({rotation:36.7106,x:711.7,y:-160.5},0).wait(1).to({rotation:39.7462,x:760,y:-156.15},0).wait(1).to({rotation:42.6805,x:807.6,y:-149.45},0).wait(1).to({rotation:45.4975,x:854.6,y:-140.35},0).wait(1).to({rotation:48.1878,x:900.9,y:-129.05},0).wait(1).to({rotation:50.7481,x:946.55,y:-115.65},0).wait(1).to({rotation:53.1727,x:991.6,y:-100.3},0).wait(1).to({rotation:55.461,x:1035.9,y:-83.15},0).wait(1).to({rotation:57.6174,x:1079.65,y:-64.25},0).wait(1).to({rotation:59.6425,x:1122.7,y:-43.65},0).wait(1).to({rotation:61.5411,x:1165.15,y:-21.65},0).wait(1).to({rotation:63.3207,x:1206.95,y:1.75},0).wait(1).to({rotation:64.9851,x:1248.1,y:26.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-214.9,1306.3,298.3);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plane
	this.plane_mc = new lib.planetween();
	this.plane_mc.name = "plane_mc";
	this.plane_mc.setTransform(267,-652.85,1,1,0,0,0,74.5,28.6);

	this.timeline.addTween(cjs.Tween.get(this.plane_mc).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ECV6hUXMEsAAAAMAAACowMksAAAAgEiWahUXIAAgBMEr/AAAMAAACovMkreAAAIghAAgEiV5BUXIAAACMksAAAAMAAAiowMErfAAA");
	this.shape.setTransform(2879.35,-540.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8B7D97","#6D8DC0","#6D8DC0"],[0,0.757,0.831],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(4798.7,-540);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#8B2ADB","#C889C1","#6DABEF"],[0,0.561,0.875],-960,0,960,0).s().p("EiVdBUYIgiAAMAAAiouIAAgBMEr/AAAMAAACovg");
	this.shape_2.setTransform(2876.6375,-540.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#8B7D97","#6D8DC0"],[0,0.757],-960,0,960,0).s().p("EiV/BUYMAAAiovMErdAAAMAAACouIAiAAIAAABg");
	this.shape_3.setTransform(960,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-2,-1082.1,5762.7,1084.1), null);


// stage content:
(lib.rabenn_backgroundWalk_IFclickSounduse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100;
		
		function handleKeyDown(event) {
			console.log(root.background_mc.x);
			if (root.purpleHead_mc.currentFrame == 13){
				root.purpleHead_mc.gotoAndPlay("walking")
			}	
		
			if (event.keyCode == 39 && root.background_mc.x > -3840) {
				root.purpleHead_mc.scaleX = 1;
				root.background_mc.x = root.background_mc.x - speed;
			
			}
			if (event.keyCode == 37 && root.background_mc.x < 1159) {
				root.purpleHead_mc.scaleX = -1;
				root.background_mc.x = root.background_mc.x + speed;
			} 
		}
		
		function handleKeyUp(event) {
			root.purpleHead_mc.gotoAndPlay("standing");
		}
		
		this.background_mc.plane_mc.addEventListener("click",handleClickPlane);
		
		function handleClickPlane(event){
			var whoosh_snd = createjs.Sound.play("swoosh");
			root.background_mc.plane_mc.play();
		}
			
		this.play_btn.addEventListener("click",handleClickPlayButton);
		
		function handleClickPlayButton(event){
			var music_snd = createjs.Sound.play("b");
			root.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.text = new cjs.Text("Welcome to my Final Project", "bold 30px 'Rockwell'");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.lineWidth = 573;
	this.text.parent = this;
	this.text.setTransform(954.4,474.55);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(1));

	// buttons
	this.play_btn = new lib.circle_button();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(1305.5,819.75,1,1,0,0,0,33.6,33.6);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(1));

	// walking
	this.purpleHead_mc = new lib.walking();
	this.purpleHead_mc.name = "purpleHead_mc";
	this.purpleHead_mc.setTransform(567.3,892.6,1,1,0,0,180,211.8,334.2);
	this.purpleHead_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.purpleHead_mc).wait(1).to({_off:false},0).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(959.6,542.45,1,1,0,0,0,960,-540);
	this.background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(957.6,540.4,4802.7,544.1);
// library properties:
lib.properties = {
	id: 'CA76F4101AFC4503890B84F7747C532A',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/swoosh.mp3?1744679224860", id:"swoosh"},
		{src:"sounds/b.mp3?1744679224860", id:"b"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CA76F4101AFC4503890B84F7747C532A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
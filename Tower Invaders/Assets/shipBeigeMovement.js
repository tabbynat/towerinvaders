#pragma strict

var moving : boolean = false;
var startloc : Vector3;
var rightendvec = Vector3(200, 0, 0);
var leftendvec = Vector3(-200, 0, 0);
var downendvec = Vector3(0, -100, 0);
var lerptime : float = 1.0;
var movearray = [rightendvec, downendvec, leftendvec, downendvec];
var movestep = 0;

function Start () {

	startloc = this.transform.position;

}

function Update () {

     if (!moving){
		MoveFromTo(startloc, startloc + movearray[movestep], lerptime);
		startloc += movearray[movestep];
		movestep += 1;
		 if (movestep >= movearray.length){
			 movestep = 0;
		 }
	 }
	 
}

 function MoveFromTo(pointA : Vector3, pointB : Vector3, time : float) {
     if (!moving) {                     // Do nothing if already moving
         moving = true;                 // Set flag to true
         var t : float = 0f;
         while (t < 1) {
             t += Time.deltaTime / time; // Sweeps from 0 to 1 in time seconds
             
			 transform.position = Vector3.Lerp(pointA, pointB, (t*t * (3f - 2f*t))); // Set position proportional to t
             yield;         // Leave the routine and return here in the next frame
         }
         moving = false;             // Finished moving
     }
 }

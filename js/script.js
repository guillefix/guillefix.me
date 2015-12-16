var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

$(function () {
	var targets = ["#identity_quote_1", 
		"#identity_quote_2", 
		"#identity_quote_3", 
		"#identity_quote_4", 
		"#identity_quote_5", 
		"#identity_quote_6", 
		"#identity_quote_7", 
		"#identity_quote_8", 
		"#identity_quote_9"];
	var texts = ["There are countless ingredients that make up the human body and mind,", 
		"like all the components that make up me as an individual with my own personality.", 
		"Sure I have a face and voice to distinguish myself from others,", 
		"but my thoughts and memories are unique only to me,", 
		"and I carry a sense of my own destiny.", 
		"Each of those things are just a small part of it.", 
		"I collect information to use in my own way.", 
		"All of that blends to create a mixture that forms me and gives rise to my conscience.", 
		"I feel confined, only free to expand myself within boundaries."];

	var showLines = function (targets, messages, index, interval) {
	  if (index < targets.length) {
	    setTimeout(function () { showText(targets[index], messages[index], 0, interval); }, 0);
	    setTimeout(function () { showLines(targets, messages, index+1, interval); }, interval*(texts[index].length+10));
	  }
	}
	var identity_quote_loaded = false;
	window.addEventListener('impress:stepenter', function(event) {
      var step = event.target.id;
    	if (step === "step-3" && !identity_quote_loaded) {
    		identity_quote_loaded = true;
    		showLines(targets, texts, 0, 45);
    	}
    });
});

document.addEventListener("keyup", function(event) {
        if (event.keyCode === 9) {
            event.stopImmediatePropagation();
        }
    });
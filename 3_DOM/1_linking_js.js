// linking js image(1_linking_js_1)

// If we define js file as showm in image(1_linking_js) it will give error

// Explaination(steps)
// 1) Browser will read html and start parsing
// 2) while parsing when it encounters js file
// 3) it will load it and when loading is complete
// 4) it will try to execute it and it will find some html parsing is left and it will give error



// linking js image(1_linking_js_2)

// If we define js file as showm in image(1_linking_js_2) below steps occur

// Explaination(steps)
// 1) Browser will read html and start parsing
// 2) while parsing when it encounters js file
// 3) it will load it and no error will come
// issue--> it will take time to execute all the things 



// linking js image(1_linking_js_3)
// use---> async
// If we define js file as showm in image(1_linking_js_3) below steps occur

// Explaination(steps)
// 1) Browser will read html and start parsing
// 2) while parsing when it encounters js file
// 3) it will load it and parsing will not stop
// 4) after loading when the time of execute come
// 5) it will stop parsing and try to execute js which cause error
// issue--> it can give error and half parsing of html if js load early



// linking js image(1_linking_js_4)
// use --> defer (best and final way of linking js)
// If we define js file as showm in image(1_linking_js_4) below steps occur

// Explaination(steps)
// 1) Browser will read html and start parsing
// 2) while parsing when it encounters js file
// 3) it will load it and parsing will not stop
// 4) after loading when the time of execute come it will stop and let the parsing complete

// it will not give error and also save time beacuse parsing and loading is occuring in same and 
// after loading when the time of execute come it will stop and let the parsing complete
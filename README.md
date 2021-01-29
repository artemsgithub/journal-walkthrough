# journal-walkthrough
walking through hell

or the workout journal. Here is all of the evidence I can find to try to solve this…my code for editing journal matches exactly with what’s on the modules….and this CORS error offers me no hints in terms of what kind of error it is so I could override it like last time. 

Here are the steps I do: 
1. Hard refresh  - login with user. 
2. Check to ensure session token is stored properly in local storage
3. Click see my posts. 
4. Open network tab, and attempt to edit journal (edit button, enter text, edit button again) 

Network returns:  
![image](https://user-images.githubusercontent.com/26638338/106300140-183e1a80-6224-11eb-8f0b-75f23d8d9f37.png)

OKAY! Cool, let me check out "4" (number of lines edited response?) and see if there are any hints: 
![image](https://user-images.githubusercontent.com/26638338/106300522-98648000-6224-11eb-9100-08676a285c01.png)

Nothing...let me double check my ```headers.js``` file and make sure it's all good there. 


``module.exports = function (req, res, next) {``

    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    next();
``};``

Should be good...but it doesn't seem to work. 

Best guess on what the issue is where response isn't accessible...the thing is I can't think where else to position the code. Making it asscessible usually breaks the app, and the code is EXACTLY the same as in the module. I've re-written it multiple times. 

![image](https://user-images.githubusercontent.com/26638338/106307479-6a376e00-622d-11eb-81e2-22538c864a62.png)



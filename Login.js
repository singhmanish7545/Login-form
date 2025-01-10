 const signup = document.getElementById('signUp');
 const signin = document.getElementById('signIn');
 const nameFild = document.getElementById('namefild');
 const Title = document.getElementById('title');
 const Underline = document.getElementById('underline');
 const text = document.getElementById('text');

 signin.addEventListener('click',()=>{
    nameFild.style.maxHeight = '0';
    Title.innerHTML = 'signIn';
     text.innerHTML = 'Lost Password';
     signup.classListList.add('disable');
     signin.classList.remove('disable');
     Underline.style.transform = 'translateX(35px)';
 })

 signup.addEventListener('click',()=>{
    nameFild.style.maxHeight = '60px';
    Title.innerHTML = 'signUp';
     text.innerHTML = ' Password Suggestions ';
     signup.classListList.add('disable');
     signin.classList.remove('disable');
     Underline.style.transform = 'translateX(0px)';
 })






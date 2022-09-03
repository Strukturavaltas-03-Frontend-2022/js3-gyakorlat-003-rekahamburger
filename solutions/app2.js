let cookie = (name, value) => {
    let expires = new Date(Date.now() + 60 * 60 * 1000);
               document.cookie = `${name}=${value};expires=${expires};path=/`;
             }
             
             cookie("viewed", "5");
             cookie("uid", "354774631237");
             cookie("ssid", "Bx55OWbHJ0Vt_IGIF");
             
   let cookieHandler = {
               getAll() {
   let keyValuePairs = document.cookie
                   .split("; ")
                   .map((item) => item.split("="));
                 return Object.fromEntries(keyValuePairs);
               },
               toSessionStorage() {
   let allCookies = this.getAll();
                 Object.entries(allCookies).forEach(([key, value]) => {
                   sessionStorage.setItem(key, value);
                 });
               },
               flush() {
   let allCookies = this.getAll();
                 Object.entries(allCookies).forEach(([entry]) => {
                   document.cookie = `${entry}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
                 });
               },
             };
             export default cookieHandler;
     
       
   

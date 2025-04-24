class Resources {
    constructor() {
      this.toLoad = {
        bread: "assests/bread.png",
        cookies: "assests/cookies.png",
      }
      
      this.images = {};
  
      Object.keys(this.toLoad).forEach((key) => {
          const img = new Image();
          img.src = this.toLoad[key];
          this.images[key] = {
              image:img,
              isLoaded:false
          }
          img.onload = () => {
            console.log(this.images[key].image + " is loaded");
              this.images[key].isLoaded = true;
          }
      })
    }
  }
  
  export const resources = new Resources();
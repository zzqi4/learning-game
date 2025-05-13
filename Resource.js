class Resources {
    constructor() {
      this.toLoad = {
        bread: "assests/bread.png",
        breadslice: "assests/breadslice.png",
        cookies: "assests/cookies.png",
        cookie: "assests/cookie.png",
        checkerboard: "assests/checkerboard.png",
        frame: "assests/frame.png",
        done: "assests/done.png",
        pretzelH: "assests/pretzelH.png",
        pretzelV: "assests/pretzelV.png",
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
AFRAME.registerComponent("comics-posters", {
    init: function() {
      this.postersContainer = this.el;
      this.posters();
    },
  
    posters: function() {
      const postersRef = [
        {
          id: "superman",
          url: "./assets/posters/superman-poster.jpg"
        },
        {
          id: "spiderman",
          url: "./assets/posters/spiderman-poster.jpg"
        },
  
        {
          id: "captain-aero",
          url: "./assets/posters/captain-aero-poster.jpg"
        },
        {
          id: "outer-space",
          url: "./assets/posters/outer-space-poster.jpg"
        }
      ];
      let prevoiusXPosition = -60;
  
      for (var item of postersRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const border = this.createBorder(position, item.id);
  
        // Poster Element
        const poster = this.createPoster(item);
        border.appendChild(poster);
  
        this.postersContainer.appendChild(border);
      }
    },
    createBorder: function(position, id) {
      const EL_border = document.createElement("a-entity");
      EL_border.setAttribute("id", id);
      EL_border.setAttribute("visible", true);
      EL_border.setAttribute("geometry", {
        primitive: "plane",
        width: 22,
        height: 40
      });
  
      EL_border.setAttribute("position", position);
      EL_border.setAttribute("material", { color: "#fff" });
  
      return EL_border;
    },
    createPoster: function(item) {
      const EL_poster = document.createElement("a-entity");
      EL_poster.setAttribute("visible", true);
      EL_poster.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 28
      });
  
      EL_poster.setAttribute("position", { x: 0, y: 5, z: 0.1 });
      EL_poster.setAttribute("material", { src: item.url });
  
      return EL_poster;
    }
  });
  
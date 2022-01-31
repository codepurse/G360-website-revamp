try {
  // Get the canvas element from the DOM
  const canvas = document.querySelector("#scene");
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  // Store the 2D context
  const ctx = canvas.getContext("2d");

  if (window.devicePixelRatio > 1) {
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.scale(2, 2);
  }

  /* ====================== */
  /* ====== VARIABLES ===== */
  /* ====================== */
  let width = canvas.clientWidth; // Width of the canvas
  let height = canvas.clientHeight; // Height of the canvas
  let rotation = 0; // Rotation of the globe
  let dots = []; // Every dots in an array

  /* ====================== */
  /* ====== CONSTANTS ===== */
  /* ====================== */
  /* Some of those constants may change if the user resizes their screen but I still strongly believe they belong to the Constants part of the variables */
  const DOTS_AMOUNT = 659; // Amount of dots on the screen
  const DOT_RADIUS = 4; // Radius of the dots
  let GLOBE_RADIUS = width * 0.7; // Radius of the globe
  let GLOBE_CENTER_Z = -GLOBE_RADIUS; // Z value of the globe center
  let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
  let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
  let FIELD_OF_VIEW = width * 1;

  class Dot {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;

      this.xProject = 0;
      this.yProject = 0;
      this.sizeProjection = 0;
    }
    // Do some math to project the 3D position into the 2D canvas
    project(sin, cos) {
      const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
      const rotZ =
        -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
      this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
      this.xProject = rotX * this.sizeProjection + PROJECTION_CENTER_X;
      this.yProject = this.y * this.sizeProjection + PROJECTION_CENTER_Y;
    }
    // Draw the dot on the canvas
    draw(sin, cos) {
      this.project(sin, cos);
      // ctx.fillRect(this.xProject - DOT_RADIUS, this.yProject - DOT_RADIUS, DOT_RADIUS * 2 * this.sizeProjection, DOT_RADIUS * 2 * this.sizeProjection);
      ctx.beginPath();
      ctx.arc(
        this.xProject,
        this.yProject,
        DOT_RADIUS * this.sizeProjection,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.shadowColor = "white";
      ctx.closePath();
      ctx.fill();
    }
  }

  function createDots() {
    // Empty the array of dots
    dots.length = 0;

    // Create a new dot based on the amount needed
    for (let i = 0; i < DOTS_AMOUNT; i++) {
      const theta = Math.random() * 2 * Math.PI; // Random value between [0, 2PI]
      const phi = Math.acos(Math.random() * 2 - 1); // Random value between [-1, 1]

      // Calculate the [x, y, z] coordinates of the dot along the globe
      const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
      const z = GLOBE_RADIUS * Math.cos(phi) + GLOBE_CENTER_Z;
      dots.push(new Dot(x, y, z));
    }
  }

  /* ====================== */
  /* ======== RENDER ====== */
  /* ====================== */
  function render(a) {
    // Clear the scene
    ctx.clearRect(0, 0, width, height);

    // Increase the globe rotation
    rotation = a * 0.0004;

    const sineRotation = Math.sin(rotation); // Sine of the rotation
    const cosineRotation = Math.cos(rotation); // Cosine of the rotation

    // Loop through the dots array and draw every dot
    for (var i = 0; i < dots.length; i++) {
      dots[i].draw(sineRotation, cosineRotation);
    }

    window.requestAnimationFrame(render);
  }

  // Function called after the user resized its screen
  function afterResize() {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    if (window.devicePixelRatio > 1) {
      canvas.width = canvas.clientWidth * 2;
      canvas.height = canvas.clientHeight * 2;
      ctx.scale(2, 2);
    } else {
      canvas.width = width;
      canvas.height = height;
    }
    GLOBE_RADIUS = width * 0.7;
    GLOBE_CENTER_Z = -GLOBE_RADIUS;
    PROJECTION_CENTER_X = width / 2;
    PROJECTION_CENTER_Y = height / 2;
    FIELD_OF_VIEW = width * 0.8;

    createDots(); // Reset all dots
  }

  // Variable used to store a timeout when user resized its screen
  let resizeTimeout;
  // Function called right after user resized its screen
  function onResize() {
    // Clear the timeout variable
    resizeTimeout = window.clearTimeout(resizeTimeout);
    // Store a new timeout to avoid calling afterResize for every resize event
    resizeTimeout = window.setTimeout(afterResize, 500);
  }
  window.addEventListener("resize", onResize);

  // Populate the dots array with random dots
  createDots();

  // Render the scene
  window.requestAnimationFrame(render);
} catch (error) {}

// Created for an Articles on:
// https://www.html5andbeyond.com/bubbling-text-effect-no-canvas-required/

jQuery(document).ready(function ($) {
  // Define a blank array for the effect positions. This will be populated based on width of the title.
  var bArray = [];
  // Define a size array, this will be used to vary bubble sizes
  var sArray = [4, 6, 8, 10];

  // Push the header width values to bArray
  for (var i = 0; i < $(".bubbles").width(); i++) {
    bArray.push(i);
  }

  // Function to select random array element
  // Used within the setInterval a few times
  function randomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // setInterval function used to create new bubble every 350 milliseconds
  setInterval(function () {
    // Get a random size, defined as variable so it can be used for both width and height
    var size = randomValue(sArray);
    // New bubble appeneded to div with it's size and left position being set inline
    // Left value is set through getting a random value from bArray
    $(".bubbles").append(
      '<div class="individual-bubble" style="left: ' +
        randomValue(bArray) +
        "px; width: " +
        size +
        "px; height:" +
        size +
        'px;"></div>'
    );

    // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
    // Callback function used to remove finsihed animations from the page
    $(".individual-bubble").animate(
      {
        bottom: "100%",
        opacity: "-=0.7",
      },
      3000,
      function () {
        $(this).remove();
      }
    );
  }, 350);
});

$(".arrow").on("click touch", function (e) {
  e.preventDefault();

  let arrow = $(this);

  if (!arrow.hasClass("animate")) {
    arrow.addClass("animate");
    setTimeout(() => {
      arrow.removeClass("animate");
    }, 1600);
  }
});

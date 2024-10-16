import Particles from "particlesjs";

console.log("Imported", Particles);
var particles = Particles.init({
  selector: ".background",
  color: ["#DA0463", "#404B69", "pink", "orange", "grey", "#c6093b", "#0033a0"],
  connectParticles: false,
  sizeVariation: 100,
  maxParticles: 1000,
});
console.log("Running?", particles);

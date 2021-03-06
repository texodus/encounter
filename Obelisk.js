var Obelisk = new Object();

Obelisk.HEIGHT = 100;
Obelisk.RADIUS = 40;
// topRadius, bottomRadius, height, segments, heightSegments
Obelisk.GEOMETRY = new THREE.CylinderGeometry(Obelisk.RADIUS, Obelisk.RADIUS, Obelisk.HEIGHT, 16, 1, false);
Obelisk.MATERIAL = MATS.normal;
//Obelisk.MATERIAL = MATS.wireframe.clone();
//Obelisk.MATERIAL.color = 0x000000;

Obelisk.newInstance = function()
{
  return new THREE.Mesh(Obelisk.GEOMETRY, Obelisk.MATERIAL);
}

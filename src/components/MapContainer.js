import React from 'react';

const MapContainer = () => {
  return(
    <div dangerouslySetInnerHTML={{__html: '<div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Protires%20Mexicali&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:400px;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:400px;}</style></div></div>'}} />
  )
}

export default MapContainer;
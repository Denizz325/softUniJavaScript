function assemblyLine() {
    // Decorator function to compose air conditioning controls
    function hasClima(obj) {
      obj.temp = 21;
      obj.tempSettings = 21;
      
      obj.adjustTemp = function() {
        if (obj.temp < obj.tempSettings) {
          obj.temp += 1;
        } else if (obj.temp > obj.tempSettings) {
          obj.temp -= 1;
        }
        // If temp and tempSettings are equal, do nothing
      };
      
      return obj;
    }
  
    // Decorator function to compose audio player functionality
    function hasAudio(obj) {
      obj.currentTrack = { name: null, artist: null };
      
      obj.nowPlaying = function() {
        if (obj.currentTrack && obj.currentTrack.name && obj.currentTrack.artist) {
          console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
        }
        // If currentTrack is null or missing necessary properties, do nothing
      };
      
      return obj;
    }
  
    // Decorator function to compose parking aid functionality
    function hasParktronic(obj) {
      obj.checkDistance = function(distance) {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log(""); // Empty string for other cases
        }
      };
      
      return obj;
    }
  
    // Return object containing the three decorators
    return {
      hasClima,
      hasAudio,
      hasParktronic
    };
  }
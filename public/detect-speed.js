async function detectNetworkSpeed() {
  const imageUrl = 'speed-test.jpg'; // URL to the small test file
  const startTime = new Date().getTime();
  
  try {
    const response = await fetch(imageUrl);
    const endTime = new Date().getTime();
    const duration = (endTime - startTime) / 1000; // time in seconds
    const imageSize = response.headers.get('content-length'); // size in bytes
    const speedBps = (imageSize * 8) / duration; // bits per second
    const speedKbps = speedBps / 1024; // kilobits per second
    
    return speedKbps;
  } catch (error) {
    console.error('Network speed detection failed:', error);
    return null;
  }
}

async function redirectBasedOnSpeed() {
  const speedKbps = await detectNetworkSpeed();
  console.log("network speed---->",speedKbps);
  if (speedKbps === null) {
    // Fallback to Lite version if speed detection fails
    window.location.href = 'lite.html';
    return;
  }

  const liteThreshold = 50; // kbps threshold for Lite version

  if (speedKbps <= liteThreshold) {
    window.location.href = 'lite.html';
  } else {
    window.location.href = 'rich.html';
  }
}

redirectBasedOnSpeed();

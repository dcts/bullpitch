const createVisitorId = () => {
  return token().slice(0,6);
}

const rand = () => {
  return Math.random().toString(36).substr(2); // remove `0.`
};

const token = () => {
  return rand() + rand(); // to make it longer
};

const trackAnalytics = async (visitorId, bullName) => {
  const url = `https://us-central1-bullpitch-4fc05.cloudfunctions.net/gamePlayed?visitorId=${visitorId}&bullName=${bullName}`;
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('GET', 'POST', 'OPTIONS');
  fetch(url, {
    mode: 'no-cors',
    method: 'GET',
    headers: headers,
  });
};

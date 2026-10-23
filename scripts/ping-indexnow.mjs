const INDEXNOW_KEY = "7c4b12d8a5e347f98e1620c35f9a7b14";
const HOST = "www.suwenzo.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/how-it-works`,
  `https://${HOST}/features`,
  `https://${HOST}/features/patient-records`,
  `https://${HOST}/features/digital-prescriptions`,
  `https://${HOST}/features/stock-and-expiry`,
  `https://${HOST}/features/whatsapp-reminders`,
  `https://${HOST}/for`,
  `https://${HOST}/for/solo-doctors`,
  `https://${HOST}/for/clinics-with-dispensary`,
  `https://${HOST}/for/consulting-only-practices`,
  `https://${HOST}/for/multi-doctor-practices`,
  `https://${HOST}/faq`,
  `https://${HOST}/facts`,
  `https://${HOST}/about`,
  `https://${HOST}/contact`,
  `https://${HOST}/blog`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
];

async function pingIndexNow() {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  console.log(`[IndexNow] Pinging api.indexnow.org for ${URL_LIST.length} URLs...`);

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    console.log(`[IndexNow] Response status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log("[IndexNow] Submission successful.");
    } else {
      console.log("[IndexNow] Submission response received:", await res.text());
    }
  } catch (err) {
    console.error("[IndexNow] Error pinging IndexNow:", err.message);
  }
}

pingIndexNow();

(() => {
  chrome.alarms.create("ALARM_NAME", {
    when: Date.now(),
    periodInMinutes: 60,
  });

  chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.notifications.create("NOTFICATION_ID", {
      type: "basic",
      iconUrl: "keysi-head.png",
      title: "Time to stretch !",
      message: "Let's do some stretching to avoid back pain !",
      priority: 2,
      eventTime: Date.now(),
    });
  });
})();

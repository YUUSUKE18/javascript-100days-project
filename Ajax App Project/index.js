async function main() {
  try {
    const userId = getUserId();
    const userInfo = await fetchUserInfo(userId);
    const view = createView(userInfo);
    displayView(view);
  } catch (err) {
    console.log(`Error Happend (${err})`);
  }
}

function fetchUserInfo(userId) {
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`).then(
    (res) => {
      if (!res.ok) {
        return Promise.reject(new Error(`${res.status}: ${res.statusText}`));
      } else {
        return res.json();
      }
    }
  );
}

function getUserId() {
  const value = document.getElementById("userId").value;
  return encodeURIComponent(value);
}

function createView(userInfo) {
  return escapeHTML`
            <h4>${userInfo.name} (@${userInfo.login})</h4>
            <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
            <ul>
                <li>${userInfo.location}</li>
                <li>${userInfo.followers}</li>
                <li>${userInfo.following}</li>
                <li>${userInfo.public_repos}</li>
            </ul>
        `;
}

function displayView(view) {
  const result = document.getElementById("result");
  result.innerHTML = view;
}

function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}

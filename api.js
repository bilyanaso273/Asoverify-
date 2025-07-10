export async function verifyNIN(nin) {
  const res = await fetch("https://smartsmelink.com/api/v1/nin/verify", {
    method: "POST",
    headers: {
      Authorization: "Bearer rrUviNdggfSGuGlGbaZURpkfAX4ebiFn201n721faTlMILRbV3",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nin })
  });

  const data = await res.json();
  return data;
}
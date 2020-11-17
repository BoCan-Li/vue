export function getCurrentAuthority() {
  return ["admin"];
}

export function check(authority) {
  const current = getCurrentAuthority();
  return current.some(cur => authority.includes(cur));
}

export function isLogin() {
  const current = getCurrentAuthority();
  return current[0] && current[0] !== "guest";
}

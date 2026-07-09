/**
 * withBase — 给绝对路径拼接 Astro base，保证在子路径部署（如 /inno-agent-web/）下正常解析。
 * 传入以 "/" 开头的站内路径，返回带 base 前缀的路径。外链和锚点原样返回。
 */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

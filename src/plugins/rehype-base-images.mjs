import { visit } from 'unist-util-visit';

/**
 * rehype 插件：把 markdown 里以 "/" 开头的图片绝对路径（如 /images/docs/x.png）
 * 加上 Astro base 前缀，保证在子路径部署（/inno-agent-website/）下不 404。
 * base 为 "/" 时不做改动。
 */
export function rehypeBaseImages(base = '/') {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'img') return;
      const src = node.properties?.src;
      if (typeof src !== 'string') return;
      // 只处理站内根路径，跳过外链、data:、已带 base 的
      if (!src.startsWith('/')) return;
      if (src.startsWith(prefix + '/')) return;
      node.properties.src = prefix + src;
    });
  };
}

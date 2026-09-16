interface SocialLink {
  platform: string;
  url: string;
  icon: `${string}:${string}`;
}

// 网站基础信息
export const SITE = {
  url: "https://www.honeok.com", // 网站地址
  lang: "zh-CN", // 页面语言
  author: "honeok", // 作者名称，用于首页标题
  title: "我不是611", // 网站名称
  description: "一个无趣者的自我放逐之地", // 网站描述
  readme: "The river does not rush to be first, but strives to flow endlessly.", // 主页文案
  avatar: "/me.png", // 主页照片
  logo: "/logo.png", // 网站 Logo
} as const;

// 网站统计 设置为 null 时不加载
export const ANALYTICS: { src: string; websiteId: string } | null = {
  src: "https://u.honeok.com/script.js",
  websiteId: "43a58ac3-5df4-4df5-b420-f1e2e6b7f8b1",
};

export const SOCIAL_LINKS = [
  {
    platform: "Blog",
    url: "https://blog.honeok.com",
    icon: "tabler:pencil",
  },
  {
    platform: "GitHub",
    url: "https://github.com/honeok",
    icon: "tabler:brand-github",
  },
  {
    platform: "Email",
    url: "mailto:i@honeok.com",
    icon: "tabler:mail",
  },
  {
    platform: "X",
    url: "https://x.com/h0ne0k",
    icon: "tabler:brand-x",
  },
  {
    platform: "Telegram",
    url: "https://t.me/zzzzzzOvO",
    icon: "tabler:brand-telegram",
  },
] as const satisfies readonly SocialLink[];

export interface Giphy {
  data: Data[];
  pagination: Pagination;
  meta: Meta;
}

export interface Data {
  type: Type;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: Rating;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: Date;
  trending_datetime: Date | TrendingDatetimeEnum;
  images: Images;
  user?: User;
  analytics_response_payload: string;
  analytics: Analytics;
}

interface Analytics {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
}

interface Onclick {
  url: string;
}

interface Images {
  original: FixedHeight;
  downsized: The480_WStill;
  downsized_large: The480_WStill;
  downsized_medium: The480_WStill;
  downsized_small: DownsizedSmall;
  downsized_still: The480_WStill;
  fixed_height: FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small: FixedHeight;
  fixed_height_small_still: The480_WStill;
  fixed_height_still: The480_WStill;
  fixed_width: FixedHeight;
  fixed_width_downsampled: FixedHeight;
  fixed_width_small: FixedHeight;
  fixed_width_small_still: The480_WStill;
  fixed_width_still: The480_WStill;
  looping: Looping;
  original_still: The480_WStill;
  original_mp4: DownsizedSmall;
  preview: DownsizedSmall;
  preview_gif: The480_WStill;
  preview_webp: The480_WStill;
  hd?: DownsizedSmall;
  '480w_still': The480_WStill;
}

interface The480_WStill {
  height: string;
  width: string;
  size: string;
  url: string;
}

interface DownsizedSmall {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

interface FixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
}

interface Looping {
  mp4_size: string;
  mp4: string;
}

enum Rating {
  G = 'g',
  PG = 'pg',
  PG13 = 'pg-13',
}

enum TrendingDatetimeEnum {
  The00000000000000 = '0000-00-00 00:00:00',
}

enum Type {
  GIF = 'gif',
}

interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

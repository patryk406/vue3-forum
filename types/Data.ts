export interface DataTypes {
  categories: Category[];
  forums: Forum[];
  posts: Post[];
  stats: Stats;
  threads: Thread[];
  users: User[];
}

export interface Category {
  forums: string[];
  name: string;
  slug: string;
  id: string;
}

export interface Forum {
  categoryId: string;
  description: string;
  lastPostId?: string;
  name: string;
  slug: string;
  threads?: string[];
  id: string;
}

export interface Post {
  edited?: Edited;
  publishedAt: number;
  text: string;
  threadId: string;
  userId: string;
  id: string;
  reactions?: Reactions;
}

export interface Edited {
  at: number;
  by: string;
  moderated: boolean;
}

export interface Reactions {
  '😄'?: GeneratedType;
  '👍'?: GeneratedType2;
  '❤️'?: GeneratedType3;
  '💩'?: GeneratedType4;
  '👎'?: GeneratedType5;
}

export interface GeneratedType {
  jUjmgCurRRdzayqbRMO7aTG9X1G2: string;
}

export interface GeneratedType2 {
  Miej9zSGMRZKDvMXzfxjVOyv3RF3?: string;
  f5xvKdIPQdSrUtT6i3UiHYttRXO2?: string;
  NnooaWj4KHVxbhKwO1pEdfaQDsD2?: string;
}

export interface GeneratedType3 {
  jUjmgCurRRdzayqbRMO7aTG9X1G2?: string;
  '7uVPJS9GHoftN58Z2MXCYDqmNAh2'?: string;
  Miej9zSGMRZKDvMXzfxjVOyv3RF3?: string;
}

export interface GeneratedType4 {
  NnooaWj4KHVxbhKwO1pEdfaQDsD2: string;
}

export interface GeneratedType5 {
  VXjpr2WHa8Ux4Bnggym8QFLdv5C3?: string;
  Miej9zSGMRZKDvMXzfxjVOyv3RF3?: string;
}

export interface Stats {
  postsCount: number;
  threadsCount: number;
  usersCount: number;
  usersOnline: number;
}

export interface Thread {
  contributors?: string[];
  firstPostId: string;
  forumId: string;
  lastPostAt: number;
  lastPostId: string;
  posts: string[];
  publishedAt: number;
  slug: string;
  title: string;
  userId: string;
  id: string;
}

export interface User {
  avatar: string;
  email: string;
  lastVisitAt: number;
  name: string;
  isModerator?: boolean;
  registeredAt: number;
  username: string;
  usernameLower: string;
  id: string;
  bio?: string;
  twitter?: string;
  website?: string;
}

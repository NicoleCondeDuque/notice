export interface NewResponse {
  data: Data;
}

export interface Data {
  articles: Articles;
}

export interface Articles {
  articles: Article[];
}

export interface Article {
  author: null | string;
  content: string;
  description: string;
  publishedAt: Date;
  query: null;
}

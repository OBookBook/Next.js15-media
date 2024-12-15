export type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
  description: string;
  category: string[];
  author: string;
  tags: Tag[];
  thumbnails: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  updatedAt: string;
};

export type Tag = {
  id: string;
  name: string;
};

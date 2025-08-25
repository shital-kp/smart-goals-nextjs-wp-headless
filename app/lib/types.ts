export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Posts = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  featuredImage: {
    node: {
      id: number;
      altText: string;
      filePath: string;
    };
  };
}
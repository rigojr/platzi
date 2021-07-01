export interface ICategory {
  id: string;
  name: string;
  emoji: string;
  cover: string;
  path: string;
}

export interface IPhotoCard {
  id: string;
  categoryId: number;
  liked: boolean;
  likes: number;
  src: string;
  userId: string;
}

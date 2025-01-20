enum WRAPPER_TYPE {
  TRACK = "track",
  COLLECTION = "collection",
  ARTIST = "artist",
}

export interface IItemResponse {
  wrapperType: WRAPPER_TYPE;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  artworkUrl60?: string;
}

interface IItem {
  wrapperType: WRAPPER_TYPE;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  artworkUrl60: string | null;
}

export type ItemType = IItem;
export type ListType = IItem[];

export class ApiTransformer {
  static ItemsTransformer(items: IItemResponse[]) {
    return items.map((item) => {
      return ApiTransformer.ItemTransformer(item);
    }) as ListType;
  }

  static ItemTransformer(item: IItemResponse): ItemType {
    return {
      ...item,
      artworkUrl60: item.artworkUrl60 ?? null,
    };
  }
}
